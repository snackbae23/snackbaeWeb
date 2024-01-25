import React, { useState } from "react";
import vector4 from "../assets/vector4.svg"
import vector3 from "../assets/vector3.svg"
import rect2 from "../assets/group11.png"
import logo from "../assets/logo.png";
const axios = require('axios');
// import Navbar from "../Components/Navbar";

const Login = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    function changeHandler(event) {
        setFormData((prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }

    const submitHandler = async () => {
        try {
            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'http://localhost:4000/api/partnerLogin',
                headers: {
                    'Content-Type': 'application/json',
                    'Cookie': 'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InZhbmlndXB0YWEyMDAzQGdtYWlsLmNvbSIsImlkIjoiNjVhZWNlOGI5ZTc0NDM0MDI5ODQ1ZGNkIiwiaWF0IjoxNzA1OTU1MTExLCJleHAiOjE3MDYwNDE1MTF9.zaPO-ljfSnMFuJ0lAsl7VovhwqVo2XhjHdf7HK49LW8'
                },
                data: formData
            };
            axios.request(config)
                .then((response) => {
                    console.log(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });

        }
        catch (err) {

        } 
    }

    const [rememberMe, setRememberMe] = useState(false);

    return (
        <div>
            {/* <Navbar/> */}
            <div className="w-[100vw] h-[100vh] overflow-hidden flex ">
                {/* Left Part  52rem 47rem*/}
                <div className="hidden lg:flex lg:w-[47rem]">
                    <div className="w-full h-[100vh] -left-3 -top-3 relative bg-gradient-to-r from-[#0f0f28] to-[#04034d] rounded-2xl">
                        <div className="absolute">
                            <img src={vector4} alt="Vector" className="" style={{ transform: 'rotate(160.86deg)' }} />
                        </div>
                        <div className="absolute">
                            <img src={vector3} alt="Vector" className="" style={{ transform: 'rotate(80.21deg)' }} />
                        </div>
                        {/* 44rem 37rem*/}
                        <div className="ml-[5.8rem] w-[44rem] h-[90vh]">
                            <img src={rect2} alt="Img" className="my-14" loading="lazy" />
                        </div>
                    </div>
                </div>
                {/* Right Part */}
                <div className="ml-16 w-full mt-10">
                    <img src={logo} alt="logo" className="mt-14 w-32 " />
                    <div className='font-roboto text-3xl leading-10 font-semibold text-[#020617] -tracking-[2%]'>
                        Account Login
                    </div>
                    <div className='font-normal text-base text-[#020617] font-opensans w-[25rem] -tracking-[2%]'>
                        If you are already a Partner you can login with your email address and password.
                    </div>
                    <div className='flex flex-col mt-8'>
                        <label
                            className=''
                            htmlFor='email'>
                            <p
                                className='text-xl font-medium font-roboto text-[#020617] mb-3'
                            >Email address
                            </p>
                        </label>
                        <input
                            required
                            type='text'
                            name='email'
                            onChange={changeHandler}
                            value={formData.email}
                            className='border-none font-roboto outline-slate-200 ring-1 p-2 rounded-lg h-14 w-[85%]'
                            placeholder="Important"
                        />
                    </div>
                    <div className='flex flex-col mt-6'>
                        <label
                            className=''
                            htmlFor='password'>
                            <p
                                className='text-xl font-medium font-roboto text-[#020617] mb-3'
                            >Password
                            </p>
                        </label>
                        <input
                            required
                            type='text'
                            name='password'
                            onChange={changeHandler}
                            value={formData.password}
                            className='border-none font-roboto outline-slate-200 ring-1 p-2 rounded-lg h-14 w-[85%]'
                            placeholder="Important"
                        />
                    </div>

                    <div className="flex items-center mt-4">
                        <input
                            type="checkbox"
                            id="remember"
                            checked={rememberMe}
                            onChange={() => setRememberMe(!rememberMe)}
                            className="w-5 h-5 rounded-md"
                        />
                        <label htmlFor="rememberMeCheckbox" className="font-roboto ml-3 block text-sm font-medium text-slate-950">
                            Remember Me
                        </label>
                    </div>
                    <button onClick={submitHandler} className='w-[85%] h-14 mt-6 bg-[#EAB308] border rounded-lg px-5 py-3 flex justify-center items-center text-[#ffffff] font-roboto text-base font-semibold tracking-tighter '>
                        Login
                    </button>
                    <div className="font-roboto text-slate-950 mt-6">
                        Dont have an account ? <span className="font-bold">Register</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login