import React, { useState } from 'react'
import { FaMinus, FaPlus } from "react-icons/fa";

const menus = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Profile",
    to: "/profile",
    children: [
      {
        label: "Details",
        to: "details",
        children: [
          {
            label: "Location",
            to: "location",
            children: [
              {
                label: "City",
                to: "city",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Settings",
    to: "/settings",
    children: [
      {
        label: "Account",
        to: "account",
      },
      {
        label: "Security",
        to: "security",
        children: [
          {
            label: "Login",
            to: "login",
          },
          {
            label: "Register",
            to: "register",
            children: [
              {
                label: 'Random data',
                to: ''
              }
            ]
          },
        ],
      },
    ],
  },
];

const TreeLikeStr = () => {
  return (
    <div className="min-h-screen w-1/3 p-6 bg-gray-900 text-gray-100">
      <div className="space-y-4">
        {
          menus.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))
        }
      </div>
    </div>
  )
};

const MenuItem = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className="flex flex-col space-y-2">
      <div className="flex justify-between items-center p-4 bg-gray-800 rounded-md hover:bg-gray-700 transition duration-200">
        <p className="text-lg font-medium">{item.label}</p>
        {item.children && item.children.length > 0 && (
          <span
            className="cursor-pointer text-xl text-gray-400 hover:text-white transition"
            onClick={toggleExpand}
          >
            {isExpanded ? <FaMinus /> : <FaPlus />}
          </span>
        )}
      </div>

      {/* Nested Children */}
      {
        isExpanded && item.children && (
          <div className="ml-6 border-l-2 border-gray-600 pl-4">
            {item.children.map((childItem, index) => (
              <MenuItem key={index} item={childItem} />
            ))}
          </div>
        )
      }
    </div>
  );
}

export default TreeLikeStr