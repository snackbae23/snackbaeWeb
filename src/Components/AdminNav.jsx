import React from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import rec5412 from "../assets/Rectangle 5412.png"
function AdminNav() {
    return (
        
            <div className="w-[100vw] h-[60px] md:flex flex-row hidden justify-between px-20  mx-auto items-center bg-[#dadada] sticky z-50 ">
                <div>
                    
                </div>
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
            </div>
    )
}

export default AdminNav