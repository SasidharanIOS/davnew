import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
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
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    
    // Prepare WhatsApp message
    const phoneNumber = "919372313616";
    const message = `*New Contact Form Submission*
    
*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone || 'Not provided'}
*Company:* ${formData.company || 'Not provided'}
*Message:* ${formData.message}

---
Sent from Company Website`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    setTimeout(() => {
      setIsSubmitting(false);
      window.open(whatsappURL, '_blank');
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      alert('Thank you for your inquiry. You will be redirected to WhatsApp to complete your message.');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section - Contact Us */}
      <section className="h-[65vh] min-h-[500px]">
        <div className="grid md:grid-cols-2 h-full">
          <div className="h-full relative overflow-hidden">
            <img
              src="/cont.jpg"
              alt="Contact Us"
              className="w-full h-full object-cover"
            />
            {/* Contact Us Text Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl md:text-7xl font-bold tracking-wide">
                  Contact Us
                </h1>
              </div>
            </div>
            {/* Company Name in Top Left */}
            <div className="absolute top-6 left-6 text-white">
              <h3 className="text-lg font-semibold">DAV</h3>
              <p className="text-sm opacity-90">
                Divine Audio Vision
              </p>
            </div>
          </div>

          <div className="bg-white flex flex-col justify-center px-8 lg:px-16 text-gray-800 h-full overflow-hidden">
            <div className="max-h-full overflow-y-auto">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-900">
                GET IN TOUCH
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                Ready to transform your audio-visual experience? Whether you're looking for 
                cutting-edge technology solutions, innovative installations, or expert consultation, 
                our team is here to help. Let's discuss your requirements and create something 
                extraordinary together.
              </p>
              <div>
                <p className="text-blue-600 font-semibold text-base">
                  Professional Support
                </p>
                <p className="text-gray-500 text-sm">
                  Available 24/7 for your projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="h-[65vh] min-h-[500px]">
        <div className="grid md:grid-cols-2 h-full">
          <div className="bg-gray-800 flex flex-col justify-center px-8 lg:px-16 h-full overflow-hidden">
            <div className="max-h-full overflow-y-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Send Message
              </h2>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Full Name *"
                    className="bg-transparent border-b border-gray-400 text-white placeholder-gray-300 py-3 px-0 focus:outline-none focus:border-white transition-colors"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address *"
                    className="bg-transparent border-b border-gray-400 text-white placeholder-gray-300 py-3 px-0 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="bg-transparent border-b border-gray-400 text-white placeholder-gray-300 py-3 px-0 focus:outline-none focus:border-white transition-colors"
                  />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Company"
                    className="bg-transparent border-b border-gray-400 text-white placeholder-gray-300 py-3 px-0 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message *"
                  rows="4"
                  className="w-full bg-transparent border-b border-gray-400 text-white placeholder-gray-300 py-3 px-0 focus:outline-none focus:border-white transition-colors resize-none"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="h-full relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              alt="Contact Form"
              className="w-full h-full object-cover object-right"
            />
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="h-[65vh] min-h-[500px]">
        <div className="grid md:grid-cols-2 h-full">
          <div className="h-full relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2301&q=80"
              alt="Office"
              className="w-full h-full object-cover object-left"
            />
          </div>
          <div className="bg-gray-100 flex flex-col justify-center px-8 lg:px-16 h-full overflow-hidden">
            <div className="max-h-full overflow-y-auto">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
                REACH US
              </h2>
              <div className="space-y-6 text-gray-700">
                <div>
                  <p className="text-blue-600 font-semibold mb-2">EMAIL</p>
                  <p className="text-sm md:text-base">info@divineaudiovision.com</p>
                </div>
                <div>
                  <p className="text-blue-600 font-semibold mb-2">PHONE</p>
                  <p className="text-sm md:text-base">+91 84891 81010</p>
                  <p className="text-sm md:text-base">+91 99402 08177</p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Erode Office Section */}
      <section className="h-[65vh] min-h-[500px]">
        <div className="grid md:grid-cols-2 h-full">
          <div className="bg-white flex flex-col justify-center px-8 lg:px-16 h-full overflow-hidden border-r border-gray-200">
            <div className="max-h-full overflow-y-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                ERODE OFFICE
              </h2>
              <div className="space-y-4 text-gray-700">
                <div>
                  <p className="text-blue-600 font-semibold mb-2">ADDRESS</p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Divine Audio Vision<br/>
                    139/10,Vishnu complex,Karur byepass road,Solar<br/>
                    Erode - 638002<br/>
                    Tamil Nadu, India
                  </p>
                </div>
                <div>
                  <p className="text-blue-600 font-semibold mb-2">SERVICES</p>
                  <p className="text-sm md:text-base">Main Office & Operations Center</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125344.05418796494!2d77.6579!3d11.3410!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f46762ed2e7%3A0xeecee56be6c8c23d!2sErode%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1642584963726!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Erode Office Location"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Chennai Office Section */}
      <section className="h-[65vh] min-h-[500px]">
        <div className="grid md:grid-cols-2 h-full">
          <div className="h-full overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497511.1620628046!2d79.9530!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1642584963726!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Chennai Office Location"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>
          <div className="bg-gray-100 flex flex-col justify-center px-8 lg:px-16 h-full overflow-hidden">
            <div className="max-h-full overflow-y-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                CHENNAI OFFICE
              </h2>
              <div className="space-y-4 text-gray-700">
                <div>
                  <p className="text-blue-600 font-semibold mb-2">ADDRESS</p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Divine Audio Vision<br/>
                    V.T.N. Arihant Presidency, Ground Floor Shop No.8,T.Nagar<br/>
                    Chennai 600017.OPP TO KALYAN JEWELLERS<br/>
                    Tamil Nadu, India
                  </p>
                </div>
                <div>
                  <p className="text-blue-600 font-semibold mb-2">SERVICES</p>
                  <p className="text-sm md:text-base">Sales & Support Center</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours Section */}
      <section className="h-[65vh] min-h-[500px]">
        <div className="grid md:grid-cols-2 h-full">
          <div className="bg-gray-800 flex flex-col justify-center px-8 lg:px-16 h-full overflow-hidden">
            <div className="max-h-full overflow-y-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                BUSINESS
                <br />
                HOURS
              </h2>
              <div className="space-y-4 text-gray-200">
                <div className="flex justify-between items-center">
                  <span className="text-sm md:text-base">Monday - Sunday</span>
                  <span className="text-blue-400 font-semibold">9:00 AM - 10:00 PM</span>
                </div>
                
                <div className="pt-4 border-t border-gray-600">
                  <p className="text-xs md:text-sm text-gray-300">
                    Emergency support available 24/7 for ongoing projects
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2369&q=80"
              alt="Business Hours"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Submit & WhatsApp Section */}
      <section className="h-[65vh] min-h-[500px]">
        <div className="grid md:grid-cols-2 h-full">
          <div className="h-full overflow-hidden">
            <img
              src="/send.jpeg"
              alt="Send Message"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-white flex flex-col justify-center px-8 lg:px-16 h-full overflow-hidden">
            <div className="max-h-full overflow-y-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                SEND MESSAGE
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
                Ready to discuss your project? Click below to send your message 
                directly to our team via WhatsApp, or use the contact form above 
                for detailed inquiries.
              </p>
              <div className="space-y-4">
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="border border-gray-400 text-gray-700 px-8 py-3 rounded hover:bg-gray-100 hover:border-gray-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto"
                >
                  {isSubmitting ? 'Sending...' : 'Submit Form'}
                </button>
                <a
                  href={`https://wa.me/919372313616`}
                  className="border border-green-500 text-green-600 px-8 py-3 rounded hover:bg-green-50 hover:border-green-600 transition-all duration-300 inline-block text-center w-full md:w-auto ml-0 md:ml-4"
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

export default ContactUs;