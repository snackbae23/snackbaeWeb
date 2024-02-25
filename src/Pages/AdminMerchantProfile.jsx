import React, { useState } from 'react';
import AdminNav from '../Components/AdminNav';
import AdminLeftBar from '../Components/AdminLeftBar';
import { MdContentCopy } from "react-icons/md";

const data = {
    logo: "",
    qr: "",
    url: "foodoos.snackbae.in",
    businessName: "ReUnion Cafe",
    location: "AG Block, Salt Lake",
    managerName: "Sangit Saha",
    managerContact: "9123456789",
    customerContact: "9112343244",
    email: "abc@gmail.com",
    category: [
        "Rooftop",
        "Pet Friendly",
        "Biryani"
    ],
    cuisines: [
        "Indian",
        "Chinese",
        "Mughlai"
    ],
    opening: "11:00 AM",
    closing: "11:00 PM",
    offDay: "Thursday",
    avgCost: "1200",
    capacity: "28",
    numberOfTables: "10",
    FSSAI: "12345678457345345",
    salesRep: "Annwesan Acharya"
}

// const data = null;


function AdminMerchantProfile() {


    const handleCopyClick = () => {
        const textarea = document.createElement('textarea');
        textarea.value = data.url;
        document.body.appendChild(textarea);

        textarea.select();
        document.execCommand('copy');

        document.body.removeChild(textarea);

    };

    const handleDownloadClick = () => {
        const imageSrc = data.qr;

        fetch(imageSrc)
            .then((response) => response.blob())
            .then((blob) => {

                const blobUrl = URL.createObjectURL(blob);

                const a = document.createElement('a');
                a.href = blobUrl;
                a.download = 'qr-code.png';

                document.body.appendChild(a);

                a.click();

                document.body.removeChild(a);
            })
            .catch((error) => {
                console.error('Error in downloading image:', error);
            });
    };

    return (
        <div className='w-full'>
            <div>
                <AdminNav />
            </div>
            <div className='flex pt-20'>
                {/* Left Bar */}
                <div className='w-[20%]'>
                    <AdminLeftBar />
                </div>
                {!data ? (
                    <div className='w-full bg-slate-200'>
                        <div className=' p-8   rounded-md '>

                        </div>
                    </div>
                ) : (
                        <div className='w-full bg-slate-200'>
                            <div className=' p-8   rounded-md '>
                                <h1 className='text-[1.2rem] font-bold   '>Edit Store Details</h1>
                                <div className='w-full h-fit bg-white p-5 mt-4 rounded-md text-[1.1rem] font-semibold'>
                                    <div>
                                        <div className='flex w-full justify-between mt-3 mb-2'>
                                            <div className='flex  w-[50%] justify-between mt-3 mb-2'>
                                                <div className='text-slate-300 h-[96px] w-full flex items-center'>
                                                    <img className='size-24 bg-slate-300  rounded-full' name="logo" alt='' src={data.logo} onClick={handleDownloadClick} />
                                                </div>
                                                <div className=''>
                                                    <img className='size-24 bg-slate-300  rounded-md' name="logo" alt='' src={data.qr} />
                                                    <button className='text-yellow-500 text-[1rem]  font-roboto hover:text-slate-500'>Download QR Code</button>
                                                </div>
                                            </div>
                                            <div className='flex flex-col w-[48%] mt-20 font-roboto'>
                                                <label>Url</label>
                                                <div className='px-2 rounded-md h-10 mt-1 text-[.92rem] border-2 flex justify-between items-center' >
                                                    <p className='flex items-center my-1.5 text-slate-500 font-roboto'>{data.url}</p>
                                                    <div
                                                        className={`text-slate-500 cursor-pointer hover:text-yellow-500`}
                                                        onClick={handleCopyClick}>
                                                        <MdContentCopy />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex w-full justify-between mt-3 mb-2'>
                                            <div className='flex flex-col w-[48%] font-roboto'>
                                                <label>Business Name</label>
                                                <div className='px-2  rounded-md h-10 mt-1 text-[.92rem] border-2' >
                                                    <p className='flex items-center my-1.5 text-slate-500 font-roboto'>{data.businessName}</p>
                                                </div>
                                            </div>
                                            <div className='flex flex-col w-[48%] font-roboto'>
                                                <label>Location</label>
                                                <div className='px-2  rounded-md h-10 mt-1 text-[.92rem] border-2' >
                                                    <p className='flex items-center my-1.5 text-slate-500 font-roboto'>{data.location}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='flex w-full justify-between mt-3 mb-2' >
                                            <div className='flex flex-col w-[48%] font-roboto'>
                                                <label className=' font-roboto'>Manager Name</label>
                                                <div className='px-2  rounded-md h-10 mt-1 text-[.92rem] border-2' >
                                                    <p className='flex items-center my-1.5 text-slate-500 font-roboto'>{data.managerName}</p>
                                                </div>
                                            </div>
                                            <div className='flex flex-col w-[48%] font-roboto'>
                                                <label>Manager Contact</label>
                                                <div className='px-2  rounded-md h-10 mt-1 text-[.92rem] border-2' >
                                                    <p className='flex items-center my-1.5 text-slate-500 font-roboto'>{data.managerContact}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='flex w-full justify-between mt-3 mb-2'>
                                            <div className='flex flex-col w-[48%] font-roboto'>
                                                <label>Customer Contact</label>
                                                <div className='px-2  rounded-md h-10 mt-1 text-[.92rem] border-2' >
                                                    <p className='flex items-center my-1.5 text-slate-500'>{data.customerContact}</p>
                                                </div>
                                            </div>
                                            <div className='flex flex-col w-[48%] font-roboto'>
                                                <label>Email</label>
                                                <div className='px-2  rounded-md h-10 mt-1 text-[.92rem] border-2' >
                                                    <p className='flex items-center my-1.5 text-slate-500'>{data.email}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full h-fit bg-white p-5 mt-4 rounded-md text-[1.1rem] font-semibold font-roboto'>
                                    <h1 className='text-[1.1rem] font-bold mt-2 mb-3'>Cuisine details</h1>
                                    <div className='flex w-full justify-between mt-3 mb-2'>
                                        <div className='flex flex-col w-[48%]'>
                                            <label className='text-[1.1rem] font-bold'>Category</label>
                                            <div className='px-2  rounded-md h-12 mt-1 text-[.92rem] border-2 flex gap-2' name="category" >
                                                {data.category.map((category, index) => (
                                                    <div key={index} className='bg-[#FEFCE8] rounded-3xl'>
                                                        <p className='text-center text-[#CA8A04] px-4 py-2 font-roboto'>{category}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className='flex flex-col w-[48%]'>
                                            <label className='text-[1.1rem] font-bold font-roboto'>Cuisines</label>
                                            <div className='px-2 rounded-md h-12 mt-1 text-[.92rem] border-2 flex gap-2' name="Cuisines" >
                                                {data.cuisines.map((cuisine, index) => (
                                                    <div key={index} className='bg-[#FEFCE8] rounded-3xl'>
                                                        <p className='text-center text-[#CA8A04] px-4 py-2 font-roboto'>{cuisine}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full h-fit bg-white p-5 mt-4 rounded-md text-[1.1rem] font-semibold  font-roboto'>
                                    <h1 className='text-[1.1rem] font-bold mt-2 mb-3'>Operational details</h1>
                                    <div>
                                        <div className='flex w-full justify-between mt-3 mb-2'>
                                            <div className='flex flex-col w-[47%]'>
                                                <label>Opening Hours</label>
                                                <div className='px-2  rounded-md h-10 mt-1 text-[.92rem] border-2' >
                                                    <p className='flex items-center my-1.5 text-slate-500'>{data.opening}</p>
                                                </div>
                                            </div>
                                            <p className='text-slate-500 mt-8 '>To</p>
                                            <div className='flex flex-col w-[47%]'>
                                                <label className='text-white'>Closing</label>
                                                <div className='px-2  rounded-md h-10 mt-1 text-[.92rem] border-2' >
                                                    <p className='flex items-center my-1.5 text-slate-500'>{data.closing}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex w-full justify-between mt-3 mb-2'>
                                            <div className='flex flex-col w-[47%] font-roboto'>
                                                <label>Off Day(Optional)</label>
                                                <div className='px-2  rounded-md h-10 mt-1 text-[.92rem] border-2' >
                                                    <p className='flex items-center my-1.5 text-slate-500'>{data.offDay}</p>
                                                </div>
                                                <div className="flex items-center mt-1">
                                                    <input
                                                        type="checkbox"
                                                        id="remember"
                                                        defaultChecked={!data.offDay}
                                                        className={`w-5 h-5 rounded-md `} />
                                                    <label htmlFor="remember" className="font-roboto ml-3 block text-sm font-medium text-slate-950">
                                                        Store is open every day
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='flex flex-col w-[47%] font-roboto'>
                                                <label>Average Cost for Two</label>
                                                <div className='px-2  rounded-md h-10 mt-1 text-[.92rem] border-2 flex gap-2' >
                                                    <p className=' text-black font-bold text-2xl'>₹</p>
                                                    <p className='flex items-center my-1.5 text-slate-500'>{data.avgCost}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex w-full justify-between mt-3 mb-2'>
                                            <div className='flex flex-col w-[47%]'>
                                                <label>Capacity(Number of Seats)</label>
                                                <div className='px-2  rounded-md h-10 mt-1 text-[.92rem] border-2' >
                                                    <p className='flex items-center my-1.5 text-slate-500'>{data.capacity}</p>
                                                </div>
                                            </div>
                                            <div className='flex flex-col w-[47%]'>
                                                <label className=''>Number of Tables</label>
                                                <div className='px-2  rounded-md h-10 mt-1 text-[.92rem] border-2' >
                                                    <p className='flex items-center my-1.5 text-slate-500'>{data.numberOfTables}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex w-full justify-between mt-3 mb-2'>
                                            <div className='flex flex-col w-[47%]'>
                                                <label>FSSAI License Number</label>
                                                <div className='px-2  rounded-md h-10 mt-1 text-[.92rem] border-2' >
                                                    <p className='flex items-center my-1.5 text-slate-500'>{data.FSSAI}</p>
                                                </div>
                                            </div>
                                            <div className='flex flex-col w-[47%]'>
                                                <label className=''>Sales Representative</label>
                                                <div className='px-2  rounded-md h-10 mt-1 text-[.92rem] border-2' >
                                                    <p className='flex items-center my-1.5 text-slate-500'>{data.salesRep}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                )}

            </div>
        </div>
    )
}

export default AdminMerchantProfile