import React from 'react';
import About from '../components/About';
import Articles from '../components/Articles';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ShowCase from '../components/ShowCase';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <ShowCase />
      <About />
      <ContactUs />
      <Articles />
      <Footer />
    </div>
  );
};

export default LandingPage;