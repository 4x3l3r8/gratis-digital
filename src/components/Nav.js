import React, { useState, useEffect } from "react";
import logo from "../images/logo-white.png";
import Modal from "./Modal";
import { ReactComponent as NextIcon } from "../images/right-arrow.svg";
import ContactUs from "../pages/Contact-us";

/**
 * Navbar component
 * @returns jsx element(Navbar)
 */
const Nav = () => {
  const [showModal, setShowModal] = useState(false);

  // Attach nav menu mobile button listener on load of page
  useEffect(() => {
    const btn = document.getElementById("menu-btn");
    const nav = document.getElementById("menu");

    btn.addEventListener("click", () => {
      btn.classList.toggle("open");
      nav.classList.toggle("hidden");
    });
  });

  return (
    <React.Fragment>
      <nav className="bg-pink-400 relative p-6 mx-auto">
        {/* Flex container */}
        <div className="flex items-center justify-between md:mx-16">
          {/* Logo */}
          <div>
            <img src={logo} className="h-11" alt="" />
          </div>

          {/* Menu Items */}
          <div className="hidden items-center space-x-12 font-poppins text-sm text-white md:flex">
            <a href="/" className="hover:text-darkGrayishBlue">
              ABOUT US
            </a>
            <a href="/" className="hover:text-darkGrayishBlue">
              BLOG
            </a>

            {/*  Button  */}
            <button
              className="hidden p-3 px-6 text-white rounded-full drop-shadow-lg md:block bg-mainBlue baseline hover:bg-mainBlueLight"
              onClick={() => setShowModal(true)}
            >
              CONTACT US
            </button>
          </div>

          {/* Hamburger Icon */}
          <button id="menu-btn" className="block hamburger md:hidden focus:outline-none">
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="block md:hidden">
          <div
            id="menu"
            className="absolute flex-col flex items-center self-end py-8 hidden mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
          >
            <a href="/" className="hover:text-darkGrayishBlue">
              ABOUT US
            </a>
            <a href="/" className="hover:text-darkGrayishBlue">
              BLOG
            </a>
            {/*  Button  */}
            <button
              className="p-3 px-6 text-white rounded-full drop-shadow-lg md:block bg-mainBlue baseline hover:bg-mainBlueLight"
              onClick={() => setShowModal(true)}
            >
              CONTACT US
            </button>
          </div>
        </div>
      </nav>

      {/* Contact Us Modal */}
      <Modal visible={showModal} onClose={() => setShowModal(false)}>
        <div id="backdrop" className="flex w-screen h-screen">
          {/* left side(blur) */}
          <div id="backdrop" className="hidden w-full h-full bg-white opacity-20 md:block"></div>

          {/* Right side (Contact form) */}
          <div className="relative w-full h-full bg-[#210045]">
            <button className="absolute flex rounded-full h-14 w-14 bg-white -left-7 top-5" onClick={() => setShowModal(false)}>
              <NextIcon className="w-1/2 h-1/2 inline m-auto" />
            </button>

            {/* Form component */}
            <ContactUs />
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default Nav;
