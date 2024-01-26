import React from 'react'
import { useState } from 'react';
import logo from '../assets/Frame.png';
import github from '../assets/logo-github 1.png';
import insta from '../assets/logo-instagram 1.png';
import twitter from '../assets/logo-twitter 2.png';
import fb from '../assets/Vector.png';
import { Link } from "react-router-dom";
function Footer() 
{
    const [email, setEmail] = useState("");
    function changeHandler(e) {
        setEmail(e.target.value);
    }
    return (
        <div>
            {/* first section */}
            <div className='w-full h-[200px] lg:h-[251px] bg-[#020617] flex flex-col justify-center items-center'>
                <div className='w-full p-5 lg:p-0 lg:w-[531px] h-[200px] mx-auto flex flex-col justify-center items-center gap-2 lg:gap-4'>
                    <div className='lg:w-[496px] text-[#ffffff] font-roboto font-semibold text-xl lg:text-3xl text-center'>Subscribe to our newsletter</div>
                    <div className='text-xs w-full lg:w-[428px] lg:h-[25px] font-normal text-[#ffffff] text-center'>Join our newsletter to receive updates on new features and releases.</div>
                    <div>
                        <form className='flex gap-3'>
                            <input type='email' name='email' value={email} onChange={changeHandler} className='w-[55vw] lg:w-[290px] h-[33px] rounded-md text-[#CBD5E1] bg-[#1E293B] pl-4 border-none text-sm' placeholder='Email'></input>
                            <button className='w-[35vw] lg:w-[130px] h-[33px] bg-[#EAB308]  rounded-md px-[19px] py-[10px] flex justify-center items-center text-[#ffffff] font-roboto font-semibold tracking-tighter '>
                                Subscribe
                            </button>
                        </form>
                    </div>
                    <div className='text-xs font-normal text-[#ffffff]'>By subscribing, you agree to our Privacy Policy and Terms of service</div>
                </div>
            </div>
            
            {/* second section */}
            <div className='w-full h-fit lg:h-[290px] bg-[#0F172A]'>
                <div className='h-[85%] w-[85vw] flex flex-col gap-7 mx-auto'>
                    {/* first part */}
                    <div className='w-full lg:flex flex-col hidden lg:flex-row lg:justify-between pt-9 gap-8'>
                        <div className='flex flex-col gap-2'>
                            <img src={logo} width={200}></img>
                            <div className='lg:w-64 text-white opacity-80'>MEET - EAT -  CELEBRATE</div>
                        </div>
                        <div className='text-white lg:flex flex-col gap-2 hidden '>
                            <div >
                                <div className='font-bold'>Links</div>
                                <div className='w-6 h-[3px] bg-white'></div>
                            </div>
                            <div>
                                <Link to="/"><div>Home</div></Link>
                                <Link to="/joinpartner"><div>Join as Partner</div></Link>
                                <Link to="/blog"><div>Blogs</div></Link>
                                <Link to="/aboutUs"><div>About Us</div></Link>
                            </div>
                        </div>
                        <div className='text-white flex flex-col gap-2'>
                            <div>
                                <div className='font-bold'>Login as</div>
                                <div className='w-9 h-[3px] bg-white'></div>
                            </div>
                            <div className='flex flex-row gap-6 lg:gap-1 lg:flex-col'>
                            <Link to="/login"><div>Partner Login</div></Link>
                            <Link to="/adminlogin"><div>Admin Login</div></Link>
                            </div>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <div className='text-white font-bold'>Follow us on :</div>
                            <div className='flex gap-2'>
                                <div className='w-[28px] h-[28px] border border-white rounded-full flex items-center justify-center'>
                                    <img src={twitter} ></img>
                                </div>
                                <div className='w-[28px] h-[28px] border border-white rounded-full flex items-center justify-center'>
                                    <img src={fb} ></img>
                                </div>
                                <div className='w-[28px] h-[28px] border border-white rounded-full flex items-center justify-center'>
                                    <img src={insta} ></img>
                                </div>
                                <div className='w-[28px] h-[28px] border border-white rounded-full flex items-center justify-center'>
                                    <img src={github} ></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full mx-auto flex flex-col lg:hidden pt-9 gap-8'>
                        <div className='flex flex-col w-full mx-auto items-center gap-2'>
                            <img src={logo} width={200}></img>
                            <div className='text-center text-white opacity-80'>Discover and connect with our vibrant food community</div>
                        </div>
                        <div className='text-white flex flex-col items-center gap-2'>
                            <div>
                                <div className='font-bold'>Login as</div>
                                <div className='w-9 h-[3px] bg-white'></div>
                            </div>
                            <div className='flex flex-row gap-6 lg:gap-1 lg:flex-col'>
                            <Link to="/login"><div>Partner Login</div></Link>
                            <Link to="/adminlogin"><div>Admin Login</div></Link>
                            </div>
                        </div>
                        <div className='flex flex-col gap-3 items-center'>
                            <div className='text-white font-bold'>Follow us on :</div>
                            <div className='flex gap-2'>
                                <div className='w-[28px] h-[28px] border border-white rounded-full flex items-center justify-center'>
                                    <img src={twitter} ></img>
                                </div>
                                <div className='w-[28px] h-[28px] border border-white rounded-full flex items-center justify-center'>
                                    <img src={fb} ></img>
                                </div>
                                <div className='w-[28px] h-[28px] border border-white rounded-full flex items-center justify-center'>
                                    <img src={insta} ></img>
                                </div>
                                <div className='w-[28px] h-[28px] border border-white rounded-full flex items-center justify-center'>
                                    <img src={github} ></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* second part */}
                    <div className='w-full mx-auto h-[0.5px] bg-white opacity-20'></div>
                    {/* third part */}
                    <div className='text-white text-xs text-center pb-1'>
                        © Copyright 2022, All Rights Reserved by ClarityUI
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer