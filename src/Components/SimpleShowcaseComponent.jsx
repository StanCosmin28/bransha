export default function SimpleShowcaseComponent() {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center max-w-4xl mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-thin text-gray-900 mb-8">
          Innovation
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed mb-8">
          Experience the future in landscape. Every pixel crafted to perfection,
          every interaction designed to inspire.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              Immersive Display
            </h3>
            <p className="text-gray-600">
              Crystal clear visuals that bring content to life
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-purple-600 rounded-lg"></div>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              Seamless Performance
            </h3>
            <p className="text-gray-600">
              Fluid interactions powered by advanced technology
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-lg"></div>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              Premium Design
            </h3>
            <p className="text-gray-600">
              Crafted with attention to every detail
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 transform hover:scale-105">
            Learn more
          </button>
          <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-200">
            Shop now
          </button>
        </div>
      </div>
    </section>
  );
}
