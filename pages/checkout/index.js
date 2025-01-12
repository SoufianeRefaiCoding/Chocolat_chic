"use client";

import React, { useState } from "react";
import { useCart } from "react-use-cart";
import { useRouter } from "next/navigation";

const Checkout = () => {
  const { items = [], cartTotal = 0, emptyCart } = useCart();
  const [location, setLocation] = useState("rabat-sale");
  const router = useRouter();

  const getShippingCost = () => {
    return location === "rabat-sale" ? 25 : 40;
  };

  const shippingCost = getShippingCost();
  const totalPrice = cartTotal + shippingCost;

  const generateWhatsAppMessage = () => {
    const orderDetails = items
      .map((item) => `- ${item.title} x${item.quantity} ($${item.price.toFixed(2)})`)
      .join("\n");

    return encodeURIComponent(
      `🛒 New Order:\n\n${orderDetails}\n\n🚚 Shipping Location: ${location}\n🚛 Shipping Cost: $${shippingCost}\n💰 Total: $${totalPrice.toFixed(
        2
      )}\n\nPlease confirm the order.`
    );
  };

  const handlePlaceOrder = () => {
    const message = generateWhatsAppMessage();
    const phoneNumber = "+212612631518"; // Your WhatsApp number in international format
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    // Redirect to WhatsApp with pre-filled message
    window.open(whatsappUrl, "_blank");

    // Optionally clear the cart and redirect to confirmation page
    emptyCart();
    router.push("/confirmation");
  };

  return (
    <div className="bg-[radial-gradient(closest-side,_#2B2118,_#3E2C24)] text-white min-h-screen p-6 font-montserrat">
      <div className="max-w-5xl mx-auto bg-black bg-opacity-40 shadow-2xl rounded-lg p-8">
        <h1 className="text-4xl font-cinzel text-yellow-300 text-center">
          Checkout
        </h1>
        <div className="mt-6">
          <h2 className="text-2xl font-cinzel text-yellow-300 mb-4">
            Order Summary
          </h2>
          <div className="bg-black bg-opacity-30 p-6 rounded-lg shadow-md">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center text-gray-300"
              >
                <span>{item.title} x{item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t border-gray-600 mt-6 pt-4">
              <div className="flex justify-between items-center text-yellow-400">
                <span>Shipping Cost</span>
                <span>${shippingCost.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center text-yellow-400 mt-2">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <label className="block text-sm font-semibold text-gray-300">
            Shipping Location
          </label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full mt-2 p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="rabat-sale">Rabat-Sale</option>
            <option value="outside">Outside Rabat-Sale</option>
          </select>
        </div>
        <div className="mt-8 text-center">
          <button
            onClick={handlePlaceOrder}
            className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600 transition"
          >
            Place Order via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
