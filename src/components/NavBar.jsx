import React, { useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: `#${id}`,
      ease: "power2.out",
    });
    setOpen(false); // close menu after click
  };

  return (
    <div className="w-full flex justify-between items-center px-4 md:px-16 py-4 relative z-50 text-white">

      {/* Logo */}
      <button
        onClick={() => scrollToSection("home")}
        className="text-lg md:text-xl michrome-font"
      >
        v_ista
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 items-center text-lg">
        <button onClick={() => scrollToSection("projects")} className="hover:text-[#00ff88]">
          Projects
        </button>
        <button onClick={() => scrollToSection("contact")} className="hover:text-[#00ff88]">
          Contact
        </button>

        <a
          href="/VASHISTA_DARA.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 rounded-full bg-[#3b82f6] hover:bg-[#2563eb] transition-all"
        >
          Resume
        </a>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setOpen(!open)}
      >
        {open ? "✕" : "☰"}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-[#0d1b4d]/95 backdrop-blur-md flex flex-col items-center gap-6 py-6 md:hidden">

          <button onClick={() => scrollToSection("projects")} className="text-lg">
            Projects
          </button>

          <button onClick={() => scrollToSection("contact")} className="text-lg">
            Contact
          </button>

          <a
            href="/VASHISTA_DARA.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-[#3b82f6]"
          >
            Resume
          </a>
        </div>
      )}
    </div>
  );
};

export default NavBar;