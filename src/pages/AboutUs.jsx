import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* About Us & Founder's Voice Section */}
      <section class="h-[65vh]">
        <div class="grid md:grid-cols-2 h-full">
          <div class="h-full relative">
            <img
              src="/aboutus.jpeg"
              alt="About Us"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div class="text-center text-white">
                <h1 class="font-outfit text-5xl md:text-7xl font-bold tracking-wide">
                  About Us
                </h1>
              </div>
            </div>
            <div class="absolute top-6 left-6 text-white">
              <h3 class="font-outfit text-lg font-semibold">DAV</h3>
              <p class="font-outfit text-sm opacity-90">
                Divine Audio Vision
              </p>
            </div>
          </div>

          <div class="bg-gray-200 flex flex-col justify-center px-8 lg:px-16 text-black relative">
            <h2 class="font-outfit text-3xl md:text-4xl font-semibold mb-6">
              CO-FOUNDERS' VOICE
            </h2>
            <p class="font-outfit text-gray-700 text-sm md:text-base leading-relaxed mb-6">
              We understand your requirement and provide quality works. From the
              beginning of a project with a client, whether it is a small or
              large corporation, our Official Integrators have the certainty
              that they have DAV's backing regarding any unexpected issues that
              may occur during installation. There is no better way to face a
              challenge than with the certainty that DAV's staff will be side by
              side working with you, giving you advice and providing you the
              best and most innovative market solutions. Because our success is
              based on yours!
            </p>
            <div class="space-y-3">
              <div>
                <p class="font-outfit text-blue-600 font-semibold text-base">
                  Nandha Kumar
                </p>
                <p class="font-outfit text-gray-600 text-sm">
                  Co-Founder, DAV Pvt Ltd
                </p>
              </div>
              <div>
                <p class="font-outfit text-blue-600 font-semibold text-base">
                  Hariharan
                </p>
                <p class="font-outfit text-gray-600 text-sm">
                  Co-Founder, DAV Pvt Ltd
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="h-[65vh]">
        <div className="grid md:grid-cols-2 h-full">
          <div className="bg-black flex flex-col justify-center px-8 lg:px-16">
            <h2 className="font-outfit text-4xl md:text-5xl font-bold mb-6 text-white">
              Vision & Mission
            </h2>
            <p className="font-outfit text-gray-300 text-sm md:text-base leading-relaxed">
              Our vision is to revolutionize the audio-visual industry through
              cutting-edge technology and innovative solutions. We are committed
              to delivering exceptional experiences that exceed expectations and
              drive technological advancement in every project we undertake.
            </p>
          </div>
          <div className="h-full relative">
            <img
              src="/visionmission.jpeg"
              alt="Vision & Mission"
              className="w-full h-full object-cover object-right"
            />
          </div>
        </div>
      </section>

      {/* Create Section */}
      <section className="h-[65vh]">
        <div className="grid md:grid-cols-2 h-full">
          <div className="h-full relative">
            <img
              src="/create.jpeg"
              alt="Create"
              className="w-full h-full object-cover object-left"
            />
          </div>
          <div className="bg-black flex flex-col justify-center px-8 lg:px-16">
            <h2 className="font-outfit text-5xl md:text-6xl font-bold text-gray-200 mb-4">
              CREATE
            </h2>
            <p className="font-outfit text-gray-400 text-sm md:text-base">
              Innovation through creative solutions that transform ordinary
              spaces into extraordinary experiences. We craft bespoke
              audio-visual environments that inspire and captivate.
            </p>
          </div>
        </div>
      </section>

      {/* Find Create Introduce Section */}
      <section className="h-[65vh]">
        <div className="grid md:grid-cols-2 h-full">
          <div className="bg-black flex flex-col justify-center px-8 lg:px-16">
            <h2 className="font-outfit text-3xl md:text-4xl font-bold mb-6 text-white">
              FIND. CREATE.
              <br />
              INTRODUCE.
            </h2>
            <p className="font-outfit text-gray-300 text-sm md:text-base leading-relaxed">
              DAV's mission is to find, create and introduce the best
              technological advances in audio-visual innovation, especially
              those related to immersive experiences and cutting-edge
              entertainment solutions.
            </p>
          </div>
          <div className="h-full">
            <img
              src="/contactus.jpeg"
              alt="Find Create Introduce"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* New Technologies Section */}
      <section className="h-[65vh]">
        <div className="grid md:grid-cols-2 h-full">
          <div className="h-full">
            <img
              src="/newtechnologies.jpg"
              alt="New Technologies"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-black flex flex-col justify-center px-8 lg:px-16">
            <h2 className="font-outfit text-3xl md:text-4xl font-bold mb-6 text-white">
              NEW
              <br />
              TECHNOLOGIES
            </h2>
            <p className="font-outfit text-gray-300 text-sm md:text-base leading-relaxed">
              Our vision is to contribute to the adoption of breakthrough
              technologies, pioneering the future of audio-visual experiences
              and helping create a more connected, technologically advanced
              society.
            </p>
          </div>
        </div>
      </section>

      {/* Market Research Section */}
      <section className="h-[65vh]">
        <div className="grid md:grid-cols-2 h-full">
          <div className="bg-black flex flex-col justify-center px-8 lg:px-16">
            <h2 className="font-outfit text-3xl md:text-4xl font-bold mb-6 text-white">
              MARKET
              <br />
              RESEARCH
            </h2>
            <p className="font-outfit text-gray-300 text-sm md:text-base leading-relaxed">
              DAV's strength lies in our comprehensive understanding of
              technology trends and market dynamics, combined with our
              innovative approach to developing tailored solutions that address
              our clients' unique requirements and challenges.
            </p>
          </div>
          <div className="h-full">
            <img
              src="/marketresearch.jpeg"
              alt="Market Research"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Futuristic Drive Section */}
      <section className="h-[65vh]">
        <div className="grid md:grid-cols-2 h-full">
          <div className="h-full">
            <img
              src="/futuristicdrive.jpeg"
              alt="Futuristic Drive"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-black flex flex-col justify-center px-8 lg:px-16">
            <h2 className="font-outfit text-3xl md:text-4xl font-bold mb-6 text-white">
              FUTURISTIC DRIVE
            </h2>
            <p className="font-outfit text-gray-300 text-sm md:text-base leading-relaxed">
              We are driven by a passion for the future, constantly pushing
              boundaries to deliver next-generation audio-visual solutions that
              anticipate tomorrow's needs and exceed today's expectations
              through innovative engineering and design.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="h-[65vh]">
        <div className="grid md:grid-cols-2 h-full">
          <div className="bg-black flex flex-col justify-center px-8 lg:px-16">
            <div className="space-y-8">
              <button className="font-outfit border border-gray-500 text-gray-300 px-8 py-3 rounded hover:bg-gray-800 transition-colors duration-300">
                Contact Us
              </button>
            </div>
          </div>
          <div className="h-full">
            <img
              src="/contactus.jpeg"
              alt="Contact Us"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;