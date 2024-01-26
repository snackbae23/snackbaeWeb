import React from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { FaCopyright } from "react-icons/fa";
import { useEffect } from "react";
import { useState } from "react";
import { FiMinusCircle } from "react-icons/fi";
import { FiPlusCircle } from "react-icons/fi";
const Faq = () => {
  useEffect(() => {
    handlerfirst();
    handlersecond();
    handlerthird();
    handlerfourth();
    handlerfifth();
    handlersixth();
  }, []);
  function handlerfirst() {
    const lang = document.body.querySelector(".first");

    console.log(lang);

    if (first === false && lang) {
      setFirst(true);
      if (lang.classList) {
        lang.classList.add("happy");
        lang.classList.remove("hhappy");
      }
    } else {
      setFirst(false);
      if (lang.classList) {
        lang.classList.remove("happy");
        lang.classList.add("hhappy");
      }
    }
  }
  function handlersecond() {
    const lang = document.body.querySelector(".second");

    console.log(lang);

    if (second === false && lang) {
      setSecond(true);
      if (lang.classList) {
        lang.classList.add("happy");
        lang.classList.remove("hhappy");
      }
    } else {
      setSecond(false);
      if (lang.classList) {
        lang.classList.remove("happy");
        lang.classList.add("hhappy");
      }
    }
  }
  function handlerthird() {
    const lang = document.body.querySelector(".third");

    console.log(lang);

    if (third === false && lang) {
      setThird(true);
      if (lang.classList) {
        lang.classList.add("happy");
        lang.classList.remove("hhappy");
      }
    } else {
      setThird(false);
      if (lang.classList) {
        lang.classList.remove("happy");
        lang.classList.add("hhappy");
      }
    }
  }
  function handlerfourth() {
    const lang = document.body.querySelector(".fourth");

    console.log(lang);

    if (fourth === false && lang) {
      setFourth(true);
      if (lang.classList) {
        lang.classList.add("happy");
        lang.classList.remove("hhappy");
      }
    } else {
      setFourth(false);
      if (lang.classList) {
        lang.classList.remove("happy");
        lang.classList.add("hhappy");
      }
    }
  }
  function handlerfifth() {
    const lang = document.body.querySelector(".fifth");

    if (fifth === false && lang) {
      setFifth(true);
      if (lang.classList) {
        lang.classList.add("happy");
        lang.classList.remove("hhappy");
      }
    } else {
      setFifth(false);
      if (lang.classList) {
        lang.classList.remove("happy");
        lang.classList.add("hhappy");
      }
    }
  }
  function handlersixth() {
    const lang = document.body.querySelector(".sixth");

    if (sixth === false && lang) {
      setSixth(true);
      if (lang.classList) {
        lang.classList.add("happy");
        lang.classList.remove("hhappy");
      }
    } else {
      setSixth(false);
      if (lang.classList) {
        lang.classList.remove("happy");
        lang.classList.add("hhappy");
      }
    }
  }

  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(true);
  const [third, setThird] = useState(true);
  const [fourth, setFourth] = useState(true);
  const [fifth, setFifth] = useState(true);
  const [sixth, setSixth] = useState(true);

  return (
    // <div className="w-[360px] mx-auto lg-mx-0 lg:w-[100%] min-h-[133vh] max-h-auto lg:mb-16">
      <div className="w-[360px] mx-auto lg-mx-0 lg:w-[100%]   lg:mb-16">
      <div className="flex flex-col space-y-4 justify-center items-center">
        <button className="w-[96px] h-[34px] rounded-3xl  px-6  bg-amber-50 text-amber-500 ">
          <p className=" font-roboto font-semibold text-base lg:leading-10">
            FAQs
          </p>
        </button>

        <div className="w-[360px] h-[23px] lg:w-[600px] lg:h-[56px] font-roboto font-semibold text-[20px] lg:text-[42px] text-center leading-[23px] lg:leading-[56px] text-black">
          Frequently asked questions
        </div>
        <p className="w-[360px] lg:w-[590px] font-normal text-[12px] lg:text[14px] leading-[25px] font-sans text-center text-black ">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>
      <div className="flex flex-col mt-14 space-y-9 items-center justify-center">
        <div className=" w-[360px] lg:w-[770px] flex flex-col space-y-4 ">
          <div
            className="flex flex-row relative cursor-pointer  "
            onClick={handlerfirst}
          >
            <div className="flex flex-col ">
              <div className=" w-[312px] lg:w-[720px] text-[20px] leading-[30px] font-medium">
                Is there a free trial available?
              </div>
            </div>
            <div className=" md:absolute md:-right-7 md:top-4">
              {first ? (
                <span>
                  {" "}
                  <FiMinusCircle size={28} className="text-yellow-500" />{" "}
                </span>
              ) : (
                <span>
                  {" "}
                  <FiPlusCircle size={28} className="text-yellow-500" />{" "}
                </span>
              )}
            </div>
          </div>
          <div className="first ">
            <div className="  space flex flex-col   ">
              <div className="w-[18.5rem] relative">
                <div className=" w-[312px] lg:w-[720px] text-[12px] font-sans font-normal lg:text-[14px] leading-[25px]">
                  Yes, you can try us for free for 30 days. If you want, we’ll
                  provide you with a free, personalized 30-minute onboarding
                  call to get you up and running as soon as possible.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[360px] lg:w-[770px] h-[1px] bg-slate-200"></div>
        <div className="w-[360px] lg:w-[770px] flex flex-col space-y-3 ">
          <div
            className="flex flex-row relative cursor-pointer  "
            onClick={handlersecond}
          >
            <div className="flex flex-col">
              <div className=" w-[312px] lg:w-[720px] text-[20px] leading-[30px] font-medium">
                Can I change my plan later?
              </div>
            </div>
            <div className=" md:absolute md:-right-7 md:top-4">
              {second ? (
                <span>
                  {" "}
                  <FiMinusCircle size={28} className="text-yellow-500" />{" "}
                </span>
              ) : (
                <span>
                  {" "}
                  <FiPlusCircle size={28} className="text-yellow-500" />{" "}
                </span>
              )}
            </div>
          </div>
          <div className="second ">
            <div className="  space flex flex-col   ">
              <div className="w-[18.5rem] relative">
                <div className=" w-[312px] lg:w-[720px] text-[12px] font-sans font-normal lg:text-[14px] leading-[25px]">
                  Yes, you can try us for free for 30 days. If you want, we’ll
                  provide you with a free, personalized 30-minute onboarding
                  call to get you up and running as soon as possible.
                </div>
                {/* <div className=" w-[770px] h-[1px] bg-slate-200"></div> */}
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[360px] lg:w-[770px] h-[1px] bg-slate-200"></div>
        <div className=" w-[360px] lg:w-[770px] flex flex-col space-y-3 ">
          <div
            className="flex flex-row relative cursor-pointer  "
            onClick={handlerthird}
          >
            <div className="flex flex-col">
              <div className=" w-[312px] lg:w-[720px] text-[20px] leading-[30px] font-medium">
                What is your cancellation policy?
              </div>
              {/* <div className="max-w-[18rem]">
                      <p>Languages that I have picked up over the years</p>
                    </div> */}
            </div>
            <div className=" md:absolute md:-right-7 md:top-4">
              {third ? (
                <span>
                  {" "}
                  <FiMinusCircle size={28} className="text-yellow-500" />{" "}
                </span>
              ) : (
                <span>
                  {" "}
                  <FiPlusCircle size={28} className="text-yellow-500" />{" "}
                </span>
              )}
            </div>
          </div>
          <div className="third ">
            <div className="  space flex flex-col   ">
              <div className="w-[18.5rem] relative">
                <div className=" w-[312px] lg:w-[720px] text-[12px] font-sans font-normal lg:text-[14px] leading-[25px]">
                  Yes, you can try us for free for 30 days. If you want, we’ll
                  provide you with a free, personalized 30-minute onboarding
                  call to get you up and running as soon as possible.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[360px] lg:w-[770px] h-[1px] bg-slate-200"></div>
        <div className="w-[360px] lg:w-[770px] flex flex-col space-y-3 ">
          <div
            className="flex flex-row relative cursor-pointer  "
            onClick={handlerfourth}
          >
            <div className="flex flex-col">
              <div className=" w-[312px] lg:w-[720px] text-[20px] leading-[30px] font-medium">
                Can other info be added to the invoice?
              </div>
            </div>
            <div className=" md:absolute md:-right-7 md:top-4">
              {fourth ? (
                <span>
                  {" "}
                  <FiMinusCircle size={28} className="text-yellow-500" />{" "}
                </span>
              ) : (
                <span>
                  {" "}
                  <FiPlusCircle size={28} className="text-yellow-500" />{" "}
                </span>
              )}
            </div>
          </div>
          <div className="fourth ">
            <div className="  space flex flex-col   ">
              <div className="w-[18.5rem] relative">
                <div className=" w-[312px] lg:w-[720px] text-[12px] font-sans font-normal lg:text-[14px] leading-[25px]">
                  Yes, you can try us for free for 30 days. If you want, we’ll
                  provide you with a free, personalized 30-minute onboarding
                  call to get you up and running as soon as possible.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[360px] lg:w-[770px] h-[1px] bg-slate-200"></div>
        <div className=" w-[360px] lg:w-[770px] flex flex-col space-y-3 ">
          <div
            className="flex flex-row relative cursor-pointer  "
            onClick={handlerfifth}
          >
            <div className="flex flex-col">
              <div className=" w-[312px] lg:w-[720px] text-[20px] leading-[30px] font-medium">
                How does billing work?
              </div>
            </div>
            <div className=" md:absolute md:-right-7 md:top-4">
              {fifth ? (
                <span>
                  {" "}
                  <FiMinusCircle size={28} className="text-yellow-500" />{" "}
                </span>
              ) : (
                <span>
                  {" "}
                  <FiPlusCircle size={28} className="text-yellow-500" />{" "}
                </span>
              )}
            </div>
          </div>
          <div className="fifth ">
            <div className="  space flex flex-col   ">
              <div className="w-[18.5rem] relative">
                <div className=" w-[312px] lg:w-[720px] text-[12px] font-sans font-normal lg:text-[14px] leading-[25px]">
                  Yes, you can try us for free for 30 days. If you want, we’ll
                  provide you with a free, personalized 30-minute onboarding
                  call to get you up and running as soon as possible.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[360px] lg:w-[770px] h-[1px] bg-slate-200"></div>
        <div className=" w-[360px] lg:w-[770px] flex flex-col space-y-3 ">
          <div
            className="flex flex-row relative cursor-pointer  "
            onClick={handlersixth}
          >
            <div className="flex flex-col">
              <div className=" w-[312px] lg:w-[720px] text-[20px] leading-[30px] font-medium">
                How do I change my account email?
              </div>
            </div>
            <div className=" md:absolute md:-right-7 md:top-4">
              {sixth ? (
                <span>
                  {" "}
                  <FiMinusCircle size={28} className="text-yellow-500" />{" "}
                </span>
              ) : (
                <span>
                  {" "}
                  <FiPlusCircle size={28} className="text-yellow-500" />{" "}
                </span>
              )}
            </div>
          </div>
          <div className="sixth ">
            <div className="  space flex flex-col   ">
              <div className="w-[18.5rem] relative">
                <div className=" w-[312px] lg:w-[720px] text-[12px] font-sans font-normal lg:text-[14px] leading-[25px]">
                  Yes, you can try us for free for 30 days. If you want, we’ll
                  provide you with a free, personalized 30-minute onboarding
                  call to get you up and running as soon as possible.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;