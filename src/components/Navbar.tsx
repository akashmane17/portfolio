import React, { useEffect, useRef, useState } from "react";
import moon from "@/images/icons/moon.svg";
import sun from "@/images/icons/sun.svg";
import Image from "next/image";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <button className="themeToggle" onClick={toggleTheme}>
      {isDarkMode ? (
        <Image src={sun} alt="light" />
      ) : (
        <Image src={moon} alt="darkmode" />
      )}
    </button>
  );
};

const Navbar = () => {
  const navbarRef = useRef<HTMLDivElement>(null);

  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId ? targetId : "");

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="navbar-container">
      <nav className="navbar" ref={navbarRef}>

        <a href="#projects" onClick={handleScroll}>
          Projects
        </a>
        <a href="#contact" onClick={handleScroll}>
          Contact
        </a>
        <ThemeToggle />
      </nav>
    </div>
  );
};

export default Navbar;
