import React, { useState } from "react";
import logo from "../images/logo-colored.png";
import { ReactComponent as NextIcon } from "../images/right-arrow.svg";
import ContactUs from "../pages/Contact-us";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom"

/**
 * Navbar component
 * @returns jsx element(Navbar)
 */
const Nav = () => {
    const [showModal, setShowModal] = useState(false);
    const [mobileMenuToggle, setMobileMenuToggle] = useState(false);
    let navigate = useNavigate();


    return (
        <React.Fragment>
            <nav className="relative p-6 mx-auto bg-transparent">
                {/* Flex container */}
                <div className="flex items-center justify-between md:mx-16">
                    {/* Logo */}
                    <div>
                        <img src={logo} onClick={() => navigate("/")} className="cursor-pointer h-11" alt="" />
                    </div>

                    {/* Menu Items */}
                    <div className="items-center hidden space-x-12 text-sm font-bold text-black font-poppins md:flex">
                        <a href="/aboutus" className="hover:text-darkGrayishBlue">
                            ABOUT US
                        </a>
                        <a href="/blog" className="hover:text-darkGrayishBlue">
                            BLOG
                        </a>

                        {/*  Button  */}
                        <button
                            className="hidden p-3 px-6 text-black transition bg-white rounded-full shadow-lg md:block baseline hover:bg-mainBlueLight hover:text-white"
                            onClick={() => setShowModal(true)}
                        >
                            CONTACT US
                        </button>
                    </div>

                    {/* Hamburger Icon */}
                    <button id="menu-btn" className={`block hamburger md:hidden ${mobileMenuToggle ? 'open' : ''} focus:outline-none`} onClick={(e) => setMobileMenuToggle(!mobileMenuToggle)}>
                        <span className="hamburger-top n2"></span>
                        <span className="hamburger-middle n2"></span>
                        <span className="hamburger-bottom n2"></span>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className="block md:hidden">
                    <div
                        id="menu"
                        className={`absolute z-50 flex-col flex items-center self-end py-8 ${mobileMenuToggle ? '' : 'hidden'} mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}
                    >
                        <a href="/aboutus" className="hover:text-darkGrayishBlue">
                            ABOUT US
                        </a>
                        <a href="/blog" className="hover:text-darkGrayishBlue">
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
                <div id="backdrop" className="flex w-screen h-screen overflow-y-auto">
                    {/* left side(blur) */}
                    <div id="backdrop" className="hidden w-full h-full bg-white opacity-20 md:block"></div>

                    {/* Right side (Contact form) */}
                    <div className="relative w-full h-full bg-[#210045]">
                        <button className="absolute flex bg-white rounded-full h-14 w-14 -left-7 top-5" onClick={() => setShowModal(false)}>
                            <NextIcon className="inline w-1/2 m-auto h-1/2" />
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
