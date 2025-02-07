import React, { useEffect, useState } from "react";

const App = () => {
  const [activeLight, setActiveLight] = useState < Light > ("red");

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLight((prevLight) =>
        prevLight === "red" ? "yellow" : prevLight === "yellow" ? "green" : "red"
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleManualChange = (color) => {
    setActiveLight(color);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-500">
      <div className="flex flex-col items-center gap-6">
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <div className="flex flex-col gap-4 p-6">
            {/* RED */}
            <div
              className={`w-20 h-20 rounded-full transition-all duration-500 
              ${activeLight === "red" ? "bg-red-600 shadow-lg shadow-red-500" : "bg-red-300"
                }`}></div>

            {/* YELLOW */}
            <div
              className={`w-20 h-20 rounded-full transition-all duration-500 
              ${activeLight === "yellow" ? "bg-yellow-400 shadow-lg shadow-yellow-300" : "bg-yellow-200"
                }`}></div>

            {/* GREEN */}
            <div
              className={`w-20 h-20 rounded-full transition-all duration-500 
              ${activeLight === "green" ? "bg-green-500 shadow-lg shadow-green-400" : "bg-green-200"
                }`}></div>
          </div>
        </div>

        {/* Manual Control Buttons */}
        <div className="flex gap-4">
          <button onClick={() => handleManualChange("red")}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
            Red
          </button>
          <button onClick={() => handleManualChange("yellow")}
            className="px-4 py-2 bg-yellow-400 text-black rounded-md hover:bg-yellow-500">
            Yellow
          </button>
          <button onClick={() => handleManualChange("green")}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
            Green
          </button>
        </div>
      </div>
    </div>
  )
}

export default App