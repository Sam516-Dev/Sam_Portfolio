import React from "react";
import samlogo from "../assets/samlogo.PNG";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between pt-8 pb-4 border-b mx-10 border-primary-blue">
      <div className="flex items-center">
        {/* <img src={samlogo} alt="Logo" className="h-20 absolute " /> */}
        <h1 className="ml-2 text-primary-blue white  font-semibold">Sam@Design</h1>
      </div>

      <div className=" hidden md:flex space-x-12">
        <a href="/" className="text-primary-blue font-semibold hover:text-bluemine">
          Home
        </a>
        <a
          href="/about"
          className="text-primary-blue font-semibold hover:text-bluemine"
        >
          About Me
        </a>
        <a
          href="/projects"
          className="text-primary-blue font-semibold hover:text-bluemine"
        >
          Projects
        </a>
        <a
          href="/skills"
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
    </nav>
  );
};

export default Navbar;
