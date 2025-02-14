import React from 'react'
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../store/slices/cartslice';

const CartItem = ({ cartItem }) => {

  const dispatch = useDispatch();

  function handleRemoveFromCart() {
    dispatch(removeFromCart(cartItem.id));
  };

  return (
    <div className="flex flex-col items-center p-5 md:flex-row md:justify-between bg-red-500 mt-2 mb-2 gap-4 rounded-xl">
      <img
        src={cartItem?.image}
        className="h-28 rounded-lg"
        alt={cartItem?.title}
      />
      <div className="flex justify-center items-center flex-col gap-2">
        <h1 className="text-xl text-white font-bold">
          {cartItem?.title.length > 10
            ? `${cartItem.title.slice(0, 10)}...`
            : cartItem.title}
        </h1>
        <p className="text-white font-extrabold">{cartItem?.price}</p>
      </div>
      <div>
        <button
          onClick={handleRemoveFromCart}
          className="bg-red-950 text-white border-2 rounded-lg font-bold p-4"
        >
          Remove From cart
        </button>
      </div>
    </div>
  )
}

export default CartItem