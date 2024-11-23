import React from "react";
import { Element } from "react-scroll";

function Features() {
  return (
    <>
      {/* Why Choose Fahim Section */}
      <Element className="features">
        <div className="relative flex items-center p-4">
          {/* Background and Content */}
          <div className="w-full p-3 flex flex-col items-center justify-start">
            <div className="m-10">
              <h1 className="text-4xl sm:text-6xl font-extrabold hover:bg-slate-900 mb-10 text-center">
                Why Choose Fahim?
              </h1>
            </div>
            <div className="flex flex-wrap items-center justify-center">
              {/* Card 1 */}
              <div className="border rounded-lg w-full min-h-fit sm:w-[45%] md:w-[30%] lg:w-[20%] mx-4 p-6 shadow-lg hover:scale-105 transition-all duration-300 mb-4 sm:mb-0">
                <h3 className="font-bold mb-3 text-xl">
                  Personalized Course Recommendations
                </h3>
                <ul className="list-disc ml-5">
                  <li>
                    Receive tailored course suggestions based on your academic
                    history and interests.
                  </li>
                </ul>
              </div>

              {/* Card 2 */}
              <div className="border rounded-lg w-full min-h-fit sm:w-[45%] md:w-[30%] lg:w-[20%] mx-4 p-6 shadow-lg hover:scale-105 transition-all duration-300 mb-4 sm:mb-0">
                <h3 className="font-bold mb-3 text-xl">
                  Professor Ratings and Reviews
                </h3>
                <ul className="list-disc ml-5">
                  <li>
                    Choose the best professors with insights from peer reviews
                    and ratings.
                  </li>
                </ul>
              </div>

              {/* Card 3 */}
              <div className="border rounded-lg w-full min-h-fit sm:w-[45%] md:w-[30%] lg:w-[20%] mx-4 p-6 shadow-lg hover:scale-105 transition-all duration-300 mb-4 sm:mb-0">
                <h3 className="font-bold mb-3 text-xl">Course Tracking</h3>
                <ul className="list-disc ml-5">
                  <li>
                    Monitor and log your completed courses to stay organized and
                    achieve your academic goals.
                  </li>
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
