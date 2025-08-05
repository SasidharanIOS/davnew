import React from "react";

const WhyUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-outfit">
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
              Distribution with a Difference
            </h2>
            <p className="text-sm font-light mb-4 leading-relaxed">
              At Miantic, our uniquely diverse skillset and 8 years track record
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
              tailored to the needs of their business, from simple distribution,
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
                8 years
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Distribution Channels */}
          <div className="p-8">
            <div className="mb-6">
              <img
                src="/dc.jpg"
                alt="Distribution Channels"
                className="w-full aspect-square object-cover rounded"
              />
            </div>
            <h4 className="text-lg font-semibold mb-3">
              DISTRIBUTION CHANNELS
            </h4>
            <p className="text-sm text-gray-600 font-light leading-relaxed">
              Reaching the market through a network of distributors selected in
              order to maintain control over the distribution channel
            </p>
          </div>

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
            <p className="text-sm text-gray-600 font-light leading-relaxed">
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
