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

  const handleSearch = debounce((searchTerm) => {
    console.log("Searching for:", searchTerm);
  }, 1000);

  return (
    <input
      type="text"
      placeholder="Search"
      onChange={(e) => {
        setQuery(e.target.value);
        handleSearch(e.target.value);
      }}
      className="border p-2"
    />
  );
};

export default DebouncedSearch;
