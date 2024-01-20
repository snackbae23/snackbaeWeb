import React, { useState } from 'react'
import vectorComp from "../assets/vectorcomponent.svg"
import group117 from "../assets/group-117.svg"
import rect54 from "../assets/rectangle54.png"
import group752 from "../assets/group-752.svg"
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"
import frame2 from "../assets/frame-2.svg"
import frame3 from "../assets/frame-3.svg"
import frame4 from "../assets/frame-4.svg"
import frame5 from "../assets/frame-5.svg"
import frame6 from "../assets/frame-6.svg"
import frame7 from "../assets/frame-7.svg"
import frame9 from "../assets/frame-9.svg"
import ellipse4 from "../assets/ellipse403.png"
import frame33 from "../assets/frame33.svg"
import { FiSearch } from 'react-icons/fi'


const bookings = [
    { id: "Am123", img: ellipse4, name: "Amanda Cooper", slot: " 9:30 AM -10:30 AM EST", table: "Table no. 42", time: "09:30 AM", bill: "233$" },
    { id: "Am123", img: ellipse4, name: "Amanda Cooper", slot: " 9:30 AM -10:30 AM EST", table: "Table no. 42", time: "09:30 AM", bill: "233$" },
    { id: "Am123", img: ellipse4, name: "Amanda Cooper", slot: " 9:30 AM -10:30 AM EST", table: "Table no. 42", time: "09:30 AM", bill: "233$" },
    { id: "Am123", img: ellipse4, name: "Amanda Cooper", slot: " 9:30 AM -10:30 AM EST", table: "Table no. 42", time: "09:30 AM", bill: "233$" },
    { id: "Am123", img: ellipse4, name: "Amanda Cooper", slot: " 9:30 AM -10:30 AM EST", table: "Table no. 42", time: "09:30 AM", bill: "233$" },
    { id: "Am123", img: ellipse4, name: "Amanda Cooper", slot: " 9:30 AM -10:30 AM EST", table: "Table no. 42", time: "09:30 AM", bill: "233$" },
    { id: "Am123", img: ellipse4, name: "Amanda Cooper", slot: " 9:30 AM -10:30 AM EST", table: "Table no. 42", time: "09:30 AM", bill: "233$" },
    { id: "Am123", img: ellipse4, name: "Amanda Cooper", slot: " 9:30 AM -10:30 AM EST", table: "Table no. 42", time: "09:30 AM", bill: "233$" },
    { id: "Am123", img: ellipse4, name: "Amanda Cooper", slot: " 9:30 AM -10:30 AM EST", table: "Table no. 42", time: "09:30 AM", bill: "233$" },
    { id: "Am123", img: ellipse4, name: "Amanda Cooper", slot: " 9:30 AM -10:30 AM EST", table: "Table no. 42", time: "09:30 AM", bill: "233$" },
    { id: "Am123", img: ellipse4, name: "Amanda Cooper", slot: " 9:30 AM -10:30 AM EST", table: "Table no. 42", time: "09:30 AM", bill: "233$" },

];


const DashBoard = () => {

    const [date, setDate] = useState();

    function changeHandler(e) {
        setDate(e.target.value);
        console.log(date);
    }

    function dateSubmit(e) {
        e.preventDefault();
        console.log(date);
    }
    
    return (
        <div className='relative bg-zinc-100 w-full h-[100vh] overflow-hidden text-left text-sm text-slate-950 font-roboto  '>
            <div>
                <div className="sticky top-0 w-full h-20 flex flex-row items-center justify-end py-4 px-6 box-border z-10 max-w-full text-left text-base text-zinc-700 font-sans">
                    <div className="absolute h-full w-full top-0 right-0 bottom-0 left-0 bg-white" />
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
                <div className="absolute top-0 left-0 flex flex-col items-end justify-start pt-3 px-0 pb-16 gap-96 z-20 text-slate-500">
                    <div className="absolute my-0 mx-[!important] h-full top-0 bottom-0 left-0 bg-white w-56" />
                    <div className="w-56 flex flex-col items-start justify-start py-0 pr-0 pl-5 box-border gap-10">
                        <div className="flex flex-row items-start justify-start py-0 px-6">
                            <img
                                className="relative w-28 h-16 object-cover z-20"
                                loading="lazy"
                                alt=""
                                src={logo}
                            />
                        </div>
                        <div className=''>
                            <div className=" flex flex-row items-start justify-start gap-7">
                                <div className="flex-1 flex flex-row items-start justify-start relative">
                                    <div className="absolute my-0 mx-[!important] top-[-11px] left-[-20px] rounded-lg bg-yellow-500 w-44 h-10 z-[1]" />
                                    <div className="flex-1 flex flex-col items-start justify-start gap-7 z-[2]">
                                        <div className="flex flex-row items-center justify-start py-0 pr-5 pl-0 gap-1 text-white">
                                            <img
                                                className="relative w-6 h-6 overflow-hidden shrink-0"
                                                alt=""
                                                src={frame2}
                                            />
                                            <b className="relative">Dashboard</b>
                                        </div>
                                        <div className="flex flex-row items-center justify-start py-0 pr-5 pl-0 gap-2">
                                            <img
                                                className="relative w-6 h-6 overflow-hidden shrink-0"
                                                alt=""
                                                src={frame3}
                                            />
                                            <div className="relative font-medium">Payout</div>
                                        </div>
                                        <div className="flex flex-row items-center justify-start py-0 pr-5 pl-0 gap-2">
                                            <img
                                                className="relative w-6 h-6 overflow-hidden shrink-0"
                                                alt=""
                                                src={frame4}
                                            />
                                            <div className="relative font-medium">Menu</div>
                                        </div>
                                        <div className="flex flex-row items-center justify-start py-0 pr-3 pl-0 gap-2">
                                            <img
                                                className="relative w-6 h-6 overflow-hidden shrink-0"
                                                alt=""
                                                src={frame5}
                                            />
                                            <div className="relative font-medium">Edit Store Details</div>
                                        </div>
                                        <div className="flex flex-row items-center justify-start py-0 pr-5 pl-0 gap-2">
                                            <img
                                                className="relative w-6 h-6 overflow-hidden shrink-0"
                                                alt=""
                                                src={frame6}
                                            />
                                            <div className="relative font-medium">Reviews</div>
                                        </div>
                                        <div className="flex flex-row items-center justify-start gap-2">
                                            <img
                                                className="relative w-6 h-6 overflow-hidden shrink-0"
                                                alt=""
                                                src={frame7}
                                            />
                                            <div className="relative font-medium">{`Offers & Campaign`}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start py-0 pr-14 pl-12 fixed bottom-8 left-1">
                                <button className="cursor-pointer [border:none] py-2 pr-4 pl-5 bg-slate-100 rounded-3xl flex flex-row items-center justify-start gap-2 whitespace-nowrap z-[1]">
                                    <img
                                        className="relative w-7 h-7 overflow-hidden shrink-0"
                                        alt=""
                                        src={frame9}
                                    />
                                    <Link to="/login">
                                        <div className="relative text-sm font-medium font-roboto text-slate-500 text-left">
                                            Log out
                                        </div>
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div>

                    </div>
                </div>
            </div>
            <div className='absolute top-16 left-56'>
                <h3 className="ml-10 mt-8 text-xl font-bold font-inherit ">
                    Dashboard
                </h3>
                <div className='flex justify-evenly'>
                    <div className='bg-white w-60 h-28 mt-2 rounded-2xl flex flex-col justify-evenly'>
                        <div className='flex justify-between p-2'>
                            <p className='text-slate-950 text-base font-medium'>
                                Profile Visit
                            </p>
                            <p className='text-slate-500 font-normal text-sm'>
                                Last 30 days
                            </p>
                        </div>
                        <div className='flex justify-between p-2'>
                            <p className='font-roboto text-2xl font-semibold'>
                                25.1k
                            </p>
                            <div className='border-none py-1 pl-px bg-green-100 rounded-2xl flex flex-row items-end justify-start gap-0.5'>
                                <img
                                    className='w-4 h-4 overflow-hidden min-h-4'
                                    alt=''
                                    src={frame33}
                                />
                                <p className='font-roboto text-green-700 text-left'>
                                    0.3pt
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white w-60 h-28 mt-2 rounded-2xl flex flex-col justify-evenly'>
                        <div className='flex justify-between p-2'>
                            <p className='text-slate-950 text-base font-medium'>
                                Total Bookings
                            </p>
                            <p className='text-slate-500 font-normal text-sm'>
                                Last 30 days
                            </p>
                        </div>
                        <div className='flex justify-between p-2'>
                            <p className='font-roboto text-2xl font-semibold'>
                                35
                            </p>
                            <div className='border-none py-1 pl-px bg-green-100 rounded-2xl flex flex-row items-end justify-start gap-0.5'>
                                <img
                                    className='w-4 h-4 overflow-hidden min-h-4'
                                    alt=''
                                    src={frame33}
                                />
                                <p className='font-roboto text-green-700 text-left'>
                                    0.3pt
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white w-60 h-28 mt-2 rounded-2xl flex flex-col justify-evenly'>
                        <div className='flex justify-between p-2'>
                            <p className='text-slate-950 text-base font-medium'>
                                Total Revenue
                            </p>
                            <p className='text-slate-500 font-normal text-sm'>
                                Last 30 days
                            </p>
                        </div>
                        <div className='flex justify-between p-2'>
                            <p className='font-roboto text-2xl font-semibold'>
                                92.4k
                            </p>
                            <div className='border-none py-1 pl-px bg-green-100 rounded-2xl flex flex-row items-end justify-start gap-0.5'>
                                <img
                                    className='w-4 h-4 overflow-hidden min-h-4'
                                    alt=''
                                    src={frame33}
                                />
                                <p className='font-roboto text-green-700 text-left'>
                                    0.3pt
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white w-60 h-28 mt-2 rounded-2xl flex flex-col justify-evenly'>
                        <div className='flex justify-between p-2'>
                            <p className='text-slate-950 text-base font-medium'>
                                New Customer
                            </p>
                            <p className='text-slate-500 font-normal text-sm'>
                                Last 30 days
                            </p>
                        </div>
                        <div className='flex justify-between p-2'>
                            <p className='font-roboto text-2xl font-semibold'>
                                43
                            </p>
                            <div className='border-none py-1 pl-px bg-green-100 rounded-2xl flex flex-row items-end justify-start gap-0.5'>
                                <img
                                    className='w-4 h-4 overflow-hidden min-h-4'
                                    alt=''
                                    src={frame33}
                                />
                                <p className='font-roboto text-green-700 text-left'>
                                    0.3pt
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-6 flex justify-between'>
                    <div className=' w-[550px] flex flex-col rounded-xl ml-10'>
                        <div className='bg-slate-100 h-36'>
                            <div className=" font-semibold z-[2] flex justify-center text-xl ">Bookings</div>
                            <div className=''>
                                <form className='flex flex-row gap-3 items-center justify-center mt-4' onSubmit={dateSubmit}>
                                    <input type='date' className='py-2 px-6 bg-[#e7e6e6] rounded-md' value={date} onChange={changeHandler}></input>
                                    <button>
                                        <FiSearch fontSize={25} />
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className='bg-white'>
                            <div className="overflow-y-auto  max-h-[300px] mt-6 z-10">
                                <ul className="flex flex-col pl-5 gap-2 ">
                                    {bookings.map((booking) => (
                                        <li key={booking.id} className="">
                                            <div className='bg-slate-100 h-14 flex flex-row items-center justify-between box-border py-5 px-0 rounded-3xl'>
                                                <div className='flex flex-row items-center justify-start '>
                                                    <img
                                                        className="relative ml-4 rounded-[50%] w-12 h-12 object-contain min-h-11"
                                                        alt=""
                                                        loading='lazy'
                                                        src={booking.img}
                                                    />
                                                    <div className='flex flex-col ml-3 items-start justify-center gap-0.5'>
                                                        <div className='leading-6 font-medium pr-5 '>
                                                            {booking.name}
                                                        </div>
                                                        <div>
                                                            {booking.slot}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mr-4 font-semibold'>
                                                    {booking.table}
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className=' w-[550px] flex flex-col ml-10'>
                        <div className='bg-slate-100 h-36'>
                            <div className=" font-semibold z-[2] flex justify-center text-xl">Payments</div>
                            <div className=''>
                                <form className='flex flex-row gap-3 items-center justify-center mt-4' onSubmit={dateSubmit}>
                                    <input type='date' className='py-2 px-6 bg-[#e7e6e6] rounded-md' value={date} onChange={changeHandler}></input>
                                    <button>
                                        <FiSearch fontSize={25} />
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className='bg-white'>
                            <div className="overflow-y-auto max-h-[300px] mt-6 z-10">
                                <ul className="flex flex-col pl-5 gap-1 ">
                                    {bookings.map((booking) => (
                                        <li key={booking.id} className="">
                                            <div className='bg-slate-100 h-14 flex flex-row items-center justify-between box-border py-5 px-0 rounded-3xl'>
                                                <div className='flex flex-row items-center justify-start '>
                                                    <img
                                                        className="relative ml-4 rounded-[50%] w-12 h-12 object-contain min-h-11"
                                                        alt=""
                                                        loading='lazy'
                                                        src={booking.img}
                                                    />
                                                    <div className='flex flex-col ml-3 items-start justify-center gap-0.5'>
                                                        <div className='leading-6 font-medium pr-5 '>
                                                            {booking.name}
                                                        </div>
                                                        <div>
                                                            {booking.time}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mr-4 font-semibold'>
                                                    {booking.bill}
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashBoard;
