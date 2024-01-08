import React from "react";
import ellipse from "../assets/Ellipse 422.png"
import ellipseA from "../assets/Ellipse 426.png"
import rectangle from "../assets/Rectangle 55207.png"
import Footer from "../Components/Footer";
import rect from "../assets/Rectangle 55207.png"
import ellipseB from "../assets/Ellipse 424.png"
import rect1 from "../assets/Rectangle 3463490.png"
import TeamSlider from "../Components/TeamSlider";
import rect2 from "../assets/Rectangle 55220.png"

const AboutUs = () => {
    return (
        <div>
            {/* First Part */}
            <div className='h-[100vh] w-[100vw] overflow-hidden bg-slate-50 relative'>

                {/* Left Part */}
                <div className='w-[39.75rem] h-[22rem] flex gap-[1.5rem] flex-col absolute top-[28vh] left-[7vw]'>
                    <div className="w-[7.125rem] h-12 rounded-3xl py-1 px-4 gap-2.5 bg-amber-50">
                        <div className=" font-roboto text-lg leading-9 font-semibold items-center text-[#EAB308] z-50">
                            About Us
                        </div>
                    </div>
                    <div className='text-[#020617] text-5xl font-roboto font-semibold'>
                        Vision
                    </div>
                    <div className='font-opensans font-bold text-[#020617] -tracking-[2%]'>
                        Elevate Dining Experience with SnackBae
                    </div>
                    <div className='font-normal text-sm text-[#020617] w-[31.875rem] font-sans -tracking-[2%]'>
                        At SnackBae, we believe in the transformative power of exceptional dining experiences. Our mission is to empower
                        restaurants to elevate their offerings, connect with a vibrant community, and enhance customer retention.
                        Join us on this culinary journey and let SnackBae be your partner in success.
                    </div>
                    <button className='w-36 h-11 bg-[#EAB308] border rounded-md px-5 py-3 flex justify-center items-center text-[#ffffff] font-roboto text-base font-semibold tracking-tighter '>
                        Get Started
                    </button>
                </div>

                {/* Right Part */}
                <div className='absolute -bottom-3 right-2'>
                    <img
                        src={ellipse}
                        className='w-[53vw] h-[88vh]'
                        loading="lazy"
                        alt="Img"
                    ></img>
                </div>
                <div className='absolute -bottom-10 right-0'>
                    <img
                        src={ellipseA}
                        className='w-[52vw] h-[88vh]'
                        loading="lazy"
                        alt="Img"
                    ></img>
                </div>

                {/* <div className="absolute -bottom-4 -right-2">
                    <img
                        className="w-[53vw] h-[88vh]"
                        src={ellipse}
                        alt="Img"
                        loading="lazy"
                    ></img>
                    <img
                        className=" w-[926px] h-[926px] z-20"
                        src={ellipseA}
                        alt="Img"
                        loading="lazy"
                    ></img>
                </div> */}

            </div>

            {/* Second Part */}
            <div class=" bg-white flex relative mt-36">
                <div class="flex justify-center">
                    {/* left Part */}
                    <div className="ml-[10vw] pr-10">
                        <div className="">
                            <img
                                src={rect}
                                className=""
                                alt="Img"
                                loading="lazy"
                            ></img>
                            <img
                                className=" absolute h-[47vh] left-1 rounded-full top-[1vh] w-[22vw] z-50"
                                src={ellipseB}
                                alt="Img"
                                loading="lazy"
                            ></img>
                        </div>
                    </div>

                    {/* Right Part */}
                    <div className='w-[33.75rem] h-[35rem] my-auto mx-auto gap-6 left-[35vw] mt-36'>
                        <div className="w-[7.125rem] h-12 rounded-3xl py-1 px-4 gap-2.5 bg-amber-50 ">
                            <div className=" font-roboto text-lg leading-9 font-semibold items-center text-[#EAB308] z-50">
                                Discover
                            </div>
                        </div>
                        <div className='text-[#020617] text-5xl font-roboto font-semibold my-4'>
                            Mission
                        </div>
                        <div className='font-normal text-sm text-[#020617] w-[31.875rem] font-opensans -tracking-[2%]'>
                            At SnackBae, we believe in the transformative power of exceptional dining experiences. Our mission is to empower
                            restaurants to elevate their offerings, connect with a vibrant community, and enhance customer retention.
                            Join us on this culinary journey and let SnackBae be your partner in success.
                        </div>
                    </div>
                </div>

            </div>

            {/* Third Part */}
            <div className="bg-white">

                <div className='flex gap-[1.5rem] flex-col ml-24'>
                    <div className="w-[7.125rem] h-12 rounded-3xl py-1 px-4 gap-2.5 bg-amber-50">
                        <div className=" font-roboto text-lg leading-9 font-semibold items-center text-[#EAB308] z-50">
                            Discover
                        </div>
                    </div>
                    <div className='text-[#020617] text-5xl font-roboto font-semibold'>
                        Meet the Team
                    </div>
                </div>
                {/* <div className="flex gap-x-2 ml-24 mt-8 overflow-x: scroll">
                    <div className="w-[18.75rem] h-[23rem]">
                        <img
                            src={rect1}
                            alt="Img"
                            loading="lazy"
                            className="w-[18.75rem] h-[18.75rem]"
                        >
                        </img>
                        <div>
                            Amanda Cooper
                        </div>
                        <div>
                            Lorem Ipsum Role
                        </div>
                    </div>
                    <div className="w-[18.75rem] h-[23rem]">
                        <img
                            src={rect1}
                            alt="Img"
                            loading="lazy"
                            className="w-[18.75rem] h-[18.75rem]"
                        >
                        </img>
                        <div>
                            Amanda Cooper
                        </div>
                        <div>
                            Lorem Ipsum Role
                        </div>
                    </div>
                    <div className="w-[18.75rem] h-[23rem]">
                        <img
                            src={rect1}
                            alt="Img"
                            loading="lazy"
                            className="w-[18.75rem] h-[18.75rem]"
                        >
                        </img>
                        <div>
                            Amanda Cooper
                        </div>
                        <div>
                            Lorem Ipsum Role
                        </div>
                    </div>
                    <div className="w-[18.75rem] h-[23rem]">
                        <img
                            src={rect1}
                            alt="Img"
                            loading="lazy"
                            className="w-[18.75rem] h-[18.75rem]"
                        >
                        </img>
                        <div>
                            Amanda Cooper
                        </div>
                        <div>
                            Lorem Ipsum Role
                        </div>
                    </div>
                    <div className="w-[18.75rem] h-[23rem]">
                        <img
                            src={rect1}
                            alt="Img"
                            loading="lazy"
                            className="w-[18.75rem] h-[18.75rem]"
                        >
                        </img>
                        <div>
                            Amanda Cooper
                        </div>
                        <div>
                            Lorem Ipsum Role
                        </div>
                    </div>
                </div> */}
                <div className="mx-24 mt-8">
                    <TeamSlider />
                </div>
            </div>

            {/* Fourth Part */}
            {/* <div className="relative w-full h-[43rem] m-0">
                <img
                    alt="Img"
                    src={rect2}
                    loading="lazy"
                    className="absolute "
                ></img>
                <div className="bg-black w-full h-full absolute m-0 opacity-50"></div>
                <div className='z-50 absolute mx-[25%]'>
                    <div className='w-[33.75rem] h-[35rem] gap-6 mt-36'>
                        <div className="w-32 h-12 rounded-3xl py-1 px-4 gap-2.5 bg-amber-50 ">
                            <div className=" font-roboto text-lg leading-9 font-semibold text-center mt-[0.125rem] items-center text-[#EAB308] z-50">
                                App Links
                            </div>
                        </div>
                        <div className='text-white text-4xl font-roboto font-semibold my-4'>
                            Download th app Lorem ipsum dolor sit amet dolor sit
                        </div>
                        <div className='font-normal text-sm text-white w-[31.875rem] font-opensans -tracking-[2%]'>
                            Download for android and iOS lorem ipsum dolor sit amet
                        </div>
                    </div>
                </div>
            </div> */}
            
            {/* Footer */}
            <Footer />
        </div>
    )
};

export default AboutUs