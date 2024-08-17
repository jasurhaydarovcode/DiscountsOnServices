"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { logo } from '../assets/import/images';

import { FaTelegram, IoLogoWhatsapp } from '../assets/import/react-icons';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenLang, setOpenLang] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const listLang = () => {
    setOpenLang(!isOpenLang);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    // ================ START NAVBAR =================
    <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src={logo} width={42} height={42} alt="Flowbite Logo" />
          <span className="hidden sm:block self-center sm:text-xl font-bold whitespace-nowrap">DiscountsOnServices</span>
        </Link>

        <div className="flex relative md:order-2 space-x-3 rtl:space-x-reverse">
          {/* START SOCIALS AND LOGIN BUTTON (VISIBLE ON DESKTOP) */}
          <div className='hidden md:flex items-center gap-3'>
            <a href="https://telegram.org/" target='_blank' rel="noopener noreferrer">
              <IoLogoWhatsapp className='text-[26px]' />
            </a>
            <a href="https://www.whatsapp.com/" target='_blank' rel="noopener noreferrer">
              <FaTelegram className='text-[25px]' />
            </a>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-xl text-sm px-8 py-2 text-center">
              Log in
            </button>
          </div>
          {/* END SOCIALS AND LOGIN BUTTON */}

          <button onClick={listLang} id="dropdownDefaultButton" className="font-medium text-sm px-5 text-center inline-flex items-center" type="button">EN
            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>

          {isOpenLang && (
            <div id="dropdown" className="absolute mt-10 -right-14 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
              <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton">
                <li>
                  <a href="#" className="block font-bold hover:text-blue-fa px-4 py-2">Ukraine</a>
                </li>
                <li>
                  <a href="#" className="block font-bold hover:text-blue-fa px-4 py-2">Russia</a>
                </li>
              </ul>
            </div>
          )}

          <button onClick={toggleMobileMenu} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded={isMobileMenuOpen}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>

        <div className={`items-center justify-between ${isMobileMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
          {/* START NAVIGATIONS */}
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">

            <li className="relative">
              <button id="dropdownDefaultButton" onClick={toggleDropdown} className="font-medium rounded-lg text-sm inline-flex items-center" type="button">
                Subscriptions
                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>

              {isOpen && (
                <div id="dropdown" className="absolute bg-white z-10 rounded-2xl shadow-lg w-48 mt-6">
                  <ul className="py-2 font-bold text-md text-black-200" aria-labelledby="dropdownDefaultButton">
                    <li className='text-bold'>
                      <a href="#" className="block px-4 py-2 hover:text-blue-fa">
                        Netflix
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:text-blue-fa">
                        YouTube Premium
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:text-blue-fa">
                        Spotify
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            <li>
              <Link href="/faq" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0">FAQ</Link>
            </li>
            <li>
              <Link href="/support" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0">Support</Link>
            </li>
            <li>
              <Link href="/about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0">About</Link>
            </li>

            {/* START SOCIALS AND LOGIN BUTTON (VISIBLE ONLY ON MOBILE IN THE BURGER MENU) */}
            <li className="flex flex-col md:hidden mt-4 space-y-4">
              <div className="flex justify-start items-center gap-5">
                <a href="https://telegram.org/" target='_blank' rel="noopener noreferrer">
                  <IoLogoWhatsapp className='text-[26px]' />
                </a>
                <a href="https://www.whatsapp.com/" target='_blank' rel="noopener noreferrer">
                  <FaTelegram className='text-[25px]' />
                </a>
              </div>

              <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-xl text-sm px-8 py-2 text-center">Log in</button>
              <button type="button" className="text-blue-700 bg-white border border-blue-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-xl text-sm px-8 py-2 text-center">Register</button>
            </li>
            {/* END SOCIALS AND LOGIN BUTTON */}
          </ul>
          {/* END NAVIGATIONS */}
        </div>
      </div>
    </nav>
    // ================ END NAVBAR =================
  );
}

export default Navbar;
