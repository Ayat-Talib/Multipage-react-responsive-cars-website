import Link from 'next/link'
import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
   <header className='header'>
    <h1 className='logo'>Cars World</h1>
    <nav>
        <Link href = "/">Home</Link>
        <Link href = "/cars">Cars</Link>
        <Link href = "/contact">Contact</Link>
        <Link href = "/about">About Us</Link>
        <FaShoppingCart style={{color:'white', fontSize:'larger',}} />
    </nav>
   </header>
  )
}

export default Header
