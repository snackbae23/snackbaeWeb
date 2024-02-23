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
import { ImCross } from 'react-icons/im';
import { useState } from 'react';

const Offer = () => {


    const [formData, setFormData] = useState({
        title: '',
        minBilling: '',
        discount: '',
        maxDiscount: '',
        termsAndConditions: '',
        validity: '', // Default value for validity (10 days)
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission here (e.g., send data to a server).
        console.log('Form data submitted:', formData);
    };

    function openPopup() {
        document.getElementById('popup').style.display = "block";
        document.getElementById('background').style.filter = "blur(2Px)";

    }
    function closePopup() {
        document.getElementById('popup').style.display = "none";
        document.getElementById('background').style.filter = "blur(0px)";

    }
    return (
        <div className='w-full h-fit flex flex-col'>
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


            {/* popup */}
            <div className="absolute top-28 left-[30%]  z-[100] shadow-inner hidden"
                id="popup"
            >
                <div className="w-[45vw]   bg-white pb-8 rounded-md flex  ">
                    <div className="w-[45vw]   h-fit flex flex-col gap-1">
                        <div className="flex justify-between">
                            <div className="flex flex-col font-roboto pt-2 mt-6 ml-8 justify-start">
                                <div className="text-xl font-semibold ">Create Offers</div>
                                <p className="text-slate-500 mt-2">
                                    Create from scratch or select a template to get started
                                </p>
                            </div>

                            <button onClick={closePopup} className="text-right p-2 mr-4">
                                <ImCross />
                            </button>
                        </div>
                        <div className=" bg-white rounded-md p-4 h-fit ml-4">
                           
                            <form  className="flex flex-col text-lg font-semibold relative   " onSubmit={handleSubmit}>
                                <div className='ml-5'>
                                    <label htmlFor="title">Title:</label>
                                    <input
                                     className="w-full h-[50px] p-3 border border-[#E2E8F0] rounded-md focus:outline-none focus:shadow-md mt-2 mb-2"
                                        type="text"
                                        id="title"
                                        placeholder='For ex: Club Special'
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <p className='text-[1.6rem] mb-4'>Details</p>
                                <div className='ml-5'>
                                    <label htmlFor="minBilling">Minimum Billing Amount</label>
                                    <input
                                        type="number"
                                        id="minBilling"
                                        name="minBilling"
                                        className="w-full h-[50px] p-3 border border-[#E2E8F0] rounded-md focus:outline-none focus:shadow-md mt-2 mb-2"
                                        placeholder='Type here'
                                        value={formData.minBilling}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className='flex justify-between ml-5 gap-3'>
                                <div>
                                    <label htmlFor="discount">Discount:</label>
                                    <input
                                    className="w-full h-[50px] p-3 border border-[#E2E8F0] rounded-md focus:outline-none focus:shadow-md mt-2 mb-2"
                                    placeholder='Type here'
                                        type="number"
                                        id="discount"
                                        name="discount"
                                        value={formData.discount}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="maxDiscount">Maximum Discount:</label>
                                    <input
                                    className="w-full h-[50px] p-3 border border-[#E2E8F0] rounded-md focus:outline-none focus:shadow-md mt-2 mb-2"
                                    placeholder='Type here'
                                        type="number"
                                        id="maxDiscount"
                                        name="maxDiscount"
                                        value={formData.maxDiscount}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                </div>
                                
                                <div className='ml-5'>
                                    <label htmlFor="termsAndConditions">Terms & Conditions</label>
                                    <textarea
                                    className="w-full h-[120px] p-3 border border-[#E2E8F0] rounded-md focus:outline-none focus:shadow-md mt-2 mb-2"
                                    placeholder='Type here'
                                        id="termsAndConditions"
                                        name="termsAndConditions"
                                        value={formData.termsAndConditions}
                                        onChange={handleChange}
                                        rows={4}
                                        required
                                    />
                                </div>
                                <div className='ml-5'>
                                    <label htmlFor="validity">Validity:</label>
                                    <select
                                    className="w-full h-[50px] p-3 border border-[#c1df6e] rounded-md focus:outline-none focus:shadow-md mt-2 mb-2 "
                                    placeholder='Select Option'
                                        id="validity"
                                        name="validity"
                                        value={formData.validity}
                                        onChange={handleChange}
                                    >   
                                        <option value="Always valid">Always valid </option>
                                        <option value="10">10 days</option>
                                        <option value="20">20 days</option>
                                        <option value="30">30 days</option>
                                    </select>
                                </div>
                                <button  className="w-[200px] h-[42px] bg-[#EAB308] border rounded-md px-[19px] py-[10px] flex justify-center items-center text-[#ffffff] mx-auto mt-4" type="submit">Create Offer</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex  w-full mt-20 h-fit' id="background">

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
                    <Link to='/pricing' className='w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-yellow-600 hover:text-white gap-2'>
                        <BiSolidOffer /><p>Pricing</p>
                    </Link>
                    <Link to='/' className='w-[50%] h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-yellow-600 hover:text-white gap-2 mt-48 justify-center rounded-xl ml-16'>
                        <IoIosLogOut /> <p>Log out</p>
                    </Link>
                </div>

                {/* right */}
                <div className='w-[75%]  bg-slate-200 ml-6   rounded-md p-6' >
                    <h1 className='text-[1.2rem] font-bold  ml-4 '>Offers & Promotion</h1>

                    <div className='flex justify-between mt-4 relative'>
                        <div className='mt-2 flex gap-2'>
                            <button className='bg-black text-white rounded-full py-2 px-4'>Offers</button>
                            <button className='rounded-full ml-4 bg-white py-2 px-4'>Tools</button>
                            <button className='rounded-full ml-4 bg-white py-2 px-4'>Analytics</button>
                        </div>
                        <p className=' absolute rounded-full bg-yellow-500 size-fit px-4 ml-36 mb-2 '>Pro</p>
                        <p className=' absolute rounded-full bg-yellow-500 size-fit px-4 ml-64 mb-2 '>Pro</p>
                        <div className='flex gap-4'>
                            <button className='bg-white flex items-center px-4 rounded-xl'>Active^</button>
                            <button className='bg-yellow-500 text-white flex items-center px-4 rounded-xl' onClick={openPopup}>Add Offer</button>
                        </div>

                    </div>








                </div>

            </div>
        </div>
    )
}

export default Offer