import React from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-[100vw] h-[60px] md:flex flex-row hidden justify-around  mx-auto items-center bg-[#ffffff]  fixed z-50 ">
      <div>
        <Link to="/">
          <img
            className="   "
            src={logo}
            alt="Logo"
            loading="lazy"
          ></img>
        </Link>
      </div>
      <div className="   ">
        <ul className=" flex space-x-10  items-center">
          <li className=" hover:text-deepgreen hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li className=" hover:text-deepgreen hover:underline">
            <Link to="/">Join as partner</Link>
          </li>
          <li className=" hover:text-deepgreen hover:underline">
            <Link to="/">Blogs</Link>
          </li>
          <li className=" hover:text-deepgreen hover:underline">
            <Link to="/">About us</Link>
          </li>
          <button className=" w-[137px] h-[42px] border rounded-xl  px-[18px] text-white  bg-[#EAB308]">
            Partner Login
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
