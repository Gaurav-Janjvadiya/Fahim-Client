import React from "react";
import robotGif from "../../assets/gifs/landingPageRobot.gif";
import { Link } from "react-router-dom";
import { Button } from "../";

function HeroSection() {
  return (
    <>
      {/*  Hero Section */}
      <div className="flex w-full sm:flex-row flex-col-reverse">
        <div className="sm:w-1/2 w-full flex flex-col items-start py-20 px-10 justify-start">
          <h1 className="font-pixelify font-light my-10 text-3xl">
            Fahim: Your Smart Academic Companion
          </h1>
          <div className="my-10">
            <p className="text-lg sm:text-xl max-w-3xl">
              Unlock your academic potential with personalized course
            </p>
            <p className="text-lg sm:text-xl max-w-3xl">
              recommendations and more
            </p>
          </div>
          <Button>
            <Link to="/signup">Get Started</Link>
          </Button>
        </div>
        <div className="sm:w-1/2 w-full flex items-center justify-center">
          <img className="" src={robotGif} alt="Landing Page Robot" />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
