import React from "react";

const SearchFilter = () => {
  const data = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredData = data.filter((item) => item.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 mb-4"
      />
      <ul>
        {
          filteredData.map((item, index) => (
            <li key={index} className="text-lg">
              {item}
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default SearchFilter;
