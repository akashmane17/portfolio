import React from "react";
import Typewriter from "./Typewriter";

const Hero = () => {
  return (
    <div className="hero-container">
      <Typewriter className="hero-title" text="Akash Mane" />
      <div className="hero-description">
        Welcome to my digital playground! I'm deeply enthusiastic about
        technology and enjoy creating projects that fascinate me. At present, I am a software engineer at SOV Technologies
        <br />
        Check out my <a href="#projects">Projects</a> below.
      </div>
    </div>
  );
};

export default Hero;
