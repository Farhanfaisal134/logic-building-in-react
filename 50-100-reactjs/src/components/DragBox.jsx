import { useState } from "react"

const DragBox = () => {
  const [boxPosition, setBoxPosition] = useState({ left: 0, top: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [initialX, setInitialX] = useState(0);
  const [initialY, setInitialY] = useState(0);

  function handleMouseDown(e) {
    setIsDragging(true);
    setInitialX(e.clientX - boxPosition.left)
    setInitialY(e.clientY - boxPosition.top)
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const left = e.clientX - initialX;
      const top = e.clientY - initialY;
      setBoxPosition({ left, top });
    };
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      style={{
        left: boxPosition.left,
        top: boxPosition.top,
        position: "absolute",
        width: "150px",
        height: "150px",
        backgroundColor: "#4CAF50",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10px",
        cursor: "pointer",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        transition: "background-color 0.3s",
      }}
      onMouseEnter={(e) => e.target.style.backgroundColor = "#66BB6A"}
      onMouseLeave={(e) => e.target.style.backgroundColor = "#4CAF50"}
    >
      Drag Me
    </div>
  )
};

export default DragBox