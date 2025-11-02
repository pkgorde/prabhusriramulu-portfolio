import WaveDivider from '../components/WaveDivider';

const PreviouslySection = () => {
  const previousCompanies = [
    { name: 'Microsoft', logo: 'MS' },
    { name: 'Braze', logo: 'BR' },
    { name: 'Salesforce', logo: 'SF' },
    { name: 'Amazon', logo: 'AM' },
    { name: 'Google', logo: 'GO' },
    { name: 'Meta', logo: 'ME' },
  ];

  return (
    <section className="section-spacing bg-white">
      <div className="container-custom">
        {/* Previously at Company */}
        <div className="mb-20 md:mb-32">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Previously...</h2>

          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Company Logo */}
              <div className="flex items-center justify-center">
                <div className="w-48 h-48 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-primary mb-2">MS</div>
                    <p className="text-sm text-gray-600">Microsoft</p>
                  </div>
                </div>
              </div>

              {/* Achievement Details */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  Led product development for Teams collaboration features
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Spearheaded the development of new collaboration tools that improved
                  team productivity and user engagement across the platform.
                </p>

                {/* Key Metric */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl font-bold text-primary">$1.2M</div>
                    <p className="text-gray-700">pipeline growth in first quarter</p>
                  </div>
                </div>

                {/* Diagram/Visual Placeholder */}
                <div className="mt-6 bg-gray-200 rounded-lg overflow-hidden aspect-video">
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <div className="text-center">
                      <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                      </svg>
                      <p className="text-sm">Impact Visualization</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Software Engineering Experience */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Software Engineering Experience
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {previousCompanies.map((company, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-xl p-8 flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-600 mb-2">
                    {company.logo}
                  </div>
                  <p className="text-sm text-gray-500">{company.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <WaveDivider className="mt-16 md:mt-24" color="#FFFEF9" />
    </section>
  );
};

export default PreviouslySection;
