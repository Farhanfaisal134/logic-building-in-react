import React from 'react'
import Button from './components/Button';

const Pagination = ({ currentPage, totalPages = 10, onPageChange }) => {
  let pages = [];

  function generateNoOfPages() {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i)
    };
    return pages
  };

  return (
    <div className='flex gap-2 justify-center'>
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        text="Prev"
        className="bg-green-600"
        disabled={currentPage === 1}
      />

      {generateNoOfPages().map((pageNo) => (
        <Button
          onClick={() => onPageChange(pageNo)}
          text={`${pageNo}`}
          key={pageNo}
          className={`${currentPage === pageNo ? "bg-red-600" : "bg-green-600"}`}
        />
      ))}

      <Button
        onClick={() => onPageChange(currentPage + 1)}
        text="Next"
        className="bg-green-600"
        disabled={currentPage === totalPages}
      />
    </div>
  )
}

export default Pagination