import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../Images/logo.png'

const Header = () => {
  const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img className='h-16' src={logo} alt='logo'/>
            <span className="ml-3 text-xl">Lawyer Mark</span>
          </Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link to='/' className="mr-5 hover:text-gray-900 cursor-pointer">Home</Link>
            <Link to='/services' className="mr-5 hover:text-gray-900 cursor-pointer">Service</Link>
            <Link to='/blog' className="mr-5 hover:text-gray-900 cursor-pointer">Blog</Link>
            <Link to='/about' className="mr-5 hover:text-gray-900 cursor-pointer">About Me</Link>
          </nav>
        {
          user ? 
          <button onClick={handleSignOut} className="md:ml-4 inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Sign Out
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          :
          <><Link to='/registration'>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Sign Up
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          </Link>
          <Link to='/login'>
          <button className="md:ml-4 inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Sign In
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          </Link></>

        }
          
          
        </div>
      </header>
    );
};

export default Header;