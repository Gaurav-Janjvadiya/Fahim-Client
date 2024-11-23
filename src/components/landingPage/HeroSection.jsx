import React from "react";
import robotGif from "../../assets/gifs/landingPageRobot.gif";
import { Link } from "react-router-dom";
import { Button } from "../";

function HeroSection() {
  return (
    <>
      {/* Hero Section */}
      <div className="flex w-full sm:flex-row flex-col-reverse">
        <div className="sm:w-1/2 w-full flex flex-col items-start px-6 sm:px-10 justify-center space-y-6 sm:space-y-10">
          <h1 className="font-pixelify font-light text-3xl sm:text-4xl">
            Fahim: Your Smart Academic Companion
          </h1>
          <div className="space-y-1">
            <p className="text-lg sm:text-xl max-w-3xl">
              Unlock your academic potential with personalized course
            </p>
            <p className="text-lg sm:text-xl max-w-3xl">
              recommendations and more.
            </p>
          </div>
          <Button>
            <Link to="/signup">Get Started</Link>
          </Button>
        </div>
        <div className="sm:w-1/2 w-full flex items-center justify-center pt-10 sm:pt-0">
          <img
            className="w-full sm:w-auto"
            src={robotGif}
            alt="Landing Page Robot"
          />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
