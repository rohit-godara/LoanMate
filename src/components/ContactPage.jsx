import React from 'react';

const ContactPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 flex flex-col md:flex-row items-center justify-center gap-10">
      {/* Left Side - Title + Text */}
      <div className="md:w-1/2 text-center md:text-left max-w-lg">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-purple-800 mb-4">
          Get In Touch
        </h2>
        <p className="text-gray-600 text-base sm:text-lg mb-6">
          We'd love to hear from you! Whether you have a question about loans, features, or anything else — our team is ready to help.
        </p>
      </div>

      {/* Right Side - Contact Form */}
      <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-6 sm:p-8 border-t-8 border-purple-300">
        <h3 className="text-xl sm:text-2xl font-bold text-purple-800 mb-6 text-center">
          Send Message
        </h3>
        <form className="space-y-5">
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <textarea
            rows="5"
            placeholder="Write Your Message"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
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
