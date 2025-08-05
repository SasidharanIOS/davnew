import React from 'react';

const Services = () => {
  return (
    <div className="min-h-screen bg-black text-white font-outfit">
      {/* Fixed Header with Logo */}
      <header className="fixed top-0 left-0 z-50 p-6">
        <a href="/" className="block">
          <img 
            src="/dav.png" 
            alt="DAV Logo" 
            className="h-12 w-auto hover:opacity-80 transition-opacity"
          />
        </a>
      </header>

      {/* Header Section with Solutions */}
      <div className="relative h-[70vh] bg-cover bg-center" style={{backgroundImage: 'url(/solutions.jpg)'}}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full">
          <div className="text-left max-w-6xl mx-auto px-8">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-wider">SOLUTIONS</h1>
          </div>
        </div>
      </div>

      {/* Automation Section */}
      <div className="relative h-[60vh] bg-cover bg-center" style={{backgroundImage: 'url(/automation.jpg)'}}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 flex flex-col justify-center h-full max-w-6xl mx-auto px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">AUTOMATION</h2>
            <div className="space-y-3 text-base">
              <p className="font-medium">One home. One family. One touch.</p>
              <p className="font-light">Take total control of everything in your house from one single app.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Private Cinema Section */}
      <div className="relative h-[60vh] bg-cover bg-center" style={{backgroundImage: 'url(/privatecinema.jpg)'}}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 flex flex-col justify-center h-full max-w-6xl mx-auto px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">PRIVATE CINEMA</h2>
            <p className="text-base font-light">A bespoke room built specially for you, dedicated to the ultimate movie experience.</p>
          </div>
        </div>
      </div>

      {/* Lifestyle AV Section */}
      <div className="relative h-[60vh] bg-cover bg-center" style={{backgroundImage: 'url(/lifestyleAV.jpg)'}}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 flex flex-col justify-center h-full max-w-6xl mx-auto px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">LIFESTYLE AV</h2>
            <div className="space-y-3 text-base">
              <p className="font-medium">Your home deserves the best.</p>
              <p className="font-light">Fill your room with great sound, capable of a thundering movie experience or high quality music.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Smart Space Commercial Section */}
      <div className="relative h-[60vh] bg-cover bg-center" style={{backgroundImage: 'url(/ssc.jpg)'}}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 flex flex-col justify-center h-full max-w-6xl mx-auto px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">SMART SPACE -<br />COMMERCIAL</h2>
            <p className="text-base font-light">Hotels, offices, boardrooms, conference rooms, restaurants, retail spaces, businesses-you name it. We have a solution that will for your requirements, usage and budget.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="max-w-6xl mx-auto px-8 flex justify-between items-center">
         
          <div className="flex space-x-4">
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <span className="text-black text-xs font-bold">f</span>
            </div>
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <span className="text-black text-xs font-bold">@</span>
            </div>
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <span className="text-black text-xs font-bold">in</span>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-400 font-light">Contact</p>
          </div>
        </div>
        
      </footer>
    </div>
  );
};

export default Services;