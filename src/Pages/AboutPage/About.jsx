import React from "react";

import image1 from "../../assets/AboutImages/image1.png";
import image2 from "../../assets/AboutImages/image2.png";

const About = () => {
  const benefits = [
    "Best Gym",
    "Experts Coach",
    "Good Workout Facilities",
    "Consultation With Experts",
  ];

  return (
    <div
      id="about"
      className="max-w-5xl mx-auto min-h-screen px-4 md:px-8 flex flex-col justify-center pt-25"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-25 text-white">
        Why Join With <span className="text-[#FF921B]">Us?</span>
      </h2>

      {/* Main Layout Container */}
      <div className="w-full flex flex-col md:flex-row gap-12 lg:gap-24 items-center justify-between ">
        {/* Left Side: Benefits Card */}
        <div className="w-2/3 max-w-xl min-h-60 rounded-lg bg-linear-to-b from-neutral-800/25 to-transparent backdrop-blur-[2px] p-8 border border-stone-700 hover:border-[#FF921B] transition-colors duration-300">
          <ul className="list-disc list-inside flex flex-col gap-4 text-xl md:text-2xl marker:text-[#FF921B]">
            {benefits.map((data, i) => (
              <li key={i} className="text-white">
                {data}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Image Group */}
        <div className="flex flex-col gap-8 md:w-auto items-center md:items-start w-2/3">
          <div className="mr-16">
            <img
              className="shrink-0 rounded-lg object-cover "
              src={image1}
              alt="Gym Facility 1"
            />
          </div>
          <div className="ml-16">
            <img
              className="shrink-0 rounded-lg object-cover"
              src={image2}
              alt="Gym Facility 2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
