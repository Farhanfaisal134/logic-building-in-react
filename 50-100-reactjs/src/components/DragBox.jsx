import React, { useEffect, useState } from "react";

const DragBox = () => {
  const [initialX, setInitialX] = useState(0);
  const [initialY, setInitialY] = useState(0);
  const [boxPos, setBoxPos] = useState({ top: 100, left: 100 });
  const [isDrag, setIsDrag] = useState(false);

  useEffect(() => {
    const storedBoxLocation = JSON.parse(localStorage.getItem("boxPos"));
    if (storedBoxLocation) {
      setBoxPos(storedBoxLocation);
    }
  }, []);

  useEffect(() => {
    if (isDrag) {
      document.addEventListener("mousemove", handleMove);
      document.addEventListener("mouseup", handleUp);
    } else {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseup", handleUp);
    }
    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseup", handleUp);
    };
  }, [isDrag]);

  function handleDown(e) {
    setIsDrag(true);
    setInitialX(e.clientX - (boxPos.left || 0));
    setInitialY(e.clientY - (boxPos.top || 0));
  }

  function handleMove(e) {
    if (!isDrag) return;
    let left = e.clientX - initialX;
    let top = e.clientY - initialY;
    const newPos = { left, top };
    setBoxPos(newPos);
  }

  function handleUp() {
    setIsDrag(false);
    localStorage.setItem("boxPos", JSON.stringify(boxPos)); // Local storage update on mouse release
  }

  return (
    <div className="relative h-screen bg-gray-200">
      <div
        onMouseDown={handleDown}
        style={{ top: `${boxPos.top}px`, left: `${boxPos.left}px` }}
        className="w-40 h-40 bg-gray-900 text-white rounded-md shadow-md flex
         justify-center items-center cursor-pointer absolute">
        Drag Me
      </div>
    </div>
  );
};

export default DragBox;
