import React from "react";
import About from "../components/about/about";
import HealthClubLandingPage from "../components/about/afirst";
import FitnessBenefitsCards from "../components/about/asecond";
import Aboutthird from "../components/about/athird";
import AboutYogaServices from "../components/about/afourth";
import TestimonialSlider from "../components/about/aslider";
import Footer from "../components/home/footer";
import Tenth from "../components/home/tenth";

function AboutPage() {
  return (
    <div style={{ backgroundColor: "#e9edf5" }}>
      <About />
      <HealthClubLandingPage />
      <FitnessBenefitsCards />
      <Aboutthird />
      <AboutYogaServices />
      <TestimonialSlider />
      <Footer />
      <Tenth />
    </div>
  );
}

export default AboutPage;
