export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project Card 1 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Project Alpha</h3>
            <p className="text-gray-600 mb-4">
              A revolutionary web application that transforms how users interact with data.
            </p>
                          <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">React</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Node.js</span>
              </div>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500"></div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Project Beta</h3>
            <p className="text-gray-600 mb-4">
              An innovative mobile app designed to enhance productivity and collaboration.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">React Native</span>
              <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">Firebase</span>
            </div>
          </div>
        </div>

        {/* Project Card 3 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500"></div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Project Gamma</h3>
            <p className="text-gray-600 mb-4">
              A cutting-edge AI-powered platform for intelligent data analysis.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full">Python</span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">TensorFlow</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 