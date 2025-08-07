import React from "react";
import { Link } from "react-router-dom";

const LifestyleAV = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-outfit">
      {/* Hero Section - Experience Audio-Visual Luxury */}
      <section className="h-[65vh]">
        <div className="grid md:grid-cols-2 h-full">
          <div className="h-full relative">
            <img
              src="/audiovisual.jpg"
              alt="Audio-visual luxury setup"
              className="w-full h-full object-cover"
            />
            {/* DAV Logo in top left corner */}
            <div className="absolute top-6 left-6 z-10">
              <a href="/" className="block">
                <img
                  src="/dav.png"
                  alt="DAV Logo"
                  className="h-12 w-auto hover:opacity-80 transition-opacity"
                />
              </a>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="font-outfit text-5xl md:text-7xl font-bold tracking-wide">
                  LIFESTYLE AV
                </h1>
              </div>
            </div>
          </div>

          <div className="bg-white flex flex-col justify-center px-8 lg:px-16 text-gray-800">
            <h2 className="font-outfit text-3xl md:text-4xl font-semibold mb-6 text-gray-900">
              EXPERIENCE AUDIO-VISUAL LUXURY
            </h2>
            <p className="font-outfit text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              Lifestyle AV seamlessly blends technology into your living environment, 
              creating sophisticated spaces where entertainment meets elegance. Whether 
              it's background music in the kitchen, invisible speakers in your lounge, 
              or a discreet TV lift in the bedroom, our solutions are designed to 
              elevate your everyday experience without compromising on style.
            </p>
            <p className="font-outfit text-gray-600 text-sm md:text-base leading-relaxed">
              Transform every room into a connected entertainment hub with technology 
              that disappears into your design, delivering premium audio-visual 
              experiences that enhance your lifestyle rather than dominate it.
            </p>
          </div>
        </div>
      </section>

      {/* Multi-Room Audio Section */}
      <section className="h-[65vh]">
        <div className="grid md:grid-cols-2 h-full">
          <div className="bg-white flex flex-col justify-center px-8 lg:px-16">
            <h2 className="font-outfit text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              MULTI-ROOM AUDIO
            </h2>
            <h3 className="font-outfit text-xl md:text-2xl font-semibold mb-4 text-gray-700">
              Sound Where You Want It, When You Want It
            </h3>
            <p className="font-outfit text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              Enjoy your favorite music in any room of your home with high-quality 
              multi-room audio. Control playlists, volume, and zones from your 
              smartphone or wall-mounted panels.
            </p>
            <p className="font-outfit text-gray-600 text-sm md:text-base leading-relaxed">
              Whether you're hosting guests or relaxing alone, our solutions deliver 
              rich, balanced sound without visible clutter. Flush-mounted ceiling or 
              in-wall speakers blend effortlessly with your interiors.
            </p>
          </div>
          <div className="h-full relative">
            <img
              src="/multiroomaudio.jpg"
              alt="Multi-room audio system"
              className="w-full h-full object-cover object-right"
            />
          </div>
        </div>
      </section>

      {/* Invisible Installations Section */}
      <section className="h-[65vh]">
        <div className="grid md:grid-cols-2 h-full">
          <div className="h-full relative">
            <img
              src="/invisibleinstallation.jpg"
              alt="Invisible installation"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-white flex flex-col justify-center px-8 lg:px-16">
            <h2 className="font-outfit text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              INVISIBLE
              <br />
              INSTALLATIONS
            </h2>
            <h3 className="font-outfit text-xl md:text-2xl font-semibold mb-4 text-gray-700">
              Discreet Technology for Modern Interiors
            </h3>
            <p className="font-outfit text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              We specialize in integrating technology into the fabric of your home. 
              From TVs that disappear behind mirrors or artwork, to speakers concealed 
              in ceilings, walls, or joinery, our goal is simple: advanced AV systems 
              that never distract from your design.
            </p>
            <p className="font-outfit text-gray-600 text-sm md:text-base leading-relaxed">
              Our expert design team ensures the tech complements your décor – not 
              dominates it.
            </p>
          </div>
        </div>
      </section>

      {/* TV Lifts & Motorized Mounts Section */}
      <section className="h-[65vh]">
        <div className="grid md:grid-cols-2 h-full">
          <div className="bg-white flex flex-col justify-center px-8 lg:px-16">
            <h2 className="font-outfit text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              TV LIFTS &
              <br />
              MOTORIZED MOUNTS
            </h2>
            <h3 className="font-outfit text-xl md:text-2xl font-semibold mb-4 text-gray-700">
              Entertainment On Demand
            </h3>
            <p className="font-outfit text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              Why settle for a TV always on show? Our bespoke lift systems and 
              motorized mounts keep screens hidden until needed. Ideal for bedrooms, 
              kitchens, or even outdoor spaces.
            </p>
            <p className="font-outfit text-gray-600 text-sm md:text-base leading-relaxed">
              Combined with automation, your TV can rise, tilt, and turn with a 
              single command.
            </p>
          </div>
          <div className="h-full">
            <img
              src="/tvlifts.jpg"
              alt="TV lifts and motorized mounts"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Smart Control Section */}
      <section className="h-[65vh]">
        <div className="grid md:grid-cols-2 h-full">
          <div className="h-full">
            <img
              src="/smartcontrol.jpg"
              alt="Smart control system"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-white flex flex-col justify-center px-8 lg:px-16">
            <h2 className="font-outfit text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              SMART CONTROL
            </h2>
            <h3 className="font-outfit text-xl md:text-2xl font-semibold mb-4 text-gray-700">
              Effortless Control at Your Fingertips
            </h3>
            <p className="font-outfit text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              Bring harmony to your home with integrated control systems. One remote 
              or app can manage your audio, video, lighting, shading, and climate 
              control – simplifying your daily life.
            </p>
            <p className="font-outfit text-gray-600 text-sm md:text-base leading-relaxed">
              Our systems work with leading smart home platforms and voice assistants, 
              making it easy to tailor the experience to your preferences.
            </p>
          </div>
        </div>
      </section>

      {/* Outdoor AV Section */}
      <section className="h-[65vh]">
        <div className="grid md:grid-cols-2 h-full">
          <div className="bg-white flex flex-col justify-center px-8 lg:px-16">
            <h2 className="font-outfit text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              OUTDOOR AV
            </h2>
            <h3 className="font-outfit text-xl md:text-2xl font-semibold mb-4 text-gray-700">
              Extend the Experience Outside
            </h3>
            <p className="font-outfit text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              Don't limit luxury to the indoors. Our weatherproof outdoor AV solutions 
              bring music, movies, and even live sports to your garden, pool, or patio areas.
            </p>
            <p className="font-outfit text-gray-600 text-sm md:text-base leading-relaxed">
              We offer rugged yet stylish outdoor speakers, hidden subwoofers, and 
              ultra-bright outdoor TVs that perform in full sunlight – all connected 
              to your home's central system.
            </p>
          </div>
          <div className="h-full">
            <img
              src="/outdoorav.jpg"
              alt="Outdoor AV installation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Professional Installation Section */}
      <section className="h-[65vh]">
        <div className="grid md:grid-cols-2 h-full">
          <div className="h-full">
            <img
              src="/professionainstallation.jpg"
              alt="Professional installation"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-white flex flex-col justify-center px-8 lg:px-16">
            <h2 className="font-outfit text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              PROFESSIONAL
              <br />
              INSTALLATION
            </h2>
            <h3 className="font-outfit text-xl md:text-2xl font-semibold mb-4 text-gray-700">
              From Concept to Completion
            </h3>
            <p className="font-outfit text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              Our in-house team handles everything – from wiring and infrastructure, 
              to calibration and final handover. We work alongside architects, interior 
              designers, and builders to ensure a smooth integration with your overall 
              home plan.
            </p>
            <p className="font-outfit text-gray-600 text-sm md:text-base leading-relaxed">
              Our job isn't done until everything works flawlessly and looks immaculate.
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
                LIFESTYLE AV JOURNEY
              </h2>
              <h3 className="font-outfit text-xl md:text-2xl font-semibold mb-4 text-gray-700">
                Ready to Transform Your Home?
              </h3>
              <p className="font-outfit text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                Discover how Lifestyle AV can enrich your space with the perfect 
                balance of design and technology. Book a consultation and begin 
                your journey to refined living today.
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
              src="/transformhome.jpg"
              alt="Transform your home"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LifestyleAV;
