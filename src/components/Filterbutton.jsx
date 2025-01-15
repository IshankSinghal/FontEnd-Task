import React from "react";

function FilterButton({ filter, setFilter }) {
  const filters = ["All", "Stocks", "Options"];

  // Get the translate effect based on the index
  const getTranslateEffect = () => {
    const index = filters.indexOf(filter);
    return `translate-x-[${index * 100}%]`;
  };

  return (
    <div className="relative flex justify-center h-10 bg-gray-300 mb-6 rounded-lg max-w-sm mx-auto">
      {/* Highlighted Background */}
      <div
        className={`absolute top-1 bottom-1 left-1 w-[32%] bg-gray-50 rounded-lg transition-transform duration-500 ease-in-out shadow-lg ${getTranslateEffect()}`}
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
