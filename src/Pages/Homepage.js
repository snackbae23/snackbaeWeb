import React from 'react'
import arrow from "../assets/arrow.png"
import ellipse from "../assets/Ellipse 422.png"
import ellipse2 from "../assets/ellipse1.png";
import ellipse_sm from "../assets/ellip-sm.png";
import ellipse_sm1 from "../assets/ellipse-sm2.png"
import ellipse_sm2 from "../assets/ellipse-sm3.png";
import ellipse_sm3 from "../assets/ellipse-sm4.png";

const Homepage = () => {
  return (
    <div className="w-full h-[707px] overflow-x-hidden overflow-y-hidden  bg-slate-50">
      <div className="flex  relative items-center">
        {/* /left part */}
        <div className="flex flex-col absolute w-[636px] h-[488px] top-[197px] left-[83px] gap-9">
          <div className="w-[217px] h-[46px] border rounded-md py-[4px] px-[16px] gap-2.5 bg-amber-50">
            <div className="w-[190px] h-[38px] font-roboto text-lg leading-9 font-semibold items-center text-[#EAB308] z-50">
              Welcome to SnackBae
            </div>
          </div>
          <div className="w-[636px] h-[242px]  flex flex-col z-40">
            <div className="w-[636px] h-[180px] font-roboto font-semibold text-5xl leading-none text-slate-950 -tracking-[2%]">
              Discover, Review, Earn Coupons, and Connect with our vibrant food
              community.
            </div>
            <div className="w-[550px] h-[50px] font-opensans font-normal text-base leading-6 -tracking-[2%] text-slate-950 mt-5 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing e Lorem ipsum
              dolordolor sit ametamet, consecteturconsectetur adipiscing erem
              ipsum dolor sit a...
            </div>
            <div className=" flex flex-row  w-[376px] h-[42px] space-x-6  items-center mb-6">
              <button className=" flex py-3 px-3 w-[158px] relative  h-[42px] border rounded-lg space-x-2 items-start justify-start bg-[#EAB308]">
                <img
                  className="absolute w-[18px] h-[18px]"
                  src={arrow}
                  alt="Logo"
                  loading="lazy"
                ></img>
                <p className="font-Roboto font-medium w-[121px] h-[11px] text-white text-base leading-4 ">
                  Download App
                </p>
              </button>
              <button className="w-[158px] h-[42px] border rounded-lg gap-1 text-slate-950">
                <p className="font-Roboto font-medium text-base leading-5 items-center -tracking-tight justify-center">
                  More Details
                </p>
              </button>
            </div>
            <div className="flex flex-row font-opensans w-[339px] gap-3 items-center justify-center ">
              <div className="flex relative w-[152px]">
                <div className="flex my-auto w-[79%]">
                  <div className="flex my-auto w-[74%]">
                    <img
                      src={ellipse_sm}
                      className="rounded-[50%] my-auto w-14 h-14 border-2 border-[#ffffff]"
                    ></img>
                    <img
                      src={ellipse_sm1}
                      className=" w-14 h-14 ml-[-24px] my-auto rounded-[50%] z-[1]border-2 border-[#ffffff]"
                    ></img>
                  </div>
                  <img
                    src={ellipse_sm2}
                    className=" w-14 h-14 ml-[-24px] my-auto rounded-[50%] z-[1]border-2 border-[#ffffff]"
                  ></img>
                </div>
                <img
                  src={ellipse_sm3}
                  className=" w-14 h-14 ml-[-24px] rounded-[50%] my-auto z-[1]border-2 border-[#ffffff]"
                ></img>
              </div>
              <div className="flex flex-col items-start justify-start w-auto">
                <p className="text0left sm:text-3xl md:text[32px] text-[34px] text-black-900 w-auto font-bold font-opensans">
                  1000+
                </p>
                <div className="flex flex-col items-start justify-start w-auto">
                  <p className="text-left  text-base text-black-900 w-auto font-bold font-opensans">
                    Downloads on Appstore
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* right part */}
        <div className=" flex justify-center ">
          <img
            className="relative w-[930px] h-[639px] top-[130px] items-center justify-center left-[616px] "
            src={ellipse}
            alt="Logo"
            loading="lazy"
          ></img>
          <img
            className="absolute w-[850px] h-[600px] top-[168px] left-[678px]  z-20"
            src={ellipse2}
            alt="Logo"
            loading="lazy"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Homepage
