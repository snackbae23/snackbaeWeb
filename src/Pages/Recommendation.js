import React from "react";
import Navbar1 from "../Components/Navbar1";
import Footer from "../Components/Footer";
import bgImg from "../assets/rec1.png";
import { FaArrowLeft } from "react-icons/fa6";
import Faq from "../Components/Faq";

const Recommendation = () => {
  return (
    <div className="w-full h-fit">
      <Navbar1 />
      <div className="relative top-[70px] w-full h-fit ">
        {/* first section */}
        <div className="w-full h-[67vh] relative  ">
          <img
            src={bgImg}
            className=" h-full md:object-fill absolute top-0 z-[-1]"
            alt="heroImage"
          ></img>
          <div className="flex flex-row items-center absolute top-5 left-7">
            <FaArrowLeft className="w-10 h-6 " />
            <p className="font-bold text-[20px]">Recommendation</p>
          </div>
          <div className="flex flex-col md:w-[80%] w-full space-y-7 absolute top-[20%] lg:top-[30%] left-0 md:left-[15%]  ">
            <div className=" font-semibold ml-4 lg:ml-0 text-[50px] md:text-[65px] lg:text-[80px] leading-[54px] ">
              Become the Ultimate Food Critic
            </div>
            <p className="font-sans font-normal ml-4 lg:ml-0 text-[15px] md:text-[22px] md:leading-6">
              Recommend dishes, eateries, and make dining experiences more
              enjoyable.
            </p>
            <div className="flex space-x-2 ml-4 lg:ml-0">
              <button className="rounded-md  font-sans w-[160px] h-[51px] md:w-[15rem] md:h-[3rem] bg-[#0A191E] text-white md:px-6 py- md:py-2">
                <p className="font-sans">Recommend Now</p>
              </button>
              <button className="rounded-md w-[160px] h-[51px] md:w-[15rem] md:h-[3rem] border-4 border-black bg-[#FFD601] text-black px-4 md:px-6 py-1 md:py-2">
                <p className="font-sans">View Rewards</p>
              </button>
            </div>
          </div>
        </div>
        {/* FAQ */}
        <div>
          <div>
            <Faq />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
