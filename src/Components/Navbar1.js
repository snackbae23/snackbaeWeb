import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

//image
import group117 from "../assets/Notification (1).png"
import rect54 from "../assets/rectangle54.png"
import group752 from "../assets/Notification.png"
import logo from "../assets/logo.png";
import victory from "../assets/victory.png";
import triangle from "../assets/Polygon 3.png"

//icons
import { IoClose } from "react-icons/io5";
import { SlBadge } from "react-icons/sl";
import { FiPieChart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { TbDiscount } from "react-icons/tb";
import { IoPersonAddSharp } from "react-icons/io5";
import { MdConnectWithoutContact } from "react-icons/md";
import { LuMenu } from "react-icons/lu";

const Navbar1 = () => {


    //notification
    const [notify, setNotify] = useState(false);
    // tempuse for notification
    const tempNotify = [
        {
            "title": "25 % Off at Reunion Cafe",
            "body": "Complete registration of your business profile to start work."
        },
        {
            "title": "25 % Off at Reunion Cafe",
            "body": "Complete registration of your business profile to start work."
        },
        {
            "title": "25 % Off at Reunion Cafe",
            "body": "Complete registration of your business profile to start work."
        },
        {
            "title": "25 % Off at Reunion Cafe",
            "body": "Complete registration of your business profile to start work."
        },
    ]
    const [notifications, setNotifications] = useState(tempNotify);

    const handleNotificationClose = (index) => {
        // Create a new array without the selected notification
        const updatedNotifications = [...notifications];
        updatedNotifications.splice(index, 1);

        // Update the state to re-render with the updated array
        setNotifications(updatedNotifications);
    };

    //profile
    const [profile, setProfile] = useState(false);


    //click handler for click anywhere to close
    const wrapperRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                // Clicked outside the component, so set profile and notify to false
                setProfile(false);
                setNotify(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            // Cleanup the event listener when the component unmounts
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div ref={wrapperRef}>
            <div className="z-10 bg-white fixed   w-full h-[70px]  flex flex-row items-center justify-between  px-6 box-border  max-w-full  text-zinc-700 font-sans">
                {/* logo */}
                <div className="flex flex-row items-start left-1 py-0 px-6">
                    <img
                        className="relative w-[6rem] object-cover z-20"
                        loading="lazy"
                        alt="logo"
                        src={logo}
                    />
                </div>
                {/* right part */}
                <div className="flex flex-row items-center justify-start gap-4 max-w-full z-1">

                    {/* notification */}
                    <img
                        className="relative w-12 h-12 min-h-12 cursor-pointer"
                        loading="lazy"
                        alt="notification"
                        src={group752}
                        onClick={() => {
                            setProfile(false);
                            setNotify(prev => !prev);
                        }}
                    />

                    {/* profile */}

                    <div
                        onClick={() => {
                            setNotify(false);
                            setProfile(prev => !prev);
                        }}
                        className="sm:flex flex-row hidden  items-center justify-start gap-2 cursor-pointer">
                        <img
                            className="relative rounded-2xl w-12 h-12 object-cover"
                            loading="lazy"
                            alt="profile"
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
                    {/* menu icons */}
                    <LuMenu
                        onClick={() => {
                            setNotify(false);
                            setProfile(prev => !prev);
                        }}
                        className='text-[2rem] font-bold sm:hidden block ' />

                </div>

            </div>
            {/* Notification */}
            {
                notify &&
                    notifications.length > 0 ?
                    (
                        <div className='z-[1000] bg-white absolute md:right-[180px] top-[90px] rounded-xl max-w-[400px] w-[100%]'>
                            <img src={triangle} alt='triangle' className='absolute top-[-10px] right-[40px]' />
                            {
                                notifications.map((notif, index) => (
                                    <div className=' relative flex justify-around items-center border-b-2 p-[1rem]'>
                                        <img src={victory} alt='victory' className='h-[3rem] aspect-square mr-[10px]' />
                                        <div className=''>
                                            <p className='font-[700] text-[#1A1A25]'>${notif.title}</p>
                                            <p className='font-[400] text-[#64748B] text-[.9rem]'>${notif.body}</p>
                                        </div>
                                        <IoClose
                                            className='text-[1.6rem] text-[#64748B]'
                                            onClick={() => handleNotificationClose(index)} />
                                    </div>
                                ))
                            }

                            <Link className='flex justify-center items-center'>
                                <p className='text-[#EAB308] py-[1rem]'>See all notifications</p>
                            </Link>
                        </div>
                    ) :
                    (<div></div>)
            }


            {/* profile */}

            {
                profile &&
                <div className='z-[2000] bg-white absolute right-2 top-[90px] rounded-xl max-w-[240px] w-[100%]'>
                    <img src={triangle} alt='triangle' className='absolute top-[-10px] right-[40px]' />

                    {/* profile */}
                    <div
                        className="sm:hidden flex-row flex  items-center justify-center py-3 gap-2 cursor-pointer">
                        <img
                            className="relative rounded-2xl w-12 h-12 object-cover"
                            loading="lazy"
                            alt="profile"
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

                    <p className='bg-[#E2E8F0] h-[1.5px] w-[90%] mx-auto'></p>

                    {/* Recomendations */}
                    <Link to='/recommendation' className='flex justify-around items-center  py-3'>
                        <SlBadge className='w-[20%] text-[1.4rem]' />
                        <p className='font-[400] w-[70%] text-[1rem] text-center'>Recomendations</p>
                    </Link>

                    <p className='bg-[#E2E8F0] h-[1.5px] w-[90%] mx-auto'></p>

                    {/* My Visits */}
                    <Link to='/visit' className='flex justify-around items-center py-3'>
                        <FiPieChart className='w-[20%] text-[1.4rem]' />
                        <p className='font-[400]  w-[70%] text-[1rem] text-center'>My Visits</p>
                    </Link>

                    <p className='bg-[#E2E8F0] h-[1.5px] w-[90%] mx-auto'></p>

                    {/* Favourites */}
                    <Link to='/favourites' className='flex justify-around items-center  py-3'>
                        <FaRegHeart className='w-[20%] text-[1.4rem]' />
                        <p className='font-[400] w-[70%] text-[1rem] text-center'>Favourites</p>
                    </Link>

                    <p className='bg-[#E2E8F0] h-[1.5px] w-[90%] mx-auto'></p>

                    {/* Settings */}
                    <Link to='/setting' className='flex justify-around items-center  py-3'>
                        <IoIosSettings className='w-[20%] text-[1.4rem]' />
                        <p className='font-[400] w-[70%] text-[1rem] text-center'>Settings</p>
                    </Link>

                    <p className='bg-[#E2E8F0] h-[1.5px] w-[90%] mx-auto'></p>

                    {/* Contact Us */}
                    <Link to='/contact' className='flex justify-around items-center  py-3'>
                        <MdConnectWithoutContact className='w-[20%] text-[1.4rem]' />
                        <p className='font-[400] w-[70%] text-[1rem] text-center'>Contact Us</p>
                    </Link>

                    <p className='bg-[#E2E8F0] h-[1.5px] w-[90%] mx-auto'></p>

                    {/* Settings */}
                    <Link to='/offers' className='flex justify-around items-center  py-3'>
                        <TbDiscount className='w-[20%] text-[1.4rem]' />
                        <p className='font-[400] w-[70%] text-[1rem] text-center'>My Offers</p>
                    </Link>

                    <p className='bg-[#E2E8F0] h-[1.5px] w-[90%] mx-auto'></p>

                    {/* Invite Friends */}
                    <Link to='/invitefriend' className='flex justify-around items-center  py-3'>
                        <IoPersonAddSharp className='w-[20%] text-[1.4rem]' />
                        <p className='font-[400] w-[70%] text-[1rem] text-center'>Invite Friends</p>
                    </Link>
                </div>
            }
        </div>
    )
}

export default Navbar1