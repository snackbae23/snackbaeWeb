import React, { useState } from 'react'

function Joinpartnerform() {
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
    function resetForm()
    {
        setFormData({ rname: "", email: "", outlet: "", phone: "", loc: "" });
    }
    function submitHandler(e)
    {
        e.preventDefault();
        console.log(formData);
        resetForm();
    }
    return (
        <div className='w-full h-[100vh] bg-slate-50 flex justify-center items-center'>
            <div className='w-[90vw] h-[80vh] flex flex-col gap-10 pt-12'>
                <div className='text-4xl text-center font-semibold font-roboto'>Become a partner</div>
                <div className='w-[80%] mx-auto bg-[#ffffff] rounded-md p-7 '>
                    <form onSubmit={submitHandler}>
                        <div className='flex flex-col gap-10'>
                            <div className='flex justify-between'>
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
    )
}

export default Joinpartnerform