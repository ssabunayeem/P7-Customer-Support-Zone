import React from "react";

const States = ({ cookingTotal, readyTotal }) => {
  return (
    <div className="w-11/12 mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-5 h-[350px] mb-30">

      <div
        className="
    relative overflow-hidden rounded-2xl
    min-h-[220px]
    flex items-center justify-center
    text-white
    bg-gradient-to-r from-indigo-600  to-purple-400
  "
      >
        {/* vector background */}
        <div
          className="
      absolute inset-0
      bg-2 
      opacity-100
    "
        ></div>

        {/* content */}
        <div className="relative z-10 text-center">
          <p className="text-xl font-medium tracking-wide">In-Progress</p>
          <h2 className="text-6xl font-bold mt-3">{cookingTotal}</h2>
        </div>
      </div>


      <div
        className="
    relative overflow-hidden rounded-2xl
    min-h-[220px]
    flex items-center justify-center
    text-white
    bg-gradient-to-r from-green-400 to-teal-600
  "
      >
        <div
          className="
      absolute inset-0
      bg-2 
      opacity-100
    "
        ></div>

        <div className="relative z-10 text-center">
          <p className="text-xl font-medium tracking-wide">Resolved</p>
          <h2 className="text-6xl font-bold mt-3">{readyTotal}</h2>
        </div>
      </div>


    </div>
  );
};

export default States;
