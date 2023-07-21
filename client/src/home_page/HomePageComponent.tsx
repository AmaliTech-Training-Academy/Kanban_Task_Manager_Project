import * as React from "react";
import Navbar from "../components/Navbar/Navbar";
import Home from "../Home/Home";
import Testimonials from "../components/Testimonials/Testimonials";
import Features from "../components/Features/Features";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import { SetNewPassword } from "../set-new-password";
import { ForgotPassword } from "../forgot-password";

const HomePageComponent = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Features />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
      <SetNewPassword />
      <ForgotPassword/>
      {/* <DashBoardSideBar/> */}
    </>
  );
};

export default HomePageComponent;
