import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import samlogo from "../assets/samlogo.PNG";

const Navbar = () => {
  // Add state to handle the mobile menu
  const [open, setOpen] = useState(false);

  // Function to toggle mobile menu
  const handleMobileMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className="flex items-center justify-between pt-8 pb-4 border-b mx-10 border-blue-500">
      <div className="flex items-center">
        <h1 className="ml-2 text-primary-blue white font-semibold">
          Sam@Design
        </h1>
      </div>

      {/* Responsive Mobile Menu */}
      <div className="md:hidden">
        <button onClick={handleMobileMenu}>
          <FontAwesomeIcon icon={faBars} className="text-primary-blue" />
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-12">
        <a
          href="/"
          className="text-primary-blue font-semibold hover:text-bluemine"
        >
          Home
        </a>
        <a
          href="/about"
          className="text-primary-blue font-semibold hover:text-bluemine"
        >
          About Me
        </a>
        <a
          href="/skills"
          className="text-primary-blue font-semibold hover:text-bluemine"
        >
          Projects
        </a>
        <a
          href="/projects"
          className="text-primary-blue font-semibold hover:text-bluemine"
        >
          Skills
        </a>
        <a
          href="/contact"
          className="text-primary-blue font-semibold hover:text-bluemine"
        >
          Contact
        </a>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden absolute top-16 right-12 rounded-md z-10 flex flex-col px-11 space-y-4 bg-white p-6 shadow-xl">
          <a
            href="/"
            className="text-primary-blue font-semibold hover:text-bluemine"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-primary-blue font-semibold hover:text-bluemine"
          >
            About Me
          </a>
          <a
            href="/skills"
            className="text-primary-blue font-semibold hover:text-bluemine"
          >
            Projects
          </a>
          <a
            href="/projects"
            className="text-primary-blue font-semibold hover:text-bluemine"
          >
            Skills
          </a>
          <a
            href="/contact"
            className="text-primary-blue font-semibold hover:text-bluemine"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
