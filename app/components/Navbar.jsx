import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const sideMenuRef = useRef();

  const openSideMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeSideMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 45);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 rounded-2xl ${
          isScrolled
            ? "bg-white/30 backdrop-blur-xl border-b border-white/20"
            : "bg-transparent"
        }`}
      >
        <a href="#top" onClick={closeSideMenu}>
          <Image
            src={assets.logo}
            className="w-8 cursor-pointer mr-14"
            alt="logo"
          />
        </a>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScrolled ? "" : "shadow-sm bg-opacity-50"
          }`}
        >
          <li>
            <a
              href="#top"
              className="relative font-nunito text-primary transition-colors duration-300 hover:text-(--accent) active:text-(--accent) after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-(--accent) after:transition-transform after:duration-300 hover:after:scale-x-100 active:after:scale-x-100"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="relative font-nunito text-primary transition-colors duration-300 hover:text-(--accent) active:text-(--accent) after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-(--accent) after:transition-transform after:duration-300 hover:after:scale-x-100 active:after:scale-x-100"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="relative font-nunito text-primary transition-colors duration-300 hover:text-(--accent) active:text-(--accent) after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-(--accent) after:transition-transform after:duration-300 hover:after:scale-x-100 active:after:scale-x-100"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="relative font-nunito text-primary transition-colors duration-300 hover:text-(--accent) active:text-(--accent) after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-(--accent) after:transition-transform after:duration-300 hover:after:scale-x-100 active:after:scale-x-100"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="relative font-nunito text-primary transition-colors duration-300 hover:text-(--accent) active:text-(--accent) after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-(--accent) after:transition-transform after:duration-300 hover:after:scale-x-100 active:after:scale-x-100"
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 rounded-full bg-(--accent) text-white font-nunito border border-white/20 shadow-[0_6px_16px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out hover:shadow-[0_10px_26px_rgba(0,0,0,0.35) hover:-translate-y-px active:translate-y-px
  "
          >
            Contact me
          </a>

          <button className="w-6 block md:hidden ml-3" onClick={openSideMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen transition duration-500 bg-(--accent) text-white"
        >
          <div
            className="w-5 cursor-pointer absolute right-6 top-6"
            onClick={closeSideMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
          <li>
            <a href="#top" className="font-inter" onClick={closeSideMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-inter" onClick={closeSideMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="font-inter" onClick={closeSideMenu}>
              Projects
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="font-inter"
              onClick={closeSideMenu}
            >
              Experience
            </a>
          </li>
          <li>
            <a href="#contact" className="font-inter" onClick={closeSideMenu}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
