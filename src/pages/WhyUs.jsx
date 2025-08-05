import React, { useState, useEffect } from "react";

const WhyUs = () => {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Calculate which section we're in and if we're in the top 20% of that section
      const sectionHeight = windowHeight;
      const currentSection = Math.floor(scrollY / sectionHeight);
      const positionInSection = scrollY % sectionHeight;
      const percentageInSection = positionInSection / sectionHeight;
      
      // Show logo only in the top 20% of each section
      setShowLogo(percentageInSection <= 0.2);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 font-outfit">
      {/* Fixed Header with Logo */}
      <header className={`fixed top-0 left-0 z-50 p-6 transition-opacity duration-300 ${showLogo ? 'opacity-100' : 'opacity-0'}`}>
        <a href="/" className="block">
          <img 
            src="/dav.png" 
            alt="DAV Logo" 
            className="h-12 w-auto hover:opacity-80 transition-opacity"
          />
        </a>
      </header>
      
      {/* Header Section - Half screen height */}
      <div
        className="relative bg-cover bg-center"
        style={{ backgroundImage: "url('/whyus.jpeg')", height: "80vh" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-white text-4xl md:text-5xl font-black">
              Why Us?
            </h1>
          </div>
        </div>
      </div>

      {/* Distribution Section - Increased Height */}
      <div
        className="grid grid-cols-1 lg:grid-cols-2"
        style={{ height: "100vh" }}
      >
        {/* Left Section - Distribution with a Difference */}
        <div className="bg-gray-400 relative overflow-hidden">
          <img
            src="/dwd.jpg"
            alt="Distribution"
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        <div className="bg-black text-white p-8 flex items-center">
          <div className="max-w-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Dealer with a Difference
            </h2>
            <p className="text-sm font-light mb-4 leading-relaxed">
              At Divine Audio Vision, our uniquely diverse skillset and 10 years track record
              makes us something of a rare beast among distributors.
            </p>
            <p className="text-sm font-light mb-4 leading-relaxed">
              We don't simply move boxes, we add-value at every level of our
              relationship with you. We go that extra mile, creating sales and
              building awareness - treating your brand like it was our own
              brand.
            </p>
            <p className="text-sm font-light leading-relaxed">
              The range of services we offer to our clients is precisely
              tailored to the needs of their business, from simple dealer,
              branding and support.
            </p>
          </div>
        </div>
      </div>

      {/* Three Sections in Single Row - Much More Height for Vertical Look */}
      <div className="grid grid-cols-3" style={{ height: "120vh" }}>
        {/* Tech Integrations Section */}
        <div className="bg-gray-300 relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/ti.jpg"
              alt="Tech Integration"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
          <div className="relative z-10 p-8 flex items-end h-full">
            <div className="text-white">
              <h3 className="text-xl font-bold mb-2">TECH</h3>
              <h3 className="text-xl font-bold mb-4">INTEGRATIONS</h3>
              <p className="text-sm font-light max-w-xs leading-relaxed">
                Reaching representation agreements with manufacturers of the
                best and most innovative technology
              </p>
            </div>
          </div>
        </div>

        {/* Industry Expertise Section */}
        <div className="bg-purple-900 relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/ie.jpeg"
              alt="Industry Expertise"
              className="w-full h-full object-cover opacity-60"
            />
          </div>
          <div className="relative z-10 p-8 flex items-end h-full">
            <div className="text-white">
              <h3 className="text-xl font-bold mb-2">INDUSTRY</h3>
              <h3 className="text-xl font-bold mb-4">EXPERTISE</h3>
              <p className="text-sm font-light max-w-xs leading-relaxed">
                Adding value through the integration of our manufacturers'
                technology due to our unparalleled experience gained in the last
                10 years
              </p>
            </div>
          </div>
        </div>

        {/* Hands-on Team Section */}
        <div className="bg-gray-600 relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/hot.jpg"
              alt="Hands-on Team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
          <div className="relative z-10 p-8 flex items-end h-full">
            <div className="text-white">
              <h3 className="text-xl font-bold mb-2">HANDS-ON</h3>
              <h3 className="text-xl font-bold mb-4">TEAM</h3>
              <p className="text-sm font-light max-w-xs leading-relaxed">
                Having an excellent team that is able to offer the best customer
                service and reliable support
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section with Added Spacing */}
      <div className="py-16 px-8 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">

          {/* Automation Audiovisual - Moved Down */}
          <div className="p-8 mt-8">
            <div className="mb-6">
              <img
                src="/aa.jpeg"
                alt="Automation Audiovisual"
                className="w-full aspect-square object-cover rounded"
              />
            </div>
            <h4 className="text-lg font-semibold mb-3">
              AUTOMATION AUDIOVISUAL
            </h4>
            <p className="text-sm text-gray-600 font-light leading-relaxed">
              Supporting and promoting solutions and technologies that improve
              the convergence between Automation & Audiovisual
            </p>
          </div>

          {/* Vertical Markets */}
          <div className="p-8">
            <div className="mb-6">
              <img
                src="/vm.jpg"
                alt="Vertical Markets"
                className="w-full aspect-square object-cover rounded"
              />
            </div>
            <h4 className="text-lg font-semibold mb-3">VERTICAL MARKETS</h4>
            <p className="text-sm text-gray-600 font-regular leading-relaxed">
              Developing specific solutions for vertical markets: Residential,
              Corporate, Education, Public Sector, Hospitality
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;