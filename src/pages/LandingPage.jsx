import React from "react";
import robotGif from "../assets/gifs/landingPageRobot.gif";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

function LandingPage() {
  return (
    // robot part
    <>
      <div className="flex w-full sm:flex-row flex-col-reverse">
        <div className="sm:w-1/2 w-full flex flex-col items-start py-20 px-10 justify-start">
          <h1 className="font-pixelify font-light my-10 text-3xl">
            Fahim: Your Smart Academic Companion
          </h1>
          <div className="my-10">
            <p>Unlock your academic potential with personalized course</p>
            <p>recommendations and more</p>
          </div>
          <button className="px-5 py-2 font-bold rounded-2xl bg-[#0DFF15] text-white">
            <Link to="/signup">Get Started</Link>
          </button>
        </div>
        <div className="sm:w-1/2 w-full flex items-center justify-center">
          <img className="" src={robotGif} alt="Landing Page Robot" />
        </div>
      </div>
      {/* why choose Fahim part */}
      <Element className="features">
        <div className="relative flex items-center p-4">
          {/* Background image */}
          {/* Card Section */}
          <div className="w-full p-3 flex flex-col items-center justify-start">
            <div className="m-10">
              <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-10 text-center">
                Why Choose Fahim?
              </h1>
            </div>
            <div className="flex flex-wrap items-center justify-center">
              {/* Card 1 */}
              <div className="text-white border bg-white rounded-lg w-full sm:w-[45%] md:w-[30%] lg:w-[20%] mx-4 p-6 h-[35vh] shadow-lg hover:scale-105 transition-all duration-300 mb-4 sm:mb-0 backdrop-blur-lg bg-opacity-20">
                <h3 className="font-bold mb-3 text-xl">
                  Personalized Course Recommendations:
                </h3>
                <ul className="list-disc ml-5">
                  <li>
                    Get tailored course suggestions based on your academic
                    history and preferences
                  </li>
                </ul>
              </div>

              {/* Card 2 */}
              <div className="text-white border bg-white rounded-lg w-full sm:w-[45%] md:w-[30%] lg:w-[20%] mx-4 p-6 h-[35vh] shadow-lg hover:scale-105 transition-all duration-300 mb-4 sm:mb-0 backdrop-blur-lg bg-opacity-20">
                <h3 className="font-bold mb-3 text-xl">
                  Professor Ratings and Reviews:
                </h3>
                <ul className="list-disc ml-5">
                  <li>
                    Choose the best professors based on peer reviews and ratings
                  </li>
                </ul>
              </div>

              {/* Card 3 */}
              <div className="text-white border bg-white rounded-lg w-full sm:w-[45%] md:w-[30%] lg:w-[20%] mx-4 p-6 h-[35vh] shadow-lg hover:scale-105 transition-all duration-300 mb-4 sm:mb-0 backdrop-blur-lg bg-opacity-20">
                <h3 className="font-bold mb-3 text-xl">Course Tracking:</h3>
                <ul className="list-disc ml-5">
                  <li className="mb-2">
                    Log and track your completed courses to stay on top of your
                    academic progress.
                  </li>
                  <li>Icon: Course Tracking Icon</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Element>

      {/* How its works section   */}
      <Element className="how-it-works">
        <div className="w-full min-h-screen flex flex-col justify-center items-center px-4 py-8">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-10 text-center">
            How Fahim Works?
          </h1>
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot className="bg-indigo-500" />
                <TimelineConnector className="bg-indigo-400" />
              </TimelineSeparator>
              <TimelineContent>
                <div className="p-4 rounded-lg backdrop-blur-lg bg-opacity-20 border shadow-md">
                  <h3 className="text-lg sm:text-xl font-semibold text-indigo-300">
                    Create Your Profile
                  </h3>
                  <ul className="mt-2 text-gray-300">
                    <li>Sign up and create your profile to get started.</li>
                  </ul>
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot className="bg-indigo-500" />
                <TimelineConnector className="bg-indigo-400" />
              </TimelineSeparator>
              <TimelineContent>
                <div className="p-4 rounded-lg backdrop-blur-lg bg-opacity-20 border shadow-md">
                  <h3 className="text-lg sm:text-xl font-semibold text-indigo-300">
                    Log Your Courses
                  </h3>
                  <ul className="mt-2 text-gray-300">
                    <li>
                      Enter the courses you have completed to personalize your
                      recommendations.
                    </li>
                  </ul>
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot className="bg-indigo-500" />
                <TimelineConnector className="bg-indigo-400" />
              </TimelineSeparator>
              <TimelineContent>
                <div className="p-4 rounded-lg backdrop-blur-lg bg-opacity-20 border shadow-md">
                  <h3 className="text-lg sm:text-xl font-semibold text-indigo-300">
                    Get Recommendations
                  </h3>
                  <ul className="mt-2 text-gray-300">
                    <li>
                      Receive tailored course suggestions and professor ratings
                      to help you plan your academic journey.
                    </li>
                  </ul>
                </div>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
          <button className="px-6 py-3 mt-8 font-semibold rounded-lg bg-[#0DFF15] text-white shadow-lg hover:bg-indigo-600 hover:text-white transition duration-300">
            <Link to="/signup" className="text-gray-900 hover:text-white">
              Join Fahim Now
            </Link>
          </button>
        </div>
      </Element>

      {/* About us section */}
      <Element className="about-us">
        <h1>About us</h1>
      </Element>
      {/* Q&A */}
      <Element className="faq">
        faq
      </Element>
    </>
  );
}

export default LandingPage;
