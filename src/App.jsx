import React from "react";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs"; // Make sure this matches your file name exactly
import WhyUs from "./pages/WhyUs"; // Add this import
import Service from "./pages/Services"; // Add this import
import ContactUs from "./pages/ContactUs"; // Add this import
import Brand from "./pages/Brand"; // Add this import
import Demo from "./pages/Demo"; // Add this import
import ScrollToTop from "./ScrollToTop"; // Import the component

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => (
  <Router>
    <ScrollToTop /> {/* Add this component */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/why-us" element={<WhyUs />} /> {/* Add this route */}
      <Route path="/services" element={<Service />} /> {/* Add this route */}
      <Route path="/brand" element={<Brand />} /> {/* Add this route */}
      <Route path="/contact" element={<ContactUs />} /> {/* Add this route */}
      <Route path="/demo" element={<Demo />} /> {/* Add this route */}
    </Routes>
  </Router>
);

export default App;
