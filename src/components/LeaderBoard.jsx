import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header.jsx";
import TopTraders from "./TopTraders.jsx";
import KeyMetrics from "./KeyMetrics.jsx";
import FilterButton from "./Filterbutton.jsx";
import LeaderboardTable from "./LeaderboardTable.jsx";
import { Triangle } from "react-loader-spinner";

function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState({
    topTraders: [],
    keyMetrics: {},
    leaderboard: [],
  });
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchLeaderboardData = async () => {
      try {
        setIsLoading(true);
        setFetchError(null);

        const response = await axios.get(
          "https://script.google.com/macros/s/AKfycbwUfb1xVZiC0D3NhFRSEzKsho_3Yk_za_jjvm9PsG2C7cJNomY7ZfbEggBy4njgRmS4/exec"
        );
        setLeaderboardData(response.data);
      } catch (err) {
        setFetchError("Error fetching data: " + err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLeaderboardData();
  }, []);

  const filterTraders = () => {
    // Filter traders based on the selected filter
    const allTraders =
      selectedFilter === "All"
        ? leaderboardData.leaderboard
        : leaderboardData.leaderboard.filter(
            (trader) => trader.Trophies === selectedFilter
          );

    // Apply search filter
    if (searchQuery) {
      return allTraders.filter((trader) =>
        trader.Name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return allTraders;
  };

  const filteredTraders = filterTraders();

  if (isLoading)
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh", // Full viewport height
            width: "100vw", // Full viewport width
            backgroundColor: "#f8f8f8", // Optional background color
          }}
        >
          <Triangle
            visible={true}
            height="200" // Larger height
            width="200" // Larger width
            color="#4fa94d"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
          <h1 className="font-semibold text-2xl">Getting the Traders...</h1>
        </div>
      </>
    );
  if (fetchError) return <p>{fetchError}</p>;

  return (
    <div className="bg-gray-50">
      <Header searchTerm={searchQuery} onSearchChange={setSearchQuery} />
      <FilterButton filter={selectedFilter} setFilter={setSelectedFilter} />
      <TopTraders traders={leaderboardData.topTraders} />
      <KeyMetrics keyMetrics={leaderboardData.keyMetrics} />
      <LeaderboardTable traders={filteredTraders} />
    </div>
  );
}

export default Leaderboard;
