"use client";

import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <header className="border-b sticky top-0 z-50">
        {mobileMenuOpen ? (
          <>
            <div className="fixed h-screen left-0 right-0 top-0 shadow-lg z-50 bg-white">
              <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 py-6">
                <h1 className="text-3xl text-[#5E4C7E]">BAWA</h1>
                <IoMdClose
                  onClick={toggleMenu}
                  className="md:hidden text-3xl cursor-pointer text-black"
                />
              </div>
              <div
                className={`inset-x-0 top-full z-50 h-full bg-white transform transition-transform duration-300 ease-in-out ${
                  mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
                }`}
              >
                <div className="p-4">
                  <nav>
                    <ul className="space-y-4 text-center">
                      <li>
                        <a
                          href="/"
                          className="block p-2 text-gray-700 hover:bg-gray-100 rounded"
                          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          href="#articles"
                          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                          className="block p-2 text-gray-700 hover:bg-gray-100 rounded"
                        >
                          About
                        </a>
                      </li>
                      <li>
                        <a
                          href="#about"
                          className="block p-2 text-gray-700 hover:bg-gray-100 rounded"
                          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                          Articles
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center">
                <a href="/" className="text-2xl font-semibold text-[#5E4C7E]">
                  BAWA
                </a>
              </div>

              {/* Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                <button
                  onClick={() => handleNavClick("#about")}
                  className="text-gray-700 hover:text-gray-900 hover:cursor-pointer hover:translate-x-0.5
               transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => handleNavClick("#articles")}
                  className="text-gray-700 hover:text-gray-900 hover:cursor-pointer hover:translate-x-0.5 transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => handleNavClick("#about")}
                  className="text-gray-700 hover:text-gray-900 hover:cursor-pointer hover:translate-x-0.5 transition-colors"
                >
                  Articles
                </button>
              </nav>

              {/* Actions */}
              <div className="flex items-center space-x-4">
                <button
                  className="hidden md:flex md:bg-[#5E4C7E] md:hover:bg-[#75649A] text-white md:px-4 md:rounded-md md:py-1.5 cursor-pointer hover:translate-0.5 hover:transition delay-150 duration-300 ease-in-out"
                  onClick={() => handleNavClick("#newsletter")}
                >
                  Subscribe
                </button>
                <MdMenu
                  onClick={toggleMenu}
                  className="md:hidden text-3xl cursor-pointer text-black"
                />
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
