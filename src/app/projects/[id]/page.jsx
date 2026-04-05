import config from '@/app/utils/config.json';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import ProjectGallery from './ProjectGallery';

const YouTubePlayer = dynamic(() => import('./YouTubePlayer'), { ssr: false });

export default function ProjectDetailPage({ params }) {
  const { id } = params;

  const project = config.product_info.find(p => p.id === id);
  if (!project) return <div className="text-gray-900 p-8">Project not found.</div>;

  return (
    <div className="w-full min-h-screen bg-white text-gray-900 flex flex-col items-center p-8">
      <div className="max-w-3xl w-full">
        <Link href="/" className="inline-block mb-4 text-amber-600 hover:text-amber-700 text-sm">&larr; Back to Home</Link>
        <h1 className="font-display text-3xl font-bold mb-4">{project.name}</h1>
        <div className="mb-6">
          {project.media_type === 'video' ? (
            <YouTubePlayer videoId={project.videoID} />
          ) : project.media_type === 'image' ? (
            <Image src={project.imageUrl} alt={project.name} width={800} height={400} className="rounded" style={{objectFit:'cover'}} />
          ) : null}
        </div>
        <p className="mb-4 text-lg text-gray-700">{project.description}</p>
        <div className="mb-2 text-gray-500">Date: {project.date}</div>
        <ProjectGallery gallery={project.gallery} />
      </div>
    </div>
  );
} 