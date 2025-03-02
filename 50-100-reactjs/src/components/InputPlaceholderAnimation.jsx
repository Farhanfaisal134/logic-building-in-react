import React, { useEffect, useState } from 'react'

const InputPlaceholderAnimation = () => {
  const [currentValue, setCurrentValue] = useState("Category");
  const allValues = ["Category", "Price", "Product Id", "Customer"];
  const [currentValueIndex, setCurrentValueIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentValue(() => {
        const newIndex = currentValueIndex === allValues.length - 1 ? 0 : currentValueIndex + 1;
        setCurrentValueIndex(newIndex);
        return allValues[newIndex];
      });
    }, 2000);

    return () => clearInterval(intervalId);
  }, [currentValueIndex]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <label className="text-lg font-semibold text-gray-700">
        Search by <span className="text-blue-600 font-bold">{currentValue}</span>
      </label>
      <input
        type="text"
        className="mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={`Enter ${currentValue}...`}
      />
    </div>
  );
}

export default InputPlaceholderAnimation