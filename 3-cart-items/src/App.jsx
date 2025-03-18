import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, updateQty } from "./store";

const products = [
  { id: 1, name: "Product A" },
  { id: 2, name: "Product B" },
  { id: 3, name: "Product C" },
];

const App = () => {
  const { cartItem } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="p-8 flex justify-between">
      {/* Product List */}
      <div className="border-4 p-2 flex flex-col gap-2 items-center w-1/2">
        {
          products.map((item) => (
            <div key={item.id} className="flex gap-2 justify-center">
              <h1 className="text-xl">{item.name}</h1>
              <button
                onClick={() => dispatch(addItem(item))}
                className="px-3 py-1 bg-blue-500 rounded-sm text-white"
              >
                Add To Cart
              </button>
            </div>
          ))
        }
      </div>

      {/* Cart */}
      <div className="border-4 p-2 w-1/2 flex flex-col gap-3">
        {
          cartItem.length ? (
            cartItem.map((item) => (
              <div key={item.id} className="flex gap-2 justify-center text-white">
                <h1 className="text-black">{item.name}</h1>
                <button
                  onClick={() => dispatch(updateQty({ id: item.id, qty: item.qty + 1 }))}
                  className="px-2 py-[2px] bg-blue-600">
                  +
                </button>
                <h4 className="text-black">{item.qty}</h4>
                <button
                  onClick={() => item.qty > 1 && dispatch(updateQty({ id: item.id, qty: item.qty - 1 }))}
                  className="px-2 py-[2px] bg-blue-600">
                  -
                </button>
                <button
                  onClick={() => dispatch(removeItem(item.id))}
                  className="px-2 py-[2px] bg-red-600">
                  Remove
                </button>
              </div>
            ))
          ) : (
            <p className="text-center">Store Khali Han</p>
          )
        }
      </div>
    </div>
  );
};

export default App;
