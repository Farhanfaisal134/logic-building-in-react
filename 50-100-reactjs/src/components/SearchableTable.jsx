import React, { useState, useEffect, useMemo } from "react";

const SearchableTable = () => {
  const [data, setData] = useState([]); // Stores fetched data
  const [searchTerm, setSearchTerm] = useState(""); // Search term
  const [sortOrder, setSortOrder] = useState("asc"); // Sorting order
  const [sortKey, setSortKey] = useState(""); // Column to sort by

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const result = await response.json();
      setData(result.slice(0, 10));
    };

    fetchData();
  }, []);

  const filteredData = useMemo(() => {
    let filtered = data;

    if (searchTerm) {
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    };

    if (sortKey) {
      filtered = [...filtered].sort((a, b) => {
        if (a[sortKey] < b[sortKey]) return sortOrder === "asc" ? -1 : 1;
        if (a[sortKey] > b[sortKey]) return sortOrder === "asc" ? 1 : -1;
        return 0; // Yahan jab dono equal hon, toh unka order same rehna chahiye 	8 === 8 => 0 (same order maintain rahega)
      });
    };

    return filtered;
  }, [data, searchTerm, sortKey, sortOrder]);

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  return (
    <div className="p-5">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by title"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 p-2 border rounded w-full"
      />

      {/* Table */}
      <table className="min-w-full bg-white border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th
              className="p-2 text-left cursor-pointer"
              onClick={() => handleSort("id")}>
              ID {sortKey === "id" && (sortOrder === "asc" ? "▲" : "▼")}
            </th>
            <th
              className="p-2 text-left cursor-pointer"
              onClick={() => handleSort("title")}>
              Title {sortKey === "title" && (sortOrder === "asc" ? "▲" : "▼")}
            </th>
          </tr>
        </thead>
        <tbody>
          {
            filteredData.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="p-2">{item.id}</td>
                <td className="p-2">{item.title}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default SearchableTable;