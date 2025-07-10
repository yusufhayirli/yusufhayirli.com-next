"use client";

import React, { useEffect, useState, MouseEvent } from "react";

const ScrollToTopButton: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.pageYOffset > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.currentTarget.blur(); // prevent sticky focus

    window.scrollTo({ top: 0, behavior: "smooth" });
    setShow(false);
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll to top"
      className={`${
        show ? "opacity-100 visible" : "opacity-0 invisible"
      } fixed top-5 right-5 z-[999] w-9 h-9 rounded-full text-white text-sm flex items-center justify-center shadow-md transition-all duration-300 ease-in-out hover:scale-105 bg-link hover:bg-[var(--card-bg)] focus:outline-none active:outline-none bg-[var(--link-color)]`}
    >
      <i className="fa fa-arrow-up transition-colors duration-300 group-hover:text-black" />
    </button>
  );
};

export default ScrollToTopButton;
