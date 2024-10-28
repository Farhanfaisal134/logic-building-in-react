import React from "react";
import useDarkMode from "./useDarkMode";

const App = () => {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <div
      className="h-screen flex justify-center items-center
     bg-white dark:bg-gray-800 text-black dark:text-white"
    >
      <div className="text-center">
        <h1 className="text-3xl font-bold ">Current Theme: {theme}</h1>
        <button
          className="mt-5 px-4 py-2 bg-gray-800 dark:bg-gray-200 text-white
           dark:text-black rounded"
          onClick={toggleTheme}>
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default App;
