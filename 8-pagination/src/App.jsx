import React, { useState } from "react";
import Pagination from "./Pagination";

const App = () => {
  const dummyData = Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
  }));

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  function handlePageChange(currentPage) {
    setCurrentPage(currentPage);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentListOfItems = dummyData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="px-2 md:px-8 w-full h-screen py-4 md:text-center">
      <h1 className="text-2xl lg:text-4xl font-bold text-center">Pagination</h1>
      <ul className="flex flex-wrap gap-2 justify-center max-w-4xl mx-auto">
        {currentListOfItems.map((listItem) => (
          <li
            className="bg-blue-900 text-white md:text-xl p-2 md:px-4 w-20 md:w-fit mx-auto text-center mt-4"
            key={listItem.id}
          >
            {listItem.name}
          </li>
        ))}
      </ul>
      <div className="mt-10 pb-5">
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
