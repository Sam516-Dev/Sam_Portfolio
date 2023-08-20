




import React from "react";
import image from "../assets/image.png";

function Body() {
  return (
    <div className="ml-2  px-8 relative">
      <div className=" md:z-50">
        <h1 className="text-4xl  font-bold  text-bluemine pt-10 md:pt-20">
          Hello, I'm
        </h1>
        <h1 className="text-5xl font-extrabold text-primary-blue pt-4 md:pt-6">
          SAMUEL NJOROGE
        </h1>
        <p className="text-bluemine -mt-1 text-base font-semibold">
          UI/UX Designer | Frontend Developer | Graphic Designer
        </p>
        <p className="text-primary-blue text-base font-medium max-w-lg mt-4 md:mt-12">
          I am an enthusiastic UI/UX Designer & Developer with a strong skill
          set encompassing UI/UX design, graphic design, and front-end
          development. My expertise lies in creating extraordinary experiences
          through the implementation <br /> of innovative projects
        </p>
      </div>
      <div className="flex  flex-col-reverse">
        <div className="flex flex-col md:flex-row pt-8 md:mt-8 space-y-4 md:space-y-0 md:space-x-8">
          <button className="flex py-3 px-12 md:py-2 items-center justify-center md:w-auto w-full bg-orange-500 hover:bg-orange-400 rounded-full text-white text-base font-semibold">
            Contact Me
          </button>
          <button className="flex py-3 md:py-2 px-12 justify-center md:w-auto w-full text-orange-500 font-semibold rounded-full border-2 border-orange-500">
            Portfolio
          </button>
        </div>
        <div className=" md:absolute md:top-16 md:right-1 flex justify-center object-cover mt-4 z-10 bg-blue-200 px-24 rounded-md">
          <img
            src={image}
            alt="image"
            className="h-64 w-full md:h-96 object-cover transform scale-x-[-1]"
          />
        </div>
      </div>
    </div>
  );
}

export default Body;
