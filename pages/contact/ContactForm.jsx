"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending the message. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-6 my-3">
        <div className="w-1/2">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="w-full text-lg px-4 py-1.5 rounded shadow-md outline-none"
          />
        </div>
        <div className="w-1/2">
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="w-full text-lg px-4 py-1.5 rounded shadow-md outline-none"
          />
        </div>
      </div>
      <div className="flex gap-6 my-3">
        <div className="w-1/2">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full text-lg px-4 py-1.5 rounded shadow-md outline-none"
          />
        </div>
        <div className="w-1/2">
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full text-lg px-4 py-1.5 rounded shadow-md outline-none"
          />
        </div>
      </div>
      <div className="my-3">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          className="w-full text-lg px-4 py-1.5 rounded shadow-md outline-none min-h-32"
        />
      </div>
      <div className="mt-6 flex justify-end">
        <button
          type="submit"
          className="bg-white rounded text-black hover:text-white hover:bg-chocolate-700 transition-all ease-linear py-2 px-3 font-cinzel uppercase shadow"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
