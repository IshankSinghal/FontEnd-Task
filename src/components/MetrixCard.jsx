import React from "react";
import { IoChatbubble } from "react-icons/io5";
import { VscTriangleUp } from "react-icons/vsc";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import BoltIcon from "@mui/icons-material/Bolt";

const ProfileMetricsCard = ({ title, name, count, AvatarImage, type }) => {
  // Map types to icons for cleaner rendering
  const iconMap = {
    mostTipsGiven: <BoltIcon className="w-5 h-5 text-white" />,
    mostActive: <IoChatbubble className="w-4 h-4 text-white" />,
    longestStreak: <WhatshotIcon className="w-4 h-4 text-white" />,
    rankChange: <VscTriangleUp className="w-5 h-5 text-white" />,
  };

  return (
    <div className="w-full sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[70%] p-5 mb-8 mx-auto">
      <div className="flex flex-wrap items-center bg-gray-50 rounded-2xl px-5 py-4 shadow-md space-x-4">
        {/* Avatar section with status indicator */}
        <div className="relative flex-shrink-0">
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden bg-gray-200">
            <img
              src={AvatarImage || "/api/placeholder/48/48"}
              alt={name || "Profile"} // Improve accessibility by adding alt text
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-1 -right-1 w-6 h-6 sm:w-7 sm:h-7 md:w-7 md:h-7 bg-green-400 rounded-full flex items-center justify-center">
            {iconMap[type] || null} {/* Cleaner icon rendering using a map */}
          </div>
        </div>

        {/* Info section with title and name */}
        <div className="flex flex-col flex-1 justify-between">
          <div className="text-sm font-medium text-gray-500">{title}</div>
          <div className="text-md font-semibold text-gray-900">
            {name}
          </div>
        </div>

        {/* Count section */}
        <div className="text-2xl italic sm:text-4xl font-extrabold text-gray-900">
          {count}
        </div>
      </div>
    </div>
  );
};

export default ProfileMetricsCard;
