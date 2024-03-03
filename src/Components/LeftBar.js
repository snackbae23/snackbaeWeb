import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { FaBlog } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { IoStorefrontOutline } from "react-icons/io5";
import { Link } from 'react-router-dom'
import { FaRegStar } from "react-icons/fa";
import { GiPriceTag } from "react-icons/gi";

const LeftBar = () => {


    function glow(){
        console.log("nitish");
        // document.getElementById("a").style.background = 'bg-yellow-600';
        // document.getElementById("b").style.display = "none";
        // document.getElementById("c").style.display = "none";
    }

  return (
    <div>
         <Link id='a'
            onClick={glow}
            to="/dashboard"
            className="w-full h-[50px]  mb-1 flex items-center bg-slate-100 p-4 hover:bg-yellow-600 hover:text-white gap-3 "
          >
            <FaHome /> <p className='md:block hidden'>Dashboard</p>
          </Link>
          <Link id='b'
            to="/payout"
            className="w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-yellow-600 hover:text-white gap-3"
          >
            <FaBlog />
            <p className='md:block hidden'>Payout</p>
          </Link>
          <Link id='c'
            to="/menu"
            className="w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-yellow-600 hover:text-white gap-3"
          >
            <MdMenuBook />
            <p className='md:block hidden'>Menu</p>
          </Link>
          <Link id='d'
            to="/editstore"
            className="w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-yellow-600 hover:text-white gap-3"
          >
            <IoStorefrontOutline />
            <p className='md:block hidden'>Store detail</p>
          </Link>
          <Link id='e'
            to="/offer"
            className="w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-yellow-600 hover:text-white gap-3"
          >
            <BiSolidOffer />
            <p className='md:block hidden'>offers & campaign</p>
          </Link>
          <Link id='f'
            to="/pricing"
            className="w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-yellow-600 hover:text-white gap-3"
          >
            <GiPriceTag />
            <p className='md:block hidden'>Pricing</p>
          </Link>
          <Link id='f'
            to="/customer"
            className="w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-yellow-600 hover:text-white gap-3"
          >
            <FaRegStar />
            <p className='md:block hidden'>Customer</p>
          </Link>
          <Link id='g'
            to="/"
            className="md:w-[50%] h-[50px] bg-slate-100 mb-1 flex items-center md:p-4 hover:bg-yellow-600 hover:text-white gap-2 mt-48 justify-center rounded-xl md:ml-16"
          >
            <IoIosLogOut /> <p className='md:block hidden'>Log out</p>
          </Link>
    </div>
  )
}

export default LeftBar