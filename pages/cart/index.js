"use client";

import React from "react";
import { useCart } from "react-use-cart";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

const Cart = () => {
  const { items = [], updateItemQuantity, cartTotal = 0 } = useCart();
  const router = useRouter();

  return (
    <div className="bg-[radial-gradient(closest-side,_#2B2118,_#3E2C24)] text-white min-h-screen p-6 font-montserrat">
      <div className="max-w-4xl mx-auto bg-black bg-opacity-40 shadow-2xl rounded-lg">
        {/* Header */}
        <div className="p-8 border-b border-gray-700 text-center">
          <h1 className="text-4xl font-cinzel text-yellow-300">
            Your Shopping Cart
          </h1>
          <p className="mt-2 text-gray-300 text-lg">
            Review your items before checkout
          </p>
        </div>

        {/* Cart Content */}
        {items.length > 0 ? (
          <div className="p-6 space-y-8">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center space-x-6 bg-black bg-opacity-30 rounded-lg p-4 shadow-md"
              >
                {/* Image */}
                <div className="flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                </div>

                {/* Item Details */}
                <div className="flex-1">
                  <h2 className="text-xl font-cinzel text-yellow-400">
                    {item.title}
                  </h2>
                  <p className="text-gray-400 mt-1 text-sm">
                      {item.price.toFixed(2)}DH X {item.quantity}   {/*{item.price*item.quantity}$ */}
                  </p>
                  <div className="mt-3 flex items-center space-x-4">
                    <button
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                      className="bg-gray-700 text-yellow-300 px-4 py-1 rounded-full hover:bg-yellow-400 hover:text-black transition"
                    >
                      -
                    </button>
                    <span className="text-lg font-semibold text-white">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                      className="bg-gray-700 text-yellow-300 px-4 py-1 rounded-full hover:bg-yellow-400 hover:text-black transition"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Total */}
            <div className="text-right">
              <h3 className="text-3xl font-cinzel text-yellow-400">
                Total: ${cartTotal.toFixed(2)}
              </h3>
            </div>
          </div>
        ) : (
          <div className="p-8 text-center">
            <p className="text-2xl font-cinzel text-gray-400">
            Your cart is currently empty. 😢
            </p>
            <p className="mt-4 text-lg font-montserrat text-gray-500">
              Add some products to see them here.
            </p>
          </div>
        )}

        {/* Footer */}
        <div className="p-6 bg-black bg-opacity-50 border-t border-gray-700 flex justify-between items-center">
          <button >
            <Link
          href="/checkout"
          className={"px-6 py-2 bg-gray-800 text-yellow-300 font-semibold rounded-lg shadow hover:bg-yellow-400 hover:text-black transition"}
        >
          Continue Shopping
        </Link> 
          </button>
          {items.length > 0 && (
            <button
              
              className=""
            >
              <Link
          href="/checkout"
          className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600 transition"
        >
          Checkout
        </Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
