import React, { useContext, useEffect } from 'react'
import { FaHome } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { FaBlog } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { IoStorefrontOutline } from "react-icons/io5";
import group117 from "../assets/group-117.svg"
import rect54 from "../assets/rectangle54.png"
import group752 from "../assets/group-752.svg"
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"
import { useState } from 'react';
import { FiUpload } from "react-icons/fi";
import axios from 'axios';
import { restaurantContext } from '../context/restaurantContext';


const EditStoreDetail = () => {
    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState("No selected Files");

    const {resId} = useContext(restaurantContext);
   
    const postDetails = async (pics) => {
        console.log(resId);
        const formData = new FormData();
        formData.append("someExpressFiles", pics);

        let config = {
            method: "post",
            maxBodyLength: Infinity,
            url: `http://localhost:4000/api/galleryimages/${resId}`,
          
            data: formData,
        };

         axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const [pics,setPics] = useState([]);

    const getImages = async(e) =>{
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `http://localhost:4000/api/gallery/${resId}`,
            headers: {}
          };
          
          axios.request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
            setPics(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
    }

    useEffect(()=>{
        getImages();
    },[fileName]);

    const [formData, setFormData] = useState({
        logo: '',
        businessName: '',
        location: '',
        pocName: '',
        pocContact: '',
        customerContact: '',
        customerContact1: '',
        category: '',
        Cuisines: '',
    });

  const getGeneralInfo = async () => {
    try {
      const config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `http://localhost:4000/api/generalinfo/${resId}`,
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await axios.request(config);
      const data = response.data;

    
      setFormData(prevData => ({
                ...prevData,
        logo: data.logo,
        businessName: data.businessName,
        location: data.location,
        pocName: data.pocName,
        pocContact: data.pocContact,
        customerContact: data.customerContact,
        customerContact1: data.customerContact1,
        category: data.category,
        Cuisines: data.Cuisines,
      }));
    } catch (error) {
      console.error("Error fetching general info:", error);
    }
  };

    useEffect(() => {
      getGeneralInfo();
    }, [resId]);



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };


    const one = () => {
        document.getElementById('a').style.display = "block";
        document.getElementById('b').style.display = "none";
        document.getElementById('c').style.display = "none";

    };
    const two = () => {
        document.getElementById('a').style.display = "none";
        document.getElementById('b').style.display = "block";
        document.getElementById('c').style.display = "none";
    };

    const three = () => {
        document.getElementById('a').style.display = "none";
        document.getElementById('b').style.display = "none";
        document.getElementById('c').style.display = "block";
    };

    const [formData3, setFormData3] = useState({
        paymentType: 'bankTransfer', // Set default payment type
        accountNumber: '',
        upi: '',
        ifscCode: '',
        upinNumber: '',
        beneficiaryName: '',
    });

    const handleChange3 = (event) => {
        const { name, value } = event.target;
        setFormData3({ ...formData3, [name]: value });
    };

    const handlePaymentTypeChange = (event) => {
        setFormData3({ ...formData3, paymentType: event.target.value });
    };

    const handleSubmit3 = (event) => {
        event.preventDefault();

        console.log(formData3);
        let config = {
          method: "post",
          maxBodyLength: Infinity,
          url:`http://localhost:4000/api//payoutMethod/${resId}`,
          headers: {
            "Content-Type": "application/json",
          },
          data: formData3,
        };

        axios
          .request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
          })
          .catch((error) => {
            console.log(error);
          });
    };

    return (
      <div className="w-full h-fit flex flex-col">
        <div className="z-10 bg-white fixed   w-full h-16  flex flex-row items-center justify-between  px-6 box-border  max-w-full  text-zinc-700 font-sans">
          <div className="flex flex-row items-start left-1 py-0 px-6">
            <img
              className="relative w-28 h-16 object-cover z-20"
              loading="lazy"
              alt=""
              src={logo}
            />
          </div>
          <div className="flex flex-row items-start justify-start gap-4 max-w-full z-1">
            <img
              className="relative w-12 h-12 min-h-12"
              loading="lazy"
              alt=""
              src={group117}
            />
            <Link to="/profilesettings">
              <img
                className="relative w-12 h-12 min-h-12"
                loading="lazy"
                alt=""
                src={group752}
              />
            </Link>
            <Link to="/profile">
              <div className="flex flex-row items-center justify-start gap-2">
                <img
                  className="relative rounded-2xl w-12 h-12 object-cover"
                  loading="lazy"
                  alt=""
                  src={rect54}
                />
                <div className="flex flex-col items-start justify-start gap-0.5">
                  <div className="relative tracking-[-0.02em] font-semibold whitespace-nowrap">
                    Adam Cooper
                  </div>
                  <div className="relative text-sm tracking-[-0.02em] whitespace-nowrap">
                    adamcooper@gmail.com
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex  w-full mt-20 h-fit">
          {/* left */}
          <div className="md:w-[20%] w-[10%]  bg-white flex flex-col fixed md:text-[1.15rem] text-[1.6rem] font-roboto  text-slate-600 ml-2">
            <Link
              to="/dashboard"
              className="w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-yellow-600 hover:text-white gap-3 "
            >
              <FaHome /> <p className="md:block hidden">Dashboard</p>
            </Link>
            <Link
              to="/payout"
              className="w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-yellow-600 hover:text-white gap-3"
            >
              <FaBlog />
              <p className="md:block hidden">Payout</p>
            </Link>
            <Link
              to="/menu"
              className="w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-yellow-600 hover:text-white gap-3"
            >
              <MdMenuBook />
              <p className="md:block hidden">Menu</p>
            </Link>
            <Link
              to="/editstore"
              className="w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-yellow-600 hover:text-white gap-3"
            >
              <IoStorefrontOutline />
              <p className="md:block hidden">Edit store detail</p>
            </Link>
            <Link
              to="/offer"
              className="w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-yellow-600 hover:text-white gap-3"
            >
              <BiSolidOffer />
              <p className="md:block hidden">offers & campaign</p>
            </Link>
            <Link
              to="/pricing"
              className="w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-yellow-600 hover:text-white gap-3"
            >
              <BiSolidOffer />
              <p className="md:block hidden">Pricing</p>
            </Link>
            <Link
              to="/"
              className="md:w-[50%] h-[50px] bg-slate-100 mb-1 flex items-center md:p-4 hover:bg-yellow-600 hover:text-white gap-2 mt-48 justify-center rounded-xl md:ml-16"
            >
              <IoIosLogOut /> <p className="md:block hidden">Log out</p>
            </Link>
          </div>

          {/* right */}
          <div className="md:w-[75%] w-[85%] bg-slate-200  h-fit rounded-md p-6 md:ml-[22%] ml-[12%]">
            {/* one */}
            <div className="w-[100%] p-8   rounded-md" id="a">
              <h1 className="text-[1.2rem] font-bold">Edit Store Details</h1>
              <div className="flex justify-between text-slate-500 mt-3">
                <div className="flex gap-2">
                  <button
                    className="bg-black text-white px-4 py-1 rounded-full"
                    onClick={one}
                  >
                    General Info
                  </button>
                  <button
                    className="bg-white px-4 py-1 rounded-full"
                    onClick={two}
                  >
                    Gallery
                  </button>
                  <button
                    className="bg-white px-4 py-1 rounded-full"
                    onClick={three}
                  >
                    Payout Method
                  </button>
                </div>
                <div>
                  <button
                    onClick={handleSubmit}
                    className="bg-yellow-500 px-4 py-2 rounded-md text-white"
                  >
                    {" "}
                    Save changes
                  </button>
                </div>
              </div>
              <div className="w-full h-fit bg-white p-5 mt-4 rounded-md text-[1.1rem] font-semibold">
                <form>
                  <div className="text-[1.1rem] font-bold">Store Details</div>
                  <div className="text-slate-300 h-[96px] w-full flex items-center">
                    <div className="size-24 bg-slate-300 rounded-full overflow-hidden">
                      {formData.logo ? (
                        <img
                          src={formData.logo}
                          alt="Logo"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <p className="text-center text-yellow-500 text-[1rem] p-6">
                          No logo selected
                        </p>
                      )}
                    </div>

                    <label className="text-yellow-500 text-[1rem] ml-4">
                      Upload new logo
                    </label>
                    <p className="size-2 rounded-full bg-slate-400 ml-4"></p>
                    <p className="text-[1rem] text-slate-400 ml-4">
                      {" "}
                      Remove logo
                    </p>
                  </div>
                  <div className="flex w-full justify-between mt-3 mb-2">
                    <div className="flex flex-col w-[48%]">
                      <label>Business Name:</label>
                      <div className="px-2 rounded-md h-10 mt-1 text-[.92rem] border-2">
                        <p>{formData.businessName}</p>
                      </div>
                    </div>
                    <div className="flex flex-col w-[48%]">
                      <label>Location:</label>
                      <div className="px-2 rounded-md h-10 mt-1 text-[.92rem] border-2">
                        <p>{formData.location}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex w-full justify-between mt-3 mb-2">
                    <div className="flex flex-col w-[48%]">
                      <label>POC Name:</label>
                      <div className="px-2 rounded-md h-10 mt-1 text-[.92rem] border-2">
                        <p>{formData.pocName}</p>
                      </div>
                    </div>
                    <div className="flex flex-col w-[48%]">
                      <label>POC Contact:</label>
                      <div className="px-2 rounded-md h-10 mt-1 text-[.92rem] border-2">
                        <p>{formData.pocContact}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex w-full justify-between mt-3 mb-2">
                    <div className="flex flex-col w-[48%]">
                      <label>Customer Contact:</label>
                      <div className="px-2 rounded-md h-10 mt-1 text-[.92rem] border-2">
                        <p>{formData.customerContact}</p>
                      </div>
                    </div>
                    <div className="flex flex-col w-[48%]">
                      <label>Customer Contact 1:</label>
                      <div className="px-2 rounded-md h-10 mt-1 text-[.92rem] border-2">
                        <p>{formData.customerContact1}</p>
                      </div>
                    </div>
                  </div>
                  <h1 className="text-[1.1rem] font-bold mt-2 mb-3">
                    Cuisine details
                  </h1>
                  <div className="flex w-full justify-between mt-3 mb-2">
                    <div className="flex flex-col w-[48%]">
                      <label>Category:</label>
                      <div className="px-2 rounded-md h-10 mt-1 text-[.92rem] border-2">
                        <p>{formData.category}</p>
                      </div>
                    </div>
                    <div className="flex flex-col w-[48%]">
                      <label>Cuisines:</label>
                      <div className="px-2 rounded-md h-10 mt-1 text-[.92rem] border-2">
                        
                          <p>{formData.Cuisines}</p>
                        
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* two */}
            <div
              className="w-[100%]  bg-slate-200    rounded-md p-8 hidden h-[550px] "
              id="b"
            >
              <h1 className="text-[1.2rem] font-bold   ">Edit Store Details</h1>
              <div className="flex justify-between text-slate-500 mt-3">
                <div className="flex gap-2">
                  <button
                    className="bg-white px-4 py-1 rounded-full"
                    onClick={one}
                  >
                    General Info
                  </button>
                  <button
                    className="bg-black text-white px-4 py-1 rounded-full"
                    onClick={two}
                  >
                    Gallery
                  </button>
                  <button
                    className="bg-white px-4 py-1 rounded-full"
                    onClick={three}
                  >
                    Payout Method
                  </button>
                </div>
                <div>
                  <button className="bg-yellow-500 px-4 py-2 rounded-md text-white">
                    {" "}
                    Save changes
                  </button>
                </div>
              </div>
              <div
                onClick={() => document.querySelector(".input-field").click()}
                className="w-full h-[170px] bg-yellow-50 flex justify-center items-center  mt-4  rounded-lg border-dashed border-2 border-yellow-400"
              >
                <input
                  type="file"
                  accept="image/*"
                  className="input-field"
                  onChange={({ target: { files } }) => {
                    files[0] && setFileName(files[0].name);
                    if (files) setImage(URL.createObjectURL(files[0]));
                    postDetails(files[0]);
                  }}
                  hidden
                ></input>
                <div className="flex flex-col justify-center items-center">
                  <div className="bg-yellow-500 w-12 h-12 rounded-full flex justify-center items-center">
                    <FiUpload color="white" />
                  </div>
                  <div className="font-bold text-sm">Upload File</div>
                  <div className="text-sm opacity-50">
                    Drag and drop files here
                  </div>
                </div>
              </div>

              {/* css baaki hai */}
              <div>
                {pics &&
                  pics.map((pic) => {
                    return <img src={pic.image}></img>;
                  })}
              </div>
            </div>

            {/* three */}
            <div
              className="w-[100%]  bg-slate-200   rounded-md p-8 hidden  h-[600px]"
              id="c"
            >
              <h1 className="text-[1.2rem] font-bold   ">Edit Store Details</h1>
              <div className="flex justify-between text-slate-500 mt-3">
                <div className="flex gap-2">
                  <button
                    className="bg-white  px-4 py-1 rounded-full"
                    onClick={one}
                  >
                    General Info
                  </button>
                  <button
                    className="bg-white px-4 py-1 rounded-full"
                    onClick={two}
                  >
                    Gallery
                  </button>
                  <button
                    className="bg-black text-white px-4 py-1 rounded-full"
                    onClick={three}
                  >
                    Payout Method
                  </button>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <form
                  className="text-[1.2rem] w-[50%] p-4 bg-slate-300 mt-4 rounded-md"
                  onSubmit={handleSubmit3}
                >
                  <h2 className=" mt-6 font-semibold">Payment Method</h2>
                  <div className="flex justify-between">
                    <label>
                      <input
                        className="mr-2"
                        type="radio"
                        id="bankTransfer"
                        name="paymentType"
                        value="bankTransfer"
                        checked={formData3.paymentType === "bankTransfer"}
                        onChange={handlePaymentTypeChange}
                      />
                      Bank Transfer
                    </label>
                    <label>
                      <input
                        className="mr-2 "
                        type="radio"
                        id="bhimUpi"
                        name="paymentType"
                        value="bhimUpi"
                        checked={formData3.paymentType === "bhimUpi"}
                        onChange={handlePaymentTypeChange}
                      />
                      BHIM UPI
                    </label>
                  </div>

                  {formData3.paymentType === "bankTransfer" && (
                    <>
                      <div className="flex flex-col">
                        <h2 className="flex justify-center font-semibold mt-4">
                          Bank Transfer Details
                        </h2>
                        <label htmlFor="accountNumber">Account Number:</label>
                        <input
                          className="rounded-md h-10 px-4 mt-2 mb-2  "
                          type="text"
                          id="accountNumber"
                          name="accountNumber"
                          value={formData3.accountNumber}
                          onChange={handleChange3}
                          required
                        />
                        <label htmlFor="ifscCode">IFSC Code:</label>
                        <input
                          className="rounded-md h-10 px-4 mt-2 mb-2  "
                          type="text"
                          id="ifscCode"
                          name="ifscCode"
                          value={formData3.ifscCode}
                          onChange={handleChange3}
                          required
                        />
                        <label htmlFor="beneficiaryName">
                          Beneficiary Name:
                        </label>
                        <input
                          className="rounded-md h-10 px-4 mt-2 mb-2  "
                          type="text"
                          id="beneficiaryName"
                          name="beneficiaryName"
                          value={formData3.beneficiaryName}
                          onChange={handleChange3}
                          required
                        />
                      </div>
                    </>
                  )}

                  {formData3.paymentType === "bhimUpi" && (
                    <>
                      <div className="flex flex-col">
                        <h2 className="flex justify-center font-semibold mt-4">
                          BHIM UPI Details
                        </h2>
                        <label htmlFor="upi">UPI ID:</label>
                        <input
                          className="rounded-md h-10 px-4 mt-2 mb-2  "
                          type="text"
                          id="upi"
                          name="upi"
                          value={formData3.upi}
                          onChange={handleChange3}
                          required
                        />
                        <label htmlFor="upinNumber">UPIN Number:</label>
                        <input
                          className="rounded-md h-10 px-4 mt-2 mb-2  "
                          type="password"
                          id="upinNumber"
                          name="upinNumber"
                          value={formData3.upinNumber}
                          onChange={handleChange3}
                          required
                        />
                      </div>
                    </>
                  )}

                  <button
                    className="bg-yellow-500 text-white px-4 rounded-md ml-[30%] py-1 mt-4 "
                    type="submit"
                  >
                    Save changes
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default EditStoreDetail
