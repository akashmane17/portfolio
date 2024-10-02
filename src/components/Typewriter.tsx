import React, { useState, useEffect } from "react";

interface TypewriterProps {
  text?: string;
  minTypeSpeed?: number;
  maxTypeSpeed?: number;
  initDelay?: number;
  className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({
  text = "Give me something to type!",
  minTypeSpeed = 50,
  maxTypeSpeed = 90,
  initDelay = 700,
  className = "",
}) => {
  const [typedText, setTypedText] = useState("");

  const clicketyClack = (
    inputText: string,
    minSpeed: number,
    maxSpeed: number,
    delay: number
  ) => {
    let str = "";
    let typeSpeed = 0;

    inputText.split("").forEach((char, index) => {
      typeSpeed += Math.random() * (maxSpeed - minSpeed) + minSpeed;
      setTimeout(() => {
        str += char;
        setTypedText(str); // Update the state as the text is typed
      }, delay + typeSpeed);
    });
  };

  useEffect(() => {
    clicketyClack(text, minTypeSpeed, maxTypeSpeed, initDelay);
  }, [text, minTypeSpeed, maxTypeSpeed, initDelay]); // Re-run if props change

  return (
    <div className={className}>
      {typedText}
      <span>&nbsp;</span>
    </div>
  );
};

export default Typewriter;
