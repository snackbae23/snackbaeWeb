import React from "react";
import Slider from "../Components/Slider";
import Footer from "../Components/Footer";

import bg5 from "../assets/bg-5.png";

import app1 from "../assets/rectangle-1@2x.png";
import app from "../assets/appstore.png";
import bg1 from "../assets/rectangle-2@2x.png";
import bg2 from "../assets/rectangle-16@2x.png";
import bg3 from "../assets/rectangle-16@2x.png";
import bg4 from "../assets/rectangle-16@2x.png";
import bg6 from "../assets/rectangle-3@2x.png";

const Blogs = () => {
  return (
    <div className=" w-full h-fit">
      {/* our blog */}
      <div className="w-full flex flex-col h-fit items-center gap-2">
        <h1 className="text-[2.63rem] mt-[100px] ">Our Blogs</h1>
        <p className="text-[0.88rem] text-slate-500 px-2">
          Dive into a World of Flavors, Trends, and Behind-the-Scenes Stories
        </p>
      </div>
      {/* trending Blogs */}
      <div className="w-full h-fit mt-[2rem] mx-auto">
        <div className="md:w-[90%] mx-auto ">
          <p className="font-bold text-[1.2rem] my-[1rem]">Trending Blogs</p>
          <div className="flex flex-col gap-2 md:flex-row justify-between items-center">
            <div className="relative min-w-[280px] w-[90%] mx-auto md:w-[60%] h-[400px]">
              <img
                src={app1}
                alt="bg"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]  w-[90%]  h-[90%] flex flex-col justify-between">
                <p className="bg-black text-white w-fit px-3 py-1 rounded-xl">
                  May 23,2023
                </p>
                <div className="flex flex-col flex-wrap md:w-[40%]">
                  <p className="text-white">Fish & Tips, Places</p>
                  <p className="text-white font-bold md:text-[1.2rem]">
                    How to Go Salmon Fishing in Washington: An Angler's Guide
                  </p>
                </div>
              </div>
            </div>

            <div className="relative min-w-[280px] w-[90%] mx-auto md:w-[33%] h-[400px]">
              <img
                src={bg6}
                alt="bg"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]  w-[90%]  h-[90%] flex flex-col justify-between">
                <p className="bg-black text-white w-fit px-3 py-1 rounded-xl">
                  May 23,2023
                </p>
                <div className="flex flex-col flex-wrap lg:w-[40%]">
                  <p className="text-white">Fish & Tips, Places</p>
                  <p className="text-white font-bold md:text-[1.2rem]">
                    How to Go Salmon Fishing in Washington: An Angler's Guide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-fit mt-[2rem]">
        <div className="md:w-[90%] mx-auto">
          <div className="flex flex-col md:flex-row gap-2 justify-between">
            <div className="relative min-w-[280px] w-[90%] mx-auto md:w-[30%] h-[353px]">
              <img
                src={bg1}
                alt="bg"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]  w-[90%]  h-[90%] flex flex-col justify-between">
                <p className="bg-black text-white w-fit px-3 py-1 rounded-xl">
                  May 23,2023
                </p>
                <div className="flex flex-col flex-wrap lg:w-[40%]">
                  <p className="text-white">Fish & Tips, Places</p>
                  <p className="text-white font-bold md:text-[1.2rem]">
                    How to Go Salmon Fishing in Washington: An Angler's Guide
                  </p>
                </div>
              </div>
            </div>

            <div className="relative min-w-[280px] w-[90%] mx-auto md:w-[30%] h-[353px]">
              <img
                src={bg5}
                alt="bg"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]  w-[90%]  h-[90%] flex flex-col justify-between">
                <p className="bg-black text-white w-fit px-3 py-1 rounded-xl">
                  May 23,2023
                </p>
                <div className="flex flex-col flex-wrap lg:w-[40%]">
                  <p className="text-white">Fish & Tips, Places</p>
                  <p className="text-white font-bold md:text-[1.2rem]">
                    How to Go Salmon Fishing in Washington: An Angler's Guide
                  </p>
                </div>
              </div>
            </div>

            <div className="relative min-w-[280px] w-[90%] mx-auto md:w-[30%] h-[353px]">
              <img
                src={bg5}
                alt="bg"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]  w-[90%]  h-[90%] flex flex-col justify-between">
                <p className="bg-black text-white w-fit px-3 py-1 rounded-xl">
                  May 23,2023
                </p>
                <div className="flex flex-col flex-wrap lg:w-[40%]">
                  <p className="text-white">Fish & Tips, Places</p>
                  <p className="text-white font-bold md:text-[1.2rem]">
                    How to Go Salmon Fishing in Washington: An Angler's Guide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[90%] mx-auto md:mt-[2rem] m">
        <p className="font-bold text-[1.2rem] my-[1rem]">Trending Blogs</p>
        <div className="flex flex-col md:flex-row  justify-around">
          <div className="md:w-[31%]">
            <div className="w-full h-[353px] relative">
              <img
                src={bg2}
                alt="img"
                className="w-full h-full rounded-xl object-cover"
              />
              <p className="bg-black text-white w-fit px-3 py-1 rounded-xl absolute bottom-[1rem] right-[1rem]">
                May 23,2023
              </p>
            </div>
            <div className="w-full mt-3">
              <p>Name Surname</p>
              <p className="text-[1.3rem]">
                How To go salmon fishing in Washington: ans Angle's Guide
              </p>
            </div>
          </div>

          <div className="md:w-[31%]">
            <div className="w-full h-[353px] relative">
              <img
                src={bg3}
                alt="img"
                className="w-full h-full rounded-xl object-cover"
              />
              <p className="bg-black text-white w-fit px-3 py-1 rounded-xl absolute bottom-[1rem] right-[1rem]">
                May 23,2023
              </p>
            </div>
            <div className="w-full mt-3">
              <p>Name Surname</p>
              <p className="text-[1.3rem]">
                How To go salmon fishing in Washington: ans Angle's Guide
              </p>
            </div>
          </div>
          <div className="md:w-[31%]">
            <div className="w-full h-[353px] relative">
              <img
                src={bg4}
                alt="img"
                className="w-full h-full rounded-xl object-cover"
              />
              <p className="bg-black text-white w-fit px-3 py-1 rounded-xl absolute bottom-[1rem] right-[1rem]">
                May 23,2023
              </p>
            </div>
            <div className="w-full mt-3">
              <p>Name Surname</p>
              <p className="text-[1.3rem]">
                How To go salmon fishing in Washington: ans Angle's Guide
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[90%] mx-auto md:mt-[2rem]">
        <div className="flex flex-col md:flex-row justify-around">
          <div className="md:w-[31%]">
            <div className="w-full h-[353px] relative">
              <img
                src={bg2}
                alt="img"
                className="w-full h-full rounded-xl object-cover"
              />
              <p className="bg-black text-white w-fit px-3 py-1 rounded-xl absolute bottom-[1rem] right-[1rem]">
                May 23,2023
              </p>
            </div>
            <div className="w-full mt-3">
              <p>Name Surname</p>
              <p className="text-[1.3rem]">
                How To go salmon fishing in Washington: ans Angle's Guide
              </p>
            </div>
          </div>

          <div className="md:w-[31%]">
            <div className="w-full h-[353px] relative">
              <img
                src={bg3}
                alt="img"
                className="w-full h-full rounded-xl object-cover"
              />
              <p className="bg-black text-white w-fit px-3 py-1 rounded-xl absolute bottom-[1rem] right-[1rem]">
                May 23,2023
              </p>
            </div>
            <div className="w-full mt-3">
              <p>Name Surname</p>
              <p className="text-[1.3rem]">
                How To go salmon fishing in Washington: ans Angle's Guide
              </p>
            </div>
          </div>
          <div className="md:w-[31%]">
            <div className="w-full h-[353px] relative">
              <img
                src={bg4}
                alt="img"
                className="w-full h-full rounded-xl object-cover"
              />
              <p className="bg-black text-white w-fit px-3 py-1 rounded-xl absolute bottom-[1rem] right-[1rem]">
                May 23,2023
              </p>
            </div>
            <div className="w-full mt-3">
              <p>Name Surname</p>
              <p className="text-[1.3rem]">
                How To go salmon fishing in Washington: ans Angle's Guide
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative  w-full h-[400px] md:w-[100%] md:h-[100vh]  overflow-hidden">
        <img src={bg5} className="w-full h-full absolute z-10"></img>
        <div className="bg-[#000000] w-full h-full absolute z-20 opacity-50"></div>
        <div className=" absolute top-[25%] w-[100%] h-[281px] flex flex-col gap-6 justify-center items-center  z-30">
          {/* <button className="w-[130px] h-[50px]  md:w-[130px]  rounded-3xl py-1 px-6  bg-amber-50 text-amber-500 ">
            <p className="w-[7 mx-auto font-roboto  font-semibold text-base leading-10">
              App Links
            </p>
          </button> */}

          <div className=" w-[360px] h-[64px] md:w-[600px] md:h-[112px] font-roboto font-semibold text-[20px] md:text-[42px] text-center items-center leading-[32px] md:leading-[56px] text-white">
            Download th app Lorem ipsum dolor sit amet dolor sit
          </div>
          <p className="sm:h-[25px] w-[360px] md:w-[515px] font-normaltext-[12px] md:text[14px] leading-[25px] font-sans text-center items-center text-white opacity-70">
            Download for android and iOS lorem ipsum dolor sit amet
          </p>

          <img className="w-[340px] h-[47px] z-[100]" src={app}></img>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Blogs;
