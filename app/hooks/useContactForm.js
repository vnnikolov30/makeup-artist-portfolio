"use client";

const accessKey = "1391f425-68d3-46e3-aef8-b3fb64771db9";

import { faL } from "@fortawesome/free-solid-svg-icons";
import { use, useState } from "react";

export const useContactForm = () => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("Sending...");

    const formData = new FormData(event.target);

    if (formData.get("honeypot")) {
      setResult("Spam detected. Submission blocked.");
      setLoading(false);
      return;
    }

    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      if (data.success) {
        setResult("Sent ✅");
      } else {
        setResult(data.message || "Submission");
      }
    } catch (error) {
      console.error("Submission error", error);
      setResult("Something went wrong. Please try again");
    }
  };
  return { result, loading, handleSubmit };
};
