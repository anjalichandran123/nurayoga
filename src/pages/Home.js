import React from "react";
import Navbar from "../components/home/navbar";
import Header2 from "../components/home/header2";
import YogaServices from "../components/home/firstpart";
import ScrollingText from "../components/home/secondpart";
import MeditationGrid from "../components/home/thirdpart";
import Fourthpart from "../components/home/fourthpart";
import Sixth from "../components/home/sixth";
import Seventh from "../components/home/seventh";
import Eighth from "../components/home/eighth";
import ImageRow from "../components/home/ninth";
import Footer from "../components/home/footer";
import Tenth from "../components/home/tenth";

function Home() {
  return (
    <div style={{ backgroundColor: "#e9edf5" }}>
      <Navbar />
      <Header2 />
      <YogaServices />
      <ScrollingText />
      <MeditationGrid />
      <Fourthpart />
      <Sixth />
      <Seventh />
      <Eighth />
      <ImageRow />
      <Footer />
      <Tenth />
    </div>
  );
}

export default Home;
