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
          <NavLink to="/About" className="hover:text-gray-400">About</NavLink>
          <NavLink to="/contact" className="hover:text-gray-400">Contact</NavLink>
        </nav>

       
        <div className="md:hidden">
          <FiMenu className="text-2xl" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
