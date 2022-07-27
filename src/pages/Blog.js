import React from "react";
import Nav from "../components/Nav2";

const Blog = () => {
  return (
    <div className="min-h-screen bg-white blog">
      <Nav />
      {/* Page Title HEading */}
      <div className="h-32 relative md:h-52 bg-gradient-to-b from-[#1F0041] to-[#0C0123]">
        <div className="absolute w-16 bg-gradient-to-b z-[0] left-12 md:left-48 from-fuchsia-600 to-[#0C0123] top-4 md:top-7 h-24 md:w-32 md:h-4/5 blur"></div>
        <div className="z-[1000] w-1/3 h-full bg-fuchsia-600 opacity-10 backdrop-blur-lg text-white text-4xl"></div>
        {/* Text */}
        
      </div>
    </div>
  );
};

export default Blog;
