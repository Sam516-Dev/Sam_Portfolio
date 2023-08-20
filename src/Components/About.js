import React from "react";
import image from "../assets/image1.JPG";
import { Progress } from "flowbite-react";

function About() {
  return (
    <div className="ml-2 px-8 mt-4 mb-96 md:mt-16 pt-11 min-h-screen">
      <h1 className="text-4xl font-extrabold  text-bluemine pt-4 md:pt-6">
        About Me
      </h1>

      <div className="flex flex-col gap-4 md:gap-0 mt-2 md:mt-8 md:flex-row ">
        <div className=" w-full md:w-72 h-96 border-b-4 border-blue-400   bg-red-500 rounded-md overflow-hidden">
          <div class="flip-container">
            <div class=" zoom-container">
              <img src={image} alt="image" class="zoom-image" />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-1 md:flex-row p-6 md:ml-4 rounded-md  md:space-x-6 border border-blue-300 bg-blue-200">
          <div className="flex flex-col space-y-3 md:justify-between">
            <p className="text-primary-blue flex text-base font-medium  md:max-w-lg  ">
              I have a deep passion for UI/UX design, graphic design, and
              <br />
              front-end development.I thrive on
              the intersection of creativity and technology. With a background
              <br /> in Computer Science and a strong foundation in UI/UX design
              <br />
              and graphic design principles, I bring a unique blend of artistic <br />
              vision and technical expertise to my work
            </p>
            <button className="flex py-3  px-4 md:w-48 items-center hover:bg-blue-600 justify-center  bg-bluemine rounded-full text-white text-base font-semibold">
              Download CV
            </button>
          </div>
          
          <div className="flex flex-col gap-6 mt-6 md:mt-0 md:justify-between flex-1">
            <div>
              <div className="flex justify-between">
                <label className=" flex text-primary-blue text-sm font-bold">
                  Graphic Design
                </label>
                <label className=" flex text-primary-blue text-sm font-normal">
                  87%
                </label>
              </div>
              <Progress color="yellow" progress={87} />
            </div>

            <div>
              <div className="flex justify-between">
                <label className=" flex text-primary-blue text-sm font-bold">
                  UI/UX Design
                </label>
                <label className=" flex text-primary-blue text-sm font-normal">
                  80%
                </label>
              </div>
              <Progress color="blue" progress={80} />
            </div>

            <div>
              <div className="flex justify-between">
                <label className=" flex text-primary-blue text-sm font-bold">
                  User Research
                </label>
                <label className=" flex text-primary-blue text-sm font-normal">
                  55%
                </label>
              </div>
              <Progress color="yellow" progress={55} />
            </div>

            <div>
              <div className="flex justify-between">
                <label className=" flex text-primary-blue text-sm font-bold">
                  Development
                </label>
                <label className=" flex text-primary-blue text-sm font-normal">
                  60%
                </label>
              </div>
              <Progress color="blue" progress={60} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
