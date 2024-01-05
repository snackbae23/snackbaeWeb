import React from 'react'
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";




const Navbar = () => {
  return (
    <div className="w-[1550px] h-[60px] flex  items-center  bg-[#ffffff] overflow-x-hidden overflow-y-hidden fixed z-50">
      <div className="flex">
        <Link to="/">
          <img
            className="absolute text-black  w-[117px] h-[69px] top-[0px] md:top-[-5px] left-[0px] md:left-[100px]"
            src={logo}
            alt="Logo"
            loading="lazy"
          ></img>
        </Link>
        <div>
          <ul className=" md:flex items-center gap-x-10 absolute hidden md:top-[11px] md:left-[816px]">
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
                      <button className=' w-[137px] h-[42px] border rounded-xl  px-[18px] text-white  bg-[#EAB308]'>
                        Partner Login
                      </button>        
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar
