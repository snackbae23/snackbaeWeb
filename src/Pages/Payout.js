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

const Payout = () => {

    const data=[
        {
          "customerName": "Customer name 1",
          "tableNo": "1",
          "date": "12/17/2023",
          "time": "9:30 AM-10:30 AM EST",
          "status": "Clears in 2ds",
          "amount": "₹231"
        },
        {
          "customerName": "Amanda Cooper",
          "tableNo": "23",
          "date": "12/17/2023",
          "time": "9:30 AM-10:30 AM EST",
          "status": "Clears in 2ds",
          "amount": "₹231"
        },
        {
            "customerName": "Amanda Cooper",
            "tableNo": "23",
            "date": "12/17/2023",
            "time": "9:30 AM-10:30 AM EST",
            "status": "Clears in 2ds",
            "amount": "₹231"
          },
          {
            "customerName": "Amanda Cooper",
            "tableNo": "23",
            "date": "12/17/2023",
            "time": "9:30 AM-10:30 AM EST",
            "status": "Clears in 2ds",
            "amount": "₹231"
          },
          {
            "customerName": "Amanda Cooper",
            "tableNo": "23",
            "date": "12/17/2023",
            "time": "9:30 AM-10:30 AM EST",
            "status": "Clears in 2ds",
            "amount": "₹231"
          },
          {
            "customerName": "Amanda Cooper",
            "tableNo": "23",
            "date": "12/17/2023",
            "time": "9:30 AM-10:30 AM EST",
            "status": "Clears in 2ds",
            "amount": "₹231"
          },
        
      ]
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
            <div className='flex  w-full mt-20 h-full '>
                {/* left */}
                <div className='w-[20%]  bg-white flex flex-col '>
                    <Link to='/' className='w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-yellow-600 hover:text-white gap-2 ' >
                        <FaHome /> <p>Dashboard</p>
                    </Link>
                    <Link to='/blogs' className='w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-yellow-600 hover:text-white gap-2' >
                        <FaBlog /><p>Payout</p>
                    </Link>
                    <Link to='appointment' className='w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-yellow-600 hover:text-white gap-2'>
                    <MdMenuBook /><p>Menu</p>
                    </Link>
                    <Link to='/cLink' className='w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-yellow-600 hover:text-white gap-2'>
                    <IoStorefrontOutline /><p>Edit store detail</p>
                    </Link>
                    <Link to='/cLink' className='w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-yellow-600 hover:text-white gap-2'>
                    <BiSolidOffer /><p>offers & campaign</p>
                    </Link>
                    <Link to='/' className='w-[50%] h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-yellow-600 hover:text-white gap-2 mt-60 justify-center rounded-xl ml-16'>
                        <IoIosLogOut /> <p>Log out</p>
                    </Link>
                </div>
                {/* right */}
                <div className='w-[75%] bg-slate-300 ml-6 h-fit rounded-md p-6' >
                    <div className='w-full h-[100px] flex items-center '>
                        <h1 className='text-[1.2rem] font-bold w-[40%] ml-4 '>Payout</h1>
                        <div className='w-[60%] flex  gap-4 justify-end'>
                            <button className='bg-black text-white w-[90px] h-10 rounded-md'>weekly</button>
                            <button className='bg-white  w-[90px] h-10 rounded-md'>Monthly</button>
                            <button className='bg-white  w-[90px] h-10 rounded-md'>Yearly</button>
                            <input className='rounded-md'
                                type="date">
                            </input>
                        </div>


                    </div>

                    <div className='w-full h-[190px] bg-white rounded-md flex'>
                        <div className='w-[25%] flex flex-col  items-center justify-center '>
                            <p>Available for payout</p>
                            <p className=' font-bold text-[2.1rem]'>$1,712.00</p>
                            <button className='w-[200px] bg-yellow-500 h-10 rounded-md'>Withdraw Request</button>
                             
                        </div>
                        <div className='h-[70%] w-[2px] bg-slate-200 mt-5'></div>
                        <div className='w-[25%] flex flex-col  items-center justify-center '>
                            <p>Payment being cleared</p>
                            <p className=' font-bold text-[2.1rem]'>$112.00</p>
                            

                        </div>
                        <div className='h-[70%] w-[2px] bg-slate-200 mt-5'></div>
                        <div className='w-[25%] flex flex-col  items-center justify-center '>
                            <p>Earnings to data</p>
                            <p className=' font-bold text-[2.1rem]'>$102,712.00</p>
                            

                        </div>
                        <div className='h-[70%] w-[2px] bg-slate-200 mt-5'></div>
                        <div className='w-[25%] flex flex-col  items-center justify-center '>
                            <p>Total Reservation</p>
                            <p className=' font-bold text-[2.1rem]'>$230.00</p>
                            

                        </div>

                    </div>
                    <div className='text-[1.2rem] mt-4 font-bold'>
                         Payouts history
                    </div>
                    <div className='w-full mt-4  '>
                    <table className="min-w-full bg-white border border-gray-300 rounded-xl">
                        <thead className="bg-gray-100 py-4">
                            <tr>
                            <th className="border border-gray-300 px-4 py-4 text-[1rem]">Customer Name</th>
                            <th className="border border-gray-300 px-4 py-4 text-[1rem]">Table No</th>
                            <th className="border border-gray-300 px-4 py-4 text-[1rem]">Date</th>
                            <th className="border border-gray-300 px-4 py-4 text-[1rem]">Time</th>
                            <th className="border border-gray-300 px-4 py-4 text-[1rem]">Status</th>
                            <th className="border border-gray-300 px-4 py-4 text-[1rem]">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((reservation, index) => (
                            <tr key={index}>
                                <td className="border border-gray-300 px-4 py-2">{reservation.customerName}</td>
                                <td className="border border-gray-300 px-4 py-2 bg-slate-100">{reservation.tableNo}</td>
                                <td className="border border-gray-300 px-4 py-2">{reservation.date}</td>
                                <td className="border border-gray-300 px-4 py-2 bg-slate-100">{reservation.time}</td>
                                <td className="border border-gray-300 px-4 py-2">{reservation.status}</td>
                                <td className="border border-gray-300 px-4 py-2 bg-slate-100">{reservation.amount}</td>
                            </tr>
                            ))}
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Payout