import config from '@/app/utils/config.json';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import ProjectGallery from './ProjectGallery';

const YouTubePlayer = dynamic(() => import('./YouTubePlayer'), { ssr: false });

export default function ProjectDetailPage({ params }) {
  const { id } = params;

  const project = config.product_info.find(p => p.id === id);
  if (!project) return <div className="text-white p-8">Project not found.</div>;

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white flex flex-col items-center p-8">
      <div className="max-w-3xl w-full">
        <Link href="/" className="inline-block mb-4 text-gray-400 hover:text-gray-200 text-sm">&larr; Back to Home</Link>
        <h1 className="text-3xl font-bold mb-4">{project.name}</h1>
        <div className="mb-6">
          {project.media_type === 'video' ? (
            <YouTubePlayer videoId={project.videoID} />
          ) : project.media_type === 'image' ? (
            <Image src={project.imageUrl} alt={project.name} width={800} height={400} className="rounded" style={{objectFit:'cover'}} />
          ) : null}
        </div>
        <p className="mb-4 text-lg">{project.description}</p>
        <div className="mb-2 text-gray-400">Date: {project.date}</div>
        <ProjectGallery gallery={project.gallery} />
      </div>
    </div>
  );
} 