import React from 'react'
import { useState } from 'react';
import { Link } from 'react-scroll';


const Form = () => {

  const [formData, setFormData] = useState({
    restaurantName: '',
    cuisineType: '',
    location: '',
    pocContact: '',
    customerContact: '',
    contactPerson: '',
    openingHour: '',
    closeingHour: '',
    reservationPolicy: '',
    ambienceDescription: '',
    capacity: '',
    numberOfTables: '',
    specialties: '',
    currentPromotions: '',
    dietaryRestrictions: '',
    preferredPaymentMethod: '',
    specialties1: '',
    currentPromotion: '',
    agree: false,
  });

  function resetForm() {
    setFormData({ restaurantName: '',
    cuisineType: '',
    location: '',
    pocContact: '',
    customerContact: '',
    contactPerson: '',
    openingHour: '',
    closeingHour: '',
    reservationPolicy: '',
    ambienceDescription: '',
    capacity: '',
    numberOfTables: '',
    specialties: '',
    currentPromotions: '',
    dietaryRestrictions: '',
    preferredPaymentMethod: '',
    specialties1: '',
    currentPromotion: '',
    agree: false, });
}

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform further actions with the form data here
    console.log('Form Data:', formData);
  };

  return (
    <div>

      <div className=" bg-zinc-100 w-full h-screen overflow-hidden text-center text-xl text-white font-inter relative">
        <div className="flex  absolute top-[145px] left-[680px] text-[42px] tracking-[-0.02em] leading-[56px] font-semibold font-roboto text-slate-950 ">
          Become a partner
        </div>
        <div className="absolute top-[231px] left-[calc(50%_-_416px)] flex flex-row items-center justify-center gap-[14px]">
          <div className="flex flex-row items-center justify-start gap-[12px]">
            <div className="relative w-10 h-10">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-slate-950 w-10 h-10" />
              <b className="absolute top-[8px] left-[15px] tracking-[-0.02em]">
                1
              </b>
              <img
                className="absolute top-[10px] left-[10px] w-5 h-5 overflow-hidden"
                alt=""
              />
            </div>
            <div className="relative text-sm tracking-[-0.02em] font-semibold font-roboto text-slate-950 text-left">
              Contact Details
            </div>
          </div>
          <div className="relative rounded-11xl bg-slate-300 w-[25px] h-1" />
          <div className="flex flex-row items-center justify-start gap-[12px]">
            <div className="relative w-10 h-10">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-slate-300 w-10 h-10" />
              <b className="absolute top-[8px] left-[14px] tracking-[-0.02em]">
                2
              </b>
            </div>
            <div className="relative text-sm tracking-[-0.02em] font-roboto text-slate-500 text-left">
              Operational Details
            </div>
          </div>
          <div className="relative rounded-11xl bg-slate-300 w-[25px] h-1" />
          <div className="flex flex-row items-center justify-start gap-[12px]">
            <div className="relative w-10 h-10">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-slate-300 w-10 h-10" />
              <b className="absolute top-[8px] left-[13px] tracking-[-0.02em]">
                3
              </b>
            </div>
            <div className="relative text-sm tracking-[-0.02em] font-roboto text-slate-500 text-left">
              Menu and Specialties
            </div>
            <div className="relative rounded-11xl bg-slate-300 w-[25px] h-1" />
            <div className="flex flex-row items-center justify-start gap-[12px]">
              <div className="relative w-10 h-10">
                <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-slate-300 w-10 h-10" />
                <b className="absolute top-[8px] left-[13px] tracking-[-0.02em]">
                  4
                </b>
              </div>
              <div className="relative text-sm tracking-[-0.02em] font-roboto text-slate-500 text-left">
                Additional Information
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-full bg-white top-[320px] bottom-16 rounded-3xl  ml-14 mr-14">
          <div className="ml-20 mr-20 mt-4">
            <form onSubmit={handleSubmit}>
              <div className='grid grid-rows-3 grid-cols-2  gap-9 text-slate-950 h-[420px] '>
                <div className='grid grid-rows-2 '>
                  <label className="flex ml-4 mt-4" htmlFor="restaurantName">Restaurant Name:</label>
                  <input className="rounded-xl shadow-md ml-4"
                    type="text"
                    id="restaurantName"
                    name="restaurantName"
                    placeholder='   important'
                    value={formData.restaurantName}
                    onChange={handleChange}
                  />
                </div>
                <div className='grid grid-rows-2 '>
                  <label className="flex ml-4 mt-4" htmlFor="cuisineType">Type of Cuisine:</label>
                  <input className="rounded-xl shadow-md ml-4"
                    type="text"
                    id="cuisineType"
                    name="cuisineType"
                    placeholder='   important'
                    value={formData.cuisineType}
                    onChange={handleChange}
                  />
                </div>
                <div className='grid grid-rows-2 '>
                  <label className="flex ml-4 mt-4" htmlFor="location">Location:</label>
                  <input className="rounded-xl shadow-md ml-4"
                    type="text"
                    id="location"
                    name="location"
                    placeholder='   important'
                    value={formData.location}
                    onChange={handleChange}
                  />
                </div>
                <div className='grid grid-rows-2 '>
                  <label className="flex ml-4 mt-4" htmlFor="pocContact">POC Contact:</label>
                  <input className="rounded-xl shadow-md ml-4"
                    type="text"
                    id="pocContact"
                    name="pocContact"
                    placeholder='   important'
                    value={formData.pocContact}
                    onChange={handleChange}
                  />
                </div>
                <div className='grid grid-rows-2 '>
                  <label className="flex ml-4 mt-4" htmlFor="customerContact">Customer Contact:</label>
                  <input className="rounded-xl shadow-md ml-4"
                    type="text"
                    id="customerContact"
                    name="customerContact"
                    placeholder='   important'
                    value={formData.customerContact}
                    onChange={handleChange}
                  />
                </div>
                <div className='grid grid-rows-2 '>
                  <label className="flex ml-4 mt-4" htmlFor="contactPerson">Contact Person:</label>
                  <input className="rounded-xl shadow-md ml-4"
                    type="text"
                    id="contactPerson"
                    name="contactPerson"
                    placeholder='   important'
                    value={formData.contactPerson}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <Link to="top" smooth={true} duration={200}>
                <button className=" bg-yellow-500 hover:bg-yellow-700 mt-4 text-white font-bold py-2 px-8 rounded "
                >Next</button>
              </Link>
            </form>
          </div>

        </div>

      </div>

      {/* second form */}

      <div id='top' className="relative bg-zinc-100 w-full h-screen overflow-hidden text-center text-[1.25rem] text-white font-inter ">
        <div className="absolute top-[14.44rem] left-[calc(50%_-_408.5px)] flex flex-row items-center justify-center gap-[0.63rem]">
          <div className="flex flex-row items-center justify-start gap-[0.75rem] text-left text-[0.88rem] text-goldenrod font-roboto">
            <img
              className="relative w-[2.5rem] h-[2.5rem]"
              alt=""
              src="/Group 1171277063.png"
            />
            <div className="relative tracking-[-0.02em] font-semibold text-yellow-400">
              Contact Details
            </div>
          </div>
          <div className="relative rounded-11xl bg-slate-300 w-[1.56rem] h-[0.25rem]" />
          <div className="flex flex-row items-center justify-start gap-[0.75rem]">
            <div className="relative w-[2.5rem] h-[2.5rem]">
              <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-slate-950 w-[2.5rem] h-[2.5rem]" />
              <b className="absolute top-[0.5rem] left-[0.88rem] tracking-[-0.02em]">
                2
              </b>
            </div>
            <div className="relative text-[0.88rem] tracking-[-0.02em] font-semibold font-roboto text-slate-950 text-left">
              Operational Details
            </div>
          </div>
          <div className="relative rounded-11xl bg-slate-300 w-[1.56rem] h-[0.25rem]" />
          <div className="flex flex-row items-center justify-start gap-[0.75rem]">
            <div className="relative w-[2.5rem] h-[2.5rem]">
              <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-slate-300 w-[2.5rem] h-[2.5rem]" />
              <b className="absolute top-[0.5rem] left-[0.81rem] tracking-[-0.02em]">
                3
              </b>
            </div>
            <div className="relative text-[0.88rem] tracking-[-0.02em] font-roboto text-slate-500 text-left">
              Menu and Specialties
            </div>
            <div className="relative rounded-11xl bg-slate-300 w-[1.56rem] h-[0.25rem]" />
            <div className="flex flex-row items-center justify-start gap-[0.75rem]">
              <div className="relative w-[2.5rem] h-[2.5rem]">
                <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-slate-300 w-[2.5rem] h-[2.5rem]" />
                <b className="absolute top-[0.5rem] left-[0.81rem] tracking-[-0.02em]">
                  4
                </b>
              </div>
              <div className="relative text-[0.88rem] tracking-[-0.02em] font-roboto text-slate-500 text-left">
                Additional Information
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_804px)] top-[9.06rem] left-[25.13rem] text-[2.63rem] tracking-[-0.02em] leading-[3.5rem] font-semibold font-roboto text-slate-950 inline-block">
          Become a partner
        </div>
        <div className="absolute w-[calc(100%_-_254px)] top-[calc(50%_-_163px)] right-[7.94rem] left-[7.94rem] rounded-xl bg-white h-[30.75rem]" >
          <div className="text-black bg-white h-full rounded-lg">
            <form className="grid grid-rows-3 gap- mt-5"
              onSubmit={handleSubmit}>
              <div className='grid grid-rows-2 '>
                <label className="flex ml-4 mt-4" htmlFor="openingHour">Opening Hour:</label>
                <div className='flex '>
                  <input className="rounded-xl shadow-md ml-4 w-1/2"
                    type="time"
                    id="openingHour"
                    name="openingHour"
                    placeholder='   important'
                    value={formData.openingHour}
                    onChange={handleChange}
                  />
                  <h2 className="items-center mt-3 ml-2">TO</h2>
                  <input className="rounded-xl shadow-md ml-4 w-1/2"
                    type="time"
                    id="closeingHour"
                    name="closeingHour"
                    placeholder='   important'
                    value={formData.closeingHour}
                    onChange={handleChange}
                  />
                </div>

              </div>
              <div className='grid grid-rows-2 '>
                <label className="flex ml-4 mt-4" htmlFor="reservationPolicy">Reservation Policy:</label>
                <input className="rounded-xl shadow-md ml-4"
                  type="text"
                  id="reservationPolicy"
                  name="reservationPolicy"
                  placeholder='   important'
                  value={formData.reservationPolicy}
                  onChange={handleChange}
                />
              </div>
              <div className='grid grid-rows-2 '>
                <label className="flex ml-4 mt-4" htmlFor="ambienceDescription">Ambience Description:</label>
                <textarea className="rounded-xl shadow-md ml-4"
                  id="ambienceDescription"
                  name="ambienceDescription"
                  placeholder='   important'
                  value={formData.ambienceDescription}
                  onChange={handleChange}
                />
              </div>
              <Link to="top1" smooth={true} duration={200}>
              <button className=" bg-yellow-500 hover:bg-yellow-700 mt-9 text-white font-bold py-2 ml-[650px] mr-[650px] rounded px-4 ">Next</button></Link>
            </form>
          </div>

        </div>

      </div>

      {/* 3 form */}
      <div id='top1'
      className="relative bg-zinc-100 w-full h-[59.25rem] overflow-hidden text-left text-[1rem] text-white font-roboto">
        <div className="absolute w-[calc(100%_-_804px)] top-[9.06rem] left-[25.13rem] text-[2.63rem] tracking-[-0.02em] leading-[3.5rem] font-semibold text-slate-950 text-center inline-block">
          Become a partner
        </div>
        <div className="absolute w-[calc(100%_-_621px)] top-[14.44rem] right-[19.41rem] left-[19.41rem] flex flex-row items-center justify-center gap-[0.63rem] text-[0.88rem] text-yellow-500">
          <div className="flex flex-row items-center justify-start gap-[0.75rem]">
            <img
              className="relative w-[2.5rem] h-[2.5rem]"
              alt=""
              src="/Group 1171277063.png"
            />
            <div className="relative tracking-[-0.02em] font-semibold">
              Contact Details
            </div>
          </div>
          <div className="relative rounded-11xl bg-slate-300 w-[1.56rem] h-[0.25rem]" />
          <div className="flex flex-row items-center justify-start gap-[0.75rem]">
            <img
              className="relative w-[2.5rem] h-[2.5rem]"
              alt=""
              src="/Group 1171277063.png"
            />
            <div className="relative tracking-[-0.02em] font-semibold">
              Operational Details
            </div>
          </div>
          <div className="relative rounded-11xl bg-slate-300 w-[1.56rem] h-[0.25rem]" />
          <div className="flex flex-row items-center justify-start gap-[0.75rem] text-center text-[1.25rem] text-white font-inter">
            <div className="relative w-[2.5rem] h-[2.5rem]">
              <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-slate-950 w-[2.5rem] h-[2.5rem]" />
              <b className="absolute top-[0.5rem] left-[0.81rem] tracking-[-0.02em]">
                3
              </b>
            </div>
            <div className="relative text-[0.88rem] tracking-[-0.02em] font-semibold font-roboto text-slate-950 text-left">
              Menu and Specialties
            </div>
            <div className="relative rounded-11xl bg-slate-300 w-[1.56rem] h-[0.25rem]" />
            <div className="flex flex-row items-center justify-start gap-[0.75rem]">
              <div className="relative w-[2.5rem] h-[2.5rem]">
                <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-slate-300 w-[2.5rem] h-[2.5rem]" />
                <b className="absolute top-[0.5rem] left-[0.81rem] tracking-[-0.02em]">
                  4
                </b>
              </div>
              <div className="relative text-[0.88rem] tracking-[-0.02em] font-roboto text-slate-500 text-left">
                Additional Information
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_254px)] top-[calc(50%_-_163px)] right-[7.94rem] left-[7.94rem] rounded-xl bg-firebrick h-[29.81rem] bg-white" >
          <div className="ml-20 mr-20 mt-2">
            <form className="grid grid-rows-2 grid-cols-2 text-black font-roboto text-xlh-[400px] "
              onSubmit={handleSubmit}>
              <div className='grid grid-rows-2'>
                <label className="flex ml-4 mt-9" htmlFor="capacity">Capacity (Number of seats):</label>
                <input className="rounded-xl shadow-md ml-4 mb-4 "
                  type="number"
                  id="capacity"
                  name="capacity"
                  placeholder='   1'
                  value={formData.capacity}
                  onChange={handleChange}
                />
              </div>
              <div className='grid grid-rows-2'>
                <label className="flex ml-4 mt-9" htmlFor="numberOfTables">Number of Tables:</label>
                <input className="rounded-xl shadow-md ml-4 mb-4"
                  type="number"
                  id="numberOfTables"
                  name="numberOfTables"
                  placeholder='   1'
                  value={formData.numberOfTables}
                  onChange={handleChange}
                />
              </div>
              <div className='grid grid-rows-2'>
                <label className="flex ml-4 mt-9" htmlFor="specialties">Specialties/Signature Dishes:</label>
                <input className="rounded-xl shadow-md ml-4 mb-4"
                  type="text"
                  id="specialties"
                  name="specialties"
                  placeholder='  eg-fish'
                  value={formData.specialties}
                  onChange={handleChange}
                />
              </div>
              <div className='grid grid-rows-2'>
                <label className="flex ml-4 mt-9" htmlFor="currentPromotions">Current Promotions/Deals:</label>
                <textarea className="rounded-xl shadow-md ml-4 mb-4"
                  id="currentPromotions"
                  name="currentPromotions"
                  value={formData.currentPromotions}
                  onChange={handleChange}
                />
              </div>

            </form>
            <Link to="top2" smooth={true} duration={200}>
            <button className=' bg-yellow-500 hover:bg-yellow-700 ml-[670px] px-6 py-4 rounded-md' >Next</button></Link>
          </div>
        </div>
      </div>

      {/* 4 frame */}
      <div id='top2'>
        <div className="relative bg-zinc-100 w-full h-[59.25rem] overflow-hidden text-left text-[0.88rem] text-yellow-500 font-roboto">

          <div className="absolute w-[calc(100%_-_619px)] top-[14.44rem] right-[19.34rem] left-[19.34rem] flex flex-row items-center justify-center gap-[0.63rem]">
            <div className="flex flex-row items-center justify-start gap-[0.75rem]">
              <img
                className="relative w-[2.5rem] h-[2.5rem]"
                alt=""
                src="/Group 1171277063.png"
              />
              <div className="relative tracking-[-0.02em] font-semibold">
                Contact Details
              </div>
            </div>
            <div className="relative rounded-11xl bg-slate-300 w-[1.56rem] h-[0.25rem]" />
            <div className="flex flex-row items-center justify-start gap-[0.75rem]">
              <img
                className="relative w-[2.5rem] h-[2.5rem]"
                alt=""
                src="/Group 1171277063.png"
              />
              <div className="relative tracking-[-0.02em] font-semibold">
                Operational Details
              </div>
            </div>
            <div className="relative rounded-11xl bg-slate-300 w-[1.56rem] h-[0.25rem]" />
            <div className="flex flex-row items-center justify-start gap-[0.75rem]">
              <img
                className="relative w-[2.5rem] h-[2.5rem]"
                alt=""
                src="/Group 1171277063.png"
              />
              <div className="relative tracking-[-0.02em] font-semibold">
                Menu and Specialties
              </div>
              <div className="relative rounded-11xl bg-slate-300 w-[1.56rem] h-[0.25rem]" />
              <div className="flex flex-row items-center justify-start gap-[0.75rem] text-center text-[1.25rem] text-white font-inter">
                <div className="relative w-[2.5rem] h-[2.5rem]">
                  <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-slate-950 w-[2.5rem] h-[2.5rem]" />
                  <b className="absolute top-[0.5rem] left-[0.81rem] tracking-[-0.02em]">
                    4
                  </b>
                </div>
                <div className="relative text-[0.88rem] tracking-[-0.02em] font-semibold font-roboto text-slate-950 text-left">
                  Additional Information
                </div>
              </div>
            </div>
          </div>
          <div className="absolute w-[calc(100%_-_804px)] top-[9.06rem] left-[25.13rem] text-[2.63rem] tracking-[-0.02em] leading-[3.5rem] font-semibold text-slate-950 text-center inline-block">
            Become a partner
          </div>
          <div className="absolute w-[calc(100%_-_264px)] top-[calc(50%_-_162.7px)] right-[8.56rem] left-[7.94rem] rounded-xl bg-white h-[31.94rem] text-black " >
            <form className=' text-black font-roboto text-xl h-[400px] flex flex-col justify-center' onSubmit={handleSubmit}>
              <div className='grid grid-rows-2 grid-cols-2 mt-2 gap-6 '>
                  <div className='grid grid-rows-2 '>
                    <label className="flex ml-4 mt-4 " htmlFor="dietaryRestrictions">Any Dietary Restrictions or Special Accommodations</label>
                    <input
                      className="rounded-xl shadow-md ml-4"
                      type="text"
                      id="dietaryRestrictions"
                      name="dietaryRestrictions"
                      value={formData.dietaryRestrictions}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='grid grid-rows-2 '>
                    <label htmlFor="preferredPaymentMethod">Preferred Payment Method:</label>
                    <div className='flex  items-center space-x-4 '>
                    <input
                      type='radio'
                      name='preferredPaymentMethod'
                      id='preferredPaymentMethod'
                      value='online'
                      onChange={handleChange}
                    ></input>
                    <label htmlFor="preferredPaymentMethod">Online:</label>
                    <input
                      type='radio'
                      name='preferredPaymentMethod'
                      id='preferredPaymentMethod'
                      value='cash'
                      onChange={handleChange}
                    ></input>
                    <label htmlFor="preferredPaymentMethod">cash</label>
                    <input
                      type='radio'
                      name='preferredPaymentMethod'
                      id='preferredPaymentMethod'
                      value='offline'
                      onChange={handleChange}
                    ></input>
                    <label htmlFor="preferredPaymentMethod">offline</label>
                    </div>
                    
                    
                  </div>
                  <div className='grid grid-rows-2 '>
                    <label className="flex ml-4 mt-4" htmlFor="specialties1">Specialties/Signature Dishes:</label>
                    <input
                      className="rounded-xl shadow-md ml-4"
                      type="text"
                      id="specialties1"
                      name="specialties1"
                      value={formData.specialties1}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='grid grid-rows-2 '>
                <label className="flex ml-4 mt-4" htmlFor="currentPromotion">Current Promotions/Deals:</label>
                <input
                  className="rounded-xl shadow-md ml-4"
                  type="text"
                  id="currentPromotion"
                  name="currentPromotion"
                  value={formData.currentPromotion}
                  onChange={handleChange}
                />
              </div>
              </div>
              
              <div className='flex items-center justify-center flex-col mt-16 gap'>
                <label>
                <input
                    type="radio"
                    name="agree"
                    required
                    checked={formData.agree}
                    onChange={handleChange}
                  />
                  I agree terms and conditions
                  
                </label>
                <button className=' bg-yellow-500 hover:bg-yellow-700 px-6 py-4 rounded-md mt-4' type="submit" onClick={resetForm}>Submit</button>
               
              </div>
              
              
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Form;