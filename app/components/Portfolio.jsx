import React from "react";

function Portfolio() {
  const data = [
    {
      imageLink:
        "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      imageLink:
        "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    },
    {
      imageLink:
        "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    },
    {
      imageLink:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    },
    {
      imageLink:
        "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    },
    {
      imageLink:
        "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    },
    {
      imageLink:
        "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg",
    },
    {
      imageLink:
        "https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg",
    },
    {
      imageLink:
        "https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80",
    },
  ];

  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20 text-center">
      <h1 className="text-6xl md:text-7xl lg:text-7xl font-black text-gray-900 tracking-wider uppercase mb-8">
        Галерия<span className="text-[#b76e78]">.</span>
      </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-3">
        {data.map(({ imageLink }, index) => (
          <div key={index}>
            <img
              className="h-70 w-full max-w-full rounded-lg object-cover object-center transition-transform duration-300 md:hover:scale-105"
              src={imageLink}
              alt="gallery-photo"
            />
          </div>
        ))}
      </div>
      <a
        href="https://www.instagram.com/kddimitrova/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-[#b76e78] text-white font-semibold rounded-full shadow-md hover:bg-[#a25d67] transition-colors duration-300 my-10"
      >
        Разгледай още
      </a>
    </div>
  );
}

export default Portfolio;
