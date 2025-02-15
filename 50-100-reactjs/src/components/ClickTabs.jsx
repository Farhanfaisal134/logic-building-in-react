import React from "react";
import { useState } from "react";

function RandomComponent() {
  return (
    <h1 className="text-2xl text-red-500 text-center m-4">
      Some random content
    </h1>
  );
}

const tabs = [
  {
    label: "Tab 1",
    content: (
      <div className="text-2xl text-red-500 text-center m-4">
        This is content for Tab 1
      </div>
    ),
  },
  {
    label: "Tab 2",
    content: (
      <div className="text-2xl text-red-500 text-center m-4">
        This is content for Tab 2
      </div>
    ),
  },
  {
    label: "Tab 3",
    content: <RandomComponent />,
  },
];

const ClickTabs = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  return (
    <div className="p-8">
      {/* Tab Buttons */}
      <div className="flex justify-center space-x-4 cursor-pointer">
        {tabs.map((tabItem, index) => (
          <div
            key={index}
            className={`px-6 py-2 rounded-t-lg transition-colors duration-300 
              ${currentTabIndex === index ? "bg-green-500" : "bg-purple-700 hover:bg-purple-500"}`}
            onClick={() => setCurrentTabIndex(index)}
          >
            <span className="text-white font-bold">{tabItem.label}</span>
          </div>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-6 border-t-2 border-gray-200 bg-gray-100 mt-2 rounded-b-lg">
        {tabs[currentTabIndex] && tabs[currentTabIndex].content}
        {/* {curnIdx === idx && item.display} */}
      </div>
    </div>
  );
};

export default ClickTabs;
