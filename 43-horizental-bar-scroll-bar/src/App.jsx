import React, { useRef, useState, useEffect, useMemo } from "react";

const App = () => {
  const scrollContainer = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const arr = useMemo(
    () => Array.from({ length: 30 }, (_, index) => `Item ${index + 1}`),
    []
  );

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    };
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    const container = scrollContainer.current;
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;

      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
    };
  };

  useEffect(() => {
    const container = scrollContainer.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-center items-center h-screen px-4 bg-gray-800">
      {/* Left Scroll Button */}
      {!isAtStart && (
        <button
          onClick={scrollLeft}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md px-2 py-1 mr-2"
        >
          &lt;
        </button>
      )}

      {/* Scrollable Container */}
      <div
        ref={scrollContainer}
        className="flex gap-3 overflow-x-auto scrollbar-hide w-full max-w-4xl"
        style={{
          scrollBehavior: "smooth",
        }}
      >
        {arr.map((item, index) => (
          <p
            key={index}
            className="flex-shrink-0 w-52 h-24 bg-gray-600 text-xl text-white flex justify-center items-center rounded-lg shadow-md"
          >
            {item}
          </p>
        ))}
      </div>

      {/* Right Scroll Button */}
      {!isAtEnd && (
        <button
          onClick={scrollRight}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md px-2 py-1 ml-2"
        >
          &gt;
        </button>
      )}
    </div>
  );
};

export default App;
