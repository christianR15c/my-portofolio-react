import React from 'react';
import About from '../components/About';
// import Articles from '../components/Articles';
import Support from '../components/Support';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ShowCase from '../components/ShowCase';
import Services from '../components/Services';
import ContactUs from '../components/ContactUs';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <ShowCase />
      <Services />
      <About />
      <Support />
      {/* <Articles /> */}
      <ContactUs />
      <Footer />
    </div>
  );
};

export default LandingPage;
