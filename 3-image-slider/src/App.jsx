import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const App = ({ url = "https://picsum.photos/v2/list", limit = 5, page = 1 }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);

      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  if (loading) {
    return <div className="text-center text-lg">Loading data! Please wait...</div>;
  }

  if (errorMsg !== null) {
    return <div className="text-center text-red-500">Error occurred! {errorMsg}</div>;
  }

  return (
    <div className='flex h-screen w-full justify-center items-center relative'>
      {
        images && images.length > 0
          ? images.map((imageItem, index) => (
            <img
              key={index}
              src={imageItem.download_url}
              className={`w-full h-full ${currentSlide === index ? "flex" : "hidden"}`}
            />
          )) : (
            <h3>No Images Found</h3>
          )
      }
      <BsArrowLeftCircleFill onClick={handlePrevious}
        className='rounded-full absolute left-4 cursor-pointer text-white' size={40} />

      <BsArrowRightCircleFill onClick={handleNext}
        className='rounded-full absolute right-4 cursor-pointer text-white' size={40} />

      <span className='flex gap-3 absolute bottom-8'>
        {
          images && images.length
            ? images.map((_, index) => (
              <button
                key={index}
                className={`h-6 w-6 rounded-full 
                ${currentSlide === index ? "bg-white" : "bg-gray-600"}`}
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
            : null}
      </span>
    </div>
  )
}

export default App