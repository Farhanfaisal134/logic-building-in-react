import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context";

const Navbar = () => {
  const { handleSubmit, searchParam, setSearchParam } = useContext(GlobalContext);

  return (
    <nav className="flex flex-col gap-5 lg lg:justify-between items-center px-6 py-4 shadow-md
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
            className="text-black hover:text-gray-700 duration-300 text-xl font-bold"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to={"/favorites"}
            className="text-black hover:text-gray-700 duration-300 text-xl font-bold"
          >
            Favorites
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
