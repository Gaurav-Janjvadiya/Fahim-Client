import React from "react";
import { Element } from "react-scroll";

function Features() {
  return (
    <>
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
    </>
  );
}

export default Features;
