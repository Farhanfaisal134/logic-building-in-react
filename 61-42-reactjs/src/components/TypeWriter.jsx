import React, { useEffect, useState } from 'react'

const TypeWriter = () => {
  const [inputValue, setInputValue] = useState("");
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (displayText) setDisplayText("");
  };

  const handleButtonClick = () => {
    if (!inputValue.trim()) return;
    setDisplayText("");
    setIsTyping(true);
  };

  useEffect(() => {
    if (!isTyping) return;

    let index = -1;
    const interval = setInterval(() => {
      if (index < inputValue.length - 1) {
        setDisplayText((prev) => prev + inputValue[index]);
        index++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
        setInputValue("");
      };
    }, 500);

    return () => clearInterval(interval);
  }, [inputValue, isTyping]);

  return (
    <div className="h-screen w-full flex flex-col items-center md:items-start 
      justify-center md:justify-start bg-gray-800 md:p-4 p-2">
      <div className="flex items-center mb-8 md:w-[500px] mx-auto">
        <input
          type="text"
          className="border border-gray-300 rounded-sm p-2 text-lg w-full outline-none"
          placeholder="Type your text here"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          className="bg-blue-500 text-white text-nowrap p-3 rounded-sm hover:bg-blue-600"
          onClick={handleButtonClick}
        >
          Show Text
        </button>
      </div>

      <h1 className="text-2xl font-mono text-gray-100 md:pl-20">
        typed Text: {displayText || ""}
      </h1>
    </div>
  );
};

export default TypeWriter;