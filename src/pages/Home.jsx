import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Menu, X, Phone, Mail, MapPin } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-outfit">
      <section
        id="welcome"
        className="min-h-screen flex items-end pb-40 relative bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/davhome.jpg')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tight">
              WELCOME TO DAV
            </h2>
            <p className="text-xl md:text-3xl text-white font-light tracking-wide mb-0 leading-tight">
              REPRESENTING THE WORLD'S FINEST
              <br />
              AV & AUTOMATION BRANDS
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section - Now with Link */}
      <Link to="/about-us" className="block">
        <section
          id="about"
          className="min-h-screen flex items-center relative bg-cover bg-center cursor-pointer hover:opacity-90 transition-opacity"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/aboutushome.jpg')`,
          }}
        >
          <div className="w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-2xl ml-16">
                <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
                  About Us
                </h2>
                <p className="text-lg md:text-xl text-white mb-8 leading-relaxed font-light">
                  DAV Distribution is India's leading specialist distributor of
                  market leading technology for today's automated smart home,
                  supplying professional installers with innovative, award
                  winning products and integrated whole home solutions.
                </p>
                <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
                  <ChevronRight className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Link>

      {/* Section 2: Why DAV? - Now with Link */}
      <Link to="/why-us" className="block">
        <section
          id="why"
          className="min-h-screen flex items-center relative bg-cover bg-center cursor-pointer hover:opacity-90 transition-opacity"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/whydav.jpg')`,
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl ml-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight">
                Why DAV?
              </h2>
              <p className="text-lg md:text-xl text-white mb-8 leading-relaxed font-light">
                Trust. Security. Protection. Honesty and Professionalism. That
                is the basis of DAV's close relationship with its integrators.
              </p>
              <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
                <ChevronRight className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </section>
      </Link>

      {/* Section 3: Brands */}
      <Link to="/brand" className="block">
        <section
          id="brands"
          className="min-h-screen flex items-center relative bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/brands.jpg')`,
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl ml-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight">
                Brands
              </h2>
              <p className="text-lg md:text-xl text-white mb-8 leading-relaxed font-light">
                DAV Distribution is the premier provider of control systems and
                audio visual distribution solutions. Backed up with a team of
                engineers, design consultants and sales staff, providing full
                turnkey solutions for your projects.
              </p>
              <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
                <ChevronRight className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </section>
      </Link>

      {/* Section 4: Solutions */}
      <Link to="/services" className="block">
        <section
          id="solutions"
          className="min-h-screen flex items-center relative bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)), url('/solutions.jpg')`,
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl ml-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight">
                Solutions
              </h2>
              <p className="text-lg md:text-xl text-white mb-8 leading-relaxed font-light">
                All the brands with whom we work have a common philosophy: to be
                able to work together and provide you with the smart solutions
                that suit your needs – whether at work, at home or at play.
              </p>
              <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
                <ChevronRight className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </section>
      </Link>

      {/* Section 5: Demo */}
      <Link to="/demo" className="block">
        <section
          id="demo"
          className="min-h-screen flex items-center relative bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)), url('/demo.jpg')`,
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl ml-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight">
                Demo
              </h2>
              <p className="text-lg md:text-xl text-white mb-8 leading-relaxed font-light">
                All the brands with whom we work have a common philosophy: to be
                able to work together and provide you with the smart solutions
                that suit your needs – whether at work, at home or at play.
              </p>
              <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
                <ChevronRight className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </section>
      </Link>

      {/* Section 6: Contact */}
      <Link to="/contact" className="block">
        <section
          id="contact"
          className="min-h-screen flex items-center relative bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)), url('/contact.jpg')`,
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl ml-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight">
                Contact Us
              </h2>
              <p className="text-lg md:text-xl text-white mb-8 leading-relaxed font-light">
                An established network across the India.
              </p>
              <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
                <ChevronRight className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </section>
      </Link>
    </div>
  );
};

export default Home;