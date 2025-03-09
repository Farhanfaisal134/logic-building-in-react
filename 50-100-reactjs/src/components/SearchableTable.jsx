import React, { useState, useEffect, useMemo } from "react";

const SearchableTable = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortKey, setSortKey] = useState("");
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const result = await response.json();
      setLoading(false)
      setData(result.slice(0, 10));
    };
    fetchData();
  }, []);

  const filteredData = useMemo(() => {
    let filtered = [...data];

    if (searchTerm) {
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortKey) {
      filtered.sort((a, b) => {
        return sortOrder === "asc"
          ? a[sortKey] > b[sortKey] ? 1 : -1
          : a[sortKey] < b[sortKey] ? 1 : -1;
      });
    }

    return filtered;
  }, [data, searchTerm, sortKey, sortOrder]);

  const handleSort = (key) => {
    setSortOrder(sortKey === key && sortOrder === "asc" ? "desc" : "asc");
    setSortKey(key);
  };

  return (
    <div className="w-full bg-gray-600 min-h-screen p-4">
      <div className="p-5 max-w-4xl mx-auto bg-gray-900 text-white rounded-lg shadow-lg">
        <input
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-600 rounded bg-gray-800 text-white" />

        <div className="flex justify-between items-center p-2 bg-gray-700 rounded-md">
          <div className="w-1/4 font-bold cursor-pointer" onClick={() => handleSort("id")}>
            ID {sortKey === "id" && (sortOrder === "asc" ? "▲" : "▼")}
          </div>
          <div className="w-3/4 font-bold cursor-pointer" onClick={() => handleSort("title")}>
            Title {sortKey === "title" && (sortOrder === "asc" ? "▲" : "▼")}
          </div>
        </div>

        <div className="mt-2">
          {
            loading
              ? (
                <div className="flex justify-center items-center">
                  <div className="w-10 h-10 rounded-full border-dashed border-4 border-blue-600 animate-spin" />
                </div>
              )
              :
              (
                filteredData.map((item) => (
                  <div key={item.id} className="flex justify-between items-center p-3 bg-gray-800 rounded-md mb-2 shadow-sm">
                    <div className="w-1/4">{item.id}</div>
                    <div className="w-3/4">{item.title}</div>
                  </div>
                ))
              )
          }
        </div>
      </div>
    </div>
  );
};

export default SearchableTable;
