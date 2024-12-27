import React, { useState } from 'react'

const data = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
];

const App = () => {
  const [sortConfig, setSortConfig] = useState({ key: "id", direction: "asc" });

  const handleSort = (key) => {
    const direction = sortConfig.key === key && sortConfig.direction === "asc" ? "desc" : "asc"
    setSortConfig({ key, direction })
  };

  const sortedData = [...data].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === "asc" ? -1 : 1
    if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === "asc" ? 1 : -1;
  });

  return (
    <div className="w-full min-h-screen bg-gray-900 flex flex-col items-center p-4 md:p-8">
      <h1 className="text-white text-2xl mb-4 font-bold">Data Table</h1>
      <table className="w-full max-w-2xl bg-gray-700 text-white rounded-lg overflow-hidden">
        <thead>
          <tr>
            <th className={`p-2 cursor-pointer ${sortConfig.direction === "asc" ? "text-green-600" : "text-red-600"}`}
              onClick={() => handleSort("id")}>
              ID {sortConfig.key === "id" ? (sortConfig.direction === "asc" ? "↑" : "↓") : ""}
            </th>
            <th className={`p-2 cursor-pointer ${sortConfig.direction === "asc" ? "text-green-600" : "text-red-600"}`}
              onClick={() => handleSort("name")}>
              Name {sortConfig.key === "name" ? (sortConfig.direction === "asc" ? "↑" : "↓") : ""}
            </th>
            <th className={`p-2 cursor-pointer ${sortConfig.direction === "asc" ? "text-green-600" : "text-red-600"}`}
              onClick={() => handleSort("age")}>
              Age {sortConfig.key === "age" ? (sortConfig.direction === "asc" ? "↑" : "↓") : ""}
            </th>
          </tr>
        </thead>

        <tbody>
          {sortedData.map((row) => (
            <tr key={row.id} className="hover:bg-gray-600">
              <td className="p-2 text-center">{row.id}</td>
              <td className="p-2 text-center">{row.name}</td>
              <td className="p-2 text-center">{row.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
};

export default App;