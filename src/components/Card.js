import React from "react";

const Card = ({ img = false }) => {
  return (
    <div className="bg-white max-w-max md:max-w-sm drop-shadow-2xl h-max">
      <div className="flex flex-col p-5">
        {img && (
          <a href="/blog">
            <img className="w-full cursor-pointer " src="https://picsum.photos/800" alt="" />
          </a>
        )}
        <span className="text-[10px] font-normal text-gray-400 font-poppins py-3">SEPTEMBER 6, 2021 . FEATURED ARTICLE . AFFLIATE</span>
        <a href="/blog">
          <h5 className="mx-2 mb-2 text-xl font-bold tracking-tight text-black font-poppins">12 Popup Use Cases To Increase Conversions</h5>
        </a>
        <p className="mx-2 font-light text-justify cursor-pointer text-ellipsis">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque a vel sint eum sunt necessitatibus accusamus deserunt unde voluptas ad
          eius amet eos ea sit nisi ab cum, veniam odit?
        </p>
        <div className="flex mx-2 my-6 space-x-2 align-middle">
          <hr className="w-12 h-0 my-auto border-t-2 border-t-fuchsia-400" />
          <a className="text-xs font-normal tracking-wider text-fuchsia-600 font-poppins" href="/blog">
            READ MORE
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
