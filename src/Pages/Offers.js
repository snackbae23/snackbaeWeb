import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import Navbar1 from "../Components/Navbar1";
import Footer from "../Components/Footer";
import bgImg from "../assets/rec1.png";
import icon1 from "../assets/table-svgrepo-com 1.png";
import icon2 from "../assets/up-trend-svgrepo-com 1.png";
import icon3 from "../assets/users-group-svgrepo-com 1.png";
import { ImCross } from "react-icons/im";
const Offers = () => {
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
              Unlock Delicious Deals with SnackBae!
            </div>
            <p className="font-sans  ml-4 md:ml-10 font-normal text-[15px] md:text-[22px] md:leading-6">
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
      <div className="relative w-full py-[6rem] text-white flex justify-center items-center">
        <div className="md:w-[75%] lg:w-[90%] mx-auto">
          <div className="w-[100%] mx-auto flex flex-wrap md:flex-row gap-[1rem] justify-between items-center ">
            {/* first part */}
            <div className="flex flex-col lg:w-[515px] lg:h-[204px] gap-5 mb-2 md:mb-3 lg:-mb-7">
              <div className="text-[#020617] lg:w-[700px] text-3xl lg:text-4xl font-roboto font-bold">
                How to Get Offers with SnackBAE
              </div>
              <div className="lg:w-[515px] lg:h-[75px] text-[15px] lg:text-sm text-black">
                At SnackBAE, we believe in rewarding your love for food. Here's
                how you can easily earn offers while enjoying delicious meals:.
              </div>
            </div>
            {/* second part */}

            <div className="w-[100%] mx-auto flex flex-wrap md:flex-row gap-[1rem] justify-center md:justify-stretch items-center">
              {/* first box */}
              <div className="flex flex-col lg:space-y-0 md:-space-y-3 justify-center md:justify-stretch md:w-[30%]">
                <img
                  src={icon1}
                  alt="icons"
                  className=" hidden md:block  md:justify-start w-[42px] h-[42px]"
                ></img>
                <img
                  src={icon1}
                  alt="icons"
                  className="  md:hidden flex mx-auto w-[42px] h-[42px]"
                ></img>
                <div className="font-bold leading-10">Marketing Services:</div>
                <div className="md:w-full w-[305px]  text-sm font-opensans font-normal leading-6 -tracking-2 text-black">
                  SnackBae provides a range of marketing tools, including push
                  notifications, banner ads, social media promotions, and
                  profile boosters, ensuring your business stands out in the
                  crowd.
                </div>
              </div>
              {/* second box */}
              <div className="flex flex-col lg:space-y-0 md:-space-y-6 justify-center md:justify-stretch md:w-[30%] ">
                <img
                  src={icon2}
                  alt="icons"
                  className=" hidden md:block w-[42px] h-[42px]"
                ></img>
                <img
                  src={icon2}
                  alt="icons"
                  className="md:hidden mx-auto w-[42px] h-[42px]"
                ></img>
                <div className="font-bold leading-10">
                  Commissionless Payments:
                </div>
                <div className="md:w-full w-[305px] text-sm font-opensans font-normal leading-6 text-[##020617] -tracking-2  text-black">
                  Keep more of what you earn. SnackBae believes in fair
                  partnerships, offering a commission-free payment solution.
                  Enjoy a seamless transaction experience without unnecessary
                  deductions.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Offers;
