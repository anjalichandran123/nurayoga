import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import YogaServices from "./components/firstpart";
import ScrollingText from "./components/secondpart";
import MeditationGrid from "./components/thirdpart";
import Fourthpart from "./components/fourthpart";
import Sixth from "./components/sixth";
import Seventh from "./components/seventh";
import Eighth from "./components/eighth";
import ImageRow from "./components/ninth";
import Footer from "./components/footer";
import  Tenth  from "./components/tenth";
import Cheader from "./components/cheader";
import ContactInfo from "./components/cfirst";
import ContactPage from "./components/csecond";
import MapComponent from "./components/mapComponent";
import About from "./components/about";
import HealthClubLandingPage from "./components/afirst";
import FitnessBenefitsCards from "./components/asecond";
import About_third from "./components/athird";
import About_YogaServices from "./components/afourth";
import TestimonialSlider from "./components/aslider";



function App() {
  return (
    <div className="App" style={{backgroundColor:"#e9edf5"}}>
      <BrowserRouter>
      <Header/>
      <YogaServices/>
      <ScrollingText/>
      <MeditationGrid/>
      <Fourthpart/>
      <Sixth/>
      <Seventh/>
      <Eighth/>
      <ImageRow/>
      <Footer/>
      <Tenth/>
      <Cheader/>
      <ContactInfo/>
      <ContactPage/>
      <MapComponent/>
      <Tenth/>
      <About/>
      <HealthClubLandingPage/>
      <FitnessBenefitsCards/>
      <About_third/>
      <About_YogaServices/>
      <TestimonialSlider/>
      <Footer/>
      <Tenth/>
      </BrowserRouter>
    </div>
  );
}

export default App;
