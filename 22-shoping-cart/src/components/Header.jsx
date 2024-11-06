import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";

const Header = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="flex flex-col gap-4 w-full md:flex-row md:justify-between 
    items-center max-w-6xl mx-auto py-6">
      <Link to={"/"}>
        <h1 className="text-red-900 font-bold text-xl sm:text-2xl md:text-3xl 
        cursor-pointer tracking-wide">
          REACT REDUX SHOPPING CART
        </h1>
      </Link>
      <ul className="flex list-none items-center space-x-6 text-gray-800 
      font-semibold flex-col md:flex-row">
        <Link to={"/"}>
          <li className="cursor-pointer list-none text-2xl font-semibold">Home</li>
        </Link>
        <Link
          to={"/cart"}
          className="w-14 h-14 rounded-full flex items-center justify-center p-3
           hover:bg-gray-400 relative">
          <span className="absolute top-0 right-0 w-6 h-6 flex items-center 
          justify-center rounded-full bg-gray-500 text-white">
            {cart.length}
          </span>
          {cart.length ? < MdOutlineAddShoppingCart size={40} /> : <MdOutlineRemoveShoppingCart size={40} />}
        </Link>
      </ul>
    </div>
  );
};

export default Header;
