import React, { useEffect, useMemo, useRef, useState } from 'react'

const InfiniteHorizantalScroll = () => {
  const scrollerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const items = useMemo(() => Array.from({ length: 20 }, (_, index) => `item ${index + 1}`), [])

  useEffect(() => {
    let scrollInterval;
    if (!isHovered) {
      scrollInterval = setInterval(() => {
        if (scrollerRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollerRef.current;
          if (scrollLeft + clientWidth >= scrollWidth - 1) {
            scrollerRef.current.scrollLeft = 0; // Reset scroll to start for infinite loop
          } else {
            scrollerRef.current.scrollLeft += 1; // Adjust speed
          };
        };
      }, 10);
    };

    return () => clearInterval(scrollInterval); // Cleanup on unmount
  }, [isHovered]);

  return (
    <div className="bg-gray-800 w-full h-screen flex items-center justify-center">
      <div
        className="overflow-x-auto whitespace-nowrap scrollbar-hide flex items-center bg-gray-700 p-2 text-white"
        ref={scrollerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ scrollBehavior: "smooth" }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="mx-2 flex-shrink-0 bg-teal-500 px-2 py-1 rounded-md"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteHorizantalScroll;