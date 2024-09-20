import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  return (
    <header className="bg-black text-white px-4  py-3">
      <div className="flex justify-between items-center mx-auto max-w-7xl">
        <Link className="text-2xl font-semibold" to="/">
          DisasterGuard
        </Link>

        <nav className="hidden md:flex gap-8 font-medium">
          <NavLink to="/" className="hover:text-gray-400">Home</NavLink>
          <NavLink to="/features" className="hover:text-gray-400">Features</NavLink>
          <NavLink to="/solutions" className="hover:text-gray-400">Solutions</NavLink>
          <NavLink to="/ai-models" className="hover:text-gray-400">AI Models</NavLink>
          <NavLink to="/resources" className="hover:text-gray-400">Resources</NavLink>
          <NavLink to="/support" className="hover:text-gray-400">Support</NavLink>
          <NavLink to="/contact" className="hover:text-gray-400">Contact</NavLink>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <NavLink to="/login" className="hover:text-gray-400 font-semibold">Login</NavLink>
          <NavLink to="/signup" className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300">Sign Up</NavLink>
        </div>

        <div className="md:hidden">
          <FiMenu className="text-2xl" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
