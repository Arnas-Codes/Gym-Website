import React from "react";
import bgDesktop from "../../assets/Backgrounds/bg.png";
import bgMobile from "../../assets/Backgrounds/bgMobile.jpg";

import playCircle from "../../assets/HomeImages/play_circle.png";

const Home = () => {
  return (
    <div
      id="home"
      style={{
        "--bg-mobile": `url(${bgMobile})`,
        "--bg-desktop": `url(${bgDesktop})`,
      }}
      className="min-h-screen  bg-black text-white px-4 md:px-8 bg-(image:--bg-mobile) md:bg-(image:--bg-desktop) bg-cover md:bg-right bg-position-[70%] w-full"
    >
      <div className="max-w-7xl mx-auto min-h-screen flex items-center justify-center md:justify-start">
        <div
          className="
            md:bg-[linear-gradient(180deg,rgba(57,57,57,0.25)_0%,rgba(57,57,57,0)_100%)]
            backdrop-blur-[2px] rounded-xl max-w-lg lg:max-w-2xl p-6 lg:p-10
            flex flex-col text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Transform Your Body
          </h2>

          <p className="mt-5 mb-8 text-base md:text-lg lg:text-xl leading-8 text-gray-200">
            We are dedicated to helping you transform your body and mind through
            the power of fitness.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start">
            <button className="bg-[linear-gradient(90deg,#F66844_0%,#FF921B_100%)] text-black px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-semibold text-base lg:text-lg hover:scale-105 transition-transform duration-300">
              <a href="#">Get Started</a>
            </button>

            <button className="flex items-center gap-3 border border-white px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-semibold text-base lg:text-lg hover:border-[#FF921B] transition-colors">
              <img src={playCircle} alt="" className="w-6 h-6 lg:w-7 lg:h-7" />
              <a href="">Watch Reviews</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
