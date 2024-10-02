import React from "react";
import Typewriter from "./Typewriter";

const Hero = () => {
  return (
    <div className="hero-container">
      <Typewriter className="hero-title" text="Welcome." />
      <div className="hero-description">
        I'm Akash, a software engineer based in India.
        <br />
        Check out my <a href="#projects">side-projects</a> below.
      </div>
    </div>
  );
};

export default Hero;
