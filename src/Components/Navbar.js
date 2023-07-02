import React from "react";
import samlogo from "../assets/samlogo.PNG";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-8 bg-primary_blue">
      <div className="flex items-center">
        {/* <img src={samlogo} alt="Logo" className="h-20 absolute " /> */}
        <h1 className="ml-2 text-white text-lg font-semibold">Sam@Design</h1>
      </div>
      <div className=" hidden md:flex space-x-12">
        <a href="/" className="text-white font-semibold hover:text-blue-50">
          Home
        </a>
        <a href="/about" className="text-white font-semibold hover:text-blue-50">
          About Me
        </a>
        <a href="/projects" className="text-white font-semibold hover:text-blue-50">
          Projects
        </a>
        <a href="/skills" className="text-white font-semibold hover:text-blue-50">
          Skills
        </a>
        <a href="/contact" className="text-white font-semibold hover:text-blue-50">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;