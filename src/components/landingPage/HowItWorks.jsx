import React from "react";
import { Element } from "react-scroll";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Link } from "react-router-dom";
import {Button} from "../"

function HowItWorks() {
  return (
    <>
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
          <Button>
            <Link to="/signup">Join Fahim Now</Link>
          </Button>
        </div>
      </Element>
    </>
  );
}

export default HowItWorks;
