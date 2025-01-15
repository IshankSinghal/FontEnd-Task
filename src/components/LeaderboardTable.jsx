import React from "react";

import Profile2 from "../images/Profile2.jpeg";
import Profile3 from "../images/Profile3.jpeg";
import Profile1 from "../images/Profile1.jpeg";

import { SiStockx } from "react-icons/si";
import { ImUserPlus } from "react-icons/im";
import { FaMoneyBill } from "react-icons/fa";
import { RiStockFill } from "react-icons/ri";
import { FaChevronRight } from "react-icons/fa";
import { RiVerifiedBadgeFill } from "react-icons/ri";

function LeaderboardTable({ traders }) {
  const sortedTraders = [...traders].sort((a, b) => a.Rank - b.Rank);

  const rankColor = (rank) => {
    switch (rank) {
      case 1:
        return "border-yellow-100 text-yellow-500";
      case 2:
        return "border-gray-600 text-gray-600";
      case 3:
        return "border-orange-100 text-orange-500";
      default:
        return "border-gray-100 text-gray-400";
    }
  };

  return (
    <div>
      <div className="overflow-x-auto bg-white sm:block hidden">
        <table className="min-w-full table-auto">
          <thead className="relative z-10 bg-white">
            <tr className="text-gray-500">
              <th className="px-32 text-left text-lg font-semibold">Name</th>
              <th className="pl-5 py-4 text-left text-lg font-semibold">
                Trophies
              </th>
              <th className="px-2 py-4 text-left text-lg font-bold">Rank</th>
              <th className="px-8 py-4 text-center text-lg font-semibold">
                Streaks
              </th>
              <th className="px-8 py-4 text-left text-lg font-semibold">
                Alerts
              </th>
              <th className="px-8 py-4 text-center text-lg font-semibold">
                Trades
              </th>
              <th className="px-8 py-4 text-center text-lg font-semibold">
                Avg. Gain
              </th>
              <th className="px-8 py-4 text-center text-lg font-semibold">
                Xscore
              </th>
              <th className="px-8 py-4 text-center text-lg font-medium"></th>
            </tr>
          </thead>
          <tbody className="relative z-10">
            {sortedTraders.map((trader, index) => (
              <tr
                key={index}
                className={`relative ${rankColor(
                  trader.Rank
                )} transform transition-transform duration-300 ease-in-out hover:scale-105`}
              >
                <td
                  className="absolute -skew-x-12 inset-[0.7px] border-[3px] border-r-3 bg-white mx-5 mb-[2px] rounded-lg bottom-1"
                  style={{
                    borderColor:
                      trader.Rank <= 3
                        ? `var(--border-color, #${
                            trader.Rank === 1
                              ? "#FCD34D"
                              : trader.Rank === 2
                              ? "#C0C0C0"
                              : "#F97316"
                          })`
                        : "#E5E7EB",
                    boxShadow: "0 4px 2px rgba(0, 0, 0, 0.4)",
                  }}
                />
                <td className="pl-8 py-4 relative z-10 flex ml-5">
                  <div className="flex items-center space-x-4">
                    <span
                      className={`text-3xl font-bold ${
                        trader.Rank > 9 ? "mr-6" : "mr-3"
                      } opacity-70 ${rankColor(trader.Rank)} w-4`}
                    >
                      {trader.Rank}
                    </span>
                    <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-200">
                      <img
                        src={
                          trader.Rank === 1
                            ? Profile1 // Image 1 for rank 1
                            : trader.Rank === 2
                            ? Profile2 // Image 2 for rank 2
                            : trader.Rank === 3
                            ? Profile3 // Image 3 for rank 3
                            : `https://ui-avatars.com/api/?name=${trader.Name.slice(
                                0,
                                2
                              )}&background=random&color=fff&size=128` // Fallback image using first 2 letters
                        }
                        alt={trader.Name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex flex-col">
                      <div className="flex items-center space-x-1">
                        <span className="font-semibold text-gray-900 text-lg">
                          {trader.Name}
                        </span>
                        <RiVerifiedBadgeFill className="text-blue-500 w-4 h-4" />
                      </div>
                      <span className="text-xs text-gray-500 font-bold w-18 tracking-tighter">
                        {trader.tradingStyle}
                      </span>
                    </div>
                  </div>
                </td>

                <td className="px-4 py-4 relative z-10">
                  <div className="flex justify-center space-x-2 text-gray-700 rounded-md bg-gray-100 w-20">
                    {trader.Trophies === "Stocks" ? (
                      <div className="flex items-center justify-center space-x-2">
                        <RiStockFill className="text-black w-4 h-5 " />
                        <span className="text-sm mb-1 font-bold">
                          {trader.Trophies}
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-1">
                        <SiStockx />
                        <span className="text-sm mb-1 font-bold">
                          {trader.Trophies}
                        </span>
                      </div>
                    )}
                  </div>
                </td>
                <td className="px-4 py-4 relative z-10">
                  <div
                    className={`flex items-center gap-3 ${
                      rankColor(trader.Rank).split(" ")[1]
                    }`}
                  >
                    <span className="font-extrabold text-xl mr-1">
                      {trader.Rank <= 3 && <SiStockx />}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-4 relative z-10 text-center">
                  <span className="text-gray-700 font-bold">
                    {trader.Streaks || "14"}
                  </span>
                </td>

                <td className="pl-8 py-4 relative z-10">
                  <span className="text-gray-700 font-bold">
                    {trader.Alerts} / 90%
                  </span>
                </td>
                <td className="px-4 py-4 relative z-10 text-center font-bold">
                  <span className="text-gray-700">
                    {trader.Trades} / {Math.floor(trader.Trades / 5)}%
                  </span>
                </td>
                <td className="px-4 py-4 relative z-10 text-center">
                  <span className="text-gray-700 font-bold">
                    {(trader.averageGain * 100).toFixed()}%
                  </span>
                </td>
                <td className="px-4 py-4 relative z-10 text-center">
                  <div className="bg-[#001848] text-white px-3 py-1 rounded-lg inline-flex items-center space-x-2">
                    <span
                      className={`${
                        rankColor(trader.Rank).split(" ")[1]
                      } font-bold`}
                    >
                      X
                    </span>
                    <span className="font-semibold text-center">
                      {trader.Xscore || "83"}
                    </span>
                  </div>
                </td>
                <td className="py-4 relative z-10">
                  <div className="flex items-center space-x-3 text-xl font-bold mr-5">
                    <button className="bg-gray-50 text-gray-700 hover:text-gray-900 shadow-xl rounded-full w-7 h-7 flex justify-center items-center">
                      <FaMoneyBill className="w-5" />
                    </button>
                    <button className="bg-gray-50 text-gray-700 hover:text-gray-900 shadow-xl rounded-full w-7 h-7 flex justify-center items-center">
                      <ImUserPlus className="w-5" />
                    </button>
                    <button className="bg-gray-50 text-gray-700 hover:text-gray-900 shadow-xl rounded-full w-7 h-7 flex justify-center items-center">
                      <FaChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LeaderboardTable;
