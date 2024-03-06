import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import Navbar1 from "../Components/Navbar1";
import Footer from "../Components/Footer";
import bgImg from "../assets/rec1.png";

const Offers = () => {
  return (
    <div className="w-full ">
      <Navbar1 />
      <div className="relative top-[70px] w-full -mb-10  md:-mb-16 ">
        {/* first section */}
        <div className="w-full h-[500px] relative  ">
          <img
            src={bgImg}
            className=" w-full h-[365px] md:h-[325px] md:object-fill absolute top-0 z-[-1]"
            alt="heroImage"
          ></img>
          <div className="flex flex-row items-center absolute top-5 left-7">
            <FaArrowLeft className="w-10 h-6 " />
            <p className="font-bold text-[20px]">Recommendation</p>
          </div>
          <div className="flex flex-col w-full space-y-7 absolute top-[20%] lg:top-[25%]  ">
            <div className=" font-semibold ml-4 md:ml-10 text-[50px] md:text-[65px] lg:text-[80px] leading-[54px] ">
              Unlock Delicious Deals with SnackBae!
            </div>
            <p className="font-sans ml-4 md:ml-10 font-normal text-[15px] md:text-[22px] md:leading-6">
              Treat yourself to discounts, offers, and exclusive deals on your
              next dining adventure.
            </p>
          </div>
        </div>
      </div>
      <div className="flex space-x-2 ml-4  ">
        <button className="rounded-md  font-sans font-semibold w-[110px] h-[51px] md:w-[12rem] md:h-[3rem] bg-[#FFD601] text-black md:px-6 py-1 md:py-2">
          <p className="font-sans">All Offers</p>
        </button>
        <button className="rounded-md w-[110px] h-[51px] md:w-[12rem] md:h-[3rem] border-2 border-black bg-[#ffffff] text-black px-4 md:px-6 py-1 md:py-2">
          <p className="font-sans font-semibold">No Offers</p>
        </button>
      </div>
    </div>
  );
};

export default Offers;
