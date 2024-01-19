import React from "react";
import arrow from "../assets/arrow.png";
import ellipse from "../assets/Ellipse 422.png";
import ellipse2 from "../assets/ellipse1.png";
import ellipse_sm from "../assets/ellip-sm.png";
import ellipse_sm1 from "../assets/ellipse-sm2.png";
import ellipse_sm2 from "../assets/ellipse-sm3.png";
import ellipse_sm3 from "../assets/ellipse-sm4.png";
import rectbig from "../assets/rect1.png";
import rectsm from "../assets/rect-sm.png";
import rectsm2 from "../assets/rect-sm2.png";
import rect3 from "../assets/rect3.png";
import star from "../assets/star.png";
import Slider from "../Components/Slider";
import Faq from "../Components/Faq";
import bg5 from "../assets/bg-5.png";
import app from "../assets/appstore.png";
import still from "../assets/still.png";
import still1 from "../assets/still1.png";
import Footer from "../Components/Footer";
import Navbar from '../Components/Navbar';








const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <div className="bg-white-A700 flex flex-col items-center justify-end mx-auto pt-2 w-full overflow-x-hidden overflow-y-hidden">
        <div className="flex flex-col justify-start w-full">
          <div className="relative w-full h-[100vh] overflow-x-hidden overflow-y-hidden  bg-slate-50 ">
            <div className="flex flex-row items-center justify-between ">
              {/* /left part */}
              <div className="flex flex-col absolute w-[53rem] h-[35rem] -bottom-8 left-[4.5vw] gap-4">
                <div className="w-[14rem] h-[3rem] border rounded-md py-[0.25rem] px-[1rem] gap-2.5 bg-amber-50">
                  <div className="w-[12rem] h-[2.3rem] font-roboto text-lg leading-9 font-semibold items-center text-[#EAB308] z-50">
                    Welcome to SnackBae
                  </div>
                </div>
                <div className="w-[40rem] h-[14rem]  flex flex-col z-40">
                  <div className="w-[41rem]  font-roboto font-semibold text-[48px] leading-[60px] text-slate-950 -tracking-[2%]">
                    Discover, Review, Earn Coupons, and Connect with our vibrant
                    food community.
                  </div>
                  <div className="w-[35rem] h-[4rem] font-opensans font-normal text-base leading-6 -tracking-[2%] text-slate-950 mt-5 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing e Lorem
                    ipsum dolordolor sit ametamet, consecteturconsectetur
                    adipiscing erem ipsum dolor sit a...
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
              <div className="absolute -bottom-4 -right-2">
                <img
                  src={ellipse}
                  className="w-[53vw] h-[88vh]"
                  loading="lazy"
                ></img>
                {/* width={756} height={696}  */}
              </div>
              <div className="absolute -bottom-4 right-0">
                <img
                  src={ellipse2}
                  className="w-[50vw] h-[84vh]"
                  height={626}
                  width={716}
                  loading="lazy"
                ></img>
                {/* height={626} width={716} */}
              </div>
            </div>
          </div>
          {/* // ------------------------------------------------FIRST PART ENDED----------------------------------------------------------------
      // ------------------------------------------------SECOND PART STARTED----------------------------------------------------------------- */}
          <div class="w-[94vw] bg-white flex relative mt-36">
            <div class="flex flex-col lg:flex-row justify-between  w-11/12">
              {/* .---left part---- */}
              <div className="w-[515px] my-auto  mx-auto ">
                <button className="w-[8vw] flex justify-center items-center rounded-3xl py-1 px-6  bg-amber-50 text-amber-500">
                  <p className=" font-roboto  font-semibold text-base leading-10">
                    Discover
                  </p>
                </button>
                <div className="w-[33vw]  flex flex-col gap-5">
                  <div className="w-[33vw] font-semibold  text-[42px] leading-[56px] ">
                    Find,Book, and Save on Delicious Eats
                  </div>

                  <p className="w-[33vw] font-opensans font-normal text-sm leading-6  mb-3">
                    Review, pay, book, and invite friends to earn coupons with
                    every interaction on Snackbae. Discover new restaurants,
                    reserve a table, and enjoy exclusive discounts and offers.
                  </p>
                </div>
                <button className="  py-1 px-1 w-[10rem]  h-[2.8rem] border rounded-lg  bg-[#EAB308]">
                  <p className="font-Roboto font-medium w-[9rem]  text-white text-base leading-4 ">
                    Get Started
                  </p>
                </button>
              </div>
              {/* ---right part----- */}
              <div className="mr-7">
                <img
                  src={rectbig}
                  className=" 
"
                ></img>
                <img
                  className=" absolute h-[47vh] right-[35vw] rounded-[50%] top-[1vh] w-[22vw]"
                  src={rectsm}
                  alt="loading"
                  loading="lazy"
                ></img>
              </div>
              <div className="absolute bg-white bottom-[29%]  drop-shadow-2xl items-center justify-start p-[0.5rem] right-[0] rounded-[15px]  w-[23%] ">
                <div className="flex flex-row gap-3 items-center justify-start my-0.5 w-[%] md:w-full">
                  <img
                    className="h-[80px] md:h-auto object-cover rounded-[12px] w-[26%]"
                    src={rectsm2}
                    alt="loading"
                    loading="lazy"
                  ></img>
                  <div className="flex flex-col gap-[5px] items-start justify-start w-[71%]">
                    <div className="flex flex-row font-roboto items-center justify-between w-full">
                      <p className="text-left text-base text-black tracking-[-0.16px] font-medium font-roboto">
                        Carls's Cafe
                      </p>
                      <p className="text-left text-base text-black tracking-[-0.16px] font-medium font-roboto">
                        Flat 40% off
                      </p>
                    </div>
                    <p className="text-left leading-[22px] text-blue_gray-500 text-sm tracking-[-0.28px] w-[91%] sm:w-full font-normal font-opensans">
                      Review, pay, book, and invite friends to earn coupons.
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute bg-gray-100 bottom-[8%] right-[4%] flex flex-col items-center drop-shadow-2xl justify-start p-[11px]  rounded-[13px] w-[23%]">
                <div className="flex flex-row gap-[0.5vw] items-center justify-start w-[98%] md:w-full">
                  <img
                    className="h-20 md:h-auto object-cover rounded-[10px] w-[26%]
                "
                    src={rectsm2}
                    alt="loading"
                    loading="lazy"
                  ></img>
                  <div className="flex flex-col gap[1vw] items-start justify-start w-[71%]">
                    <div className="flex flex-row font roboto items-center justify-between w-full">
                      <p className="text-left text-base text-black tracking-[-0.16px] font-medium font-roboto">
                        Carls's Cafe
                      </p>
                      <p className="text-left text-base text-black tracking-[-0.16px] font-medium font-roboto">
                        Flat 40% off
                      </p>
                    </div>
                    <p className="text-left leading-[22px] text-blue_gray-500 text-sm tracking-[-0.28px] w-[91%] sm:w-full font-normal font-opensans">
                      Review, pay, book, and invite friends to earn coupons.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --------------------------------------------SECOND PART ENDED--------------------------------------------------
        ------------------------------------------THIRD PART STARTED------------------------------------------------------------- */}

          <div class="w-[100vw] bg-white flex relative mt-36">
            <div class="flex flex-col lg:flex-row justify-between  w-11/12">
              {/* ---left part----- */}
              <div className="ml-[10vw]">
                <img
                  src={rect3}
                  className=" 
"
                ></img>
                <div className="absolute bg-white top-[16%] left-[5%] flex flex-col items-center drop-shadow-2xl justify-center p-[11px]  rounded-[43px] w-[18%]">
                  <div className="flex flex-row gap-[0.5vw] items-center justify-start w-[98%] md:w-full">
                    <img
                      className="h-20 md:h-auto object-cover rounded-[50%] w-[26%]
                "
                      src={rectsm2}
                      alt="loading"
                      loading="lazy"
                    ></img>
                    <div className="flex flex-col gap-[5px] items-start justify-start w-[71%]">
                      <p className="text-left text-base text-black tracking-[-0.16px] font-medium font-roboto">
                        Amanda Cooper
                      </p>
                      <img
                        className=" md:h-auto object-cover 
                "
                        src={star}
                        alt="loading"
                        loading="lazy"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>

              {/* ----right part----- */}
              <div className="w-[515px] mx-auto my-auto ">
                <button className="w-[8vw]  rounded-3xl py-1 px-6  bg-amber-50 text-amber-500">
                  <p className="  font-roboto  font-semibold text-base leading-10">
                    Coupons
                  </p>
                </button>
                <div className=" flex flex-col gap-[24px]">
                  <div className="w-[562px] font-semibold  text-[42px] leading-[56px] ">
                    Review, Pay, Book, and Invite Friends - Earn Coupons with
                    Every Interaction!
                  </div>

                  <p className="w-[33vw]  font-opensans font-normal text-sm leading-6 mb-3">
                    Review, pay, book, and invite friends to earn coupons with
                    every interaction on Snackbae. Discover new restaurants,
                    reserve a table, and enjoy exclusive discounts and offers.
                  </p>
                </div>
                <button className="  py-1 px-1 w-[10rem] flex items-center justify-center h-[2.8rem] border rounded-lg bg-[#EAB308]">
                  <p className="font-Roboto font-medium w-[9rem] text-white text-base leading-4 ">
                    Explore Coupons
                  </p>
                </button>
              </div>
            </div>
          </div>

          {/* ------------------------------------THIRD PART ENDED------------------------------------------------- */}
          {/*-------------------------------------- FOURTH PART STARTED------------------------------------------------ */}
          <div className="mt-60">
            <Slider />
          </div>

          {/* ------------------------------------FOURTH PART ENDED--------------------------------------------------------- */}

          {/* ---------------------------FIFTH PART STARTED----------------- */}
          <div className="relative w-[100vw] h-[100vh] mb-8">
            <img src={bg5} className="w-full h-full absolute z-10"></img>
            <div className="bg-[#000000] w-full h-full absolute z-20 opacity-50"></div>
            <div className=" absolute top-[25%] w-[100%] h-[281px] flex flex-col gap-6 justify-center items-center  z-30">
              <button className="w-[8vw]  rounded-3xl py-1 px-6  bg-amber-50 text-amber-500 ">
                <p className=" font-roboto  font-semibold text-base leading-10">
                  Coupons
                </p>
              </button>

              <div className="w-[600px] h-[112px] font-roboto font-semibold text-[42px] text-center leading-[56px] text-white">
                Download th app Lorem ipsum dolor sit amet dolor sit
              </div>
              <p className="w-[515px] font-normal text[14px] leading-[25px] font-sans text-center text-white opacity-70">
                Download for android and iOS lorem ipsum dolor sit amet
              </p>

              <img className="w-[340px] h-[47px] z-[100]" src={app}></img>
            </div>
          </div>
          {/* ----------------------------FIFTH PART ENDED-------------------- */}
          {/* ------------------------SIXTH PART STARTED----------------------- */}
          <div>
            <Faq />
          </div>
          {/* ------------------------SIXTH PART ENDED--------------------------------- */}
          {/* ----------------------------------SEVENTH PART STARTED--------------------- */}
          <div className="w-full realtive mt-10 h-[185px] flex items-center place-content-center">
            <img src={still} className="absolute w-full object-cover"></img>
            <div className="bg-[#000000] w-full h-[195px] absolute z-20 opacity-50"></div>
            <div className="absolute flex justify-between w-11/12 right- z-30">
              <img src={still1} className=" h-full"></img>
              <button className="  py-1 px-1 w-[8.6rem] flex items-center justify-center h-[2.8rem] border rounded-lg bg-[#EAB308]">
                <p className="font-Roboto font-medium w-[9rem] text-white text-base leading-4 ">
                  Contact us
                </p>
              </button>
            </div>
          </div>
          {/* ---------------------footer---------------- */}
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
