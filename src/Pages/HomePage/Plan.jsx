import React from "react";
import bgDesktop from "../../assets/Backgrounds/bg.png";
import bgMobile from "../../assets/Backgrounds/bgMobile.jpg";

import { plans } from "./PlanData";

const Plan = () => {
  return (
    <section
      id="plan"
      className="relative min-h-screen overflow-hidden text-white"
    >
      {/* Background */}
      <div
        style={{
          "--bg-mobile": `url(${bgMobile})`,
          "--bg-desktop": `url(${bgDesktop})`,
        }}
        className="absolute inset-0 -scale-y-100 bg-black bg-(image:--bg-mobile)
        md:bg-(image:--bg-desktop) bg-cover md:bg-right bg-position-[70%]"
      />
      <div className="absolute inset-0 bg-black/75" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto md:px-8 min-h-screen flex justify-center pt-10 md:pt-5 mt-10 md:mt-20">
        <div className="px-4 flex flex-col gap-10 md:gap-20 text-center w-full">
          <h2 className="text-4xl md:text-5xl font-bold">
            Fitness Plans & <span className="text-[#FF921B]">Nutrition</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {plans.map((plan, index) => (
              <div
                key={plan.id}
                className={`
                  flex flex-col items-center justify-center
                  text-center
                  w-full
                  min-h-70
                  md:h-100
                  px-6 py-10

                  border-b border-[#FF921B]
                  last:border-b-0

                  md:border-0
                  ${index % 3 !== 2 ? "md:border-r md:border-[#FF921B]" : ""}
                  ${index < 3 ? "md:border-b md:border-[#FF921B]" : ""}
                `}
              >
                <img
                  src={plan.image}
                  alt={plan.name}
                  className="w-14 h-14 md:w-20 md:h-20 object-contain mb-4 md:mb-5"
                />

                <h3 className="text-2xl md:text-2xl font-semibold mb-4 md:mb-10">
                  {plan.name}
                </h3>

                <p className="text-sm md:text-xl text-gray-400 font-semibold leading-6 max-w-sm">
                  {plan.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plan;
