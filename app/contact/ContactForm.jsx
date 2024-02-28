"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS template parameters
    const templateParams = {
      from_name: formData.name,
      from_phone: formData.phone,
      message: formData.message,
    };

    const serviceID = "service_4hcqo7e";
    const templateID = "template_rqj3raj";
    const userID = "3lIub6MNQ00WjXonm";

emailjs
  .send(serviceID, templateID, templateParams, userID)
  .then((response) => {
    console.log("Email sent!", response);
    // Reset form after successful submission
    setFormData({ name: "", email: "", message: "" });
    // Add an alert for success
    alert("Email sent successfully!");
  })
  .catch((error) => {
    console.error("Email error:", error);
    // Add an alert for error
    alert("Failed to send email. Please try again later.");
  });

  };

  return (
    <div className="w-screen h-screen  flex justify-center px-6 sm:px-12 items-center">
      <form
        className="bg-[#1e1e1e] w-full max-w-4xl shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-100 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-100 text-sm font-bold mb-2"
            htmlFor="phone"
          >
            Phone number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="phone"
            placeholder="Your phone number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-100 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full pt-4 pb-12 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-gray-50 hover:bg-gray-200 text-[#1e1e1e] font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
