"use client";

import React, { useState } from "react";
import { useCart } from "react-use-cart";
import { useRouter } from "next/navigation";
const Checkout = () => {
  const { items = [], cartTotal = 0, emptyCart } = useCart();
  const [location, setLocation] = useState("rabat-sale");
  const router = useRouter();

  // Calculate shipping cost based on location
  const getShippingCost = () => {
    return location === "rabat-sale" ? 25 : 40;
  };

  const shippingCost = getShippingCost();
  const totalPrice = cartTotal + shippingCost;

  return (
    <div className="bg-[radial-gradient(closest-side,_#2B2118,_#3E2C24)] text-white min-h-screen p-6 font-montserrat">
      <div className="max-w-5xl mx-auto bg-black bg-opacity-40 shadow-2xl rounded-lg p-8">
        {/* Header */}
        <div className="text-center border-b border-gray-700 pb-6">
          <h1 className="text-4xl font-cinzel text-yellow-300">Checkout</h1>
          <p className="mt-2 text-gray-300 text-lg">
            Complete your purchase and enjoy!
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Billing Details */}
          <div className="col-span-2 bg-black bg-opacity-30 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-cinzel text-yellow-300 mb-4">
              Billing Information
            </h2>
            {/* //form shiping */}
            <form>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-300">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full mt-1 p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full mt-1 p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div className="mt-4">
                <label className="block text-sm font-semibold text-gray-300">
                  Address
                </label>
                <input
                  type="text"
                  className="w-full mt-1 p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="123 Street Name"
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm font-semibold text-gray-300">
                  City
                </label>
                <input
                  type="text"
                  className="w-full mt-1 p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Your City"
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm font-semibold text-gray-300">
                  Phone
                </label>
                <input
                  type="text"
                  className="w-full mt-1 p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="0600000000"
                />
              </div>
              <div className="mt-6">
                <h2 className="text-lg font-cinzel text-yellow-300 mb-2">
                  Shipping Information
                </h2>
                <label className="block text-sm font-semibold text-gray-300">
                  Select your location:
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full mt-1 p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  <option value="rabat-sale">Rabat/Salé</option>
                  <option value="outside">Outside Rabat/Salé</option>
                </select>
                <p className="mt-2 text-gray-300">
                  <span className="font-semibold text-white">Shipping Cost:</span>{" "}
                  ${shippingCost.toFixed(2)}
                </p>
              </div>
            </form>
           </div>

          {/* Order Summary */}
          <div className="bg-black bg-opacity-30 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-cinzel text-yellow-300 mb-4">
              Order Summary
            </h2>
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center text-gray-300"
                >
                  <span className="font-semibold text-white">
                    {item.title} x{item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-600 mt-6 pt-4 text-lg text-yellow-400">
              <div className="flex justify-between items-center">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Shipping</span>
                <span>${shippingCost.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center font-bold text-white mt-4">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 text-center">
          <button
            onClick={() => {
              emptyCart();
              router.push("/confirmation");
            }}
            className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600 transition"
          >
            Place Order
          </button>
          <p className="mt-4 text-sm text-gray-400">
            By clicking "Place Order", you agree to our terms and conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
