import React from "react";
import { Link } from "react-router-dom";

const HomeCinema = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-outfit">
      {/* Hero Section - Home Automation System */}
      <section className="w-full">
        <div className="grid md:grid-cols-2">
          <div className="relative min-h-[400px] md:min-h-[500px]">
            <img
              src="/ha.jpg"
              alt="Home Automation System"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';
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
                    e.target.src = 'https://via.placeholder.com/120x48/000000/ffffff?text=DAV';
                  }}
                />
              </a>
            </div>
          </div>

          <div className="bg-white flex flex-col justify-center px-8 lg:px-16 py-12 text-gray-800">
            <h2 className="font-outfit text-3xl md:text-4xl font-semibold mb-6 text-gray-900">
              HOME AUTOMATION INSTALLATION & DESIGN
            </h2>
            <p className="font-outfit text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              Home automation draws all the elements of your home together, creating a seamless living experience. Whether pre-programmed or at the push of a button, you can create specific scenes in your home that set the ambience you require.
            </p>
            <p className="font-outfit text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              From turning the heating up and switching the lights for a warm welcome home when you return from work to tailoring a relaxed atmosphere with mood lighting and music for a dinner party.
            </p>
            <p className="font-outfit text-gray-600 text-sm md:text-base leading-relaxed">
              Our smart home specialists can automate traditional manual products at your property and integrate them into a whole-home system, enabling you to manage everything through one intuitive interface.
            </p>
          </div>
        </div>
      </section>

      {/* Timers Section */}
      <section className="w-full">
        <div className="grid md:grid-cols-2">
          <div className="bg-white flex flex-col justify-center px-8 lg:px-16 py-12">
            <h2 className="font-outfit text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              TIMERS
            </h2>
            <p className="font-outfit text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              Smart homes can be set up to create the exact atmosphere you require at various times of the day. Timers are useful for setting up your home when you know certain things will be happening.
            </p>
            <p className="font-outfit text-gray-600 text-sm md:text-base leading-relaxed">
              For example, if you need to get up at 6am each morning for work, timed programming can raise your blinds and turn on your favourite radio station. You can also set the heating to a specific temperature so you don't have to climb out of a warm bed into a chilly morning.
            </p>
          </div>
          <div className="relative min-h-[400px] md:min-h-[500px]">
            <img
              src="/timers.jpg"
              alt="Smart home with timed lighting"
              className="w-full h-full object-cover object-right"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';
              }}
            />
          </div>
        </div>
      </section>

      {/* Sensors Section */}
      <section className="w-full">
        <div className="grid md:grid-cols-2">
          <div className="relative min-h-[400px] md:min-h-[500px]">
            <img
              src="/sensors.jpg"
              alt="Motion sensors and smart lighting"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';
              }}
            />
          </div>
          <div className="bg-white flex flex-col justify-center px-8 lg:px-16 py-12">
            <h2 className="font-outfit text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              SENSORS
            </h2>
            <p className="font-outfit text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              Motion and light sensors are the eyes and ears of your automated home. They're simple devices, yet they bring home automation to life, ensuring you're always comfortable.
            </p>
            <p className="font-outfit text-gray-600 text-sm md:text-base leading-relaxed">
              Light sensors monitor daylight levels, turning indoor lighting on and off or dimming as appropriate. Motion sensors detect room occupancy and can turn off lights, turn down heating, and more when spaces are vacant, helping you conserve energy.
            </p>
          </div>
        </div>
      </section>

      {/* Control Interfaces Section */}
      <section className="w-full">
        <div className="grid md:grid-cols-2">
          <div className="bg-white flex flex-col justify-center px-8 lg:px-16 py-12">
            <h2 className="font-outfit text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              CONTROL FROM
              <br />
              ANYWHERE
            </h2>
            <p className="font-outfit text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              Control your lighting from a host of devices, including Remote Control, Keypad, Touch-panel, Mobile Phone, Tablet and Watch just to name a few. Each interface provides seamless control over your entire home automation system.
            </p>
            <p className="font-outfit text-gray-600 text-sm md:text-base leading-relaxed">
              Configurable keypads can be installed around the home with 37 different layout possibilities. Control4 touch-screens give you a full visual interface, and our remote controls can manage both AV hardware and lighting scenes.
            </p>
          </div>
          <div className="min-h-[400px] md:min-h-[500px]">
            <img
              src="/interface.jpg"
              alt="Control interfaces and devices"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';
              }}
            />
          </div>
        </div>
      </section>

      {/* Mobile Control Section */}
      <section className="w-full">
        <div className="grid md:grid-cols-2">
          <div className="min-h-[400px] md:min-h-[500px]">
            <img
              src="/control.jpg"
              alt="Mobile app control"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';
              }}
            />
          </div>
          <div className="bg-white flex flex-col justify-center px-8 lg:px-16 py-12">
            <h2 className="font-outfit text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              CONTROL
              <br />
              WORLDWIDE
            </h2>
            <p className="font-outfit text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              Connect with your home anywhere in the world over WiFi and 4g/5g. Our smart home systems enable you to check cameras, heating and security from wherever you are to ensure your property is safe.
            </p>
            <p className="font-outfit text-gray-600 text-sm md:text-base leading-relaxed">
              Simply use the app on your mobile device to monitor and adjust settings and set up notifications and alerts to provide that extra feeling that your system is running in the background. Being away from home has never been so secure.
            </p>
          </div>
        </div>
      </section>

      {/* Audio, Projection & Interfaces Section */}
      <section className="bg-white py-16 md:py-24 font-outfit">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start px-8 lg:px-16">
            {/* Left Column - Control Interfaces (2/5 of the width) */}
            <div className="lg:col-span-2 space-y-16">
              {/* AppleWatch Section */}
              <div className="space-y-8">
                <div className="w-full max-w-80">
                  <img
                    src="/control.jpg"
                    alt="AppleWatch control interface"
                    className="w-full h-auto object-contain"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80';
                    }}
                  />
                </div>
                <div>
                  <h2 className="font-outfit text-3xl font-normal text-gray-900 mb-4">
                    AppleWatch Control
                  </h2>
                  <p className="font-outfit text-base text-gray-600 leading-relaxed">
                    Control your home from your watch, and manage remotely directly from your watch. Quick access to lighting, security, and temperature controls right from your wrist.
                  </p>
                </div>
              </div>

              {/* Touchscreens Section */}
              <div className="space-y-8">
                <div className="w-full max-w-80">
                  <img
                    src="/interface.jpg"
                    alt="Touch screen interfaces"
                    className="w-full h-auto object-contain"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1551808525-51a94da548ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80';
                    }}
                  />
                </div>
                <div>
                  <h2 className="font-outfit text-3xl font-normal text-gray-900 mb-4">
                    Touchscreens
                  </h2>
                  <p className="font-outfit text-base text-gray-600 leading-relaxed mb-5">
                    Control4 touch-screens can be installed around the home in wall and on tabletops. Control4 touch-screens give you a full visual interface into your home.
                  </p>
                  <p className="font-outfit text-base text-gray-600 leading-relaxed">
                    Choosing music, viewing cameras, adjusting lighting scenarios and more through an intuitive visual interface designed for your lifestyle.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Home Automation Design (3/5 of the width) */}
            <div className="lg:col-span-3 flex flex-col justify-center space-y-8">
              <div className="w-full max-w-md mx-auto lg:mx-0">
                <img
                  src="/had.jpg"
                  alt="Home automation design blueprint"
                  className="w-full h-auto object-contain"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80';
                  }}
                />
              </div>
              <div>
                <h2 className="font-outfit text-4xl font-normal text-gray-900 mb-6">
                  Home Automation Design
                </h2>
                <p className="font-outfit text-lg text-gray-600 leading-relaxed mb-6">
                  Designing your home automation system is the first step to your new living experience. Our design process takes you through the specifications, products and visuals that you require.
                </p>
                <p className="font-outfit text-base text-gray-600 leading-relaxed mb-5">
                  After initial discussions, our home automation specialists will ensure you are completely satisfied with the design by creating a 3D rendering of your floor, so you can see exactly how everything is going to work.
                </p>
                <p className="font-outfit text-base text-gray-600 leading-relaxed mb-5">
                  When you're happy with the proposed design and functionality, our smart home experts will carry out your home automation installation, ensuring everything is seamlessly integrated.
                </p>
                <p className="font-outfit text-base text-gray-600 leading-relaxed">
                  At the touch of a single button, you can activate your smart lighting, thermostat, window shading, audio system and more to create the perfect atmosphere for your lifestyle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mockupancy Section */}
      <section className="w-full">
        <div className="grid md:grid-cols-2">
          <div className="relative min-h-[400px] md:min-h-[500px]">
            <img
              src="/mockupand.jpg"
              alt="Luxury home cinema mockupancy"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1489396160836-2c3c82d1bf45?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';
              }}
            />
          </div>
          <div className="bg-white flex flex-col justify-center px-8 lg:px-16 py-12">
            <h2 className="font-outfit text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              MOCKUPANCY
              <br />
              SECURITY SIMULATION
            </h2>
            <p className="font-outfit text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              A smart home setup is about more than simple convenience. It's also about security and peace of mind while you're away from home. Our home automation systems learn about you and your habits to create a Mockupancy.
            </p>
            <p className="font-outfit text-gray-600 text-sm md:text-base leading-relaxed">
              An occupancy simulation making it seem as if you're home when you're not. This protects your home and creates a deterrent for burglars, perfect for holidays and late nights out, automatically playing back simulations based on your regular habits.
            </p>
          </div>
        </div>
      </section>

      {/* Upgrade Section */}
      <section className="w-full">
        <div className="grid md:grid-cols-2">
          <div className="bg-white flex flex-col justify-center px-8 lg:px-16 py-12">
            <h2 className="font-outfit text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              UPGRADE YOUR
              <br />
              EXISTING SYSTEM
            </h2>
            <p className="font-outfit text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              If you already have aspects of your home that are automated, but each element is in its own 'silo', make another easier by speaking to a whole-home system. Our smart home experts can integrate all your existing products.
            </p>
            <p className="font-outfit text-gray-600 text-sm md:text-base leading-relaxed">
              We create a seamless experience that can be controlled by a single interface. We can also make recommendations for upgrades to your equipment and provide technical support and system updates performed by our specialists.
            </p>
          </div>
          <div className="min-h-[400px] md:min-h-[500px]">
            <img
              src="/upgrade.jpg"
              alt="Home automation system upgrade"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';
              }}
            />
          </div>
        </div>
      </section>

      {/* Configurable Keypads Section */}
      <section className="w-full">
        <div className="grid md:grid-cols-2">
          <div className="min-h-[400px] md:min-h-[500px]">
            <img
              src="/interface.jpg"
              alt="Configurable control keypads"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';
              }}
            />
          </div>
          <div className="bg-white flex flex-col justify-center px-8 lg:px-16 py-12">
            <h2 className="font-outfit text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              CONFIGURABLE
              <br />
              KEYPADS
            </h2>
            <p className="font-outfit text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              Configurable keypads can be installed around the home to control immediate room settings. Not just for lights, these keypads can control anything on your home automation system.
            </p>
            <p className="font-outfit text-gray-600 text-sm md:text-base leading-relaxed">
              They come with 37 different layout possibilities, allowing you to customize the control interface to match your specific needs and preferences for each room in your home.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="w-full">
        <div className="grid md:grid-cols-2">
          <div className="bg-white flex flex-col justify-center px-8 lg:px-16 py-12">
            <div className="space-y-8">
              <h2 className="font-outfit text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                START YOUR
                <br />
                AUTOMATION JOURNEY
              </h2>
              <p className="font-outfit text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                Ready to transform your home into the ultimate smart living experience? Contact us today to begin designing your perfect home automation system.
              </p>
              <Link to="/contact" className="block">
              <button className="font-outfit border border-gray-400 text-gray-700 px-8 py-3 rounded hover:bg-gray-50 transition-colors duration-300">
                Book Consultation
              </button>
              </Link>
            </div>
          </div>
          <div className="min-h-[400px] md:min-h-[500px]">
            <img
              src="/contactus.jpeg"
              alt="Contact Us"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeCinema;