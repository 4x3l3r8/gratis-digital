import React from "react";

const Counter = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-1 gap-2 md:mx-32">
      <div className="flex flex-col justify-center py-3 bg-white rounded-md">
        <h4 className="mx-auto text-2xl font-medium text-center text-black uppercase md:text-4xl md:font-bold">7</h4>
        <p className="mx-auto">Days</p>
      </div>
      <div className="flex flex-col justify-center py-3 bg-white rounded-md">
        <h4 className="mx-auto text-2xl font-medium text-center text-black uppercase md:text-4xl md:font-bold">22</h4>
        <p className="mx-auto">Hours</p>
      </div>
      <div className="flex flex-col justify-center py-3 bg-white rounded-md">
        <h4 className="mx-auto text-2xl font-medium text-center text-black uppercase md:text-4xl md:font-bold">13</h4>
        <p className="mx-auto">Minutes</p>
      </div>
      <div className="flex flex-col justify-center py-3 bg-white rounded-md">
        <h4 className="mx-auto text-2xl font-medium text-center text-black uppercase md:text-4xl md:font-bold">42</h4>
        <p className="mx-auto">Seconds</p>
      </div>
    </div>
  );
};

export default Counter;
