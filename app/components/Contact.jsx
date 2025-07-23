import React from "react";

function Contact() {
  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 text-center"
    >
      <h1 className="text-6xl md:text-7xl lg:text-7xl font-black text-gray-900 tracking-wider uppercase mb-8">
        Get in touch<span className="text-[#b76e78]">.</span>
      </h1>

      <form className="max-w-2x1 mx-auto">
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <input
            type="text"
            placeholder="Name"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
          />
          <textarea
            rows="6"
            placeholder="Enter your message..."
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
          ></textarea>
          <button
            type="submit"
            className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500"
          >
            Submit
          </button>
        </div>
      </form>
      <p>or conact me here </p>
      <div className="grid grid-cols-2 gap-6">
        <a
          href="https://www.instagram.com/kddimitrova/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-[#b76e78] text-white font-semibold rounded-full shadow-md hover:bg-[#a25d67] transition-colors duration-300 my-10"
        >
          Instagram
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100075947871981"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-[#b76e78] text-white font-semibold rounded-full shadow-md hover:bg-[#a25d67] transition-colors duration-300 my-10"
        >
          Facebook
        </a>
      </div>
    </div>
  );
}

export default Contact;
