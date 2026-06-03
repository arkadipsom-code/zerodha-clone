import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Hero from "./Hero";
import OpenAccount from "../OpenAccount";
import Pricing from "./Pricing";
import Awards from "./Awards";
import Stats from "./Stats";
import Education from "./Education";

function HomePage() {
  return (
    <>
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
}

export default HomePage;
