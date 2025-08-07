import React from "react";
import { Link } from "react-router-dom";

const Automation = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-outfit">
      {/* Hero Section - Experience cinema at home */}
      <section className="h-[65vh]">
        <div className="grid md:grid-cols-2 h-full">
          <div className="h-full relative">
            <img
              src="/c1.jpg"
              alt="Home cinema setup"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1489396160836-2c3c82d1bf45?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
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
                      "https://via.placeholder.com/120x48/000000/ffffff?text=DAV";
                  }}
                />
              </a>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="font-outfit text-5xl md:text-7xl font-bold tracking-wide">
                  AUTOMATION
                </h1>
              </div>
            </div>
          </div>

          <div className="bg-white flex flex-col justify-center px-8 lg:px-16 text-gray-800">
            <h2 className="font-outfit text-3xl md:text-4xl font-semibold mb-6 text-gray-900">
              EXPERIENCE CINEMA AT HOME
            </h2>
            <p className="font-outfit text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              Home cinemas add the glitz and glamour of a traditional theatre to
              the comfort of your own home. A dedicated cinema is a room like no
              other space, with different dynamics and considerations and its
              own unique design from the rest of your house.
            </p>
            <p className="font-outfit text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              You can easily move from a bar/seating lounge where we carry out
              full design and fit, considering lighting plans that will show you
              exactly how this could work in your room.
            </p>
            <p className="font-outfit text-gray-600 text-sm md:text-base leading-relaxed">
              We have carried out over a hundred cinema spaces, media rooms or
              dual purpose installations since we were founded, delivering
              exceptional home entertainment experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Turnkey Construction Section */}
      <section className="h-[65vh]">
        <div className="grid md:grid-cols-2 h-full">
          <div className="bg-white flex flex-col justify-center px-8 lg:px-16">
            <h2 className="font-outfit text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              TURNKEY CONSTRUCTION
            </h2>
            <p className="font-outfit text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              If you are building a new property or remodelling a room we work
              alongside your building team to design and install all the
              electronics required. We can complete the room with our specialist
              room acoustics treatments if required.
            </p>
            <p className="font-outfit text-gray-600 text-sm md:text-base leading-relaxed">
              Acoustic wall treatments and fabric-clad furniture will play a
              huge part in creating the perfect cinema and sound quality you
              want from your investment.
            </p>
          </div>
          <div className="h-full relative">
            <img
              src="/c2.jpg"
              alt="Cinema construction"
              className="w-full h-full object-cover object-right"
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
              }}
            />
          </div>
        </div>
      </section>

      {/* Room Conversion Section */}
      <section className="h-[65vh]">
        <div className="grid md:grid-cols-2 h-full">
          <div className="h-full relative">
            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
              <iframe
                width="90%"
                height="70%"
                src="https://www.youtube.com/embed/NQD-lGKGM_Q?rel=0"
                title="Home Cinema Room Installation"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="bg-white flex flex-col justify-center px-8 lg:px-16">
            <h2 className="font-outfit text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ROOM
              <br />
              CONVERSION
            </h2>
            <p className="font-outfit text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              If you have a room in your house that is now underutilised, why
              not convert it into your own home cinema room. This could be an
              old playroom, loft room, basement or even a garage or garden room.
            </p>
            <p className="font-outfit text-gray-600 text-sm md:text-base leading-relaxed">
              We offer a full turnkey solution with bespoke cinema seating, home
              automation and lighting controls, and complete AV systems.
            </p>
          </div>
        </div>
      </section>

      {/* Design Details Section */}
      <section className="h-[65vh]">
        <div className="grid md:grid-cols-2 h-full">
          <div className="bg-white flex flex-col justify-center px-8 lg:px-16">
            <h2 className="font-outfit text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              THE DETAILS ARE
              <br />
              IN THE DESIGN
            </h2>
            <p className="font-outfit text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              You will find elements of inspiration from our portfolio of
              previously completed home cinema installations. Mixing fabrics and
              finishing of varying tones with your style allows for natural flow
              around the space.
            </p>
            <p className="font-outfit text-gray-600 text-sm md:text-base leading-relaxed">
              The next stage is a virtual 3D rendering of the home cinema where
              you can finally move around the room and see how the treatments,
              lighting, and seating work together.
            </p>
          </div>
          <div className="h-full">
            <img
              src="/c3.jpg"
              alt="Design visualization"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
              }}
            />
          </div>
        </div>
      </section>

      {/* Cinema Seating Section */}
      <section className="h-[65vh]">
        <div className="grid md:grid-cols-2 h-full">
          <div className="h-full">
            <img
              src="/c4.jpg"
              alt="Cinema seating"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1489396160836-2c3c82d1bf45?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
              }}
            />
          </div>
          <div className="bg-white flex flex-col justify-center px-8 lg:px-16">
            <h2 className="font-outfit text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              SIT BACK & RELAX
              <br />
              CINEMA SEATING
            </h2>
            <p className="font-outfit text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              No cinema is ever complete without dedicated cinema seating,
              adding to your audio and visual system with a real touch of
              luxury. Home Cinema seats are available in a huge range of styles.
            </p>
            <p className="font-outfit text-gray-600 text-sm md:text-base leading-relaxed">
              We can source cinema chairs with electric reclining motors, D-Box
              bass and motion systems, cup holders, USB charging and a whole
              host of other premium options.
            </p>
          </div>
        </div>
      </section>

      {/* Audio, Projection & Acoustics Section */}
      <section className="bg-white py-24 font-outfit">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start px-8 lg:px-16">
            {/* Left Column - Audio and Room Acoustics (2/5 of the width) */}
            <div className="lg:col-span-2 space-y-16">
              {/* Audio Section */}
              <div className="space-y-8">
                <div className="w-80 h-64">
                  <img
                    src="/audio.jpg"
                    alt="Audio speakers system"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80";
                    }}
                  />
                </div>
                <div>
                  <h2 className="font-outfit text-3xl font-normal text-gray-900 mb-4">
                    Audio
                  </h2>
                  <p className="font-outfit text-base text-gray-600 leading-relaxed">
                    Experience audio like never before with Dolby Atmos. Dolby
                    Atmos takes surround sound to the next level, literally,
                    introducing speakers at heights to give you the ultimate
                    listening experience.
                  </p>
                </div>
              </div>

              {/* Room Acoustics Section */}
              <div className="space-y-8">
                <div className="w-80 h-64">
                  <img
                    src="/roomacoustics.jpg"
                    alt="Room acoustics materials"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80";
                    }}
                  />
                </div>
                <div>
                  <h2 className="font-outfit text-3xl font-normal text-gray-900 mb-4">
                    Room Acoustics
                  </h2>
                  <p className="font-outfit text-base text-gray-600 leading-relaxed mb-5">
                    Room treatments optimize your audio experience ensuring
                    travelling sound can be managed with a series of materials
                    depending on your requirements, the room shape and room
                    size.
                  </p>
                  <p className="font-outfit text-base text-gray-600 leading-relaxed">
                    New Wave AV can specify a wide range of panels to be used,
                    whether it is an absorption panel, diffusion, bass traps or
                    sound insulation.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Highest Projection Quality (3/5 of the width) */}
            <div className="lg:col-span-3 flex flex-col justify-center space-y-8">
              <div className="w-full max-w-md h-80 mx-auto lg:mx-0">
                <img
                  src="/hpq.jpg"
                  alt="High quality projector"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";
                  }}
                />
              </div>
              <div>
                <h2 className="font-outfit text-4xl font-normal text-gray-900 mb-6">
                  Highest Projection Quality
                </h2>
                <p className="font-outfit text-lg text-gray-600 leading-relaxed mb-6">
                  Recreate the movie to how the directors wanted you to see it.
                  With 4K video projection and a series of projection screens to
                  choose from.
                </p>
                <p className="font-outfit text-base text-gray-600 leading-relaxed mb-5">
                  Our premium projectors deliver stunning clarity with HDR
                  support, bringing cinema-quality visuals to your home. From
                  laser projectors with extended lamp life to ultra-short throw
                  models that fit any room configuration.
                </p>
                <p className="font-outfit text-base text-gray-600 leading-relaxed mb-5">
                  Choose from various screen materials including acoustically
                  transparent options that allow speakers to be placed behind
                  the screen, creating an immersive soundstage that perfectly
                  complements the visual experience.
                </p>
                <p className="font-outfit text-base text-gray-600 leading-relaxed">
                  Advanced lens shifting and keystone correction ensure perfect
                  image alignment in any installation, while motorized zoom and
                  focus provide convenient setup and maintenance capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screen Technology Section */}
      <section className="h-[65vh]">
        <div className="grid md:grid-cols-2 h-full">
          <div className="h-full relative">
            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
              <iframe
                width="90%"
                height="70%"
                src="https://www.youtube.com/embed/NQD-lGKGM_Q?rel=0"
                title="Screen masking technology"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="bg-white flex flex-col justify-center px-8 lg:px-16">
            <h2 className="font-outfit text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              SCREEN
              <br />
              MASKING
            </h2>
            <p className="font-outfit text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              Cinema masking systems are used to expand or shrink the borders of
              your home cinema screen so that the movie fits the dimensions
              exactly. This ensures sharp definition at the edges of the
              picture.
            </p>
            <p className="font-outfit text-gray-600 text-sm md:text-base leading-relaxed">
              Basic masking systems can be manual, or they can automatically
              move with the changing aspect ratio of the image being projected,
              from cinema scope to wide screen.
            </p>
          </div>
        </div>
      </section>

      {/* Room Acoustics Video Section */}
      <section className="h-[65vh]">
        <div className="grid md:grid-cols-2 h-full">
          <div className="bg-white flex flex-col justify-center px-8 lg:px-16">
            <h2 className="font-outfit text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              ROOM
              <br />
              ACOUSTICS
            </h2>
            <p className="font-outfit text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              Room treatments optimize your audio experience ensuring sound can
              be managed with a series of materials depending on your
              requirements, room shape and size.
            </p>
            <p className="font-outfit text-gray-600 text-sm md:text-base leading-relaxed">
              We can specify absorption panels, diffusion, bass traps or sound
              insulation to create the perfect acoustic environment for your
              cinema experience.
            </p>
          </div>
          <div className="h-full">
            <img
              src="/c6.jpg"
              alt="Room acoustics"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
              }}
            />
          </div>
        </div>
      </section>

      {/* Installation & Setup Section */}
      <section className="h-[65vh]">
        <div className="grid md:grid-cols-2 h-full">
          <div className="h-full">
            <img
              src="/c10.jpeg"
              alt="Installation setup"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
              }}
            />
          </div>
          <div className="bg-white flex flex-col justify-center px-8 lg:px-16">
            <h2 className="font-outfit text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              INSTALLATION
              <br />& SETUP
            </h2>
            <p className="font-outfit text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              When it comes to home cinema installation, there's a lot to
              consider. The size of your room will determine the projection
              screen size and speaker configuration needed.
            </p>
            <p className="font-outfit text-gray-600 text-sm md:text-base leading-relaxed">
              We provide complete programming and setup services including smart
              features and automation controls, enabling you to control various
              settings with the touch of a button.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="h-[65vh]">
        <div className="grid md:grid-cols-2 h-full">
          <div className="bg-white flex flex-col justify-center px-8 lg:px-16">
            <div className="space-y-8">
              <h2 className="font-outfit text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                START YOUR
                <br />
                CINEMA JOURNEY
              </h2>
              <p className="font-outfit text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                Ready to transform your space into the ultimate entertainment
                experience? Contact us today to begin designing your perfect
                home cinema.
              </p>
              <Link to="/contact" className="block">
                <button className="font-outfit border border-gray-400 text-gray-700 px-8 py-3 rounded hover:bg-gray-50 transition-colors duration-300">
                  Book Consultation
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

export default Automation;
