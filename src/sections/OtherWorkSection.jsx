import WaveDivider from '../components/WaveDivider';
import Marquee from '../components/Marquee';

const OtherWorkSection = () => {
  const conferenceTalks = [
    {
      title: 'Building Products Users Love',
      event: 'ProductCon 2024',
      description: 'A deep dive into user-centered product development and how to build features that truly resonate with your audience.',
    },
    {
      title: 'The Future of Collaboration Tools',
      event: 'TechSummit 2023',
      description: 'Exploring emerging trends in workplace collaboration and what the next generation of productivity tools will look like.',
    },
  ];

  const personalProjects = [
    {
      title: 'Budget Tracker App',
      description: 'A simple, beautiful budgeting app built with React and Firebase.',
    },
    {
      title: 'Reading List Manager',
      description: 'Track your reading progress and discover new books based on your interests.',
    },
  ];

  return (
    <section id="other-work" className="section-spacing bg-cream">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 md:mb-20">
          Here are some other things I've done that I'd like to share with you. 😁
        </h2>

        {/* Conference Talks */}
        <div className="mb-20 md:mb-32">
          <Marquee text="conference talks" className="mb-12" />

          <div className="space-y-8">
            {conferenceTalks.map((talk, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  {/* Speaker Image */}
                  <div className="bg-gray-200 rounded-lg overflow-hidden aspect-square">
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      <div className="text-center">
                        <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                        <p className="text-sm">Speaker Photo</p>
                      </div>
                    </div>
                  </div>

                  {/* Talk Details */}
                  <div className="md:col-span-2">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">{talk.title}</h3>
                    <p className="text-primary font-semibold text-lg mb-4">{talk.event}</p>
                    <p className="text-gray-700 text-lg leading-relaxed">{talk.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Panel Discussion */}
        <div className="mb-20 md:mb-32">
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            {/* Panel Photo with Green Overlay */}
            <div className="relative bg-gray-200 aspect-video">
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <svg className="w-20 h-20 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                  <p className="text-lg">Panel Discussion Photo</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-primary p-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Product Management in the AI Era
                </h3>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                Joined a panel of industry leaders to discuss how AI is transforming
                the role of product managers and what skills will be essential in the coming years.
              </p>
            </div>
          </div>
        </div>

        {/* Personal Projects */}
        <div>
          <Marquee text="personal projects" className="mb-12" />

          <div className="grid md:grid-cols-2 gap-8">
            {personalProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                {/* Project Video/Image */}
                <div className="bg-gray-200 aspect-video">
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <div className="text-center">
                      <svg className="w-20 h-20 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                      </svg>
                      <p className="text-sm">Project Demo</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-700">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <WaveDivider className="mt-16 md:mt-24" color="white" />
    </section>
  );
};

export default OtherWorkSection;
