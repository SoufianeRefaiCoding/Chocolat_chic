// app/order/page.jsx
"use client";
import Footer from "@/components/Footer";
import Header from "@/components/header";
import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const OrderPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    product: "",
    quantity: 1,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order Submitted", formData);
    // Here, you can handle API calls to submit the form data.
    alert("Order submitted successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      product: "",
      quantity: 1,
      message: "",
    });
  };

  return (<>
    <Header/>
    <div className="min-h-screen bg-[radial-gradient(closest-side,_#2B2118,_#3E2C24)] flex items-center justify-center p-6">
      <div className="bg-black p-10 bg-opacity-35  rounded-lg shadow-lg max-w-3xl w-full">
        <h1 className="text-3xl font-cinzel text-white mb-4">Order Form</h1>
        <p className="text-white/80 font-cinzel mb-8">Fill in the details below to place your order.</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-white/80 font-cinzel font-medium mb-2" htmlFor="name">
              Full Name <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-chocolate-700"
            />
          </div>

          

          {/* Phone */}
          <div>
            <label className="block text-white/80 font-cinzel font-medium mb-2" htmlFor="phone">
              Phone Number <span className="text-red-700">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-chocolate-700"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-white/80 font-cinzel font-medium mb-2" htmlFor="address">
              Delivery Address <span className="text-red-700">*</span>
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your delivery address"
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-chocolate-700"
            ></textarea>
          </div>

          {/* Product */}
          <div>
            <label className="block text-white/80 font-cinzel font-medium mb-2" htmlFor="product">
              Product <span className="text-red-700">*</span>
            </label>
            
            <select name="" id="" required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-chocolate-700">
                <option value="produc 0" selected disabled>chose your product</option>
                <option value="produc 1">product 1</option>
                <option value="produc 2">product 2</option>
                <option value="produc 3">product 3</option>
            </select>
          </div>

          {/* Quantity */}
          <div>
            <label className="block text-white/80 font-cinzel font-medium mb-2" htmlFor="quantity">
              Quantity Kg <span className="text-red-700">*</span>
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              min="1"
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-chocolate-700"
            />
          </div>

          {/* Additional Message */}
          <div>
            <label className="block text-white/80 font-cinzel font-medium mb-2" htmlFor="message">
              Additional Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter any additional instructions"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-chocolate-700"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-chocolate-800 text-white py-3 px-6 rounded-lg hover:bg-chocolate-700 transition duration-300"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
   {/* Contact Info */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 p-4 bg-[radial-gradient(closest-side,_#2B2118,_#3E2C24)] ">
              <div className="flex items-center justify-center space-x-3 bg-black bg-opacity-40 px-8 py-10 rounded-xl">
                <FaEnvelope className="text-xl text-white" />
                <span className="text-xl text-white font-cinzel ">info@example.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3 bg-black bg-opacity-40 px-8 py-10 rounded-xl">
                <FaPhone className="text-xl text-white" />
                <span className="text-xl text-white font-cinzel">+123 456 7890</span>
              </div>
              <div className="flex items-center justify-center space-x-3 bg-black bg-opacity-40 px-8 py-10 rounded-xl">
                <FaMapMarkerAlt className="text-xl text-white" />
                <span className="text-xl text-white font-cinzel">Sale Morocco</span>
              </div>
            </section>
    <Footer/>
    </> );
};

export default OrderPage;
