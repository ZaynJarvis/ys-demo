import Image from 'next/image';

export default function ProjectGallery({ gallery }) {
  if (!gallery || !gallery.length) {
    return <div className="mt-8 text-gray-400">No gallery images for this project.</div>;
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Project Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {gallery.map((img, idx) => (
          <div key={idx} className="w-full aspect-square max-w-xs mx-auto relative">
            <Image src={img} alt={`Project photo ${idx + 1}`} width={400} height={400} className="rounded object-cover w-full h-full" />
          </div>
        ))}
      </div>
    </div>
  );
} 