import { useState, useRef, useEffect } from "react"; // Import useState hook from React
import { Link } from "react-router-dom"; // Import Link component for navigation
import { MdMoreVert } from "react-icons/md"; // Import the "more options" icon from react-icons

function Header() {
  // useState to toggle the menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Reference to the menu for detecting clicks outside

  // Function to handle clicks outside of the menu
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false); // Close the menu if the click is outside
    }
  };

  // UseEffect to add and clean up event listener for outside clicks
  useEffect(() => {
    // Add event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Toggle the state of isMenuOpen
  };

  return (
    <div className="w-screen justify-between align-center flex p-5">
      {/* Logo and home link */}
      <div>
        <Link className="font-bold" to={"/"}>
          Fahim
        </Link>
      </div>

      {/* Navigation links visible on larger screens */}
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

      {/* Sign up/in button and hamburger icon for smaller screens */}
      <div className="flex items-center justify-betweeen">
        <Link className="text-[#0d0d0d] mx-1 text-nowrap bg-gray-50 px-5 py-2 hover:bg-gray-200 rounded-2xl">
          Sign up/in
        </Link>

        {/* Kebab icon for mobile view */}
        <MdMoreVert
          onClick={toggleMenu} // Toggle the menu visibility when clicked
          size={30}
          color="white"
          className="mx-1 cursor-pointer sm:hidden" // Hide icon on larger screens
        />
      </div>

      {/* Conditional rendering of the menu when isMenuOpen is true */}
      {isMenuOpen && (
        <div ref={menuRef} className="kebab-menu p-2 right-12 top-12 flex flex-col rounded-3xl bg-[#0DFF15] absolute text-white">
          <Link className="" to={"/features"}>
            Features
          </Link>
          <Link className="text-nowrap" to={"/how-it-works"}>
            How it Works?
          </Link>
          <Link className="" to={"/about"}>
            About
          </Link>
          <Link className="" to={"/faq"}>
            Q&A
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
