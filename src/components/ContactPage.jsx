import React from 'react';

const ContactPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen px-4 py-16 flex flex-col md:flex-row items-center justify-center gap-6">
      {/* Left Side - Title + Text */}
      <div className="md:w-1/2 text-center md:text-left max-w-md">
        <h2 className="text-4xl font-extrabold text-purple-800 mb-4">
          Get In Touch
        </h2>
        <p className="text-gray-600 mb-6">
          We'd love to hear from you! Whether you have a question about loans, features, or anything else — our team is ready to help.
        </p>
      </div>

      {/* Right Side - Contact Form */}
      <div className="bg-white rounded-lg shadow-md w-full max-w-md p-8 border-t-8 border-purple-300">
        <h3 className="text-2xl font-bold text-purple-800 mb-6 text-center">Send Message</h3>
        <form className="space-y-5">
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <textarea
            rows="5"
            placeholder="Write Your Message"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          ></textarea>
          <button
            type="submit"
            className="bg-purple-700 text-white px-6 py-2 rounded-full hover:bg-purple-800 transition-colors w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
