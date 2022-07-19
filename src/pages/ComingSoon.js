import React from 'react';
import Nav from '../components/Nav';

const ComingSoon = () =>{
  return (
    <div className="coming-soon items-center h-full bg-[#ef34ab]">
      <Nav/>
      <div className="flex items-center w-full">
      <h1 className="text-2xl md:text-4xl font-medium md:font-bold text-center">Something awesome is coming soon</h1>
      </div>
    </div>
    )
}

export default ComingSoon;