import React from "react";

function Body() {
  return (
    <div className=" ml-2 px-8">
      <h1 className="text-4xl font-bold text-bluemine  pt-20">Hello, I'm</h1>
      <h1 className=" text-5xl font-extrabold text-primary-blue pt-6">
        SAMUEL NJOROGE
      </h1>
      <p className="text-bluemine -mt-1 text-base font-semibold">
        UI/UX Designer | Fronted Developer | Graphic Designer
      </p>
      <p className="text-primary-blue text-sm max-w-lg mt-12">
        I am an enthusiastic UI/UX Designer & Developer with a strong skill set
        encompassing UI/UX design, graphic design, and front-end development. My
        expertise lies in creating extraordinary experiences through the
        implementation of innovative projects
      </p>
      <div className="flex mt-8 space-x-12">
        <button className="flex py-2 items-center px-9 bg-orange-500 hover:bg-orange-400 rounded-full text-white text-base font-semibold">
          Contact Me
        </button>
        <button className="flex py-2 px-9 text-orange-500 font-semibold rounded-full border-2 border-orange-500">
         
          Portflio
        </button>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default Body;
