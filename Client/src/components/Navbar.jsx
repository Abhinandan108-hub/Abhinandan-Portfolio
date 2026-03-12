import React, { useState, useEffect } from "react";
import { MoreVertical, X } from "lucide-react";
import devImg from "../assets/dev.png";

const navItems = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT", href: "#about" },
  { name: "SKILLS", href: "#skills" },
  { name: "SERVICES", href: "#services" },
  { name: "PROJECTS", href: "#projects" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "CONTACT", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("HOME");

  /* scroll spy */
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section) {
          const { offsetTop, offsetHeight } = section;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActive(item.name);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* close menu on resize */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      {/* Logo */}
      <a
        href="#home"
        className="
        fixed z-50
        left-10 top-2
        sm:left-5 sm:top-2
        lg:left-10 lg:-top-10
        "
      >
        <img
          src={devImg}
          alt="logo"
          className="
          object-contain
          transition-transform duration-300 hover:scale-110
          h-12 w-12
          sm:h-16 sm:w-16
          lg:h-60 lg:w-60
          "
        />
      </a>

      {/* Navbar */}
      <nav
        className="
        fixed z-40
        top-3 sm:top-4
        left-1/2 -translate-x-[45%] lg:-translate-x-[35%]
        pl-4 sm:pl-10 lg:pl-20
        w-[96%] sm:w-[98%] lg:w-[99%]
        max-w-[1800px]
        "
      >
        <div className="flex items-center justify-center h-14 sm:h-16 lg:h-20">
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-12">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActive(item.name)}
                className={`
                relative text-2xl font-semibold tracking-wider
                transition-all duration-300
                ${
                  active === item.name
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }
                `}
              >
                {item.name}

                <span
                  className={`
                  absolute left-0 -bottom-2 h-[2px] bg-indigo-500
                  transition-all duration-300
                  ${active === item.name ? "w-full" : "w-0 hover:w-full"}
                  `}
                />
              </a>
            ))}

            {/* Download CV Button */}
            <a
              href="/cv.pdf"
              className="
              px-8 py-3 rounded-xl
              bg-gradient-to-r from-indigo-600 to-purple-600
              text-white text-xl font-bold
              shadow-lg shadow-indigo-900/40
              transition-all duration-300
              hover:scale-110 hover:shadow-indigo-500/40
              "
            >
              Download CV
            </a>
          </div>
        </div>

        {/* 3 Dot Button (Mobile / Tablet) */}
        <div className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
            flex items-center justify-center
            w-10 h-10 rounded-lg
            text-white
            bg-white/10 hover:bg-indigo-600
            backdrop-blur-sm
            transition-all duration-200
            active:scale-95
            "
          >
            {isOpen ? <X size={20} /> : <MoreVertical size={22} />}
          </button>
        </div>

        {/* Mobile / Tablet Menu */}
        <div
          className={`
          lg:hidden overflow-hidden
          transition-all duration-500 ease-in-out
          ${isOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div
            className="
            mt-2
            mx-2
            px-4 sm:px-6
            pt-4 pb-6
            space-y-2
            bg-black/90 backdrop-blur-xl
            rounded-2xl
            border border-white/10
            shadow-2xl shadow-black/50
            "
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => {
                  setIsOpen(false);
                  setActive(item.name);
                }}
                className={`
                flex items-center gap-3
                font-semibold tracking-wide
                px-4 py-3
                rounded-xl
                text-sm sm:text-base
                transition-all duration-200
                ${
                  active === item.name
                    ? "bg-indigo-600 text-white"
                    : "text-gray-400 hover:bg-white/10 hover:text-white"
                }
                `}
              >
                <span
                  className={`
                  h-1.5 w-1.5 rounded-full shrink-0
                  ${
                    active === item.name
                      ? "bg-white"
                      : "bg-transparent"
                  }
                  `}
                />
                {item.name}
              </a>
            ))}

            <div className="h-px bg-white/10 !mt-3 !mb-1" />

            {/* Mobile CV Button */}
            <a
              href="/cv.pdf"
              className="
              flex items-center justify-center
              px-5 py-4
              bg-gradient-to-r from-indigo-600 to-purple-600
              rounded-xl
              text-white text-lg font-bold
              shadow-lg shadow-indigo-900/40
              transition-all duration-300
              hover:scale-105
              "
            >
              Download CV
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;