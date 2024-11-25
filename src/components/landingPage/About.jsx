import React from "react";
import { Element } from "react-scroll";

function About() {
  return (
    <>
      {/* About us section */}
      <Element className="about-us">
        <div className="p-4 flex justify-center items-center flex-col px-4 sm:px-12">
          <h1 className="text-6xl font-extrabold text-[#F2F2F2] mb-12 text-start sm:text-center">
            About Us
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl text-start sm:text-center leading-relaxed">
            Fahim was founded with the goal of empowering students to make
            informed decisions about their education. Frustrated by the
            challenges of course selection and academic planning, we set out to
            build a tool that could simplify these processes and provide
            meaningful guidance.
          </p>
        </div>
      </Element>
    </>
  );
}

export default About;
