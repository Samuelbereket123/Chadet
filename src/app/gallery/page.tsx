export default function GalleryPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Gallery Item 1 */}
        <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
          <div className="aspect-square bg-gradient-to-br from-blue-400 to-purple-500 group-hover:scale-105 transition-transform duration-300"></div>
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
            <h3 className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Design Work
            </h3>
          </div>
        </div>

        {/* Gallery Item 2 */}
        <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
          <div className="aspect-square bg-gradient-to-br from-green-400 to-blue-500 group-hover:scale-105 transition-transform duration-300"></div>
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
            <h3 className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Development
            </h3>
          </div>
        </div>

        {/* Gallery Item 3 */}
        <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
          <div className="aspect-square bg-gradient-to-br from-purple-400 to-pink-500 group-hover:scale-105 transition-transform duration-300"></div>
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
            <h3 className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              UI/UX
            </h3>
          </div>
        </div>

        {/* Gallery Item 4 */}
        <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
          <div className="aspect-square bg-gradient-to-br from-yellow-400 to-orange-500 group-hover:scale-105 transition-transform duration-300"></div>
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
            <h3 className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Branding
            </h3>
          </div>
        </div>

        {/* Gallery Item 5 */}
        <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
          <div className="aspect-square bg-gradient-to-br from-red-400 to-pink-500 group-hover:scale-105 transition-transform duration-300"></div>
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
            <h3 className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Mobile App
            </h3>
          </div>
        </div>

        {/* Gallery Item 6 */}
        <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
          <div className="aspect-square bg-gradient-to-br from-indigo-400 to-purple-500 group-hover:scale-105 transition-transform duration-300"></div>
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
            <h3 className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Web App
            </h3>
          </div>
        </div>

        {/* Gallery Item 7 */}
        <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
          <div className="aspect-square bg-gradient-to-br from-teal-400 to-green-500 group-hover:scale-105 transition-transform duration-300"></div>
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
            <h3 className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Analytics
            </h3>
          </div>
        </div>

        {/* Gallery Item 8 */}
        <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
          <div className="aspect-square bg-gradient-to-br from-pink-400 to-red-500 group-hover:scale-105 transition-transform duration-300"></div>
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
            <h3 className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Innovation
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
} 