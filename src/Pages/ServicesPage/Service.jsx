import React from "react";
import { Services } from "./ServiceData";

const Service = () => {
  return (
    <section
      id="services"
      className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-10 md:pt-25"
    >
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-30">
        Subscribe To <span className="text-[#FF921B]">Plans</span>
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-3 justify-items-center">
        {Services.map((service, i) => (
          <div
            key={service.id}
            className={`
              w-full
              max-w-md
              md:max-w-85
              min-h-85
              md:min-h-85
              rounded-lg
              bg-[linear-gradient(180deg,rgba(57,57,57,0.25)_0%,rgba(57,57,57,0)_100%)]
              backdrop-blur-[2px]
              p-6
              md:p-8
              flex
              flex-col
              items-center
              text-center
              transition-all
              duration-300
              hover:border-[#FF921B]
              ${i === 1 ? "md:-mt-10 md:mb-10" : ""}
            `}
          >
            <h3 className="text-4xl md:text-3xl font-bold mb-2">
              {service.name}
            </h3>

            <p className="text-gray-400 text-md md:text-base mb-6">
              Plan Exp. {service.ExpDate}
            </p>

            <p className="text-3xl font-bold text-[#FF921B] mb-6">
              ${service.cost} /month
            </p>

            <p className="text-gray-300 text-xl md:text-base leading-7 flex-1">
              {service.text}
            </p>

            <button
              className="
                mt-8
                w-full
                py-3
                rounded-lg
                font-semibold
                text-black
                bg-[linear-gradient(90deg,#F66844_0%,#FF921B_100%)]
                hover:scale-105
                transition-transform
                duration-300
              "
            >
              {service.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
