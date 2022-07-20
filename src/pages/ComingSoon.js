import React from "react";
import Nav from "../components/Nav";
import Counter from "../components/Counter";

const ComingSoon = () => {
  return (
    <div className="coming-soon items-center h-full bg-[#ef34ab]">
      <Nav />
      <div className="flex flex-col items-center w-full my-14">
        <div className="flex flex-col w-4/5 space-y-6 md:w-2/4">
          <h1 className="text-2xl font-medium text-center text-white uppercase mx-14 md:text-4xl md:font-bold">Something awesome is coming soon</h1>
          <span className="text-center text-white md:mx-14">
            Your all-in-one affiliate marketing tracking software track, automate and optimize your campaigns.
          </span>
          <Counter />
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
