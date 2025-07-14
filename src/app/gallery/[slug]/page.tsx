import { notFound } from 'next/navigation';
import galleryItems from '../../../data/gallery';
import GridBG from '../../../components/GridBG';

export default function GalleryDetailPage({ params }: { params: { slug: string } }) {
  const item = galleryItems.find((g) => g.slug === params.slug);
  if (!item) return notFound();

  return (
    <div className="relative bg-gradient-to-b from-green-50 to-white min-h-screen py-12 pt-32 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <GridBG />
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-green-700 mb-8 text-center">{item.title}</h1>
        <div className="bg-white rounded-2xl shadow-md border border-green-100 p-8 flex flex-col items-center justify-center min-h-[300px]">
          <p className="text-gray-500 text-lg text-center mb-4">Gallery images for <span className="font-semibold text-green-700">{item.title}</span> will appear here.</p>
          {/* TODO: Add images/content for this gallery item when provided */}
        </div>
      </div>
    </div>
  );
} 