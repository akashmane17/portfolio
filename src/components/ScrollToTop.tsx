import Image from "next/image";
import React, { useEffect, useState } from "react";
import upIco from "@/images/icons/up.svg";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Handle scroll event to show/hide button
  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button onClick={scrollToTop} className="scrollToTopButton">
          <Image src={upIco} alt="top" width={20} height={20} />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
