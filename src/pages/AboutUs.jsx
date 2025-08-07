import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* About Us & Founder's Voice Section */}
      <section className="h-[65vh]">
        <div className="grid md:grid-cols-2 h-full">
          <div className="h-full relative">
            <img
              src="/aboutus.jpeg"
              alt="About Us"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
              }}
            />
            {/* DAV Logo in top left corner */}
            <div className="absolute top-6 left-6 z-10">
              <a href="/" className="block">
                <img
                  src="/dav.png"
                  alt="DAV Logo"
                  className="h-12 w-auto hover:opacity-80 transition-opacity"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/120x48/ffffff/000000?text=DAV";
                  }}
                />
              </a>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="font-outfit text-5xl md:text-7xl font-bold tracking-wide">
                  About Us
                </h1>
              </div>
            </div>
          </div>

          <div className="bg-gray-200 flex flex-col justify-center px-8 lg:px-16 text-black relative">
            <h2 className="font-outfit text-3xl md:text-4xl font-semibold mb-6">
              FOUNDER & CO-FOUNDER VOICE
            </h2>
            <p className="font-outfit text-gray-700 text-sm md:text-base leading-relaxed mb-6">
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
            <div className="space-y-3">
              <div>
                <p className="font-outfit text-blue-600 font-semibold text-base">
                  HARIHARAN
                </p>
                <p className="font-outfit text-gray-600 text-sm">
                  Founder, DAV
                </p>
              </div>
              <div>
                <p className="font-outfit text-blue-600 font-semibold text-base">
                  NANDHA KUMAR
                </p>
                <p className="font-outfit text-gray-600 text-sm">
                  Co-Founder, DAV
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
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
              }}
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
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
              }}
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
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
              }}
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
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
              }}
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
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
              }}
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
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
              }}
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
              <Link to="/lifestyleav" className="block">
                <button className="font-outfit border border-gray-500 text-gray-300 px-8 py-3 rounded hover:bg-gray-800 transition-colors duration-300">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
          <div className="h-full">
            <img
              src="/contactus.jpeg"
              alt="Contact Us"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
