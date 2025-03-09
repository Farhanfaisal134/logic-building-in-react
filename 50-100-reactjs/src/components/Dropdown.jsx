import React, { useRef, useState } from 'react'

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const menuRef = useRef(null);

  const options = ["Option 1", "Option 2", "Option 3"];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleKeyDown = (e) => {
    if (!isOpen) return;

    switch (e.key) {
      case "ArrowDown":
        setActiveIndex((prevIndex) =>
          prevIndex < options.length - 1 ? prevIndex + 1 : 0
        );
        break;

      case "ArrowUp":
        setActiveIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : options.length - 1
        );
        break;

      case "Enter":
        if (activeIndex >= 0) {
          alert(`You selected: ${options[activeIndex]}`);
          setIsOpen(false);
        }
        break;

      case "Escape":
        setIsOpen(false);
        break;

      default:
        break;
    }
  };

  const handleOptionClick = (option) => {
    alert(`You selected: ${option}`);
    setIsOpen(false);
  };

  return (
    <div className="w-full flex justify-center bg-gray-800 h-screen">
      <div className="relative w-64" onKeyDown={handleKeyDown}>
        <button
          onClick={toggleDropdown}
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none"
        >
          {isOpen ? "Close" : "Opan"} Dropdown
        </button>

        {isOpen && (
          <ul
            ref={menuRef}
            className="absolute w-full mt-2 bg-white border rounded-md shadow-lg"
          >
            {options.map((option, index) => (
              <li
                key={option}
                onClick={() => handleOptionClick(option)}
                className={`px-4 py-2 cursor-pointer ${activeIndex === index
                  ? "bg-blue-100 text-blue-700"
                  : "hover:bg-gray-100"
                  }`}
                onMouseEnter={() => setActiveIndex(index)}>
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Dropdown