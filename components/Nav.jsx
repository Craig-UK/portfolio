"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const Nav = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <p className="logo_text">Craig Climie - Developer</p>
      </Link>

      {/* Desktop Navigation */}
      <div className="sm:flex gap-12 font-bold hidden">
        <button className="nav_btn_link">
          <Link href="/">Home</Link>
        </button>
        <button className="nav_btn_link">
          <Link href="/projects">Projects</Link>
        </button>
        <button className="nav_btn_link">
          <Link href="/about">About</Link>
        </button>
        <button className="nav_btn_link">
          <Link href="/devblog">Dev Blog</Link>
        </button>
        <button className="nav_btn_link">
          <Link href="/travelblog">Travel Blog</Link>
        </button>
        <button className="nav_btn_link">
          <Link href="/contact">Contact</Link>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        <div className="flex">
          <Image 
            src={"/next.svg"} 
            width={60} 
            height={60} 
            alt="Dropdown"
            onClick={() => setToggleDropdown((prev => !prev))}
          />
          {toggleDropdown && (
            <div className="dropdown">
                <Link href="/" className='dropdown_link' onClick={() => setToggleDropdown(false)}>Home</Link>
                <Link href="/projects" className='dropdown_link' onClick={() => setToggleDropdown(false)}>Projects</Link>
                <Link href="/about" className='dropdown_link' onClick={() => setToggleDropdown(false)}>About</Link>
                <Link href="/devblog" className='dropdown_link' onClick={() => setToggleDropdown(false)}>Dev Blog</Link>
                <Link href="/travelblog" className='dropdown_link' onClick={() => setToggleDropdown(false)}>Travel Blog</Link>
                <Link href="/contact" className='dropdown_link' onClick={() => setToggleDropdown(false)}>Contact</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
