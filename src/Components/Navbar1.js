import React from 'react'
import group117 from "../assets/Notification (1).png"
import rect54 from "../assets/rectangle54.png"
import group752 from "../assets/Notification.png"
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"

const Navbar1 = () => {
  return (
    <div>
<div className="z-10 bg-white fixed   w-full h-16  flex flex-row items-center justify-between  px-6 box-border  max-w-full  text-zinc-700 font-sans">
               
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
                       className="relative w-30 h-12 min-h-12"
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
                                   Nitish Kumar
                               </div>
                               <div className="relative text-sm tracking-[-0.02em] whitespace-nowrap">
                                   +91 9660066979
                               </div>
                           </div>
                       </div>
                   </Link>
               </div>
           </div>

    </div>
  )
}

export default Navbar1