import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { MdMoreVert } from 'react-icons/md';
import { Logout } from '../components';
import { useSelector } from 'react-redux';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from '@mui/material';

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isAuth = useSelector((state) => state.auth.isAuth);

  // Links for unauthenticated users
  const unauthLinks = [
    {
      to: 'features',
      text: 'Features',
      type: ScrollLink,
    },
    {
      to: 'how-it-works',
      text: 'How it Works?',
      type: ScrollLink,
    },
    {
      to: 'about-us',
      text: 'About',
      type: ScrollLink,
    },
    {
      to: 'faq',
      text: 'Q&A',
      type: ScrollLink,
    },
  ];

  // Links for authenticated users
  const authLinks = [
    {
      to: '/home',
      text: 'Home',
      type: NavLink,
    },
    {
      to: '/courses',
      text: 'Courses',
      type: NavLink,
    },
    {
      to: '/professors',
      text: 'Professors',
      type: NavLink,
    },
    {
      to: '/settings',
      text: 'Settings',
      type: NavLink,
    },
    {
      to: '/join-us',
      text: 'Join Us',
      type: NavLink,
    },
  ];

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <header className='w-full flex justify-between items-center p-3 sm:p-5'>
      {/* Logo */}
      <div className='py-2'>
        <Link className='font-bold text-4xl' to='/'>
          Fahim
        </Link>
      </div>

      {/* Navigation Links (Visible on larger screens) */}
      <nav className='hidden sm:flex items-center justify-between md:w-[35vw]'>
        {isAuth
          ? authLinks.map((link) => (
              <NavLink to={link.to} key={link.to} className='mx-2 text-nowrap'>
                {({ isActive }) => (
                  <span
                    className={`${
                      isActive
                        ? 'font-medium rounded-xl px-3 py-2 hover:no-underline'
                        : 'font-normal hover:underline'
                    }`}
                  >
                    {link.text}
                  </span>
                )}
              </NavLink>
            ))
          : unauthLinks.map((link) => (
              <ScrollLink
                key={link.to}
                className='pointer cursor-pointer hover:underline'
                to={link.to}
                smooth={true}
                duration={500}
              >
                {link.text}
              </ScrollLink>
            ))}
      </nav>

      {/* Right-side Actions */}
      <div className='flex items-center'>
        {/* Sign-up/Logout Button */}
        {!isAuth ? (
          <Link
            to='/signup'
            className='text-[#0d0d0d] text-nowrap mx-1 bg-gray-50 px-5 py-2 rounded-2xl hover:bg-gray-100'
          >
            Sign up/in
          </Link>
        ) : (
          <Logout />
        )}

        {/* Sidebar Toggle Button for Smaller Screens */}
        <div className='sm:hidden block'>
          <IconButton onClick={toggleSidebar} aria-label='Menu'>
            <MdMoreVert size={30} color='#F1F1F1' />
          </IconButton>
        </div>
      </div>

      {/* MUI Sidebar Drawer */}
      <Drawer
        anchor='right'
        open={isSidebarOpen}
        onClose={toggleSidebar}
        PaperProps={{
          sx: { width: '75%', backgroundColor: '#1A1A1A', color: '#F1F1F1' },
        }}
      >
        <List>
          {isAuth
            ? authLinks.map((link) => (
                <ListItem
                  button
                  component={NavLink}
                  to={link.to}
                  onClick={toggleSidebar}
                  key={link.to}
                >
                  <ListItemText primary={link.text} />
                </ListItem>
              ))
            : unauthLinks.map((link) => (
                <ListItem
                  button
                  component={ScrollLink}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  onClick={toggleSidebar}
                  key={link.to}
                >
                  <ListItemText primary={link.text} />
                </ListItem>
              ))}
        </List>
      </Drawer>
    </header>
  );
}

export default Header;
