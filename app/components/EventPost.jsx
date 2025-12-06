import React from "react";

const EventPost = ({ title, description, sections, optionalSection }) => {
  return (
    <section className="max-w-5xl mx-auto my-12 p-6 bg-white shadow-md rounded-2xl">
      {/* Header */}
      <div className="mb-20 text-center">
        <h1 className="text-5xl font-semibold text-gray-800 mb-2">{title}</h1>
        <p className="text-gray-600">{description}</p>
      </div>

      <div className="space-y-20">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="md:w-1/2 w-full">
              <img
                src={section.image}
                alt={`section-${index}`}
                className="w-full h-75 object-cover rounded-2xl shadow-sm"
              />
            </div>

            <div className="md:w-1/2 w-full text-gray-700 leading-relaxed space-y-3">
              {section.title && (
                <h3 className="text-2xl font-semibold text-gray-800">
                  {section.title}
                </h3>
              )}
              <p>{section.text}</p>
            </div>
          </div>
        ))}

        {optionalSection && (
          <div className="mt-16">
            {optionalSection.type === "carousel" && optionalSection.component}
          </div>
        )}
      </div>
    </section>
  );
};

export default EventPost;
