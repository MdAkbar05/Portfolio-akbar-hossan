import React from "react";

const SkillItem = ({ src, name }) => {
  return (
    <div className="md:max-w-24 flex flex-col justify-center items-center">
      <img
        className="w-14 h-14"
        src={src}
        alt={name}
        width="100"
        height="100"
      />
      <div className="font-light md:text-lg sm:text-base">{name}</div>
    </div>
  );
};

export default SkillItem;
