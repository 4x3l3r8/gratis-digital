import React from "react";
import Counter from "../components/Counter";
import Nav from "../components/Nav";
import { ReactComponent as YouTube } from "../images/youtube.svg";
import { ReactComponent as Facebook } from "../images/facebook.svg";
import { ReactComponent as Linkedin } from "../images/linkedin.svg";
import { ReactComponent as Instagram } from "../images/instagram.svg";
import { ReactComponent as Twitter } from "../images/twitter.svg";

const ComingSoon = () => {
  return (
    <div className="items-center min-h-screen bg-gradient-to-b from-[#1F0041] to-[#0C0123] coming-soon">
      {/* Nav Bar */}
      <Nav />
      {/* Main Page Content Start */}
      <div className="relative flex flex-col items-center w-full h-full my-14">
        <div className="absolute left-60 top-0 w-20 h-20 rounded-full bg-gradient-to-b from-[#7F1E7B] to-[#1F0041]"></div>
        <div className="absolute top-[15rem] right-48 w-16 h-16 rounded-full bg-gradient-to-b from-[#213F72] to-[#19073B]"></div>
        <div className="flex flex-col w-4/5 space-y-6 md:w-2/4">
          <h1 className="text-4xl font-bold text-center text-white uppercase md:mx-14 md:text-4xl z-[5]">Something awesome is coming soon</h1>
          <span className="text-center text-white md:mx-14">
            Your all-in-one affiliate marketing tracking software track, automate and optimize your campaigns.
          </span>
          <Counter />
          <form autoComplete="off" className="md:my-10">
            <div className="flex flex-row justify-between md:my-10 md:mx-28">
              <input
                type="text"
                autoComplete="off"
                name="firstName"
                id="firstname"
                placeholder="First Name"
                className="w-2/5 py-0 text-white bg-transparent border-t-0 form-input border-b-gray-100 border-x-0 focus:outline-none placeholder:text-gray-100"
              />
              <input
                type="text"
                name="lastName"
                autoComplete="off"
                id="lastname"
                placeholder="Last Name"
                className="z-10 w-2/5 text-white bg-transparent border-t-0 form-input border-b-gray-100 border-x-0 placeholder:text-gray-100 focus:outline-none focus:border-x-0"
              />
            </div>
            <div className="relative flex justify-between my-5 md:my-10 md:mx-16">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                className="w-full text-gray-700 bg-white border-t-0 rounded-full md:p-3 form-input border-b-gray-400 border-x-0 placeholder:text-gray-400"
              />

              <button
                className="absolute py-1 right-0 text-xs md:text-sm md:py-3 px-3 text-white bg-[#271AC1] transition-all hover:bg-[#271Aff] h-full rounded-full md:px-7"
                type="button"
                onClick={(e) => e.preventDefault()}
              >
                JOIN OUR WAITING LIST
              </button>
              {/* <input
              type="text"
              name="Last Name"
              id="lastname"
              placeholder="Last Name"
              className="text-white bg-transparent border-t-0 form-input border-b-gray-400 border-x-0 placeholder:text-gray-400 focus:border-t-0 focus:border-x-0"
            /> */}
            </div>
          </form>
        </div>
      </div>
      {/* Main Page Content ends */}

      {/* Footer Starts */}
      <footer className="bottom-0 w-full h-48 overflow-hidden mh-fixed">
        <div className="">
          <div className="absolute overflow-hidden top-0 z-[15] mx-auto bg-white border border-white rounded-tl-full rounded-tr-full bg-opacity-10 backdrop-blur-md h-h-screen w-h-screen h-96">
            <div className="relative w-full">
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
          </div>
        </div>
        <div className="sticky z-[10] bottom-32 left-80 w-32 h-32 rounded-full bg-gradient-to-b from-[#7F4129] to-[#0C0123] overflow-auto"></div>
      </footer>
    </div>
  );
};

export default ComingSoon;
