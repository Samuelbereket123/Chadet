import newsItems from '../../data/news';
import GridBG from '../../components/GridBG';
import Link from 'next/link';
import Image from 'next/image';

export default function NewsPage() {
  return (
    <div className="relative bg-gradient-to-b from-green-50 to-white min-h-screen py-12 pt-32 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <GridBG />
      <div className="relative z-10 max-w-5xl mx-auto">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-green-700 mb-10 text-center">News & Updates</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsItems.map((item) => (
            <Link
              key={item.slug}
              href={`/news/${item.slug}`}
              className="bg-white border border-green-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              {item.image && (
                <div className="relative w-full h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover w-full h-full"
                  />
                </div>
              )}
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-2xl font-bold text-green-800 mb-2">{item.title}</h2>
                <p className="text-gray-500 text-sm mb-2">{new Date(item.date).toLocaleDateString()}</p>
                <p className="text-gray-700 flex-1">{item.summary}</p>
                <span className="mt-4 text-green-600 font-semibold hover:underline">Read more &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 