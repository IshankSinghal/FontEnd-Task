import React from "react";

function FilterButton({ filter, setFilter }) {
  const filters = ["All", "Stocks", "Options"];

  // Get the translate effect class based on the index
  const getTranslateEffect = (filterValue) => {
    switch (filterValue) {
      case "All":
        return "translate-x-[1px]";
      case "Stocks":
        return "translate-x-[100.33%]";
      case "Options":
        return "translate-x-[200.66%]";
      default:
        return "translate-x-[1px]";
    }
  };

  return (
    <div className="relative flex justify-center h-10 bg-gray-300 mb-6 rounded-lg max-w-sm mx-auto">
      {/* Highlighted Background */}
      <div
        className={`absolute top-1 bottom-1 left-1 w-[32%] bg-gray-50 rounded-lg transition-transform duration-500 ease-in-out shadow-lg ${getTranslateEffect(
          filter
        )}`}
      />

      {/* Buttons */}
      {filters.map((option) => (
        <button
          key={option}
          onClick={() => setFilter(option)}
          className={`relative z-10 w-1/3 text-center py-1 text-sm sm:text-base font-semibold transition-colors ${
            filter === option ? "text-gray-900" : "text-gray-600"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default FilterButton;
