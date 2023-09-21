
import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
 
  return (
    <nav className="bg-gray-900 p-4 flex justify-between items-center">
      {/* Left Section: Logo and Categories */}
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">YourLogo</div>
        {/* Category Links */}
        <Link to="/men" className="text-white hover:text-gray-300">Men</Link>
        <Link to="/women" className="text-white hover:text-gray-300">Women</Link>
        <Link to="/kids" className="text-white hover:text-gray-300">Kids</Link>
        <Link to="/collection" className="text-white hover:text-gray-300">Collection</Link>
        <Link to="/outlet" className="text-white hover:text-gray-300">Outlet</Link>
      </div>

      {/* Center Section: Search Bar */}
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search for products"
          className="px-4 py-2 bg-gray-700 text-white rounded"
        />
      </div>

      {/* Right Section: Auth Buttons and Cart */}
      <div className="flex items-center space-x-4">
        {/* Implement authentication links here */}
        <Link to="/signup" className="text-white hover:text-gray-300">Sign Up</Link>
        {/* Implement cart link here */}
      </div>
    </nav>
  )
}

export default Navbar
