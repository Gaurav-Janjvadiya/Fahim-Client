import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { MdMoreVert } from "react-icons/md";
import { Logout } from "../components";
import { useSelector } from "react-redux";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isAuth = useSelector((state) => state.isAuth);

  // Links for unauthenticated users
  const unauthLinks = (
    <>
      <ScrollLink
        className="pointer cursor-pointer hover:underline"
        to="features"
        smooth={true}
        duration={500}
      >
        Features
      </ScrollLink>
      <ScrollLink
        className="pointer cursor-pointer hover:underline"
        to="how-it-works"
        smooth={true}
        duration={500}
      >
        How it Works?
      </ScrollLink>
      <ScrollLink
        className="pointer cursor-pointer hover:underline"
        to="about-us"
        smooth={true}
        duration={500}
      >
        About
      </ScrollLink>
      <ScrollLink
        className="pointer cursor-pointer hover:underline"
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
      <NavLink to="/home" className="mx-2 hover:underline">
        {({ isActive }) => (
          <span className={isActive ? "font-bold" : "font-normal"}>Home</span>
        )}
      </NavLink>
      <NavLink to="/courses" className="mx-2 hover:underline">
        {({ isActive }) => (
          <span className={isActive ? "font-bold" : "font-normal"}>
            Courses
          </span>
        )}
      </NavLink>
      <NavLink to="/professors" className="mx-2 hover:underline">
        {({ isActive }) => (
          <span className={isActive ? "font-bold" : "font-normal"}>
            Professors
          </span>
        )}
      </NavLink>
      <NavLink to="/join-us" className="mx-2 hover:underline">
        {({ isActive }) => (
          <span className={isActive ? "font-bold" : "font-normal"}>
            Join us
          </span>
        )}
      </NavLink>
    </>
  );

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <header className="w-full flex justify-between items-center p-3 sm:p-5">
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

        {/* Sidebar Toggle Button for Smaller Screens */}
        <div className="sm:hidden block">
          <IconButton onClick={toggleSidebar} aria-label="Menu">
            <MdMoreVert size={30} color="#F2F2F2" />
          </IconButton>
        </div>
      </div>

      {/* MUI Sidebar Drawer */}
      <Drawer
        anchor="right"
        open={isSidebarOpen}
        onClose={toggleSidebar}
        PaperProps={{
          sx: { width: "75%", backgroundColor: "#1A1A1A", color: "#F2F2F2" },
        }}
      >
        <List>
          {isAuth
            ? authLinks.props.children.map((link) => (
                <ListItem
                  button
                  component={NavLink}
                  to={link.props.to}
                  onClick={toggleSidebar}
                  key={link.props.to}
                >
                  <ListItemText primary={link.props.children.props.children} />
                </ListItem>
              ))
            : unauthLinks.props.children.map((link) => (
                <ListItem
                  button
                  component={ScrollLink}
                  to={link.props.to}
                  smooth={true}
                  duration={500}
                  onClick={toggleSidebar}
                  key={link.props.to}
                >
                  <ListItemText primary={link.props.children} />
                </ListItem>
              ))}
        </List>
      </Drawer>
    </header>
  );
}

export default Header;
