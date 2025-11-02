import WaveDivider from '../components/WaveDivider';

const WorkSection = () => {
  return (
    <section id="work" className="section-spacing bg-cream">
      <div className="container-custom">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-bold mb-16 md:mb-20 max-w-4xl">
          Check out what I've been working on in my current role at{' '}
          <span className="text-primary">TechCo</span>.
        </h2>

        {/* Current Project Showcase */}
        <div className="space-y-16 md:space-y-24">
          {/* Main Product Card */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Product Name: Analytics Dashboard
            </h3>

            {/* Video/Image Placeholder */}
            <div className="bg-gray-200 rounded-lg overflow-hidden aspect-video mb-8">
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <svg className="w-20 h-20 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                  </svg>
                  <p className="text-lg">Product Demo Video</p>
                </div>
              </div>
            </div>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A comprehensive analytics dashboard that helps teams make data-driven decisions.
              Built from the ground up to handle millions of data points while maintaining
              a smooth, intuitive user experience.
            </p>
          </div>

          {/* Feature Highlight */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="bg-gray-200 rounded-lg overflow-hidden aspect-[4/3]">
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <svg className="w-20 h-20 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                  <p className="text-lg">Feature Screenshot</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Real-Time Collaboration
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Enabled teams to work together seamlessly with live updates and shared dashboards.
                This feature reduced reporting time by 60% and improved cross-functional alignment.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <p className="text-gray-700"><span className="font-bold">60%</span> reduction in reporting time</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <p className="text-gray-700"><span className="font-bold">10,000+</span> active users</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <p className="text-gray-700"><span className="font-bold">95%</span> user satisfaction rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WaveDivider className="mt-16 md:mt-24" color="white" />
    </section>
  );
};

export default WorkSection;
