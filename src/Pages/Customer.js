import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { FaBlog } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { IoStorefrontOutline } from "react-icons/io5";
import group117 from "../assets/group-117.svg"
import rect54 from "../assets/rectangle54.png"
import group752 from "../assets/group-752.svg"
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"

const Customer = () => {
  return (
    <div className='w-full h-[100vh] flex flex-col'>
    <div className="fixed mt-8  w-full h-[20px]  flex flex-row items-center justify-between  px-6 box-border  max-w-full  text-zinc-700 font-sans">
        {/* <div className="absolute h-full w-full top-0 right-0 bottom-0 left-0 bg-white" /> */}
        <div className="flex flex-row items-start left-1 py-0 px-6">
            <img
                className="relative w-28 h-16 object-cover z-20"
                loading="lazy"
                alt=""
                src={logo}
            />
        </div>
        <div className="flex flex-row items-start justify-start gap-4 max-w-full z-1">
            <img
                className="relative w-12 h-12 min-h-12"
                loading="lazy"
                alt=""
                src={group117}
            />
            <Link to="/profilesettings">
                <img
                    className="relative w-12 h-12 min-h-12"
                    loading="lazy"
                    alt=""
                    src={group752}
                /></Link>
            <Link to="/profile">
                <div className="flex flex-row items-center justify-start gap-2">
                    <img
                        className="relative rounded-2xl w-12 h-12 object-cover"
                        loading="lazy"
                        alt=""
                        src={rect54}
                    />
                    <div className="flex flex-col items-start justify-start gap-0.5">
                        <div className="relative tracking-[-0.02em] font-semibold whitespace-nowrap">
                            Adam Cooper
                        </div>
                        <div className="relative text-sm tracking-[-0.02em] whitespace-nowrap">
                            adamcooper@gmail.com
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    </div>
    <div className='flex  w-full mt-20 h-fit'>

        {/* left */}
        <div className='w-[20%]  bg-white flex flex-col '>
            <Link to='/dashboard' className='w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-yellow-600 hover:text-white gap-2 ' >
                <FaHome /> <p>Dashboard</p>
            </Link>
            <Link to='/payout' className='w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-yellow-600 hover:text-white gap-2' >
                <FaBlog /><p>Payout</p>
            </Link>
            <Link to='/menu' className='w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-yellow-600 hover:text-white gap-2'>
                <MdMenuBook /><p>Menu</p>
            </Link>
            <Link to='/form' className='w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-yellow-600 hover:text-white gap-2'>
                <IoStorefrontOutline /><p>Edit store detail</p>
            </Link>
            <Link to='/' className='w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-yellow-600 hover:text-white gap-2'>
                <BiSolidOffer /><p>offers & campaign</p>
            </Link>
            <Link to='/' className='w-[50%] h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-yellow-600 hover:text-white gap-2 mt-60 justify-center rounded-xl ml-16'>
                <IoIosLogOut /> <p>Log out</p>
            </Link>
        </div>

        {/* right */}
        <div className='w-[75%] bg-slate-200 ml-6   rounded-md p-6' >
            

            
        </div>

    </div>
</div>
  )
}

export default Customer