import React, { useEffect, useState } from 'react'

const useDarkMode = () => {
  const [theme, setTheme] = useState(() => {
    let storedTheme = localStorage.getItem("theme");
    return storedTheme ? storedTheme : "light";
  });

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme]);

  return [theme, toggleTheme];
};

export default useDarkMode;