import { useEffect, useState } from "react"

const DragBox = () => {
  const [initialX, setInitialX] = useState(0);
  const [initialY, setInitialY] = useState(0);
  const [boxPos, setBoxPos] = useState({ top: 0, left: 0 });
  const [isDrag, setIsDrag] = useState(false);

  useEffect(() => {
    const storedPos = JSON.parse(localStorage.getItem("boxPosition"));
    if (storedPos) {
      setBoxPos(storedPos);
    }
  }, []);

  function handleDown(e) {
    setIsDrag(true);
    setInitialX(e.clientX - boxPos.left);
    setInitialY(e.clientY - boxPos.top);
  }

  function handleUp() {
    setIsDrag(false);
  }

  function handleMove(e) {
    if (!isDrag) return;

    const left = e.clientX - initialX;
    const top = e.clientY - initialY;

    const newPos = { left, top };
    setBoxPos(newPos);
    localStorage.setItem("boxPosition", JSON.stringify(newPos));
  };

  return (
    <div className="w-full h-screen relative bg-gray-100">
      <div
        onMouseUp={handleUp}
        onMouseMove={handleMove}
        onMouseDown={handleDown}
        style={{ top: `${boxPos.top}px`, left: `${boxPos.left}px` }}
        className="absolute w-40 h-40 rounded-md flex justify-center items-center 
                   bg-gray-900 text-white text-xl cursor-pointer">
        Drag Box
      </div>
    </div>
  );
};

export default DragBox;