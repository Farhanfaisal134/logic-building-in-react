import { useState, useEffect, useRef } from "react";

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SRRmhH4X5N2e4QalcoxVbzYsD44C-sQv-w&s",
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1);
    }, 3000);
  };

  const stopInterval = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current);
  }, []);

  const prevSlide = () => {
    stopInterval();
    setCurrentIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
  };

  const nextSlide = () => {
    stopInterval();
    setCurrentIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1);
  };

  const goToSlide = (index) => {
    stopInterval();
    setCurrentIndex(index);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        className="relative w-full max-w-4xl mx-auto"
        onMouseEnter={stopInterval}
        onMouseLeave={startInterval}>
        {/* Image */}
        <div className="overflow-hidden rounded-lg">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-64 object-cover transition-transform duration-500" />
        </div>

        {/* Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 -translate-y-1/2 left-2 bg-gray-800 text-white 
          p-2 rounded-full hover:bg-gray-700">
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 -translate-y-1/2 right-2 bg-gray-800 text-white 
          p-2 rounded-full hover:bg-gray-700">
          ❯
        </button>

        {/* Dots */}
        <div className="flex justify-center space-x-2 mt-4">
          {
            images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-blue-500" : "bg-gray-400"
                  }`}></button>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
