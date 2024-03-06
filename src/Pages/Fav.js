import React from 'react'
import bgImg from "../assets/rec1.png";
import { FaArrowLeft } from "react-icons/fa6";
import Navbar1 from "../Components/Navbar1";
import Footer from "../Components/Footer";
const Fav = () => {
  return (
    <div className="w-full h-fit ">
      <Navbar1 />
      <div className="relative h-fit top-[70px] w-full -mb-10  md:-mb-16 ">
        {/* first section */}
        <div className="w-full h-[500px] relative  ">
          <img
            src={bgImg}
            className=" w-full h-[365px] md:h-[325px] md:object-fill absolute top-0 z-[-1]"
            alt="heroImage"
          ></img>
          <div className="flex flex-row items-center absolute top-5 left-7">
            <FaArrowLeft className="w-10 h-6 " />
            <p className="font-bold text-[20px]">My Offers</p>
          </div>
          <div className="flex flex-col w-full space-y-7 absolute top-[20%] lg:top-[25%]  ">
            <div className=" font-semibold ml-4  md:ml-10 text-[50px] md:text-[65px] lg:text-[80px] leading-[54px] md:leading-[65px]">
              My Favrouties
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Fav
