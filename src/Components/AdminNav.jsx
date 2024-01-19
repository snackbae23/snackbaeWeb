import React from "react";
import logo from "../assets/logo.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import rec5412 from "../assets/Rectangle 5412.png"
function AdminNav() {
    const navigate = useNavigate();
    function logOutHandler()
    {
        localStorage.removeItem("adminData");
        navigate('/adminlogin');
    }
    return (
            <div className="w-[100vw] h-[60px] md:flex flex-row hidden justify-between px-20  mx-auto items-center bg-[#dadada] top-0 fixed z-50 ">
                <div className=" ">
                    <div className="flex gap-4">
                        <div>
                            <img src={rec5412} width={45}></img>
                        </div>
                        <div className="flex flex-col">
                            <div className="font-bold">SnackBAE</div>
                            <div className="text-sm">careers@snackbae.in</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex gap-16">
                        <Link to="/adminDashboard"><div>Restaurant Details</div></Link>
                        <Link to="/form"><div>Restaurant Form</div></Link>
                    </div>
                </div>
                <div>
                    <button  className="py-2 px-8 bg-[#b4b1b1] rounded-md hover:border hover border-black" onClick={logOutHandler}>Log Out</button>
                </div>
            </div>
    )
}

export default AdminNav