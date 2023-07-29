import React from "react";
import image from "../assets/image1.JPG";
import { Progress } from "flowbite-react";

function About() {
  return (
    <div className="ml-2 px-8 mt-16 pt-11 min-h-screen">
      <h1 className="text-6xl font-extrabold  text-bluemine pt-4 md:pt-6">
        About Me
      </h1>

      <div className="flex mt-8">
        <div className=" w-72 h-96 border-b-4 border-blue-400   bg-red-500 rounded-md overflow-hidden">
          <div class="flip-container">
            <div class="zoom-container">
              <img src={image} alt="image" class="zoom-image" />
            </div>
          </div>
        </div>

        <div className="flex flex-1 p-6 ml-4 rounded-md  space-x-6 border border-blue-300 bg-blue-200">
          <div className="flex flex-col justify-between">
            <p className="text-primary-blue flex text-base font-medium  max-w-lg  ">
              I have a deep passion for UI/UX design, graphic design, and
              <br />
              front-end development. My name is Samuel, and I thrive on <br />
              the intersection of creativity and technology. With a background
              <br /> in Computer Science and a strong foundation in UI/UX design
              <br />
              and graphic design principles, I bring a unique blend of artistic
              vision and technical expertise to my work
            </p>
            <button className="flex py-3 px-4 w-48 items-center hover:bg-blue-600 justify-center bg-tex bg-bluemine rounded-full text-white text-base font-semibold">
              Download CV
            </button>
          </div>
          <div className="flex flex-col justify-between flex-1">
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
