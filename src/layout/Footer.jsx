import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaDiscord, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="bg-[#1A1A1A] sm:flex-row flex-col flex bottom-0 items-center justify-between p-4 w-full">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <h1 className="text-4xl font-bold">Fahim</h1>
          <div className="bg-[#424242] sm:ml-10 sm:h-16 sm:w-[3px]"></div>
          <div className="ml-4 flex sm:items-start items-center justify-center flex-col">
            <div className="flex items-start my-2 justify-between">
              <Link to={"/join-us"} className="text-nowrap hover:underline">
                Join our team
              </Link>
            </div>
            <div>
              <p className="text-nowrap">
                &copy; 2024 Fahim. All rights reserved.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center flex-col justify-between">
          {/* Social Media Icons */}
          <div className="flex space-x-4 my-2">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord size={24} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.instagram.com/fahim_officia1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={24} />
            </a>
          </div>
          <p className="text-nowrap">
            Support:
            <a href="mailto:contactfahimteam@gmail.com">
              contactfahimteam@gmail.com
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
