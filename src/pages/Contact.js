import React from "react";
import Cheader from "../components/contact/cheader";
import ContactInfo from "../components/contact/cfirst";
import ContactPage from "../components/contact/csecond";
import MapComponent from "../components/contact/mapComponent";
import Tenth from "../components/home/tenth";

function Contact() {
  return (
    <div style={{ backgroundColor: "#e9edf5" }}>
      <Cheader />
      <ContactInfo />
      <ContactPage />
      <MapComponent />
      <Tenth />
    </div>
  );
}

export default Contact;
