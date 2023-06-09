"use client"

import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <nav className='flex-between w-full mb-16 pt-3'>
        <Link href='/' className='flex gap-2 flex-center'>
            <p className='logo_text'>Craig Climie - Developer</p>
        </Link>

        {/* Desktop Navigation */}
        <div className='sm:flex gap-12 font-bold hidden'>
            <button className='nav_btn_link'>
                <Link href='/' />
                Home
            </button>
            <button className='nav_btn_link'>
                <Link href='/projects' />
                Projects
            </button>
            <button className='nav_btn_link'>
                <Link href='/about' />
                About
            </button>
            <button className='nav_btn_link'>
                <Link href='/devblog' />
                Dev Blog
            </button>
            <button className='nav_btn_link'>
                <Link href='/travelblog' />
                Travel Blog
            </button>
            <button className='nav_btn_link'>
                <Link href='/contact' />
                Contact
            </button>
        </div>
    </nav>
  )
}

export default Nav