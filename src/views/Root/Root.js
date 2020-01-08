import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./../../components/Header/Header";
import Slider from "./../../components/Slider/Slider";
import Services from "./../../components/Services/Services";
import Footer from "../../components/Footer/Footer";
import Clients from "../../components/Clients/Clients";
import Works from "../../components/Works/Works";
import Contact from "../../components/Contact/Contact";

class Root extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1000
    });
  }
  render() {
    return (
      <>
        <Header />
        <Slider />
        <Services />
        <Clients />
        <Works />
        <Contact />
        <Footer />
      </>
    );
  }
}

export default Root;
