import React from "react";
import plan from "../../assets/plan.svg";

export const FlightIllustration: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[400px] lg:min-h-0 bg-[#F1F3F5] rounded-[2.5rem] flex items-center justify-center overflow-hidden">
      <img
        src={plan}
        alt="Airplane Illustration"
        className="w-full h-full object-cover mix-blend-multiply opacity-80"
      />
      {/* Visual Overlay to mimic the stylized 3D look from original UI */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-purple-100/30"></div> */}

      {/* Abstract Airplane Overlay (Using a high quality placeholder representing the vibe) */}
      {/* <div className="absolute inset-0 flex items-center justify-center p-12"> 
       <img
        src={plan}
          alt="Stylized Plane"
          className="w-full max-w-[400px] object-contain drop-shadow-2xl rounded-3xl"
        /> 
       </div> */}
    </div>
  );
};
