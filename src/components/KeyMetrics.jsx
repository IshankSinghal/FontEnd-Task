import React from "react";
import MetrixCard from "./MetrixCard";

import Profile2 from "../images/Profile5.jpeg";
import Profile3 from "../images/Profile6.jpeg";
import Profile4 from "../images/Profile7.jpeg";
import Profile5 from "../images/Profile8.jpeg";

// Create array with imported images
const traderAvatars = [Profile2, Profile3, Profile4, Profile5];

function KeyMetrics({ keyMetrics }) {
  // Define an array of metric types and labels
  const metricsData = [
    { type: "mostTipsGiven", label: "Most Tips Given" },
    { type: "mostActive", label: "Most Active" },
    { type: "longestStreak", label: "Longest Streak" },
    { type: "rankChange", label: "Rank Change" },
  ];

  return (
    <div>
      {/* Only one div for both small and large screen views */}
      <div className="flex justify-evenly mt-5 max-w-full mx-auto gap-4 sm:max-w-full md:max-w-[85%] lg:max-w-[85%] xl:max-w-[85%]">
        {metricsData.map((metric, index) => {
          const metricData = keyMetrics[metric.type]; // Access metric data
          const AvatarImage = traderAvatars[index]; // Corresponding Avatar for each metric

          // If the metricData is not found, skip rendering this card
          if (!metricData) return null;

          return (
            <MetrixCard
              key={index}
              title={metric.label}
              name={metricData?.name}
              count={metricData?.count}
              AvatarImage={AvatarImage}
              type={metric.type} // Pass the 'type' from metricsData
            />
          );
        })}
      </div>
    </div>
  );
}

export default KeyMetrics;
