import React, { useState } from "react";
import Pagination from "./Pagination";

const App = () => {
  const dummyData = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
  }));

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  function handlePageChange(currentPage) {
    setCurrentPage(currentPage);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentListOfItems = dummyData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="w-full max-w-3xl mx-auto h-screen pt-20 text-center">
      <h1 className="text-2xl font-bold">Pagination</h1>
      <ul className="grid grid-cols-4 gap-4 mx-auto mt-7">
        {currentListOfItems.map((listItem) => (
          <li
            className="bg-blue-900 text-white text-xl px-4 py-2"
            key={listItem.id}
          >
            {listItem.name}
          </li>
        ))}
      </ul>
      <div className="mt-10">
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(dummyData.length / itemsPerPage)}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default App;
