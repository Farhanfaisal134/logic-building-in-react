import React, { useEffect, useState } from 'react'

const RandomColorGen = () => {
  const [color, setColor] = useState("#000000");
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [copyMessage, setCopyMessage] = useState("");

  function randomColorUtilty(length) {
    return Math.floor(Math.random() * length);
  };

  function handleCreateRandomHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtilty(hex.length)]
    };
    setColor(hexColor)
  };

  function handleCreateRandomRgbColor() {
    const r = randomColorUtilty(256)
    const g = randomColorUtilty(256)
    const b = randomColorUtilty(256)
    setColor(`rgb(${r},${g},${b})`)
  };

  useEffect(() => {
    if (typeOfColor === "rgb") {
      handleCreateRandomRgbColor();
    } else {
      handleCreateRandomHexColor();
    };
  }, [typeOfColor]);

  function cpyColor() {
    navigator.clipboard.writeText(color)
      .then(() => {
        setCopyMessage("Copy")
        setTimeout(() => setCopyMessage(""), 2000)
      }).catch(() => {
        setCopyMessage("Failed to copy!");
      });
  };

  return (
    <div className='h-screen w-full p-8 lg:p-20' style={{ backgroundColor: `${color}` }}>
      {
        copyMessage && (
          <p className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 md:text-xl text-white 
          px-2 py-1 rounded-md bg-blue-600">
            {copyMessage}
          </p>
        )
      }

      <div className='flex lg:flex-row flex-col justify-center gap-4 '>
        <button onClick={() => setTypeOfColor("hex")} className='px-3 py-2 rounded-md bg-gray-400 text-white md:text-xl'>Create HEX Color</button>
        <button onClick={() => setTypeOfColor("rgb")} className='px-3 py-2 rounded-md bg-gray-400 text-white md:text-xl'>Create RGB Color</button>
        <button onClick={typeOfColor === "hex" ?
          () => handleCreateRandomHexColor() :
          () => handleCreateRandomRgbColor()
        } className='px-3 py-2 rounded-md bg-gray-400 text-white md:text-xl'>Generate Random Color</button>
      </div>

      <div className='md:mt-32 mt-14 flex justify-center flex-col gap-2 uppercase items-center text-xl text-white font-bold'>
        <h2>{typeOfColor}</h2>
        <h1 onClick={cpyColor}>{color}</h1>
      </div>
    </div>
  )
}

export default RandomColorGen;