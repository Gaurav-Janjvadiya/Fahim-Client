import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdMoreVert } from "react-icons/md";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Function to handle clicks outside of the menu
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false); // Close the menu if the click is outside
    }
  };

  // UseEffect to add and clean up event listener for outside clicks
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="w-screen justify-between align-center flex p-5">
      <div className="py-2">
        <Link className="font-bold" to={"/"}>
          Fahim
        </Link>
      </div>

      <div className="hidden sm:flex justify-between items-center md:w-[35vw]">
        <Link className="mx-2" to={"/features"}>
          Features
        </Link>
        <Link className="mx-2 text-nowrap" to={"/how-it-works"}>
          How it Works?
        </Link>
        <Link className="mx-2" to={"/about"}>
          About
        </Link>
        <Link className="mx-2" to={"/faq"}>
          Q&A
        </Link>
      </div>

      <div className="flex items-center justify-betweeen">
        <Link className="text-[#0d0d0d] mx-1 text-nowrap bg-gray-50 px-5 py-2 hover:bg-gray-200 rounded-2xl">
          Sign up/in
        </Link>

        <div className="mx-1 py-1 cursor-pointer hover:bg-[#1b1b1b] rounded-full sm:hidden">
          <MdMoreVert onClick={toggleMenu} size={30} color="white" />
        </div>
      </div>

      {isMenuOpen && (
        <div
          ref={menuRef}
          className="kebab-menu p-2 right-12 top-12 flex flex-col rounded-3xl bg-[#0DFF15] absolute text-white"
        >
          <Link to={"/features"}>Features</Link>
          <Link className="text-nowrap" to={"/how-it-works"}>
            How it Works?
          </Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/faq"}>Q&A</Link>
        </div>
      )}
    </div>
  );
}

export default Header;
