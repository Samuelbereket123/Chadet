import GridBG from '../../components/GridBG';
import Link from 'next/link';
import galleryItems from '../../data/gallery';

export default function GalleryPage() {
  return (
    <div className="relative bg-gradient-to-b from-green-50 to-white min-h-screen py-12 pt-32 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <GridBG />
      <div className="relative z-10 max-w-7xl mx-auto">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-green-700 mb-10 text-center">Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {galleryItems.map((item, idx) => (
            <Link
              key={item.slug}
              href={`/gallery/${item.slug}`}
              className="rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 bg-green-50 border border-green-200 flex flex-col items-center justify-center p-4 cursor-pointer hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <div className={`aspect-square w-full rounded-xl mb-4 ${[
                'bg-gradient-to-br from-blue-400 to-purple-500',
                'bg-gradient-to-br from-green-400 to-blue-500',
                'bg-gradient-to-br from-purple-400 to-pink-500',
                'bg-gradient-to-br from-yellow-400 to-orange-500',
                'bg-gradient-to-br from-red-400 to-pink-500',
                'bg-gradient-to-br from-indigo-400 to-purple-500',
                'bg-gradient-to-br from-teal-400 to-green-500',
                'bg-gradient-to-br from-pink-400 to-red-500',
              ][idx % 8]}`}></div>
              <h3 className="text-green-700 text-lg font-semibold text-center">{item.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 