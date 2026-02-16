"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <section
      className="bg-linear-to-b from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8"
      id="about"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 grid-rows-1 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 md:order-1">
            <div className="inline-block px-4 py-2 bg-blue-50 text-[#5E4C7E] rounded-full text-sm mb-6">
              Welcome to Black At Western Alumni
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our Mission
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              The Black at Western Alumni (BAWA) association at Western
              University is a transformative force dedicated to fostering a
              vibrant, supportive, and empowering community for Black students
              and alumni. Through mentorship, networking opportunities,
              community engagement and advocacy. BAWA strives to strengthen the
              Black student and graduate experience, deepen connections with
              London’s Black community, and celebrate Black excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="flex items-center bg-[#5E4C7E] hover:bg-[#75649A] text-white py-3 px-4 rounded-2xl cursor-pointer justify-center"
                onClick={() => handleNavClick("#articles")}
              >
                Start Reading
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative order-1 md:order-2">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/bawa.jpeg"
                alt="Modern workspace"
                className="w-full h-100 "
                width={400}
                height={400}
              />
            </div>
            {/* Floating Card */}
            {/* <div className="absolute bottom-8 left-8 bg-white p-6 rounded-xl shadow-xl max-w-xs">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-purple-600 rounded-full"></div>
                <div>
                  <p className="font-semibold text-gray-900">5</p>
                  <p className="text-sm text-gray-500">Active Readers</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
