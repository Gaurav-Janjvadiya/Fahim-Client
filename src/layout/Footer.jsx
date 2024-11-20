import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaDiscord,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="bg-[#2f2f2f] sm:flex-row flex-col flex fixed bottom-0 items-center justify-between p-4 w-screen">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <h1 className="text-4xl font-bold">Fahim</h1>
          <div className="bg-[#424242] sm:ml-10 sm:h-16 sm:w-[3px]"></div>
          <div className="ml-4 flex sm:items-start items-center justify-center flex-col">
            <div className="flex items-start my-2 justify-between">
              <Link to="/about" className="mr-2 text-nowrap">
                About us
              </Link>
              <Link className="mx-2 text-nowrap">Join out team</Link>
            </div>
            <div>
              <p className="text-nowrap">
                &copy; 2024 Fahim. All rights reserved.
              </p>
            </div>
          </div>
        </div>
        <div className="flex sm:items-start items-center flex-col justify-between">
          {/* Social Media Icons */}
          <div className="flex space-x-4 my-2">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <FaDiscord size={24} />
            </a>
          </div>
          <p className="text-nowrap">support : fahim.suport@gmail.com</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
