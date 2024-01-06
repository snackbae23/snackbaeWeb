import React from "react";
import arrow from "../assets/arrow.png";
import ellipse from "../assets/Ellipse 422.png";
import ellipse2 from "../assets/ellipse1.png";
import ellipse_sm from "../assets/ellip-sm.png";
import ellipse_sm1 from "../assets/ellipse-sm2.png";
import ellipse_sm2 from "../assets/ellipse-sm3.png";
import ellipse_sm3 from "../assets/ellipse-sm4.png";

const Homepage = () => {
  return (
    <div className="relative w-full h-[49.5vw] overflow-x-hidden overflow-y-hidden  bg-slate-50">
      <div className="flex  items-center">
        {/* /left part */}
        <div className="flex flex-col absolute w-[53rem] h-[35rem] top-[12vw] left-[4.5vw] gap-9">
          <div className="w-[14rem] h-[3rem] border rounded-md py-[0.25rem] px-[1rem] gap-2.5 bg-amber-50">
            <div className="w-[12rem] h-[2.3rem] font-roboto text-lg leading-9 font-semibold items-center text-[#EAB308] z-50">
              Welcome to SnackBae
            </div>
          </div>
          <div className="w-[39.5rem] h-[14rem]  flex flex-col z-40">
            <div className="w-[39.5rem] h-[12rem] font-roboto font-semibold text-5xl leading-none text-slate-950 -tracking-[2%]">
              Discover, Review, Earn Coupons, and Connect with our vibrant food
              community.
            </div>
            <div className="w-[35rem] h-[4rem] font-opensans font-normal text-base leading-6 -tracking-[2%] text-slate-950 mt-5 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing e Lorem ipsum
              dolordolor sit ametamet, consecteturconsectetur adipiscing erem
              ipsum dolor sit a...
            </div>
            <div className=" flex flex-row  w-[22rem] h-[3.5rem] space-x-6  items-center mb-3">
              <button className=" flex py-3 px-3 w-[10rem] relative  h-[2.8rem] border rounded-lg space-x-2 items-start justify-start bg-[#EAB308]">
                <img
                  className="absolute w-[1.2rem] h-[1.2rem]"
                  src={arrow}
                  alt="Logo"
                  loading="lazy"
                ></img>
                <p className="font-Roboto font-medium w-[9rem] h-[0.75rem] text-white text-base leading-4 ">
                  Download App
                </p>
              </button>
              <button className="w-[158px] h-[42px] border rounded-lg gap-1 text-slate-950">
                <p className="font-Roboto font-medium text-base leading-5 items-center -tracking-tight justify-center">
                  More Details
                </p>
              </button>
            </div>
            <div className="flex flex-row font-opensans w-[21rem] gap-3 items-center justify-center ">
              <div className="flex relative w-[10rem]">
                <div className="flex my-auto w-[79%]">
                  <div className="flex my-auto w-[74%]">
                    <img
                      src={ellipse_sm}
                      className="rounded-[50%] my-auto w-14 h-14 border-2 border-[#ffffff]"
                    ></img>
                    <img
                      src={ellipse_sm1}
                      className=" w-14 h-14 ml-[-25%] my-auto rounded-[50%] z-[1] border-2 border-[#ffffff]"
                    ></img>
                  </div>
                  <img
                    src={ellipse_sm2}
                    className=" w-14 h-14 ml-[-23%] my-auto rounded-[50%] z-[1]  border-2 border-[#ffffff]"
                  ></img>
                </div>
                <img
                  src={ellipse_sm3}
                  className=" w-14 h-14 ml-[-18%] rounded-[50%] my-auto z-[1] border-2 border-[#ffffff]"
                ></img>
              </div>
              <div className="flex flex-col items-start justify-start w-auto">
                <p className="text-left sm:text-3xl md:text[2rem] text-[3rem] text-black-900 w-auto font-bold font-opensans">
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
        <div className=" flex  justify-around my-auto mx-auto ">
          <img
            className=" absolute w-[60vw] h-[110vh] top-[7vw]  right-[-3vw] "
            src={ellipse}
            alt="Logo"
            loading="lazy"
          ></img>
          <img
            className="absolute w-[70vw] h-[99vh] top-[6.4vw] right-[-9vw] object-scale-down z-20 place-content-around"
            src={ellipse2}
            alt="Logo"
            loading="lazy"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
