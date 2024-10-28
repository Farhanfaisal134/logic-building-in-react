import React, { useEffect, useState } from "react";
import Button from "./Button";

const App = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  //#B4F379
  function handleCreateRandomHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor]);

  return (
    <div
      className={`w-full min-h-screen flex lg:flex-row justify-center flex-wrap relative`}
      style={{ backgroundColor: `${color}` }}
    >
      <div className="pt-4 space-x-4 space-y-3">
        <Button onClick={() => setTypeOfColor("hex")}>Create HEX Color</Button>
        <Button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</Button>
        <Button
          onClick={
            typeOfColor === "hex"
              ? () => handleCreateRandomHexColor()
              : () => handleCreateRandomRgbColor()
          }
        >
          Generate Random Color
        </Button>
      </div>

      <div
        className="flex flex-col gap-5 text-white text-3xl text-center absolute 
      top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default App;
