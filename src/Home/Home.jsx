import React from "react";
import Carousel from "./Carasouel/Carasouel";
import Navbar from "./Navbar/Navbar";
import Services from "./Services/Services";
import Section from "./Section3/Section";
import Section4 from "./Section4/Section4";
import Lastsection from "./lastSection/Lastsection";


const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <Services />
      <Section />
      <Section4 />
      <Lastsection />

    </>
  );
};

export default Home;
