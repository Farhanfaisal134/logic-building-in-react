import React from "react";
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { GlobalContext } from "../context";

const Navbar = () => {
  const { handleSubmit, searchParam, setSearchParam, favoritesList } = useContext(GlobalContext);
  const location = useLocation();

  return (
    <nav className="flex flex-col gap-5 lg lg:justify-between items-center md:px-12 px-4 py-4 shadow-md
     lg:flex-row lg:gap-0">
      <h1 className="text-2xl font-bold">
        <Link to={"/"}>FoodRecipe</Link>
      </h1>
      <form onSubmit={handleSubmit} className="lg:w-[30%] w-full">
        <input
          className="border border-gray-300 w-full p-2 text-xl outline-none rounded-lg shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition 
          duration-200 ease-in-out hover:border-blue-400"
          placeholder="Type here..."
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
        />
      </form>
      <ul className="flex gap-5">
        <li>
          <Link
            to={"/"}
            className={`text-black duration-300 text-xl font-bold pb-1
              ${location.pathname === "/" ? "border-b-4 border-gray-500 text-gray-700" : ""}`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to={"/favorites"}
            className={`text-black  duration-300 text-xl font-bold pb-1
              ${location.pathname === "/favorites" ? "border-b-4 border-gray-500" : ""}`}
          >
            Favorites {`(${favoritesList.length})`}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
