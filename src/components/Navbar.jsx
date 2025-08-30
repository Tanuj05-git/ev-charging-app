"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SignedOut, SignedIn, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  const navRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    // Navbar container animation
    gsap.from(navRef.current, {
      y: -80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Navbar links + buttons animation
    gsap.from(linksRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.8,
      stagger: 0.2,
      delay: 0.5,
      ease: "power2.out",
    });
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] sm:w-[90%] md:w-[85%] 
      rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 
      shadow-lg z-50 px-6 py-3 flex items-center justify-between"
    >
      {/* Logo */}
      <div className="text-xl font-bold text-[#6c47ff]">⚡ EV Station</div>

      {/* Links */}
      <ul className="hidden md:flex gap-6 text-[#6c47ff] font-medium">
        {["Home", "Charging", "Products", "About", "Contact"].map((item, index) => (
          <li
            key={item}
            ref={(el) => (linksRef.current[index] = el)}
            className="hover:text-purple-400 transition-colors duration-300 cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Auth Buttons */}
      <div ref={(el) => (linksRef.current[5] = el)} className="flex items-center gap-3">
        <SignedOut>
          <SignInButton />
          <SignUpButton>
            <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer hover:bg-[#5b3ce0] transition">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
