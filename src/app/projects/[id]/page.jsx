import config from '@/app/utils/config.json';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const YouTubePlayer = dynamic(() => import('./YouTubePlayer'), { ssr: false });

export default function ProjectDetailPage({ params }) {
  const { id } = params;

  const project = config.product_info.find(p => p.id === id);
  if (!project) return <div className="text-white p-8">Project not found.</div>;

  // Filter gallery images by project id prefix (e.g., 'ramen_')
  const galleryImages = config.gallery_path.filter(img => img.includes(`${id}_`));

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
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <div className="bg-gray-800 rounded-lg shadow-md p-6 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 01-8 0 4 4 0 018 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7m0 0H9m3 0h3" /></svg>
              <span className="text-gray-200">sales@cubecon.sg</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a2 2 0 011.94 1.515l.516 2.064A2 2 0 0012.72 8.485l2.064.516A2 2 0 0116.28 11.28l.516 2.064A2 2 0 0117.795 15.28l2.064.516A2 2 0 0121 17.28V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" /></svg>
              <span className="text-gray-200">+65 8088 1055</span>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 12.414a2 2 0 00-2.828 0l-4.243 4.243A8 8 0 1116.657 7.343z" /></svg>
              <span className="text-gray-200">52 Telok Blangah Road, #02-11, Singapore 098829</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 