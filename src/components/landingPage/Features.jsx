import React from "react";
import { Element } from "react-scroll";

function Features() {
  return (
    <>
      {/* Why Choose Fahim Section */}
      <Element className="features">
        <div className="container mx-auto px-4 sm:px-12">
          {/* Title Section */}
          <div className="text-center mb-12">
            <h1 className="text-6xl sm:text-5xl text-start sm:text-center font-extrabold">
              Why Choose Fahim?
            </h1>
            <p className="mt-4 text-start sm:text-center">
              Explore how Fahim can help you excel in your academic journey.
            </p>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="border border-gray-200 rounded-lg  shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-[#39FF14] font-semibold text-xl mb-3">
                Personalized Course Recommendations
              </h3>
              <p className="">
                Receive tailored course suggestions based on your academic
                history and interests.
              </p>
            </div>

            {/* Card 2 */}
            <div className="border border-gray-200 rounded-lg  shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-[#39FF14] font-semibold text-xl mb-3">
                Professor Ratings and Reviews
              </h3>
              <p className="">
                Choose the best professors with insights from peer reviews and
                ratings.
              </p>
            </div>

            {/* Card 3 */}
            <div className="border border-gray-200 rounded-lg  shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-[#39FF14] font-semibold text-xl mb-3">
                Course Tracking
              </h3>
              <p className="">
                Monitor and log your completed courses to stay organized and
                achieve your academic goals.
              </p>
            </div>
          </div>
        </div>
      </Element>
    </>
  );
}

export default Features;
