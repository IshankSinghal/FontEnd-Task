import React from "react";

const Avatar = ({ src, alt }) => {
  return (
    <div className="w-24 h-24 border-hexagon overflow-hidden flex items-center justify-center">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
};

export default Avatar;
