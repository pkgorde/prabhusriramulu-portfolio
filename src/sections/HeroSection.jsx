import WaveDivider from '../components/WaveDivider';

const HeroSection = () => {
  return (
    <section id="about" className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
              Hey! I'm Prabhu. 👋
            </h1>

            <div className="space-y-4 text-lg md:text-xl text-gray-700">
              <p>
                I'm a <span className="font-semibold text-dark">Product Manager by day</span>,
                creative enthusiast by night.
              </p>

              <p>
                Currently based in <span className="font-semibold">San Francisco, CA</span>,
                I spend my time building products that help teams work better together,
                experimenting with new technologies, and finding ways to make complex things simple.
              </p>

              <p>
                When I'm not deep in product specs or user research, you can find me:
              </p>

              <ul className="space-y-2 pl-6">
                <li>🎨 Working on mosaic art projects</li>
                <li>🚀 Tinkering with side projects</li>
                <li>📚 Reading about design and technology</li>
                <li>🐱 Hanging out with my cat</li>
              </ul>

              <p className="pt-4">
                I'm passionate about <span className="text-primary font-semibold">
                creating products that make a real difference
                </span> in people's lives.
                Whether it's through better UX, smarter features, or just making someone's day a little easier.
              </p>
            </div>
          </div>

          {/* Right Column - Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Large image spanning 2 rows */}
            <div className="col-span-2 row-span-2 bg-gray-200 rounded-lg overflow-hidden aspect-[4/3]">
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm">Professional Photo</p>
                </div>
              </div>
            </div>

            {/* Three smaller images */}
            <div className="bg-gray-200 rounded-lg overflow-hidden aspect-square">
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <svg className="w-12 h-12 mx-auto mb-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                  <p className="text-xs">Mosaic Art</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-200 rounded-lg overflow-hidden aspect-square">
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <svg className="w-12 h-12 mx-auto mb-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                  <p className="text-xs">Cat Photo</p>
                </div>
              </div>
            </div>

            <div className="col-span-2 bg-gray-200 rounded-lg overflow-hidden aspect-[2/1]">
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <svg className="w-12 h-12 mx-auto mb-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                  <p className="text-xs">Personal Project</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WaveDivider className="mt-16 md:mt-24" />
    </section>
  );
};

export default HeroSection;
