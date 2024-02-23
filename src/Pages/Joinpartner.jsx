import React, { useEffect, useState } from 'react'
import ellipse422 from "../assets/Ellipse 422.png";
import ellipse425 from '../assets/Ellipse 425.png';
import icon1 from '../assets/table-svgrepo-com 1.png';
import icon2 from '../assets/up-trend-svgrepo-com 1.png';
import icon3 from '../assets/users-group-svgrepo-com 1.png';
import section3 from '../assets/Rectangle 55210.png';
import Footer from '../Components/Footer';
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { ImCross } from 'react-icons/im';
// import Navbar from '../Components/Navbar';
function Joinpartner() {
    // let popup = document.getElementById('popup');
    
    function openPopup() {
        document.getElementById('popup').style.display = "block";
        document.getElementById('background').style.filter = "blur(6Px)";
        document.getElementById('filter').style.opacity = "1";
        document.documentElement.scrollTop = 0;
    }
    function closePopup() {
        document.getElementById('popup').style.display = "none";
        document.getElementById('background').style.filter = "blur(0px)";
        document.getElementById('filter').style.opacity = "0";
    }

    const toast = useToast();
    const [formData, setFormData] = useState({ rname: "", email: "", outlet: "", phone: "", loc: "" });
    function changeHandler(event) {
        const { name, value } = event.target;
        setFormData((prevData) => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }
    function resetForm() {
        setFormData({ rname: "", email: "", outlet: "", phone: "", loc: "" });
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            
            const { data } = await axios.post(
                "http://localhost:4000/api/saveBecomePartnerData",
                 formData ,
                config
            );
            resetForm();
            closePopup();
            toast({
                title: "Message Sent",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "top-right",
            });

        } catch (error) {
            toast({
                title: "Error Occured!",
                description: error.response.data.message,
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "top-right",
            });
        }
    }
    
    return (
        <div className='relative '>
            {/* <Navbar/> */}
            {/* popup */}
            <div className='absolute top-20 lg:top-28 left-[5%] lg:left-[15%] z-[100] shadow-inner hidden' id='popup'>
                <div className='w-[90vw] lg:w-[70vw] mx-auto bg-[rgba(248,250,252,0.82)] pb-8 rounded-md flex justify-center items-center'>
                    <div className='w-[95vw] mx-auto lg:w-[90vw] h-fit flex flex-col gap-10'>
                        <div className='flex justify-between'>
                            <div></div>
                            <div className='text-2xl lg:text-4xl text-center font-semibold font-roboto pt-2'>Become a partner</div>
                            <button onClick={closePopup} className='text-right p-2'><ImCross /></button>
                        </div>
                        <div className='w-[90%] lg:w-[80%] mx-auto bg-[#ffffff] rounded-md p-4 h-fit'>
                            <form onSubmit={submitHandler}>
                                <div className='flex flex-col gap-10'>
                                    <div className='flex flex-row justify-between'>
                                        <div className='w-[49%] flex flex-col gap-3'>
                                            <label className='text-xs font-semibold font-roboto'>Restaurant name</label>
                                            <input required type='text' name='rname' onChange={changeHandler} value={formData.rname} className='w-full h-[50px] p-3 border border-[#E2E8F0] rounded-md focus:outline-none focus:shadow-md'></input>
                                        </div>
                                        <div className='w-[49%] flex flex-col gap-3'>
                                            <label className='text-xs font-semibold font-roboto'>Email address</label>
                                            <input required type='email' name='email' onChange={changeHandler} value={formData.email} className='w-full h-[50px] p-3 border border-[#E2E8F0] rounded-md focus:outline-none focus:shadow-md'></input>
                                        </div>
                                    </div>
                                    <div className='flex justify-between'>
                                        <div className='w-[49%] flex flex-col gap-3'>
                                            <label className='text-xs font-semibold font-roboto'>Number of Outlets</label>
                                            <input required type='text' name='outlet' onChange={changeHandler} value={formData.outlet} className='w-full h-[50px] p-3 border border-[#E2E8F0] rounded-md focus:outline-none focus:shadow-md'></input>
                                        </div>
                                        <div className='w-[49%] flex flex-col gap-3'>
                                            <label className='text-xs font-semibold font-roboto'>Point of Contact</label>
                                            <input required type='text' name='phone' onChange={changeHandler} value={formData.phone} className='w-full h-[50px] p-3 border border-[#E2E8F0] rounded-md focus:outline-none focus:shadow-md'></input>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='w-full flex flex-col gap-3'>
                                            <label className='text-xs font-semibold font-roboto'>Location</label>
                                            <input required type='text' name='loc' onChange={changeHandler} value={formData.loc} className='w-full h-[50px] p-3 border border-[#E2E8F0] rounded-md focus:outline-none focus:shadow-md'></input>
                                        </div>
                                    </div>
                                    <div className='w-full flex justify-center'>
                                        <button className='w-[137px] h-[42px] bg-[#EAB308] border rounded-md px-[19px] py-[10px] flex justify-center items-center text-[#ffffff] font-roboto font-semibold tracking-tighter'>
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
            {/* first section  top-[15vh]*/}
            <div className='h-[100vh] sm:min-h-[70vh] md:min-h-[55vh] my-auto lg:h-[800px] w-[100vw] overflow-hidden bg-slate-50 relative blur-none' id='background'>
                <div className='w-full h-full bg-[#000000df] opacity-0' id='filter'></div>
                <div className='w-full mx-auto lg:w-[636px] lg:h-[352px] flex gap-[24px] flex-col absolute top-[50%] -translate-y-1/2 lg:left-[7vw] text-center lg:text-left px-8 lg:px-0 pt-16 lg:pt-0'>
                    <div className='w-[217px] h-[46px] bg-[#FFFBEB] py-[4px] px-[24px] border rounded-full hidden lg:flex'>
                        <div className='text-[#EAB308] font-roboto leading-9 font-semibold h-[2.5rem] w-[10rem] text-center'>Do business with us</div>
                    </div>
                    <div className='text-[#020617] text-5xl xl:text-7xl font-roboto font-semibold'>Join as Partner</div>
                    <div className='font-opensans font-bold text-[#020617] -tracking-2 xl:text-lg '>Elevate Dining Experience with SnackBae</div>
                    <div className='font-normal text-sm xl:text-lg text-[#020617]  lg:w-[510px] font-opensans -tracking-2'>
                        At SnackBae, we believe in the transformative power of exceptional dining experiences. Our mission is to empower restaurants to elevate their offerings, connect with a vibrant community, and enhance customer retention. Join us on this culinary journey and let SnackBae be your partner in success.
                    </div>
                    <div className='mx-auto lg:mx-0'>
                        <button className='w-[137px] h-[42px] bg-[#EAB308] border rounded-md px-[19px] py-[10px] flex justify-center items-center text-[#ffffff] font-roboto font-semibold tracking-tighter' onClick={openPopup}>
                            Get Started
                        </button>
                    </div>
                </div>
                <div className='hidden lg:flex absolute -bottom-4 -right-2'>
                    <img src={ellipse422} className='w-[53vw] min-h-[52vh] h-[62%]' loading="lazy"></img>
                    {/* width={756} height={696}  */}
                </div>
                <div className='hidden lg:flex absolute -bottom-4 right-0'>
                    <img src={ellipse425} className='w-[50vw] min-h-[50vh] h-[60%]'  loading="lazy"></img>
                    {/* height={626} width={716} */}
                </div>
            </div>
            {/* second section */}
            <div className='w-full h-fit py-16 lg:py-0 lg:h-[600px] flex justify-center items-center'>
                <div className='w-[80%] mx-auto'>
                    <div className='flex flex-col gap-11 '>
                        {/* first part */}
                        <div className='flex flex-col lg:w-[515px] lg:h-[204px] gap-5'>
                            <div className='w-[111px] h-[37px] bg-[#FFFBEB] border rounded-full'>
                                <div className='text-[#EAB308] font-roboto leading-9 font-semibold text-sm text-center'>Features</div>
                            </div>
                            <div className='text-[#020617] lg:w-[515px] text-3xl lg:text-4xl font-roboto font-semibold'>Our Offerings</div>
                            <div className='lg:w-[515px] lg:h-[75px] text-xs lg:text-sm'>SnackBae is here to elevate your business to new heights with a suite of innovative offerings designed just for you.</div>
                        </div>
                        {/* second part */}
                        <div className='w-[100%] mx-auto pl-2 lg:pl-0 flex flex-col lg:flex-row lg:justify-between gap-14 lg:gap-0 mt-8 lg:mt-0'>
                            {/* first box */}
                            <div className='flex flex-col  lg:w-[30%]'>
                                <img src={icon1} className='w-[42px] h-[42px]'></img>
                                <div className='font-bold leading-10'>Marketing Services:</div>
                                <div className='lg:w-full text-sm font-opensans font-normal text-[##020617] -tracking-2'>Boost your visibility and attract more customers. SnackBae provides a range of marketing tools, including push notifications, banner ads, social media promotions, and profile boosters, ensuring your business stands out in the crowd.</div>
                            </div>
                            {/* second box */}
                            <div className='flex flex-col lg:w-[30%]'>
                                <img src={icon2} className='w-[42px] h-[42px]'></img>
                                <div className='font-bold leading-10'>Commissionless Payments:</div>
                                <div className='lg:w-full text-sm font-opensans font-normal text-[##020617] -tracking-2 '>Keep more of what you earn. SnackBae believes in fair partnerships, offering a commission-free payment solution. Enjoy a seamless transaction experience without unnecessary deductions.</div>
                            </div>
                            {/* third box */}
                            <div className='flex flex-col lg:w-[30%]'>
                                <img src={icon3} className='w-[42px] h-[42px]'></img>
                                <div className='font-bold leading-10'>Customer Insights for Better Retention:</div>
                                <div className='lg:w-full text-sm font-opensans font-normal text-[##020617] -tracking-2'>Unlock the power of data! Gain valuable insights into customer preferences and behaviors, allowing you to tailor your offerings and services for maximum satisfaction.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* third section What to upscale your business? Register as partner.*/}
            <div className='relative w-full  h-[350px] md:h-[300px] lg:h-[680px] xl:h-[800px] my-auto'>
                <img src={section3} className='w-full h-full absolute top-0 z-20'></img>
                <div className='bg-[#000000] w-full h-full absolute top-0 z-30 opacity-50'></div>
                <div className='lg:w-[515px] lg:h-[382px] absolute lg:top-[24%] lg:left-[10%] p-7 lg:p-0 flex flex-col gap-6 z-40'>
                    <div className='w-[115px] h-[35px] bg-[#FFFBEB] rounded-full hidden lg:flex justify-center items-center'>
                        <div className='text-[#EAB308] font-roboto leading-8 font-semibold text-sm text-center'>Join us!</div>
                    </div>
                    <div className='w-full lg:w-[490px] -tracking-2 text-[#ffffff] text-2xl lg:text-4xl font-roboto font-semibold'>Discover new possibilities with SnackBae – where your success is our priority!</div>
                    <div className='w-full lg:w-[515px] lg:h-[75px] text-sm -tracking-2 text-[#ffffff] font-normal text-left opacity-70 lg:opacity-100'>At SnackBae, we understand the unique needs of merchants like you. Join our platform to not only streamline your operations but also to create meaningful connections with your customers.</div>
                    <button onClick={openPopup} className='mx-auto lg:mx-0 mt-3 lg:mt-0 w-[137px] h-[42px] bg-[#EAB308]  rounded-md px-[19px] py-[10px] flex justify-center items-center text-[#ffffff] font-roboto font-semibold tracking-tighter '>
                        Get Started
                    </button>
                </div>
            </div>
            {/* fourth section / footer */}
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Joinpartner