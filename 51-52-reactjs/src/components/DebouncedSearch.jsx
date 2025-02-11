import React, { useState } from "react";

const debounce = (func, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
};

const DebouncedSearch = () => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState(""); // State for debounced value

  const handleSearch = debounce((searchTerm) => {
    setDebouncedQuery(searchTerm); // Updating debounced value
  }, 1000);

  return (
    <div>
      <h1>{debouncedQuery}</h1> {/* Displaying debounced query */}
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value); // Update query instantly
          handleSearch(e.target.value); // Debounce updating debouncedQuery
        }}
        className="border p-2"
      />
    </div>
  );
};

export default DebouncedSearch;
