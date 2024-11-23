import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { MdMoreVert } from "react-icons/md";
import { Logout } from "../components";
import { useSelector } from "react-redux";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const isAuth = useSelector((state) => state.isAuth);

  // Close the menu if a click occurs outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Links for unauthenticated users
  const unauthLinks = (
    <>
      <ScrollLink
        className="pointer cursor-pointer"
        to="features"
        smooth={true}
        duration={500}
      >
        Features
      </ScrollLink>
      <ScrollLink
        className="pointer cursor-pointer"
        to="how-it-works"
        smooth={true}
        duration={500}
      >
        How it Works?
      </ScrollLink>
      <ScrollLink
        className="pointer cursor-pointer"
        to="about-us"
        smooth={true}
        duration={500}
      >
        About
      </ScrollLink>
      <ScrollLink
        className="pointer cursor-pointer"
        to="faq"
        smooth={true}
        duration={500}
      >
        Q&A
      </ScrollLink>
    </>
  );

  // Links for authenticated users
  const authLinks = (
    <>
      <Link to="/home" className="mx-2">
        Home
      </Link>
      <Link to="/courses" className="mx-2">
        Courses
      </Link>
      <Link to="/professors" className="mx-2">
        Professors
      </Link>
      <Link to="/join-us" className="mx-2">
        Join us
      </Link>
    </>
  );

  return (
    <header className="w-full flex justify-between items-center p-5">
      {/* Logo */}
      <div className="py-2">
        <Link className="font-bold text-4xl" to="/">
          Fahim
        </Link>
      </div>

      {/* Navigation Links (Visible on larger screens) */}
      <nav className="hidden sm:flex items-center justify-between md:w-[35vw]">
        {isAuth ? authLinks : unauthLinks}
      </nav>

      {/* Right-side Actions */}
      <div className="flex items-center">
        {/* Sign-up/Logout Button */}
        {!isAuth ? (
          <Link
            to="/signup"
            className="text-[#0d0d0d] mx-1 bg-gray-50 px-5 py-2 rounded-2xl hover:bg-gray-100"
          >
            Sign up/in
          </Link>
        ) : (
          <Logout />
        )}

        {/* Kebab Menu for Smaller Screens */}
        <div
          className="sm:hidden mx-1 p-2 rounded-full cursor-pointer hover:bg-gray-700"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <MdMoreVert size={30} color="#F2F2F2" />
        </div>
      </div>

      {/* Kebab Menu Dropdown */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute right-12 top-14 flex flex-col p-3 bg-[#0DFF15] rounded-2xl text-[#F2F2F2] shadow-lg"
        >
          {isAuth ? authLinks : unauthLinks}
        </div>
      )}
    </header>
  );
}

export default Header;
