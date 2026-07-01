import React from "react";

import Trainer1 from "../../assets/ServicesImages/Trainer1.png";
import Trainer2 from "../../assets/ServicesImages/Trainer2.png";
import Trainer3 from "../../assets/ServicesImages/Trainer3.png";

const images = [Trainer1, Trainer2, Trainer3];

const Trainer = () => {
  return (
    <div className=" px-4 md:px-8 max-w-7xl justify-center mx-auto items-center py-16">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-15">
        Join Out <span className="text-[#FF921B]">Trainer</span>
      </h2>
      <div className="flex gap-3 justify-around">
        {images.map((images, i) => (
          <div key={i}>
            <img src={images} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trainer;
