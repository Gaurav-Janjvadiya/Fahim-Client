import React from "react";
import { Element } from "react-scroll";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { Button } from "../";

function HowItWorks() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      {/* How its works section   */}
      <Element className="how-it-works">
        <div className="w-full min-h-screen flex flex-col justify-center items-center px-4 sm:px-12">
          <h1 className="text-6xl font-extrabold text-[#F1F1F1] mb-12 text-start sm:text-center">
            How Fahim Works?
          </h1>
          <Timeline position={isMobile ? "left" : "alternate"}>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot
                  style={{ backgroundColor: "#0A74DA", color: "black" }}
                  className="flex items-center justify-center w-8 h-8 font-bold"
                >
                  1
                </TimelineDot>
                <TimelineConnector className="bg-indigo-400" />
              </TimelineSeparator>
              <TimelineContent>
                <div className="p-4 w-[17rem] sm:w-auto rounded-lg backdrop-blur-lg bg-opacity-20 border shadow-md">
                  <h3 className="text-lg sm:text-xl font-semibold text-[#0A74DA]">
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
                <TimelineDot
                  style={{ backgroundColor: "#0A74DA", color: "black" }}
                  className="flex items-center justify-center w-8 h-8 font-bold"
                >
                  2
                </TimelineDot>{" "}
                <TimelineConnector className="bg-indigo-400" />
              </TimelineSeparator>
              <TimelineContent>
                <div className="p-4 w-[17rem] sm:w-auto rounded-lg backdrop-blur-lg bg-opacity-20 border shadow-md">
                  <h3 className="text-lg sm:text-xl font-semibold text-[#0A74DA]">
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
                <TimelineDot
                  style={{ backgroundColor: "#0A74DA", color: "black" }}
                  className="flex items-center justify-center w-8 h-8 font-bold"
                >
                  3
                </TimelineDot>{" "}
                <TimelineConnector className="bg-indigo-400" />
              </TimelineSeparator>
              <TimelineContent>
                <div className="p-4 w-[17rem] sm:w-auto rounded-lg backdrop-blur-lg bg-opacity-20 border shadow-md">
                  <h3 className="text-lg sm:text-xl font-semibold text-[#0A74DA]">
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
          <Button style={"mt-4"}>
            <Link to="/signup">Join Fahim Now</Link>
          </Button>
        </div>
      </Element>
    </>
  );
}

export default HowItWorks;
