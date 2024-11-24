import React from "react";
import { Element } from "react-scroll";

function Features() {
  return (
    <>
      {/* Why Choose Fahim Section */}
      <Element className="features">
        <div className="relative flex items-center pt-2">
          {/* Background and Content */}
          <div className="w-full p-3 flex flex-col items-center justify-start">
            <div className="m-10">
              <h1 className="text-6xl font-extrabold text-[#F2F2F2] mb-4 text-center">
                Why Choose Fahim?
              </h1>
            </div>
            <div className="flex flex-wrap items-center justify-center">
              {/* Card 1 */}
              <div className="border rounded sm:h-[10rem] min-h-fit sm:w-1/4 sm:p-3 p-8 m-4">
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
              <div className="border rounded sm:h-[10rem] min-h-fit sm:w-1/4 sm:p-3 p-8 m-4">
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
              <div className="border rounded sm:h-[10rem] min-h-fit sm:w-1/4 sm:p-3 p-8 m-4">
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
