import React from "react";
import Card from "../components/Card";
import Nav from "../components/Nav2";
import { ReactComponent as Facebook } from "../images/facebook2.svg";
import { ReactComponent as Instagram } from "../images/instagram2.svg";
import { ReactComponent as Linkedin } from "../images/linkedin2.svg";
import { ReactComponent as NextIcon } from "../images/right-arrow2.svg";
import { ReactComponent as Search } from "../images/search.svg";
import { ReactComponent as Twitter } from "../images/twitter2.svg";
import { ReactComponent as YouTube } from "../images/youtube2.svg";

const Blog = () => {
  return (
    <div className="min-h-screen bg-white blog">
      <Nav />
      {/* Page Title HEading */}
      <div className="h-32 relative md:h-64 bg-gradient-to-b flex from-[#1F0041] to-[#0C0123]">
        <div className="absolute w-16 bg-gradient-to-b left-12 md:left-48 from-fuchsia-600 to-[#0C0123] top-4 md:top-7 h-24 md:w-32 md:h-4/5 blur"></div>
        <div className="w-1/3 h-full text-4xl text-white bg-fuchsia-600 opacity-10 backdrop-blur-lg"></div>
        {/* Text */}
        <div className="absolute z-10 flex flex-col text-white top-6 left-[12.5%] md:w-1/2 md:top-1/4 md:left-[20%] h-1/2">
          <div className="flex my-4 space-x-2 align-middle">
            <hr className="h-1 my-auto w-9" />
            <h1 className="text-xs font-medium tracking-wider font-poppins">BLOG</h1>
          </div>
          <h2 className="text-2xl md:text-4xl mx-9 font-poppins">Articles and News</h2>
        </div>
      </div>

      {/* Latest from blog */}
      <div className="flex flex-col justify-between w-full px-3 py-8 text-black h-max md:h-48 md:flex-row md:px-16">
        <div className="flex flex-col w-full space-y-6 text-center md:text-left md:w-3/6">
          <h3 className="text-2xl md:text-4xl font-poppins">Latest From The Blog</h3>
          <p className="capitalize font-poppins">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <br /> nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          </p>
        </div>
        <div className="flex w-full mt-6 md:mt-0 md:w-2/6">
          <div className="relative w-full mt-auto mb-3">
            <input
              type="search"
              name="email"
              id="email"
              placeholder="Search here"
              className="w-full text-gray-700 bg-white border rounded-full md:x-6 border-b-gray-400 placeholder:text-gray-400"
            />
            <button
              className="absolute right-0 h-full px-2 text-xs text-black transition-all bg-transparent rounded-full md:text-sm"
              type="button"
              onClick={(e) => e.preventDefault()}
            >
              <Search className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>

      {/* Cards Articles */}
      <div className="grid w-full gap-4 px-3 md:px-16 md:grid-cols-3">
        <Card img />
        <Card img />
        <Card img />
        <Card img />
        <Card img />
        <Card img />
      </div>

      {/* Recent Articles */}
      <div className="flex flex-col justify-between w-full px-3 mt-16 text-black h-max md:h-48 md:flex-row md:px-20">
        <div className="flex flex-col w-full space-y-6 text-center md:text-left md:w-3/6">
          <h3 className="text-2xl font-bold md:text-4xl font-poppins">Recent Articles</h3>
          <p className="pb-4 capitalize font-poppins">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <br /> nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          </p>
        </div>
      </div>
      {/* Recent Article cards */}
      <div className="grid w-full gap-4 px-3 md:px-20 md:grid-cols-3">
        <Card />
        <Card />
        <Card />
      </div>

      {/* Load More button */}
      <div className="flex justify-center w-full bg-transparent my-14">
        <button className="p-3 px-9 text-white rounded-full drop-shadow-lg md:block bg-[#7C0FD5] baseline hover:bg-[#7C0Fff]">LOAD MORE</button>
      </div>

      {/* Know more about metricks */}
      <div className="h-32 relative md:h-64 bg-gradient-to-b p-5 md:p-10 flex from-[#213E71] to-[#0C0123]">
        <div className="flex flex-col w-2/3 text-white bg-transparent md:px-8 md:py-8 md:space-y-3">
          <h3 className="text-xl capitalize md:text-3xl">Want to know more about metrics ?</h3>
          <span className="font-thin">Learn who we are and what drives us.</span>
          <div className="flex space-x-2 align-middle md:my-6">
            <a className="text-xs font-normal tracking-wider text-fuchsia-600 font-poppins" href="/contactus">
              Contact Us
            </a>
            <NextIcon className="w-4 text-fuchsia-600" />
          </div>
        </div>
        <div className="absolute h-16 bg-gradient-to-b right-12 md:right-24 from-[#71413B] to-[#0C0123] top-1/4 w-24 md:h-32 md:w-60 blur"></div>
        <div className="w-1/3 h-full ml-auto text-4xl text-white bg-white opacity-10 backdrop-blur-lg"></div>
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
            <div className="flex justify-between text-black">
              <a href="/">Terms of service</a>
              <a href="/">Privacy Policy</a>
            </div>
          </div>
          {/* Copyright */}
          <p className="mt-2 text-center text-black">Copyright 2021 @ Peddle Technologies. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
