import React from "react";
import Nav from "../components/Nav";
import { ReactComponent as YouTube } from "../images/youtube.svg";
import { ReactComponent as Facebook } from "../images/facebook.svg";
import { ReactComponent as Linkedin } from "../images/linkedin.svg";
import { ReactComponent as Instagram } from "../images/instagram.svg";
import { ReactComponent as Twitter } from "../images/twitter.svg";
import { ReactComponent as NextIcon } from "../images/right-arrow2.svg";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1F0041] to-[#0C0123]">
      {/* Nav Bar */}
      <Nav />

      {/* Got A Question */}
      <div className="relative z-0 flex h-48 opacity-10 md:h-64 backdrop-blur-lg ">
        <div className="static flex flex-col w-full h-full md:px-8 md:py-8 md:space-y-3 ">
          <h3 className="text-xl text-white capitalize md:text-3xl">Want to know more about metrics ?</h3>
          <span className="font-thin text-white">Learn who we are and what drives us.</span>
          <div className="flex space-x-2 align-middle md:my-6">
            <a className="text-xs font-normal tracking-wider text-fuchsia-600 font-poppins" href="/contactus">
              Contact Us
            </a>
            <NextIcon className="w-4 text-fuchsia-600" />
          </div>
        </div>
        <div className="absolute h-16 bg-gradient-to-b right-12 md:right-24 from-[#71413B] to-[#0C0123] top-1/4 w-24 md:h-32 md:w-60 blur"></div>
      </div>

      {/* Footer */}
      <footer>
        <div className="relative w-full mb-16 font-poppins">
          <div className="flex flex-col w-1/2 mx-auto mt-12 space-y-3 md:w-1/4">
            {/* Social Icons */}
            <div className="flex justify-between mx-3">
              <a href="/">
                <YouTube className="w-8 h-8" />
              </a>
              {/* <!-- Link 2 --> */}
              <a href="/">
                <Facebook className="h-8" />
              </a>
              {/* <!-- Link 3 --> */}
              <a href="/">
                <Linkedin className="h-8" />
              </a>
              {/* <!-- Link 4 --> */}
              <a href="/">
                <Instagram className="w-8 h-8" />
              </a>
              {/* <!-- Link 5 --> */}
              <a href="/">
                <Twitter className="w-8 h-8" />
              </a>
            </div>

            {/* footer links */}
            <div className="flex justify-between text-white">
              <a href="/">Terms of service</a>
              <a href="/">Privacy Policy</a>
            </div>
          </div>
          {/* Copyright */}
          <p className="mt-2 text-center text-white">Copyright 2021 @ Peddle Technologies. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
