import React, { useState } from 'react'

const data = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
  { id: 4, name: "David", age: 28 },
  { id: 5, name: "Eve", age: 22 },
  { id: 6, name: "Frank", age: 33 },
  { id: 7, name: "Grace", age: 27 },
  { id: 8, name: "Hannah", age: 29 },
  { id: 9, name: "Smith", age: 30 },
];

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: "id", direction: "asc" });
  let rowsPerPage = 3;

  const handleSort = (key) => {
    const direction = sortConfig.key === key && sortConfig.direction === "asc"
      ? "desc"
      : "asc"
    setSortConfig({ key, direction });
  };

  const sortedData = [...data].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === "asc" ? -1 : 1;
    if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = sortedData.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(Date.length / rowsPerPage);

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
          {currentRows.map((row) => (
            <tr key={row.id} className="hover:bg-gray-600">
              <td className="p-2 text-center">{row.id}</td>
              <td className="p-2 text-center">{row.name}</td>
              <td className="p-2 text-center">{row.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-center items-center gap-4 mt-4">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-md disabled:bg-gray-500"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-white">{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-md disabled:bg-gray-500"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  )
};

export default App;