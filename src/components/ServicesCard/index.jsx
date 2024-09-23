import React from "react";

const ServiceCard = ({ name, img }) => {
  return (
    <div className="relative md:w-64 md:h-56 sm:w-32 sm:h-28 rounded-lg overflow-hidden shadow-sm shadow-green-500 hover:shadow-white transition-all duration-500 hover:scale-105 cursor-pointer">
      {/* Background image */}
      <img
        src={img}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="text-center absolute inset-0 flexCenter font-medium sm:text-lg md:text-2xl">
        {name}
      </div>
    </div>
  );
};

export default ServiceCard;
