import { notFound } from 'next/navigation';
import newsItems from '../../../data/news';
import GridBG from '../../../components/GridBG';
import Image from 'next/image';

interface NewsDetailPageProps {
  params: { slug: string };
}

export default function NewsDetailPage({ params }: NewsDetailPageProps) {
  const item = newsItems.find((n) => n.slug === params.slug);
  if (!item) return notFound();

  return (
    <div className="relative bg-gradient-to-b from-green-50 to-white min-h-screen py-12 pt-32 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <GridBG />
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-green-700 mb-4 text-center">{item.title}</h1>
        <p className="text-gray-500 text-center mb-6">{new Date(item.date).toLocaleDateString()}</p>
        {item.image && (
          <div className="relative w-full h-64 mb-8 rounded-xl overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover w-full h-full"
            />
          </div>
        )}
        <div className="bg-white rounded-2xl shadow-md border border-green-100 p-8">
          <p className="text-gray-700 text-lg text-center">{item.summary}</p>
          {/* TODO: Add full news content if available */}
        </div>
      </div>
    </div>
  );
} 