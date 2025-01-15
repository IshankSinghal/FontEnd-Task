import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header.jsx";
import TopTraders from "./TopTraders.jsx";
import KeyMetrics from "./KeyMetrics.jsx";
import FilterButton from "./Filterbutton.jsx";
import LeaderboardTable from "./LeaderboardTable.jsx";

function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState({
    topTraders: [],
    keyMetrics: {},
    leaderboard: [],
    segregatedData: {},
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
    const allTraders =
      selectedFilter === "All"
        ? leaderboardData.leaderboard
        : leaderboardData.segregatedData[selectedFilter] || [];

    if (searchQuery) {
      return allTraders.filter((trader) =>
        trader.Name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return allTraders;
  };

  const filteredTraders = filterTraders();

  if (isLoading) return <p>Getting the traders...</p>;
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
