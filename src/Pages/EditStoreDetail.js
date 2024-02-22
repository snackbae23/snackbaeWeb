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
import { useState } from 'react';


const EditStoreDetail = () => {


    const [formData, setFormData] = useState({
        logo: '',
        businessName: '',
        location: '',
        pocName: '',
        pocContact: '',
        customerContact: '',
        customerContact1: '',
        category: '',
        Cuisines:'',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };


    const one = () => {
        document.getElementById('a').style.display = "block";
        document.getElementById('b').style.display = "none";
        document.getElementById('c').style.display = "none";

    };
    const two = () => {
        document.getElementById('a').style.display = "none";
        document.getElementById('b').style.display = "block";
        document.getElementById('c').style.display = "none";
    };

    const three = () => {
        document.getElementById('a').style.display = "none";
        document.getElementById('b').style.display = "none";
        document.getElementById('c').style.display = "block";
    };





    const [formData3, setFormData3] = useState({
        paymentType: 'bankTransfer', // Set default payment type
        accountNumber: '',
        upi: '',
        ifscCode: '',
        upinNumber: '',
        beneficiaryName: '',
    });

    const handleChange3 = (event) => {
        const { name, value } = event.target;
        setFormData3({ ...formData3, [name]: value });
    };

    const handlePaymentTypeChange = (event) => {
        setFormData3({ ...formData3, paymentType: event.target.value });
    };

    const handleSubmit3 = (event) => {
        event.preventDefault();
        console.log(formData3); // Submit data here (e.g., API call)
    };

    return (
        <div className='w-full h-fit flex flex-col'>
            <div className="z-10 bg-white fixed mt-8  w-full h-20 -top-8 flex flex-row items-center justify-between  px-6 box-border  max-w-full  text-zinc-700 font-sans">
               
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
                    <Link to='/editstore' className='w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-yellow-600 hover:text-white gap-2'>
                        <IoStorefrontOutline /><p>Edit store detail</p>
                    </Link>
                    <Link to='/offer' className='w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-yellow-600 hover:text-white gap-2'>
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
                <div className='flex flex-col w-[80%]  bg-slate-200 h-fit'>

                    {/* one */}
                    <div className='w-[100%] p-8   rounded-md   ' id='a'  >
                        <h1 className='text-[1.2rem] font-bold   '>Edit Store Details</h1>
                        <div className='flex justify-between text-slate-500 mt-3'>
                            <div className='flex gap-2'>
                                <button className='bg-black text-white px-4 py-1 rounded-full' onClick={one} >General Info</button>
                                <button className='bg-white px-4 py-1 rounded-full' onClick={two} >Gallery</button>
                                <button className='bg-white px-4 py-1 rounded-full' onClick={three} >Payout Method</button>
                            </div>
                            <div>
                                <button onClick={handleSubmit} className='bg-yellow-500 px-4 py-2 rounded-md text-white'> Save changes</button>
                            </div>
                        </div>
                        <div className='w-full h-fit bg-white p-5 mt-4 rounded-md text-[1.1rem] font-semibold'>

                            <form >
                                <div className='text-[1.1rem] font-bold'>Store Details</div>
                                <div className='text-slate-300 h-[96px] w-full flex items-center'>

                                    <input className='size-24 bg-slate-300  rounded-full' type="file" name="logo" onChange={handleChange} />
                                    <label className='text-yellow-500 text-[1rem] ml-4'>Upload new logo</label>
                                    <p className='size-2 rounded-full bg-slate-400 ml-4'></p>
                                    <p className='text-[1rem] text-slate-400 ml-4'> Remove logo</p>
                                </div>
                                <div className='flex w-full justify-between mt-3 mb-2'>
                                    <div className='flex flex-col w-[48%]'>
                                        <label>Business Name:</label>
                                        <input className='px-2  rounded-md h-10 mt-1 text-[.92rem] border-2' type="text" name="businessName" placeholder='Type here'  onChange={handleChange} />
                                    </div>
                                    <div className='flex flex-col w-[48%]'>
                                        <label>Location:</label>
                                        <input className='px-2  rounded-md h-10 mt-1 text-[.92rem] border-2' type="text" placeholder='Type here' name="location" onChange={handleChange} />
                                    </div>
                                </div>

                                <div className='flex w-full justify-between mt-3 mb-2' >
                                    <div className='flex flex-col w-[48%]'>
                                        <label>POC Name:</label>
                                        <input className='px-2  rounded-md h-10 mt-1 text-[.92rem] border-2' placeholder='Type here' type="text" name="pocName" onChange={handleChange} />
                                    </div>
                                    <div className='flex flex-col w-[48%]'>
                                        <label>POC Contact:</label>
                                        <input className='px-2  rounded-md h-10 mt-1 text-[.92rem] border-2' placeholder='Type here' type="text" name="pocContact" onChange={handleChange} />
                                    </div>
                                </div>

                                <div className='flex w-full justify-between mt-3 mb-2'>
                                    <div className='flex flex-col w-[48%]'>
                                        <label>Customer Contact:</label>
                                        <input className='px-2  rounded-md h-10 mt-1 text-[.92rem] border-2' placeholder='Type here' type="text" name="customerContact" onChange={handleChange} />
                                    </div>
                                    <div className='flex flex-col w-[48%]'>
                                        <label>Customer Contact 1:</label>
                                        <input className='px-2  rounded-md h-10 mt-1 text-[.92rem] border-2' placeholder='Type here' type="text" name="customerContact1" onChange={handleChange} />
                                    </div>
                                </div>
                            <h1 className='text-[1.1rem] font-bold mt-2 mb-3'>Cuisine details</h1>
                            <div className='flex w-full justify-between mt-3 mb-2'>
                            <div className='flex flex-col w-[48%]'>
                                    <label>Category:</label>
                                    <select className='px-2  rounded-md h-10 mt-1 text-[.92rem] border-2' name="category" onChange={handleChange}>
                                        <option value="">Select Category</option>
                                        <option value="upto3">Up to 3</option>
                                        <option value="upto4">Up to 4</option>
                                    </select>
                                </div>
                                <div className='flex flex-col w-[48%]'>
                                    <label>Cuisines:</label>
                                    <select className='px-2  rounded-md h-10 mt-1 text-[.92rem] border-2' name="Cuisines" onChange={handleChange}>
                                        <option value="">Select upto 3</option>
                                        <option value="upto3">Up to 3</option>
                                        <option value="upto4">Up to 4</option>
                                    </select>
                                </div>
                            </div>
                                
                                
                            </form>
                        </div>
                    </div>

                    {/* two */}
                    <div className='w-[100%]  bg-slate-200    rounded-md p-8 hidden h-[550px] ' id='b' >
                        <h1 className='text-[1.2rem] font-bold   '>Edit Store Details</h1>
                        <div className='flex justify-between text-slate-500 mt-3'>
                            <div className='flex gap-2'>
                                <button className='bg-white px-4 py-1 rounded-full' onClick={one} >General Info</button>
                                <button className='bg-black text-white px-4 py-1 rounded-full' onClick={two} >Gallery</button>
                                <button className='bg-white px-4 py-1 rounded-full' onClick={three} >Payout Method</button>
                            </div>
                            <div>
                                <button className='bg-yellow-500 px-4 py-2 rounded-md text-white'> Save changes</button>
                            </div>
                        </div>
                        <div className='w-full h-[170px] bg-yellow-50 flex justify-center items-center  mt-4  rounded-lg border-dashed border-2 border-yellow-400'>
                            <img src='/Group 1171277298.png' alt=''></img>
                        </div>

                        <div>
                            {/* <form onSubmit={handleSubmit}>
                                <div>
                                    <label>Store Image:</label>
                                    <input
                                        type="file"
                                        name="image"
                                        onChange={handleChange}
                                        accept="image/*"
                                    />
                                </div>
                                <div>
                                    <label>Business Name:</label>
                                    <input
                                        type="text"
                                        name="businessName"
                                        value={formData.businessName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label>Location:</label>
                                    <input
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label>Point of Contact Name:</label>
                                    <input
                                        type="text"
                                        name="pocName"
                                        value={formData.pocName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label>Point of Contact Number:</label>
                                    <input
                                        type="text"
                                        name="pocContact"
                                        value={formData.pocContact}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label>Customer Contacts:</label>
                                    {formData.customerContacts.map((contact, index) => (
                                        <input
                                            key={index}
                                            type="text"
                                            value={contact}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    customerContacts: formData.customerContacts.map((item, idx) =>
                                                        idx === index ? e.target.value : item
                                                    ),
                                                })
                                            }
                                        />
                                    ))}
                                </div>
                                <div>
                                    <label>Category:</label>
                                    <select
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select</option>
                                        <option value="select upto 3">Select upto 3</option>
                                        <option value="select upto 4">Select upto 4</option>
                                    </select>
                                </div>
                                <div>
                                    <label>Cuisines:</label>
                                    {formData.cuisines.map((cuisine, index) => (
                                        <input
                                            key={index}
                                            type="text"
                                            value={cuisine}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    cuisines: formData.cuisines.map((item, idx) =>
                                                        idx === index ? e.target.value : item
                                                    ),
                                                })
                                            }
                                        />
                                    ))}
                                </div>
                                <button type="submit">Submit</button>
                            </form> */}
                        </div>
                    </div>

                    {/* three */}

                    <div className='w-[100%]  bg-slate-200   rounded-md p-8 hidden  h-[600px]' id='c' >
                        <h1 className='text-[1.2rem] font-bold   '>Edit Store Details</h1>
                        <div className='flex justify-between text-slate-500 mt-3'>
                            <div className='flex gap-2'>
                                <button className='bg-white  px-4 py-1 rounded-full' onClick={one} >General Info</button>
                                <button className='bg-white px-4 py-1 rounded-full' onClick={two} >Gallery</button>
                                <button className='bg-black text-white px-4 py-1 rounded-full' onClick={three} >Payout Method</button>
                            </div>
                            <div>
                                <button className='bg-yellow-500 px-4 py-2 rounded-md text-white'> Save changes</button>
                            </div>
                        </div>
                        <div>
                            <form className='text-[1.2rem] w-[50%] p-4 bg-slate-300 mt-4 rounded-md' onSubmit={handleSubmit3}>
                                <h2 className=' mt-6 font-semibold'>Payment Method</h2>
                                <div className='flex justify-between'>
                                    <label>
                                        <input className='mr-2'
                                            type="radio"
                                            id="bankTransfer"
                                            name="paymentType"
                                            value="bankTransfer"
                                            checked={formData3.paymentType === 'bankTransfer'}
                                            onChange={handlePaymentTypeChange}
                                        />
                                        Bank Transfer
                                    </label>
                                    <label>
                                        <input className='mr-2 '
                                            type="radio"
                                            id="bhimUpi"
                                            name="paymentType"
                                            value="bhimUpi"
                                            checked={formData3.paymentType === 'bhimUpi'}
                                            onChange={handlePaymentTypeChange}
                                        />
                                        BHIM UPI
                                    </label>
                                </div>

                                {formData3.paymentType === 'bankTransfer' && (
                                    <><div className='flex flex-col'>
                                        <h2 className='flex justify-center font-semibold mt-4'>Bank Transfer Details</h2>
                                        <label htmlFor="accountNumber">Account Number:</label>
                                        <input
                                            className='rounded-md h-10 px-4 mt-2 mb-2  '
                                            type="text"
                                            id="accountNumber"
                                            name="accountNumber"
                                            value={formData3.accountNumber}
                                            onChange={handleChange3}
                                            required
                                        />
                                        <label htmlFor="ifscCode">IFSC Code:</label>
                                        <input
                                            className='rounded-md h-10 px-4 mt-2 mb-2  '
                                            type="text"
                                            id="ifscCode"
                                            name="ifscCode"
                                            value={formData3.ifscCode}
                                            onChange={handleChange3}
                                            required
                                        />
                                        <label htmlFor="beneficiaryName">Beneficiary Name:</label>
                                        <input className='rounded-md h-10 px-4 mt-2 mb-2  '
                                            type="text"
                                            id="beneficiaryName"
                                            name="beneficiaryName"
                                            value={formData3.beneficiaryName}
                                            onChange={handleChange3}
                                            required
                                        />
                                    </div>

                                    </>
                                )}

                                {formData3.paymentType === 'bhimUpi' && (
                                    <><div className='flex flex-col'>
                                        <h2 className='flex justify-center font-semibold mt-4'>BHIM UPI Details</h2>
                                        <label htmlFor="upi">UPI ID:</label>
                                        <input className='rounded-md h-10 px-4 mt-2 mb-2  '
                                            type="text"
                                            id="upi"
                                            name="upi"
                                            value={formData3.upi}
                                            onChange={handleChange3}
                                            required
                                        />
                                        <label htmlFor="upinNumber">UPIN Number:</label>
                                        <input className='rounded-md h-10 px-4 mt-2 mb-2  '
                                            type="password"
                                            id="upinNumber"
                                            name="upinNumber"
                                            value={formData3.upinNumber}
                                            onChange={handleChange3}
                                            required
                                        />
                                    </div>

                                    </>
                                )}

                                <button className='bg-yellow-500 text-white px-4 rounded-md ml-[30%] py-1 mt-4 ' type="submit">Submit Payment</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default EditStoreDetail