import * as React from 'react'
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Testimonials from '../components/Testimonials';
import Features from '../components/Features';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePageComponent = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Features />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
      {/* <DashBoardSideBar/> */}
    </div>
  );
}

export default HomePageComponent