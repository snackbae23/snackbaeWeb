import React from 'react'
import ellipse422 from "../assets/Ellipse 422.png";
import ellipse425 from '../assets/Ellipse 425.png';
import icon1 from '../assets/table-svgrepo-com 1.png';
import icon2 from '../assets/up-trend-svgrepo-com 1.png';
import icon3 from '../assets/users-group-svgrepo-com 1.png';
import section3 from '../assets/Rectangle 55210.png';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
function Joinpartner() {
    return (
        <div>
            {/* first section */}
            <div className='h-[100vh] w-[100vw] overflow-hidden bg-slate-50 relative'>
                <div className='w-[636px] h-[352px] flex gap-[24px] flex-col absolute top-[28vh] left-[7vw]'>
                    <div className='w-[217px] h-[46px] bg-[#FFFBEB] py-[4px] px-[24px] border rounded-full'>
                        <div className='text-[#EAB308] font-roboto leading-9 font-semibold h-[2.5rem] w-[10rem] text-center'>Do business with us</div>
                    </div>
                    <div className='text-[#020617] text-5xl font-roboto font-semibold'>Join as Partner</div>
                    <div className='font-opensans font-bold text-[#020617] -tracking-2 '>Elevate Dining Experience with SnackBae</div>
                    <div className='font-normal text-sm text-[#020617] w-[510px] font-opensans -tracking-2'>
                        At SnackBae, we believe in the transformative power of exceptional dining experiences. Our mission is to empower restaurants to elevate their offerings, connect with a vibrant community, and enhance customer retention. Join us on this culinary journey and let SnackBae be your partner in success.
                    </div>
                    <Link to='/joinpartnerform'><button className='w-[137px] h-[42px] bg-[#EAB308] border rounded-md px-[19px] py-[10px] flex justify-center items-center text-[#ffffff] font-roboto font-semibold tracking-tighter '>
                        Get Started
                    </button>
                    </Link>
                </div>
                <div className='absolute -bottom-4 -right-2'>
                    <img src={ellipse422} className='w-[53vw] h-[88vh]' loading="lazy"></img>
                    {/* width={756} height={696}  */}
                </div>
                <div className='absolute -bottom-4 right-0'>
                    <img src={ellipse425} className='w-[50vw] h-[84vh]' height={626} width={716} loading="lazy"></img>
                    {/* height={626} width={716} */}
                </div>
            </div>
            {/* second section */}
            <div className='w-full h-[80vh] flex justify-center items-center'>
                <div className='w-[80%] mx-auto'>
                    <div className='flex flex-col gap-11 '>
                        {/* first part */}
                        <div className='flex flex-col w-[515px] h-[204px] gap-5'>
                            <div className='w-[111px] h-[37px] bg-[#FFFBEB] border rounded-full'>
                                <div className='text-[#EAB308] font-roboto leading-9 font-semibold text-sm text-center'>Features</div>
                            </div>
                            <div className='text-[#020617] w-[515px] text-4xl font-roboto font-semibold'>Features for Partners</div>
                            <div className='w-[515px] h-[75px] text-sm'>Review, pay, book, and invite friends to earn coupons with every interaction on Snackbae. Discover new restaurants, reserve a table, and enjoy exclusive discounts and offers.</div>
                        </div>
                        {/* second part */}
                        <div className='w-full flex flex-row justify-between'>
                            {/* first box */}
                            <div className='flex flex-col'>
                                <img src={icon1} className='w-[42px] h-[42px]'></img>
                                <div className='font-semibold leading-10'>Seamless Table Reservations</div>
                                <div className='w-[359px] text-sm font-opensans font-normal text-[##020617] -tracking-2'>SnackBae offers a state-of-the-art reservation system, allowing your customers to effortlessly book tables and ensuring a smooth dining experience. Maximize your restaurant's capacity and enhance customer.</div>
                            </div>
                            {/* second box */}
                            <div className='flex flex-col'>
                                <img src={icon2} className='w-[42px] h-[42px]'></img>
                                <div className='font-semibold leading-10'>Increased Visibility</div>
                                <div className='w-[359px] text-sm font-opensans font-normal text-[##020617] -tracking-2'>SnackBae offers a state-of-the-art reservation system, allowing your customers to effortlessly book tables and ensuring a smooth dining experience. Maximize your restaurant's capacity and enhance customer.</div>
                            </div>
                            {/* third box */}
                            <div className='flex flex-col'>
                                <img src={icon3} className='w-[42px] h-[42px]'></img>
                                <div className='font-semibold leading-10'>Customer Insights for Better Retention</div>
                                <div className='w-[359px] text-sm font-opensans font-normal text-[##020617] -tracking-2'>SnackBae offers a state-of-the-art reservation system, allowing your customers to effortlessly book tables and ensuring a smooth dining experience. Maximize your restaurant's capacity and enhance customer.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* third section */}
            <div className='relative w-full h-[85vh]'>
                <img src={section3} className='w-full h-full absolute top-0 z-20'></img>
                <div className='bg-[#000000] w-full h-full absolute top-0 z-30 opacity-50'></div>
                <div className='w-[515px] h-[382px] absolute top-[19%] left-[10%] flex flex-col gap-5 z-40'>
                    <div className='w-[115px] h-[35px] bg-[#FFFBEB] rounded-full'>
                        <div className='text-[#EAB308] font-roboto leading-8 font-semibold text-sm text-center'>Join us!</div>
                    </div>
                    <div className='w-[415px] -tracking-2 text-[#ffffff] text-4xl font-roboto font-semibold'>What to upscale your business? Register as partner</div>
                    <div className='w-[515px] h-[75px] text-sm -tracking-2 text-[#ffffff] font-normal'>Lorem ipsum dolor sit amet consectetur. Tincidunt scelerisque commodo proin faucibus.Lorem ipsum dolor sit amet consectetur. Tincidunt scelerisque commodo proin faucibus.</div>
                    <Link to='/joinpartnerform'><button className='w-[137px] h-[42px] bg-[#EAB308]  rounded-md px-[19px] py-[10px] flex justify-center items-center text-[#ffffff] font-roboto font-semibold tracking-tighter '>
                        Get Started
                    </button>
                    </Link>
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