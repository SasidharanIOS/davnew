import React, { useState } from 'react';

const Demo = () => {
  const [formData, setFormData] = useState({
    movieName: '',
    date: '',
    time: '',
    numberOfPersons: '1',
    movieRuntime: '',
    userName: '',
    mobileNumber: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // Validate form data
    const requiredFields = ['movieName', 'date', 'time', 'numberOfPersons', 'movieRuntime', 'userName', 'mobileNumber'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      alert('Please fill in all required fields');
      return;
    }

    // Validate mobile number (basic validation)
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(formData.mobileNumber)) {
      alert('Please enter a valid 10-digit mobile number');
      return;
    }

    setIsSubmitting(true);
    
    // Prepare WhatsApp message
    const phoneNumber = "919372313616"; // Replace with your actual WhatsApp number
    const message = `*New Demo Booking Request*

📽️ *Movie:* ${formData.movieName}
📅 *Date:* ${formData.date}
🕐 *Time:* ${formData.time}
👥 *Number of Persons:* ${formData.numberOfPersons}
⏱️ *Movie Runtime:* ${formData.movieRuntime} minutes
👤 *Name:* ${formData.userName}
📱 *Mobile:* ${formData.mobileNumber}

---
*Demo Request from Company Website*
Please confirm the availability for this demo session.`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Simulate processing time
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Open WhatsApp
      window.open(whatsappURL, '_blank');
      
      // Clear form after sending
      setFormData({
        movieName: '',
        date: '',
        time: '',
        numberOfPersons: '1',
        movieRuntime: '',
        userName: '',
        mobileNumber: ''
      });
      
      // Show success message
      alert('Redirecting to WhatsApp... Please send the pre-filled message to confirm your demo booking.');
    }, 1000);
  };

  // Get today's date for min attribute
  const today = new Date().toISOString().split('T')[0];

  // Time slots for demonstration
  const timeSlots = [
    '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-outfit">
      {/* Hero Section - Demo Booking */}
      <section className="h-[65vh] min-h-[500px]">
        <div className="grid md:grid-cols-2 h-full">
          <div className="h-full relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Premium Home Cinema Demo Room"
              className="w-full h-full object-cover"
            />
            {/* Demo Booking Text Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl md:text-7xl font-black tracking-wide">
                  DEMO BOOKING
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

          <div className="bg-white flex flex-col justify-center px-8 lg:px-16 text-gray-800 h-full overflow-hidden">
            <div className="max-h-full overflow-y-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                BOOK YOUR EXPERIENCE
              </h2>
              <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed mb-4">
                Experience our premium audio-visual systems with your favorite movie in our showroom. 
                Schedule your personalized demonstration with our state-of-the-art home cinema systems 
                and immersive surround sound technology.
              </p>
              <div>
                <p className="text-blue-600 font-semibold text-base">
                  Premium Demo Experience
                </p>
                <p className="text-gray-500 text-sm font-light">
                  Available Monday to Sunday
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="h-auto min-h-[500px]">
        <div className="grid md:grid-cols-2 min-h-[500px]">
          <div className="bg-gray-800 flex flex-col justify-center px-8 lg:px-16 py-12 overflow-hidden">
            <div className="max-h-full overflow-y-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Schedule Demo
              </h2>
              <div className="space-y-4">
                {/* Movie Name */}
                <input
                  type="text"
                  name="movieName"
                  value={formData.movieName}
                  onChange={handleInputChange}
                  placeholder="Movie Name *"
                  className="w-full bg-transparent border-b border-gray-400 text-white placeholder-gray-300 py-3 px-0 focus:outline-none focus:border-white transition-colors font-light"
                />

                {/* Date and Time */}
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    min={today}
                    className="bg-transparent border-b border-gray-400 text-white py-3 px-0 focus:outline-none focus:border-white transition-colors font-light"
                  />
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="bg-transparent border-b border-gray-400 text-white py-3 px-0 focus:outline-none focus:border-white transition-colors font-light"
                  >
                    <option value="" className="text-gray-800 font-light">Select Time *</option>
                    {timeSlots.map(time => (
                      <option key={time} value={time} className="text-gray-800 font-light">{time}</option>
                    ))}
                  </select>
                </div>

                {/* Number of Persons and Movie Runtime */}
                <div className="grid md:grid-cols-2 gap-4">
                  <select
                    name="numberOfPersons"
                    value={formData.numberOfPersons}
                    onChange={handleInputChange}
                    className="bg-transparent border-b border-gray-400 text-white py-3 px-0 focus:outline-none focus:border-white transition-colors font-light"
                  >
                    {[1,2,3,4,5,6,7,8,9,10].map(num => (
                      <option key={num} value={num} className="text-gray-800 font-light">{num} {num === 1 ? 'Person' : 'Persons'}</option>
                    ))}
                  </select>
                  <input
                    type="number"
                    name="movieRuntime"
                    value={formData.movieRuntime}
                    onChange={handleInputChange}
                    placeholder="Runtime (10-300 mins) *"
                    min="10"
                    max="300"
                    className="bg-transparent border-b border-gray-400 text-white placeholder-gray-300 py-3 px-0 focus:outline-none focus:border-white transition-colors font-light"
                  />
                </div>

                {/* User Details */}
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="userName"
                    value={formData.userName}
                    onChange={handleInputChange}
                    placeholder="Your Name *"
                    className="bg-transparent border-b border-gray-400 text-white placeholder-gray-300 py-3 px-0 focus:outline-none focus:border-white transition-colors font-light"
                  />
                  <input
                    type="tel"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    placeholder="Mobile Number *"
                    pattern="[6-9]{1}[0-9]{9}"
                    maxLength="10"
                    className="bg-transparent border-b border-gray-400 text-white placeholder-gray-300 py-3 px-0 focus:outline-none focus:border-white transition-colors font-light"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="h-full relative overflow-hidden min-h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Multi-Room Audio Demo Setup"
              className="w-full h-full object-cover object-right"
            />
          </div>
        </div>
      </section>

      {/* Demo Room Information */}
      <section className="h-[65vh] min-h-[500px]">
        <div className="grid md:grid-cols-2 h-full">
          <div className="h-full relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Premium Cinema Room"
              className="w-full h-full object-cover object-left"
            />
          </div>
          <div className="bg-gray-100 flex flex-col justify-center px-8 lg:px-16 h-full overflow-hidden">
            <div className="max-h-full overflow-y-auto">
              <h2 className="text-5xl md:text-6xl font-black text-gray-800 mb-4">
                DEMO ROOMS
              </h2>
              <div className="space-y-6 text-gray-700">
                <div>
                  <p className="text-blue-600 font-semibold mb-2">PREMIUM CINEMA ROOM</p>
                  <p className="text-sm md:text-base font-light">4K Projection • Dolby Atmos • Smart Automation</p>
                </div>
                <div>
                  <p className="text-blue-600 font-semibold mb-2">MULTI-ROOM AUDIO SUITE</p>
                  <p className="text-sm md:text-base font-light">Multi-Zone • Wireless Audio • Voice Control</p>
                </div>
                <div>
                  <p className="text-blue-600 font-semibold mb-2">FEATURES</p>
                  <p className="text-sm md:text-base font-light">Professional acoustic design with immersive experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Experience Features */}
      <section className="h-[65vh] min-h-[500px]">
        <div className="grid md:grid-cols-2 h-full">
          <div className="bg-white flex flex-col justify-center px-8 lg:px-16 h-full overflow-hidden border-r border-gray-200">
            <div className="max-h-full overflow-y-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                WHAT TO EXPECT
              </h2>
              <div className="space-y-4 text-gray-700">
                <div>
                  <p className="text-blue-600 font-semibold mb-2">PREMIUM CINEMA EXPERIENCE</p>
                  <p className="text-sm md:text-base font-light leading-relaxed">
                    Experience your favorite movie on our state-of-the-art home cinema system with 4K/8K display technology
                  </p>
                </div>
                <div>
                  <p className="text-blue-600 font-semibold mb-2">IMMERSIVE SOUND</p>
                  <p className="text-sm md:text-base font-light">Feel every detail with premium surround sound systems</p>
                </div>
                <div>
                  <p className="text-blue-600 font-semibold mb-2">EXPERT CONSULTATION</p>
                  <p className="text-sm md:text-base font-light">Get personalized advice from our AV experts</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Audio Visual Experience"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="h-[65vh] min-h-[500px]">
        <div className="grid md:grid-cols-2 h-full">
          <div className="h-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="4K Display Technology"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-gray-100 flex flex-col justify-center px-8 lg:px-16 h-full overflow-hidden">
            <div className="max-h-full overflow-y-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                TECHNICAL SPECS
              </h2>
              <div className="space-y-4 text-gray-700">
                <div>
                  <p className="text-blue-600 font-semibold mb-2">DISPLAY TECHNOLOGY</p>
                  <p className="text-sm md:text-base font-light leading-relaxed">
                    Ultra-high definition 4K/8K projection systems with HDR support
                  </p>
                </div>
                <div>
                  <p className="text-blue-600 font-semibold mb-2">AUDIO SYSTEMS</p>
                  <p className="text-sm md:text-base font-light">Immersive surround sound with Dolby Atmos technology</p>
                </div>
                <div>
                  <p className="text-blue-600 font-semibold mb-2">SMART CONTROLS</p>
                  <p className="text-sm md:text-base font-light">Automated lighting, climate, and audio-visual controls</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours for Demo */}
      <section className="h-[65vh] min-h-[500px]">
        <div className="grid md:grid-cols-2 h-full">
          <div className="bg-gray-800 flex flex-col justify-center px-8 lg:px-16 h-full overflow-hidden">
            <div className="max-h-full overflow-y-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                DEMO
                <br />
                SESSIONS
              </h2>
              <div className="space-y-4 text-gray-200">
                <div className="flex justify-between items-center">
                  <span className="text-sm md:text-base font-light">Monday - Friday</span>
                  <span className="text-blue-400 font-semibold">10:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm md:text-base font-light">Saturday</span>
                  <span className="text-blue-400 font-semibold">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm md:text-base font-light">Sunday</span>
                  <span className="text-red-400 font-semibold">Closed</span>
                </div>
                <div className="pt-4 border-t border-gray-600">
                  
                  <p className="text-xs md:text-sm text-gray-300 font-light mt-1">
                    Please arrive 15 minutes before scheduled time
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2369&q=80"
              alt="Demo Sessions"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Demo Booking Information */}
      <section className="h-[65vh] min-h-[500px]">
        <div className="grid md:grid-cols-2 h-full">
          <div className="h-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Demo Information"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-white flex flex-col justify-center px-8 lg:px-16 h-full overflow-hidden">
            <div className="max-h-full overflow-y-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                BOOKING INFO
              </h2>
              <div className="text-gray-600 text-sm md:text-base font-light leading-relaxed mb-8 space-y-3">
                <p>• Demo sessions are available Monday to Saturday</p>
                <p>• Please arrive 15 minutes before your scheduled time</p>
                <p>• We'll confirm your booking via WhatsApp within 24 hours</p>
                <p>• Demo sessions are available for Short Film Launch, Movie Preview Session Booking, Daily Scratch, and Project-Based Demo</p>
              </div>
              <div className="space-y-4">
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="border border-gray-400 text-gray-700 font-medium px-8 py-3 rounded hover:bg-gray-100 hover:border-gray-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto"
                >
                  {isSubmitting ? 'Booking Demo...' : 'Book Demo Session'}
                </button>
                <a
                  href={`https://wa.me/918489181010`}
                  className="border border-green-500 text-green-600 font-medium px-8 py-3 rounded hover:bg-green-50 hover:border-green-600 transition-all duration-300 inline-block text-center w-full md:w-auto ml-0 md:ml-4"
                >
                  WhatsApp Direct
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Demo;