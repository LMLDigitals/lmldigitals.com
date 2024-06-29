// components/ContactForm.tsx
'use client'

import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // You can add form submission logic here (e.g., API call)
  };

  return (
    <div className="border-yellow-500 px-4 sm:px-6 lg:px-8 m-11">
      <form className="max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 md:p-8 lg:p-10 xl:p-12 mt-11">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-6 text-center">Contact Us</h2>
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-bold text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring focus:border-blue-300"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm font-bold text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring focus:border-blue-300"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="phone" className="block text-sm font-bold text-gray-700">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring focus:border-blue-300"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="subject" className="block text-sm font-bold text-gray-700">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring focus:border-blue-300"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-8">
          <label htmlFor="message" className="block text-sm font-bold text-gray-700">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring focus:border-blue-300"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 md:px-8 md:py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
