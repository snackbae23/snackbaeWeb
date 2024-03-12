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
import frame33 from "../assets/frame33.svg" 
import { FiSearch } from 'react-icons/fi'
import ellipse4 from "../assets/ellipse403.png"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from 'react';
import { format } from 'date-fns';

import LeftBar from '../Components/LeftBar';


const Payout = () => {

    const [date, setDate] = useState();

    // const [selectedDate, setSelectedDate] = useState(new Date());

    // const handleDateChange = (newDate) => {
    //   setSelectedDate(newDate);
    // };

    // const [selectedDate, setSelectedDate] = useState(new Date());

    // const handleDateChange = (event) => {
    //     setSelectedDate(new Date(event.target.value));
    // };

    // const [selectedDate, setSelectedDate] = useState(null);

    // Function to get the next seven days from the current date
    // const getNextSevenDays = () => {
    //   const currentDate = new Date();
    //   const days = [];

    //   for (let i = 0; i < 6; i++) {
    //     days.push(new Date(currentDate.getTime() + i * 24 * 60 * 60 * 1000));
    //   }

    //   return days;
    // };

    // Function to format the selected date
    // const handleDateClick = (date) => {
    //   const formattedDate = new Intl.DateTimeFormat("en-US", {
    //     weekday: "long",
    //     day: "numeric",
    //     month: "long",
    //   }).format(date);
    //   setSelectedDate({ date, formattedDate });
    // };

    // Get the next seven days
    // const nextSevenDays = getNextSevenDays();


    // const [selectedMonth, setSelectedMonth] = useState(new Date());
    // const [bookings, setBookings] = useState([]);

    // const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    // const fetchBookings = async (month) => {
    //     const response = await fetch(`/api/bookings?month=${month.toISOString().split("T")[0]}`);
    //     const data = await response.json();
    //     setBookings(data);
    // };

    // const handleMonthChange = (newMonth) => {
    //     setSelectedMonth(newMonth);
    //     fetchBookings(newMonth);
    // };

    // const renderDays = () => {
    //     const days = [];
    //     let currentDate = new Date(selectedMonth.getFullYear(), selectedMonth.getMonth(), 1);

    //     while (currentDate.getMonth() === selectedMonth.getMonth()) {
    //         days.push(
    //             <td key={currentDate.toISOString()}>
    //                 {currentDate.getDate()}
    //                 {bookings.some((b) => b.date === currentDate.toISOString().split("T")[0]) && (
    //                     <span className="bg-blue-500 text-white rounded-full w-2 h-2 inline-block absolute -mt-2 -ml-1"></span>
    //                 )}
    //             </td>
    //         );

    //         if (daysOfWeek.includes(currentDate.toLocaleString("en-us", { weekday: "short" }))) {
    //             currentDate.setDate(currentDate.getDate() + 1);
    //         }
    //     }

    //     return days;
    // };

    // useEffect(() => {
    //     fetchBookings(selectedMonth);
    // }, [selectedMonth]);




    function changeHandler(e) {
        setDate(e.target.value);
        console.log(date);
    }

    function dateSubmit(e) {
        e.preventDefault();
        console.log(date);
    }


    const book = [
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
    return (
        <div className='w-full h-[100vh] flex flex-col'>


            <div className="z-10 bg-white fixed   w-full h-20 flex flex-row items-center justify-between  px-6 box-border  max-w-full  text-zinc-700 font-sans">

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
                <div className="md:w-[20%] w-[10%]  bg-white flex flex-col fixed md:text-[1.15rem] text-[1.6rem] font-roboto  text-slate-600 ml-2">
                    <LeftBar/>
                </div>
                {/* right */}
                <div className="md:w-[75%] w-[85%] bg-slate-200  h-fit rounded-md p-6 md:ml-[22%] ml-[12%]">
                    <div className=' top-16 left-56'>
                        <h3 className=" mt-5 text-xl font-bold font-inherit mb-3 ">
                            Dashboard
                        </h3>
                        <div className='flex justify-evenly gap-2'>
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
                                        <p className='font-roboto px-2 text-green-700 text-left'>
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
                                    <div className='border-none py-1 pl-px px-2  bg-green-100 rounded-2xl flex flex-row items-end justify-start gap-0.5'>
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
                                    <div className='border-none py-1 pl-px px-2 bg-green-100 rounded-2xl flex flex-row items-end justify-start gap-0.5'>
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
                                    <div className='border-none py-1 pl-px px-2 bg-green-100 rounded-2xl flex flex-row items-end justify-start gap-0.5'>
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
                        <div className='mt-6 flex justify-between items-center'>
                            <div className=' w-[550px] flex flex-col rounded-xl  ml-10'>
                                <div className='bg-slate-100 h-36 flex items-center flex-col'>
                                    <div className=" font-semibold z-[2] flex justify-center text-xl mt-4 ">Bookings</div>
                                    <div className=''>
                                        <form className='flex flex-row gap-3 items-center justify-center mt-4' onSubmit={dateSubmit}>
                                            <input type='date' className='py-2 px-6 bg-[#e7e6e6] rounded-md' value={date} onChange={changeHandler}></input>
                                            <button>
                                                <FiSearch fontSize={25} />
                                            </button>
                                        </form>
                                    </div>
                                    {/* <div className="grid grid-cols-7 gap-2">
                                        {nextSevenDays.map((day) => (
                                            <div
                                                key={day.toString()}
                                                onClick={() => handleDateClick(day)}
                                                className="bg-blue-300 text-white font-bold py-2 px-4 rounded cursor-pointer hover:bg-blue-400 transition-colors"
                                            >
                                                {new Intl.DateTimeFormat("en-US", {
                                                    weekday: "long",
                                                    day: "numeric",
                                                    month: "long",
                                                }).format(day)}
                                            </div>
                                        ))}
                                    </div> */}

                                    {/* <div className="p-4 bg-white rounded-lg shadow-md">
                                        <div className="flex items-center justify-between mb-4">
                                            <h2 className="text-xl font-semibold">{selectedMonth.toLocaleString("default", { month: "long", year: "numeric" })}</h2>
                                            <DatePicker
                                                selected={selectedMonth}
                                                onChange={handleMonthChange}
                                                inline
                                                showMonthYearPicker
                                                className="border-gray-300 border rounded-md py-1 px-2"
                                            />
                                        </div>
                                        <table className="w-full">
                                            <thead>
                                                <tr>
                                                    {daysOfWeek.map((day) => (
                                                        <th key={day} className="text-left py-2 px-4">
                                                            {day}
                                                        </th>
                                                    ))}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>{daysOfWeek.map((day) => <td key={day} className="py-2 px-4 text-center">{day}</td>)}</tr>
                                                {Array.from({ length: new Date(selectedMonth.getFullYear(), selectedMonth.getMonth() + 1, 0).getDate() / 7 }, (_, i) => (
                                                    <tr key={i}>{renderDays()}</tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div> */}

                                </div>
                                <div className='bg-white  rounded-md'>
                                    <div className="overflow-y-auto no-scrollbar  max-h-[300px]  z-10">
                                        <ul className="flex flex-col pl-5 gap-2 mt-4 ">
                                            {book.map((booking) => (
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
                            <div className=' w-[550px] flex flex-col ml-12 mt-4 '>
                                <div className='bg-slate-100 h-36'>
                                    <div className=" font-semibold z-[2] flex justify-center text-xl mt-4">Payments</div>
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
                                            {book.map((booking) => (
                                                <li key={booking.id} className="">
                                                    <div className='bg-slate-100 h-14 flex flex-row items-center justify-between box-border py-5 px-0 rounded-3xl '>
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
            </div>

        </div>
    )
}

export default Payout