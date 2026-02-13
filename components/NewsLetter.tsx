"use client";

import { Mail } from "lucide-react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      toast("Thank you for Subscribing");
    } else {
      toast("An error occured");
    }
    setEmail("");

    return res.json();
  };

  return (
    <section
      className="bg-[#5E4C7E] py-16 px-4 sm:px-6 lg:px-8"
      id="newsletter"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6">
          <Mail className="h-8 w-8 text-blue-600" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Subscribe to our newsletter
        </h2>
        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
          Get the latest articles, insights, and updates delivered directly to
          your inbox every week.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 w-full"
          >
            <input
              required
              type="email"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white border-0 h-12 px-4 rounded-[0.4rem] w-full"
            />
            <button
              type="submit"
              className="bg-gray-900 hover:bg-gray-800 text-white whitespace-nowrap h-12 px-4 rounded-[0.4rem] cursor-pointer"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}
