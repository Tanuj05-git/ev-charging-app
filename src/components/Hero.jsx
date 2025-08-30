"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";

const Hero = () => {
  useEffect(() => {
    gsap.fromTo(
      ".hero-text",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", stagger: 0.3 }
    );
    gsap.fromTo(
      ".hero-btn",
      { opacity: 0, y: 80 },
      { opacity: 1, y: 0, duration: 1, ease: "back.out(1.7)", delay: 1 }
    );
    gsap.fromTo(
      ".overlay",
      { opacity: 0 },
      { opacity: 0.4, duration: 1.5, ease: "power2.inOut" }
    );
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="https://bugatti.imgix.net/677db9af00446b3d45384493/mistral-worldrecord-cut-2k.mp4?fm=mp4&w=1920&video-codec=av1&video-bitrate=2m" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="overlay absolute inset-0 bg-black/50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-6">
        <h1 className="hero-text text-5xl md:text-6xl font-bold leading-tight">
          Powering the Future of <span className="text-green-400">EV</span>
        </h1>
        <p className="hero-text mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          Fast, reliable, and sustainable EV charging solutions for everyone.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button className="hero-btn px-8 py-3 bg-green-500 hover:bg-green-600 rounded-full text-lg font-semibold transition transform hover:scale-105">
            Get Started
          </button>
          <button className="hero-btn px-8 py-3 bg-transparent border border-white hover:bg-white hover:text-black rounded-full text-lg font-semibold transition transform hover:scale-105">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
