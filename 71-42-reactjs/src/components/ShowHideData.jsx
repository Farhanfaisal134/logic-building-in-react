import { useState } from "react";

const ShowHideData = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="p-4">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? "Hide Data" : "Show Data"}
      </button>
      {isVisible && <p className="text-lg">This is the data to show!</p>}
    </div>
  );
};

export default ShowHideData;
