import React from "react";

function Pricing({ services }) {
  return (
    <div className="max-w-3xl mx-auto mt-12 p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-3xl font-bold text-center mb-6">Цени</h2>
      <ul className="space-y-4">
        {services.map((service) => (
          <li
            key={service.name}
            className="flex justify-between items-center border-b pb-2"
          >
            <span className="text-lg">{service.name}</span>
            <span className="font-semibold">
              {service.price} лв
              {service.savingInfo && (
                <span className="text-green-600 ml-5">({service.savingInfo})</span>
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pricing;
