import React from 'react'
import { useState } from 'react';
import logo from '../assets/Frame.png';
import github from '../assets/logo-github 1.png';
import insta from '../assets/logo-instagram 1.png';
import twitter from '../assets/logo-twitter 2.png';
import fb from '../assets/Vector.png';
function Footer() {
    const [email,setEmail] = useState("");
    function changeHandler(e)
    {
        setEmail(e.target.value);
    }
  return (
    <div>
        {/* first section */}
        <div className='w-full h-[351px] bg-[#020617] flex flex-col justify-center items-center '>
            <div className='w-[531px] h-[200px] mx-auto flex flex-col justify-center items-center gap-4'>
                <div className='w-[496px] text-[#ffffff] font-roboto font-semibold text-3xl text-center'>Subscribe to our newsletter</div>
                <div className='text-xs w-[428px] h-[25px] font-normal text-[#ffffff] text-center'>Join our newsletter to receive updates on new features and releases.</div>
                <div>
                    <form className='flex gap-3'>
                        <input type='email' name='email' value={email} onChange={changeHandler} className='w-[290px] h-[33px] rounded-md text-[#CBD5E1] bg-[#1E293B] pl-4 border-none text-sm' placeholder='Email'></input>
                        <button className='w-[130px] h-[33px] bg-[#EAB308]  rounded-md px-[19px] py-[10px] flex justify-center items-center text-[#ffffff] font-roboto font-semibold tracking-tighter '>
                        Subscribe
                    </button>
                    </form>
                </div>
                <div className='text-xs font-normal text-[#ffffff]'>By subscribing, you agree to our Privacy Policy and Terms of service</div>
            </div>
        </div>
        {/* second section */}
        <div className='w-full h-[190px] bg-[#0F172A] '>
            <div className='h-[85%] w-[85vw] flex flex-col gap-7 mx-auto'>
            {/* first part */}
            <div className='w-full mx-auto flex justify-between pt-9 items-center'>
                <div>
                    <img src={logo} ></img>
                </div>
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
            {/* second part */}
            <div className='w-full mx-auto h-[0.5px] bg-white opacity-20'></div>
            {/* third part */}
            <div className='text-white text-xs text-center'>
            © Copyright 2022, All Rights Reserved by ClarityUI
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer