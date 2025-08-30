"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".animate-contact"),
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white flex items-center justify-center px-6 py-16"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* Contact Form */}
        <div className="animate-contact bg-gray-800 p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <form className="space-y-5">
            <div>
              <label className="block text-sm mb-2">Name</label>
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-green-400 outline-none"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Email</label>
              <input
                type="email"
                className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-green-400 outline-none"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Message</label>
              <textarea
                rows="4"
                className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-green-400 outline-none"
                placeholder="Write your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-green-500 hover:bg-green-600 transition font-semibold text-lg"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side Image */}
        <div className="animate-contact flex justify-center">
          <img
            src="https://lh3.googleusercontent.com/rd-gg-dl/AJfQ9KQUGpv9VD5uYSZaE0Q5n2s1Xcd5rAJwlL5tb-aiCIQTVAayOm8G8NhlxbiK-XN0OlYdxIeZ8XQ5bVsYifBvqVE8NpA8TjHrcowtOHFo_GvugOGozLTS-M_k7KI2mCSLDbDN-xZeXfZjg6VDl8Am1rF6P5ZXkwgP9_F0YQU7Xm42m_s0H1IdhgXxSvH3sGBogKOuy2KUPpZmjf7DDb4xEeVYUEEGgelRJCL5Sl6Q-frkiI0ws0xgWlL-RIzcAKzT2xwGpdsAVexO-CukFs09ulQKmarTb9j6OgwBGW8DSdymbGGVr1_7kldRMoYfaOc4VYH6TU8YVAp6TMKkTc1bL4dz-U6ljfhQjFdqkikNe-pT---1XRgHXLbPGBlqnIXdz-tdn0aqjyhSJD2i-dK5fYZ-4Qfu7d_tIgtleRJNbRd4UjgtM2llb5z0he4jWH1VQwBSJhZS1NY6axrRIaNYuHPJTPT71Bn3aHa7yTWiVjgmYXwlo5WLT2taCKhZskgI9kMgIPlbmXu_DUrdORcRh2Y7TMl7moZNhT0BZxYpmCBk4UfWnXV_jNfSIGLwtEB85lLjzk_QHFBnj-GXKmXfrOuYLVYNx_RW_LCeJuqMl7ilZ_50ip4iNL2SnkH_cfY7X7r8FYu0s_BisJrILhTkwgpH-b8YDa6hLyodQFWCStH-Aymd5FVr5faDP1uHDVLH34RF-fFOskDc0Hww_TA7JDaDOwTsY90J2SRGD_T4saVVEb53QZFgvGgb_ZjoNk0zd_cCBwSz7PFgo919zpsPp0C6PpEIZ3qZvWKmePeICiS4ZuLiEh3fAxJg4yot5SE5nFdNM_MAD8fyz3FtSatYsyyusl_edpL-MXlg2BDv5AoImJZrxJoxdfbWFHf7rfrqA1VrtMuI4EhbzKLJIkcVk3Ms1rzs-YozMvPq1oDyV48ph2nx3yBEtEWq0w5gNruynPOKqsZ2L6bjW_3D1q1wXxP5Dm1ielDGbqKjFe-wiVsDj9iPHnmpwX_Bc4I2vU9E1zsxxG_chL-kxq92vjHTFW7va4OFSum7e0Ge29uCwWuibXq-S1YIfofKguhBGaBGUHD1HMRciFmllGwpMB-oFfbdTVTIOEztVGQl9tj3c33QS8Ae_oc=s1024" // 👈 apni EV charging related image yaha lagao
            alt="EV Contact"
            className="rounded-2xl shadow-2xl w-[90%] hover:scale-105 transition duration-500"
          />
        </div>
      </div>
    </section>
  );
}
