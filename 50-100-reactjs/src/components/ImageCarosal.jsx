import { useState, useEffect, useRef } from "react";

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SRRmhH4X5N2e4QalcoxVbzYsD44C-sQv-w&s",
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [runnig, setRunning] = useState(false)
  const imgRef = useRef(null);

  useEffect(() => {
    if (!runnig) {
      imgRef.current = setInterval(() => {
        handleNext()
      }, 1000);
    }

    return () => clearInterval(imgRef.current)
  }, [runnig]);

  function handlePrev() {
    setCurrentIndex((prev) => prev === 0 ? images.length - 1 : prev - 1)
  };

  function handleNext() {
    setCurrentIndex((prev) => prev === images.length - 1 ? 0 : prev + 1)
  };

  function handlePuse() {
    clearInterval(imgRef.current)
    setRunning(true)
  };

  return (
    <div className="flex h-screen justify-center p-8 flex-col gap-4">
      <div className="w-full h-60 max-w-3xl mx-auto rounded-md relative"
        onMouseEnter={handlePuse}
        onMouseLeave={() => setRunning(false)}>
        <img src={images[currentIndex]} className="h-full w-full object-cover rounded-md" />
        <button className="absolute left-2 top-1/2 text-white text-xl" onClick={handlePrev}>{"<"}</button>
        <button className="absolute right-2 top-1/2 text-white text-xl" onClick={handleNext}>{">"}</button>
      </div>
      <div className="flex gap-2 justify-center">
        {
          images.map((_, idx) => (
            <button onClick={() => setCurrentIndex(idx)} className={`w-6 h-6 rounded-full 
              ${currentIndex === idx ? "bg-gray-500" : "bg-gray-900"}`} />
          ))
        }
      </div>
    </div>
  )
};

export default ImageCarousel;
