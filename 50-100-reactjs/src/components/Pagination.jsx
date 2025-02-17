import React, { useState } from 'react'

const Pagination = () => {
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
        <PageNums
          currentPage={currentPage}
          totalPages={Math.ceil(dummyData.length / itemsPerPage)}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

const PageNums = ({ currentPage, totalPages = 10, onPageChange }) => {
  let pages = [];

  function generateNoOfPages() {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i)
    };
    return pages
  };

  return (
    <div className='flex gap-2 justify-center'>
      <button className="px-2 md:px-4 md:py-2 py-1 tetx-xl font-semibold text-white 
        rounded-md bg-green-600" disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}>
        Prev
      </button>

      {
        generateNoOfPages().map((pageNo) => (
          <button className={`px-2 md:px-4 md:py-2 py-1 tetx-xl font-semibold text-white rounded-md
            ${currentPage === pageNo ? "bg-red-600" : "bg-green-600"}`}
            key={pageNo}
            onClick={() => onPageChange(pageNo)}>
            {pageNo}
          </button>
        ))
      }

      <button className={`px-2 md:px-4 md:py-2 py-1 text-xl font-semibold text-white rounded-md bg-green-600 
      ${currentPage === totalPages ? "cursor-default opacity-50" : ""}`}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}>
        Next
      </button>
    </div>
  )
};

export default Pagination;