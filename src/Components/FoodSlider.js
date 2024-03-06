import React from 'react'

//image
import chinesse from "../assets/chinesee.png";
import foodHome from "../assets/foodHome.png"
import allstudent from "../assets/allstudent.png";
import { Link } from 'react-router-dom';

// item

const FoodSlider = ({ size, team }) => {

  const teamLength = 10;
  return (
    <div className="overflow-x-auto whitespace-nowrap scroll-wheel">
      <div className="flex gap-[1rem] my-[1rem]" style={{ width: teamLength * size }}>
        {/* one box */}
        <Link>
          <div className={`w-[${size}px]`} >
            <img src={foodHome} alt="foodHome" className='w-full object-contain' />
            {/* mid */}
            <div className='relative w-full flex justify-around items-center'>
              <img src={chinesse} alt='chinesse' className='relative top-[-15px]' />
              <div>
                <p className='font-[700] text-[#0000008C] text-[1.6rem]'>Oh!Calcutta</p>
                <p className='font-[400] text-[#0000008C] text-[1.2rem]'>Chinar Park</p>
              </div>
            </div>
            {/* last */}
            <div className='relative bg-[#FFD601] w-full rounded-b-md flex justify-around items-center py-[.5rem]'>
              {/* <img src='' alt='' */}
              <div className='relative h-full '>
                <img
                  src={allstudent}
                  alt="allstudent"
                  className="w-[65.61px]"
                ></img>
              </div>
              <p className='font-[700] text-[#0000008C] text-[1.1rem] '>4689</p>
              <p className='font-[700] text-[#0000008C] text-[1.1rem] '>Recommendation</p>
            </div>
          </div>
        </Link>
        {/* 2 box */}
        <Link>
          <div className={`w-[${size}px]`} >
            <img src={foodHome} alt="foodHome" className='w-full object-contain' />
            {/* mid */}
            <div className='relative w-full flex justify-around items-center'>
              <img src={chinesse} alt='chinesse' className='relative top-[-15px]' />
              <div>
                <p className='font-[700] text-[#0000008C] text-[1.6rem]'>Oh!Calcutta</p>
                <p className='font-[400] text-[#0000008C] text-[1.2rem]'>Chinar Park</p>
              </div>
            </div>
            {/* last */}
            <div className='relative bg-[#FFD601] w-full rounded-b-md flex justify-around items-center py-[.5rem]'>
              {/* <img src='' alt='' */}
              <div className='relative h-full '>
                <img
                  src={allstudent}
                  alt="allstudent"
                  className="w-[65.61px]"
                ></img>
              </div>
              <p className='font-[700] text-[#0000008C] text-[1.1rem] '>4689</p>
              <p className='font-[700] text-[#0000008C] text-[1.1rem] '>Recommendation</p>
            </div>
          </div>
        </Link>
        {/* 3 box */}
        <Link>
          <div className={`w-[${size}px]`} >
            <img src={foodHome} alt="foodHome" className='w-full object-contain' />
            {/* mid */}
            <div className='relative w-full flex justify-around items-center'>
              <img src={chinesse} alt='chinesse' className='relative top-[-15px]' />
              <div>
                <p className='font-[700] text-[#0000008C] text-[1.6rem]'>Oh!Calcutta</p>
                <p className='font-[400] text-[#0000008C] text-[1.2rem]'>Chinar Park</p>
              </div>
            </div>
            {/* last */}
            <div className='relative bg-[#FFD601] w-full rounded-b-md flex justify-around items-center py-[.5rem]'>
              {/* <img src='' alt='' */}
              <div className='relative h-full '>
                <img
                  src={allstudent}
                  alt="allstudent"
                  className="w-[65.61px]"
                ></img>
              </div>
              <p className='font-[700] text-[#0000008C] text-[1.1rem] '>4689</p>
              <p className='font-[700] text-[#0000008C] text-[1.1rem] '>Recommendation</p>
            </div>
          </div>
        </Link>
        {/* 4 box */}
        <Link>
          <div className={`w-[${size}px]`} >
            <img src={foodHome} alt="foodHome" className='w-full object-contain' />
            {/* mid */}
            <div className='relative w-full flex justify-around items-center'>
              <img src={chinesse} alt='chinesse' className='relative top-[-15px]' />
              <div>
                <p className='font-[700] text-[#0000008C] text-[1.6rem]'>Oh!Calcutta</p>
                <p className='font-[400] text-[#0000008C] text-[1.2rem]'>Chinar Park</p>
              </div>
            </div>
            {/* last */}
            <div className='relative bg-[#FFD601] w-full rounded-b-md flex justify-around items-center py-[.5rem]'>
              {/* <img src='' alt='' */}
              <div className='relative h-full '>
                <img
                  src={allstudent}
                  alt="allstudent"
                  className="w-[65.61px]"
                ></img>
              </div>
              <p className='font-[700] text-[#0000008C] text-[1.1rem] '>4689</p>
              <p className='font-[700] text-[#0000008C] text-[1.1rem] '>Recommendation</p>
            </div>
          </div>
        </Link>
        {/* 5 box */}
        <Link>
          <div className={`w-[${size}px]`} >
            <img src={foodHome} alt="foodHome" className='w-full object-contain' />
            {/* mid */}
            <div className='relative w-full flex justify-around items-center'>
              <img src={chinesse} alt='chinesse' className='relative top-[-15px]' />
              <div>
                <p className='font-[700] text-[#0000008C] text-[1.6rem]'>Oh!Calcutta</p>
                <p className='font-[400] text-[#0000008C] text-[1.2rem]'>Chinar Park</p>
              </div>
            </div>
            {/* last */}
            <div className='relative bg-[#FFD601] w-full rounded-b-md flex justify-around items-center py-[.5rem]'>
              {/* <img src='' alt='' */}
              <div className='relative h-full '>
                <img
                  src={allstudent}
                  alt="allstudent"
                  className="w-[65.61px]"
                ></img>
              </div>
              <p className='font-[700] text-[#0000008C] text-[1.1rem] '>4689</p>
              <p className='font-[700] text-[#0000008C] text-[1.1rem] '>Recommendation</p>
            </div>
          </div>
        </Link>
        {/* 6 box */}
        <Link>
          <div className={`w-[${size}px]`} >
            <img src={foodHome} alt="foodHome" className='w-full object-contain' />
            {/* mid */}
            <div className='relative w-full flex justify-around items-center'>
              <img src={chinesse} alt='chinesse' className='relative top-[-15px]' />
              <div>
                <p className='font-[700] text-[#0000008C] text-[1.6rem]'>Oh!Calcutta</p>
                <p className='font-[400] text-[#0000008C] text-[1.2rem]'>Chinar Park</p>
              </div>
            </div>
            {/* last */}
            <div className='relative bg-[#FFD601] w-full rounded-b-md flex justify-around items-center py-[.5rem]'>
              {/* <img src='' alt='' */}
              <div className='relative h-full '>
                <img
                  src={allstudent}
                  alt="allstudent"
                  className="w-[65.61px]"
                ></img>
              </div>
              <p className='font-[700] text-[#0000008C] text-[1.1rem] '>4689</p>
              <p className='font-[700] text-[#0000008C] text-[1.1rem] '>Recommendation</p>
            </div>
          </div>
        </Link>

        {/* 7 box */}
        <Link>
          <div className={`w-[${size}px]`} >
            <img src={foodHome} alt="foodHome" className='w-full object-contain' />
            {/* mid */}
            <div className='relative w-full flex justify-around items-center'>
              <img src={chinesse} alt='chinesse' className='relative top-[-15px]' />
              <div>
                <p className='font-[700] text-[#0000008C] text-[1.6rem]'>Oh!Calcutta</p>
                <p className='font-[400] text-[#0000008C] text-[1.2rem]'>Chinar Park</p>
              </div>
            </div>
            {/* last */}
            <div className='relative bg-[#FFD601] w-full rounded-b-md flex justify-around items-center py-[.5rem]'>
              {/* <img src='' alt='' */}
              <div className='relative h-full '>
                <img
                  src={allstudent}
                  alt="allstudent"
                  className="w-[65.61px]"
                ></img>
              </div>
              <p className='font-[700] text-[#0000008C] text-[1.1rem] '>4689</p>
              <p className='font-[700] text-[#0000008C] text-[1.1rem] '>Recommendation</p>
            </div>
          </div>
        </Link>

        {/* 8 box */}
        <Link>
          <div className={`w-[${size}px]`} >
            <img src={foodHome} alt="foodHome" className='w-full object-contain' />
            {/* mid */}
            <div className='relative w-full flex justify-around items-center'>
              <img src={chinesse} alt='chinesse' className='relative top-[-15px]' />
              <div>
                <p className='font-[700] text-[#0000008C] text-[1.6rem]'>Oh!Calcutta</p>
                <p className='font-[400] text-[#0000008C] text-[1.2rem]'>Chinar Park</p>
              </div>
            </div>
            {/* last */}
            <div className='relative bg-[#FFD601] w-full rounded-b-md flex justify-around items-center py-[.5rem]'>
              {/* <img src='' alt='' */}
              <div className='relative h-full '>
                <img
                  src={allstudent}
                  alt="allstudent"
                  className="w-[65.61px]"
                ></img>
              </div>
              <p className='font-[700] text-[#0000008C] text-[1.1rem] '>4689</p>
              <p className='font-[700] text-[#0000008C] text-[1.1rem] '>Recommendation</p>
            </div>
          </div>
        </Link>

        {/* 9 box */}
        <Link>
          <div className={`w-[${size}px]`} >
            <img src={foodHome} alt="foodHome" className='w-full object-contain' />
            {/* mid */}
            <div className='relative w-full flex justify-around items-center'>
              <img src={chinesse} alt='chinesse' className='relative top-[-15px]' />
              <div>
                <p className='font-[700] text-[#0000008C] text-[1.6rem]'>Oh!Calcutta</p>
                <p className='font-[400] text-[#0000008C] text-[1.2rem]'>Chinar Park</p>
              </div>
            </div>
            {/* last */}
            <div className='relative bg-[#FFD601] w-full rounded-b-md flex justify-around items-center py-[.5rem]'>
              {/* <img src='' alt='' */}
              <div className='relative h-full '>
                <img
                  src={allstudent}
                  alt="allstudent"
                  className="w-[65.61px]"
                ></img>
              </div>
              <p className='font-[700] text-[#0000008C] text-[1.1rem] '>4689</p>
              <p className='font-[700] text-[#0000008C] text-[1.1rem] '>Recommendation</p>
            </div>
          </div>
        </Link>

        {/* 10 box */}
        <Link>
          <div className={`w-[${size}px]`} >
            <img src={foodHome} alt="foodHome" className='w-full object-contain' />
            {/* mid */}
            <div className='relative w-full flex justify-around items-center'>
              <img src={chinesse} alt='chinesse' className='relative top-[-15px]' />
              <div>
                <p className='font-[700] text-[#0000008C] text-[1.6rem]'>Oh!Calcutta</p>
                <p className='font-[400] text-[#0000008C] text-[1.2rem]'>Chinar Park</p>
              </div>
            </div>
            {/* last */}
            <div className='relative bg-[#FFD601] w-full rounded-b-md flex justify-around items-center py-[.5rem]'>
              {/* <img src='' alt='' */}
              <div className='relative h-full '>
                <img
                  src={allstudent}
                  alt="allstudent"
                  className="w-[65.61px]"
                ></img>
              </div>
              <p className='font-[700] text-[#0000008C] text-[1.1rem] '>4689</p>
              <p className='font-[700] text-[#0000008C] text-[1.1rem] '>Recommendation</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default FoodSlider