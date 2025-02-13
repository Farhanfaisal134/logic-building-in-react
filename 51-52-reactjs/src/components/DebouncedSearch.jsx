import React, { useEffect, useState } from "react";

const DebouncedSearch = () => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState(""); // State for debounced value

  useEffect(() => {
    let interval = setTimeout(() => {
      setDebouncedQuery(query);
    }, 2000);

    return () => clearTimeout(interval)
  }, [query]);

  return (
    <div>
      <h1>{debouncedQuery}</h1> {/* Displaying debounced query */}
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2"
      />
    </div>
  );
};

export default DebouncedSearch;
