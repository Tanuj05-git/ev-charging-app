"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { SignedOut, SignInButton, SignUpButton, SignedIn, UserButton } from "@clerk/nextjs";
import { Menu, X } from "lucide-react"; // hamburger & close icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  // GSAP animation for mobile menu
  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.6, ease: "power3.out" }
      );
    }
  }, [isOpen]);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] sm:w-[90%] md:w-[85%] 
      bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg 
      flex items-center justify-between px-6 py-3 z-50">
      
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold text-white tracking-wide">
        ⚡ EV Station
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-6 text-white font-medium">
        <Link href="/charging" className="hover:text-green-500 transition">Charging</Link>
        <Link href="/products" className="hover:text-green-500 transition">Products</Link>
        <Link href="/about" className="hover:text-green-500 transition">About</Link>
        <Link href="/contact" className="hover:text-green-500 transition">Contact</Link>

        {/* Auth Buttons */}
        <SignedOut>
          <SignInButton />
          <SignUpButton>
            <button className=" text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>

      {/* Hamburger (Mobile) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white focus:outline-none"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={mobileMenuRef}
          className="absolute top-20 right-4 w-64 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg p-6 flex flex-col gap-4 text-white"
        >
          <Link href="/charging" className="hover:text-purple-300 transition" onClick={() => setIsOpen(false)}>Charging</Link>
          <Link href="/products" className="hover:text-purple-300 transition" onClick={() => setIsOpen(false)}>Products</Link>
          <Link href="/about" className="hover:text-purple-300 transition" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/contact" className="hover:text-purple-300 transition" onClick={() => setIsOpen(false)}>Contact</Link>

          <div className="flex flex-col gap-3 mt-3">
            <SignedOut>
              <SignInButton />
              <SignUpButton>
                <button className="bg-green-500 text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      )}
    </nav>
  );
}
