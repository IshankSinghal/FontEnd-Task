import React from "react";
import { Card, CardContent, Typography, Stack, Divider } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import { RiStockFill } from "react-icons/ri";
import { SiStockx } from "react-icons/si";
import Avatar from "./Avatar";

function TraderCard({ trader, rank, AvatarImage }) {
  // Determine rank-specific styles
  const rankBackground = {
    1: "bg-gradient-to-r from-[#d7eff1] to-[#fdebae]",
    2: "bg-gradient-to-r from-[#e3f2fd] via-[#e1bee7] to-[#f8bbd0]",
    3: "bg-gradient-to-r from-[#d7eff1] to-[#fdebae]",
  };

  const rankText = rank === 1 ? "st" : rank === 2 ? "nd" : "rd";

  return (
    <Card
      sx={{
        width: 270,
        padding: 1,
        border: "2px solid white",
        borderRadius: 4,
        position: "relative",
        boxShadow: `
          inset 0px 4px 6px rgba(0, 0, 0, 0.1), 
          0px 4px 6px rgba(0, 0, 0, 0.2)
        `,
      }}
    >
      <Stack>
        {/* Rank Badge */}
        {rank <= 3 && (
          <div
            className={`absolute top-0 left-0 w-full h-[23.5%] ${rankBackground[rank]} rounded-t-lg`}
          >
            <span className="absolute left-40 top-3 italic font-bold text-5xl text-black opacity-10">
              {rank}
              <sup>
                <span className="text-3xl">{rankText}</span>
              </sup>
            </span>
          </div>
        )}

        {/* Avatar Section */}
        <div className="mt-7 relative">
          <Avatar src={AvatarImage} alt="Avatar" />
        </div>

        {/* Trader Info */}
        <div className="flex items-center space-x-1 justify-end relative -top-9 gap-1">
          <div className="bg-gray-100 p-2 rounded-md flex items-center justify-center">
            {trader.Trophies === "Stocks" ? <RiStockFill /> : <SiStockx />}
          </div>
          <div className="bg-[#001848] text-white text-sm font-bold px-2 py-1 rounded-md flex items-center space-x-2">
            <span
              className={
                rank === 1
                  ? "text-yellow-500"
                  : rank === 2
                  ? "text-gray-400"
                  : rank === 3
                  ? "text-orange-500"
                  : "text-white"
              }
            >
              X
            </span>
            <span>{trader.Xscore}</span>
          </div>
        </div>

        <div className="relative -top-6 ml-2">
          <Typography variant="h6" fontWeight="bold">
            {trader.Name} <VerifiedIcon color="primary" fontSize="small" />
          </Typography>
          <Typography
            color="textSecondary"
            fontWeight="semibold"
            fontSize="medium"
          >
            {trader.tradingStyle}
          </Typography>
        </div>
      </Stack>

      {/* Trader Stats */}
      <CardContent>
        <div className="flex justify-between space-x-1 relative -top-6 -left-1 ml-2">
          {[
            { label: "Alerts", value: trader.Alerts },
            { label: "Trades", value: trader.Trades },
            { label: "Avg Gain", value: `${trader.averageGain * 100}%` },
          ].map((stat, index) => (
            <React.Fragment key={index}>
              <div className="text-center">
                <Typography
                  variant="h6"
                  className="font-bold text-sm text-gray-900"
                >
                  {stat.value}
                </Typography>
                <Typography
                  variant="caption"
                  className="font-semibold text-xs text-gray-600"
                >
                  {stat.label}
                </Typography>
              </div>
              {index < 2 && (
                <Divider orientation="vertical" flexItem sx={{ width: 10 }} />
              )}
            </React.Fragment>
          ))}
        </div>
      </CardContent>

      {/* Profile Button */}
      <div className="flex justify-center">
        <button className="w-[12rem] border-2 border-gray-400 text-gray-700 relative -top-2 font-bold text-sm py-2 px-4 rounded-md hover:bg-blue-700 hover:text-white transition-colors duration-200">
          Profile
        </button>
      </div>
    </Card>
  );
}

export default TraderCard;
