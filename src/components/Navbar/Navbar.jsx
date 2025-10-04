import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import logoImg from "../../assets/logo.png";
import { NavLink } from "react-router";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <div className="navbar flex justify-between items-center py-1">
        {/* Logo */}
        <div className="flex-1">
          <div className="btn-ghost flex items-center justify-start">
            <img src={logoImg} alt="" className="w-[165px] " />
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 cursor-pointer text-lg pr-14">
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink to='/menu'>Menu</NavLink>
          </li>
          <li>
            <button className="px-3 py-2 bg-[#da8545] text-white rounded-md cursor-pointer">
              Book A Table
            </button>
          </li>
        </ul>

        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl focus:outline-none"
          >
            {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className=" flex flex-col gap-4 text-center md:hidden mb-4 ">
          <li className="btn btn-ghost">
            <NavLink to='/'>Home</NavLink>
          </li >
          <li className="btn btn-ghost">
            <NavLink to='/about'>About</NavLink>
          </li>
          <li className="btn btn-ghost">
            <NavLink to='/menu'>Menus</NavLink>
          </li>
          <li>
            <button className="px-3 py-2 bg-[#da8545] text-white rounded-md cursor-pointer">
              Book A Table
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
