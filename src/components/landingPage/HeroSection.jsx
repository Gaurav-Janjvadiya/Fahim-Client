import robotGif from '../../assets/gifs/landingPageRobot.gif';
import { Link } from 'react-router-dom';
import { Button } from '../';

function HeroSection() {
  return (
    <>
      {/* Hero Section */}
      <div className='flex w-full px-4 sm:px-12 sm:flex-row flex-col-reverse'>
        <div className='sm:w-1/2 w-full flex flex-col items-start justify-center space-y-10 sm:space-y-18'>
          <h1 className='font-pixelify font-light text-3xl sm:text-4xl'>
            Fahim: Your Smart Academic Companion
          </h1>
          <div className='space-y-1'>
            <p className='text-lg sm:text-xl max-w-3xl text-wrap'>
              Unlock your academic potential with personalized course
              recommendations and more.
            </p>
          </div>
          <Button>
            <Link to='/signup'>Get Started</Link>
          </Button>
        </div>
        <div className='sm:w-1/2 w-full flex items-center justify-center'>
          <img
            className='w-full sm:w-auto'
            src={robotGif}
            alt='Landing Page Robot'
          />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
