import React, { useEffect, useState } from 'react'

const Calculator = () => {
  const [theme, setTheme] = useState(() => {
    let storedTheme = localStorage.getItem("theme");
    return storedTheme ? storedTheme : "light";
  });

  const [input, setInput] = useState("");

  const buttons = [
    "C", "(", ")", "/",
    "7", "8", "9", "*",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "="
  ];

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    };
  }, [theme]);


  const handleButtonClick = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else {
      setInput((prevInput) => prevInput + value);
    };
  };

  return (
    <div className={`${theme} min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900`}>
      <div className="max-w-sm w-full p-6 md:rounded-md shadow-md bg-white dark:bg-gray-800">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Calculator</h1>
          <button
            onClick={toggleTheme}
            className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-md"
          >
            {theme === "light" ? "Dark" : "Light"} Mode
          </button>
        </div>
        <div className="mb-4">
          <input
            type="text"
            value={input}
            readOnly
            className="w-full text-right text-xl p-3 bg-gray-100 dark:bg-gray-700
             text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none"
          />
        </div>
        <div className="grid grid-cols-4 gap-3">
          {buttons.map((button, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(button)}
              className="text-xl font-semibold px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 
               dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200"
            >
              {button}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;