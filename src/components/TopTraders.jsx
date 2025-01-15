import React from "react";
import TopTraderCard from "./TopTraderCard";

import Profile2 from "../images/Profile2.jpeg";
import Profile3 from "../images/Profile3.jpeg";
import Profile4 from "../images/Profile4.jpeg";

const traderAvatars = [Profile2, Profile3, Profile4];

function TopTraders({ traders }) {
  return (
    <div className="flex flex-col items-center relative z-40">
      {/* Background Title */}
      <div className="sm:block absolute text-[6rem] lg:text-[15rem] xl:text-[26.5rem] font-extrabold text-black opacity-10 z-10 top-[-2rem] md:top-[-2rem] font-inter">
        X X X
      </div>

      <div className="absolute py-4 border-black text-6xl md:text-8xl xl:text-8xl font-bold text-black opacity-10 z-10 font-inter">
        Champions
      </div>

      {/* Trader Cards */}
      <div className="flex justify-around gap-5 md:gap-8 p-5 md:p-7 lg:p-9 z-10 relative flex-wrap top-12 md:top-14 mb-6 md:mb-10">
        {traders.map((trader, index) => (
          <TopTraderCard
            key={index}
            trader={trader}
            rank={index + 1}
            AvatarImage={traderAvatars[index % traderAvatars.length]} // Fallback for avatars
          />
        ))}
      </div>
    </div>
  );
}

export default TopTraders;
