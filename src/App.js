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
      </BrowserRouter>
    </div>
  );
}

export default App;
