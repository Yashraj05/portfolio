import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroImg2 from "../Components/HeroImg2";
import Skills from "../Components/Skills";

export default function About() {
  return (
    <div>
      <Navbar></Navbar>
      <HeroImg2 heading="ABOUT" text="I friendly full stack developer"></HeroImg2>
      <Skills></Skills>
      <Footer></Footer>
    </div>
  );
}
