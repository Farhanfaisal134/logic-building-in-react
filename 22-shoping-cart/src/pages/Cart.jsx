import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [totalCart, setTotalCart] = useState(0);

  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="flex justify-center">
      {cart && cart.length ? (
        <>
          <div className="min-h-[80vh] grid md:grid-cols-2 place-items-center max-w-6xl mx-auto">
            <div className="flex flex-col p-3">
              {cart.map((cartItem) => (
                <CartItem cartItem={cartItem} />
              ))}
            </div>

            <div className="flex flex-col justify-center p-5 space-y-5">
              <h1 className="font-bold text-lg text-red-800">
                Your Cart Summary
              </h1>
              <p>
                <span className="text-gray-800 font-bold">Total Item</span>
                <span>: {cart.length}</span>
              </p>
              <p>
                <span className="text-gray-800 font-bold">Total Amount</span>
                <span>: {totalCart}</span>
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-800 font-bold text-xl mb-2">
            Your cart is empty
          </h1>
          <Link to="/">
            <button className="bg-red-950 text-white border-2 rounded-lg font-bold p-4">
              SHOP NOW
            </button>
          </Link>
        </div>
      )}
    </div>
  )
};

export default Cart;