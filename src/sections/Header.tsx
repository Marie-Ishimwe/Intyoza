"use client";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("hero");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (id: string) => {
    setActiveLink(id);
    setIsMenuOpen(false); // Close menu after clicking
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Update active link on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "app-overview", "training-center"];
      for (const id of sections) {
        const section = document.getElementById(id);
        if (
          section &&
          section.offsetTop <= window.scrollY + 100 &&
          section.offsetTop + section.offsetHeight > window.scrollY + 100
        ) {
          setActiveLink(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Navigation links array
  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "app-overview", label: "Intyoza App" },
    { id: "training-center", label: "Training center" },
  ];

  const renderLinks = (isMobile: boolean) =>
    navLinks.map(({ id, label }) => (
      <div className="relative inline-block" key={id}>
        <a
          href={`#${id}`}
          onClick={() => handleLinkClick(id)}
          className={`transition-all duration-300 
            hover:text-green-800 
            ${activeLink === id ? "text-green-800 font-bold" : "text-black/70"} 
            ${isMobile ? "block pt-4" : ""}`}
        >
          {label}
        </a>
        {/* Green dot for active link */}
        {activeLink === id && (
          <div className="hidden md:block absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-800 rounded-full" />
        )}
      </div>
    ));

  return (
    <header className="sticky top-0 z-50 bg-[#EAEEFE] w-full p-3">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <span className="font-bold text-2xl text-green-800">
            Intyoza Solutions
          </span>

          {/* Menu Icon (for small screens) */}
          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <FiX size={24} color="black" />
            ) : (
              <FiMenu size={24} color="black" />
            )}
          </button>

          {/* Navigation (Desktop) */}
          <nav className="hidden md:flex items-center gap-6">
            {renderLinks(false)}
            <Button className="bg-green-800 font-medium">Sign in</Button>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#EAEEFE] w-full">
          <nav className="flex flex-col gap-4 p-4">{renderLinks(true)}</nav>
          <Button className="bg-green-800 font-medium">Sign in</Button>
        </div>
      )}
    </header>
  );
};
