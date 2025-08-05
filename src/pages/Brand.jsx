import React, { useState, useEffect, useRef } from 'react';

const Brands = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef({});

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(sectionRefs.current).forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Brand data with categories
  const brands = [
    // Professional Audio Brands
    {
      id: 1,
      name: 'M&K',
      category: 'PROFESSIONAL AUDIO',
      logo: '/m&k.png',
      description: 'Premium studio monitors'
    },
    {
      id: 2,
      name: 'Procella',
      category: 'PROFESSIONAL AUDIO',
      logo: '/procella.png',
      description: 'Cinema audio systems'
    },
    {
      id: 3,
      name: 'Krix',
      category: 'PROFESSIONAL AUDIO',
      logo: '/krix.jpg',
      description: 'Professional loudspeakers'
    },
    {
      id: 4,
      name: 'B&W',
      category: 'PROFESSIONAL AUDIO',
      logo: '/b&w.jpg',
      description: 'High-end speakers'
    },

    // Visual Brands
    {
      id: 5,
      name: 'JVC',
      category: 'VISUAL',
      logo: '/jvc.jpg',
      description: 'Professional projectors'
    },
    {
      id: 6,
      name: 'Sony',
      category: 'VISUAL',
      logo: '/sony.png',
      description: 'Display technology'
    },
    {
      id: 7,
      name: 'Barco',
      category: 'VISUAL',
      logo: '/barco.png',
      description: 'Premium projectors'
    },
    {
      id: 8,
      name: 'BenQ',
      category: 'VISUAL',
      logo: '/benq.png',
      description: 'Professional displays'
    },
    {
      id: 9,
      name: 'Epson',
      category: 'VISUAL',
      logo: '/epson.png',
      description: 'Projection systems'
    },

    // Electronics Brands
    {
      id: 10,
      name: 'Trinnov',
      category: 'ELECTRONICS',
      logo: '/trinnov.jpg',
      description: 'Digital room correction'
    },
    {
      id: 11,
      name: 'Storm Audio',
      category: 'ELECTRONICS',
      logo: '/stormaudio.png',
      description: 'High-end processors'
    },
    {
      id: 12,
      name: 'Anthem',
      category: 'ELECTRONICS',
      logo: '/anthem.png',
      description: 'Premium audio electronics'
    },
    {
      id: 13,
      name: 'Marantz',
      category: 'ELECTRONICS',
      logo: '/marantz.png',
      description: 'Luxury audio components'
    },
    {
      id: 14,
      name: 'McIntosh',
      category: 'ELECTRONICS',
      logo: '/mcintosh.png',
      description: 'Legendary audio equipment'
    },

    // Automation Brands
    {
      id: 15,
      name: 'CoolMaster',
      category: 'AUTOMATION',
      logo: '/coolautomation.png',
      description: 'HVAC automation'
    },
    {
      id: 16,
      name: 'Crestron',
      category: 'AUTOMATION',
      logo: '/crestron.jpg',
      description: 'Control systems'
    },
    {
      id: 17,
      name: 'RTI',
      category: 'AUTOMATION',
      logo: '/rti.png',
      description: 'Remote technologies'
    },
    {
      id: 18,
      name: 'Control4',
      category: 'AUTOMATION',
      logo: '/control4.jpg',
      description: 'Smart home automation'
    },

    // Cables Brands
    {
      id: 19,
      name: 'Bullet Train',
      category: 'CABLES',
      logo: '/bullettrain.jpg',
      description: 'High-speed cables'
    },
    {
      id: 20,
      name: 'Kords',
      category: 'CABLES',
      logo: '/cords.png',
      description: 'Premium audio cables'
    },
    {
      id: 21,
      name: 'Monster',
      category: 'CABLES',
      logo: '/monster.jpg',
      description: 'Performance cables'
    },

    // LED Wall Brands
    {
      id: 22,
      name: 'Huawei',
      category: 'LED WALL',
      logo: '/huawei.png',
      description: 'LED display solutions'
    },
    {
      id: 23,
      name: 'Sony',
      category: 'LED WALL',
      logo: '/sony.png',
      description: 'Professional LED displays'
    },
    {
      id: 24,
      name: 'LG',
      category: 'LED WALL',
      logo: '/lg.png',
      description: 'Large format displays'
    }
  ];

  const categories = ['ALL', 'PROFESSIONAL AUDIO', 'VISUAL', 'ELECTRONICS', 'AUTOMATION', 'CABLES', 'LED WALL'];

  const filteredBrands = activeFilter === 'ALL' 
    ? brands 
    : brands.filter(brand => brand.category === activeFilter);

  return (
    <div className="min-h-screen bg-black text-white font-outfit">
      
      {/* Hero Section with Title */}
      <section className="h-[65vh] relative">
        <div className="grid md:grid-cols-2 h-full">
          <div className="h-full relative">
            <img
              src="/brands-hero.jpg"
              alt="Our Brands"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';
              }}
            />
            {/* Brands Text Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl md:text-7xl font-black tracking-wide">
                  Our Brands
                </h1>
              </div>
            </div>
            {/* Company Name in Top Left */}
            <div className="absolute top-6 left-6 text-white">
              <h3 className="text-lg font-bold">DAV</h3>
              <p className="text-sm font-light opacity-90">
                Divine Audio Vision
              </p>
            </div>
          </div>

          <div className="bg-gray-900 flex flex-col justify-center px-8 lg:px-16 text-white relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              PREMIUM PARTNERS
            </h2>
            <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed mb-4">
              We partner with the world's most prestigious audio-visual brands to deliver exceptional experiences. Our carefully curated selection of premium manufacturers ensures that every project meets the highest standards of quality, innovation, and performance.
            </p>
            <div>
              <p className="text-blue-400 font-semibold text-base">
                Authorized Dealer Network
              </p>
              <p className="text-gray-400 text-sm font-light">
                Premium Brand Partnerships
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section 
        id="filters"
        ref={el => sectionRefs.current.filters = el}
        className="py-16 px-6 bg-black border-b border-gray-800"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            EXPLORE BY CATEGORY
          </h2>
          <div className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-300 ${
            isVisible.filters ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 text-xs md:text-sm font-medium tracking-wider transition-all duration-300 rounded-none border ${
                  activeFilter === category
                    ? 'bg-blue-600 text-white border-blue-600 shadow-lg'
                    : 'bg-transparent text-gray-300 border-gray-600 hover:bg-gray-800 hover:text-white hover:border-gray-400'
                }`}
              >
                {category === 'ALL' ? 'ALL BRANDS' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Grid */}
      <section 
        id="brands"
        ref={el => sectionRefs.current.brands = el}
        className="py-20 px-6 bg-black"
      >
        <div className="max-w-7xl mx-auto">
          <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 transition-all duration-1000 delay-500 ${
            isVisible.brands ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {filteredBrands.map((brand, index) => (
              <div 
                key={brand.id}
                className="group transition-all duration-500 hover:-translate-y-2"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="bg-white border border-gray-700 p-6 hover:bg-gray-100 hover:border-gray-500 transition-all duration-500 h-full flex flex-col items-center justify-center text-center">
                  <div className="w-full h-20 flex items-center justify-center mb-4">
                    <img
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      className="max-w-full max-h-full object-contain transition-all duration-300"
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/200x100/f9fafb/374151?text=${brand.name.replace(/\s+/g, '+')}`;
                      }}
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {brand.name}
                  </h3>
                  <p className="text-xs text-gray-600 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-2">
                    {brand.description}
                  </p>
                  <div className="mt-2 px-3 py-1 bg-gray-800 text-xs text-white font-medium border border-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {brand.category}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredBrands.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg font-light">No brands found for the selected category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Partnership Section */}
      <section className="h-[65vh]">
        <div className="grid md:grid-cols-2 h-full">
          <div className="bg-black flex flex-col justify-center px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              AUTHORIZED DEALER &<br />
              INTEGRATION PARTNER
            </h2>
            <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed mb-8">
              We are proud to be authorized dealers and certified integration partners for these premium brands. Our partnerships ensure you receive genuine products, full warranties, and expert support for your investment.
            </p>
          </div>
          <div className="h-full relative">
            <img
              src="/partnership.jpg"
              alt="Partnership"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';
              }}
            />
          </div>
        </div>
      </section>

      {/* Service Features Section */}
      <section className="h-[65vh]">
        <div className="grid md:grid-cols-2 h-full">
          <div className="h-full relative">
            <img
              src="/service-features.jpg"
              alt="Expert Installation"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';
              }}
            />
          </div>
          <div className="bg-black flex flex-col justify-center px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              EXPERT<br />
              INSTALLATION
            </h2>
            <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed mb-6">
              Our certified technicians provide professional installation and setup services, ensuring optimal performance and seamless integration of all audio-visual components.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400"></div>
                <span className="text-gray-300 text-sm font-light">Certified Installation Team</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400"></div>
                <span className="text-gray-300 text-sm font-light">Complete Warranty Coverage</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400"></div>
                <span className="text-gray-300 text-sm font-light">Ongoing Technical Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="h-[65vh]">
        <div className="grid md:grid-cols-2 h-full">
          <div className="bg-black flex flex-col justify-center px-8 lg:px-16">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                READY TO ELEVATE<br />
                YOUR EXPERIENCE?
              </h2>
              <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed">
                Discover the perfect audio-visual solution for your space with our premium brand partners.
              </p>
              <button className="border border-gray-500 text-gray-300 font-medium px-8 py-3 hover:bg-gray-800 hover:border-gray-400 transition-colors duration-300">
                Contact Our Experts
              </button>
            </div>
          </div>
          <div className="h-full">
            <img
              src="/contact-cta.jpg"
              alt="Contact Us"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brands;