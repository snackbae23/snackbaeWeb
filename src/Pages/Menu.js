import React from 'react'
import { useState } from 'react';
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
import { FaPenFancy } from "react-icons/fa";
import { ImCross } from 'react-icons/im';
import axios from "axios"
const Menu = () => {

    const data = [
        {
            "image": "/Rectangle 55187.png",
            "menu": "Menu item name",
            "amount": "₹231",
            "para": "Lorem ipsum dolor sit amet, consectetur adipiscing el..."
        },
        {
            "image": "/Rectangle 55187.png",
            "menu": "Menu item name",
            "amount": "₹231",
            "para": "Lorem ipsum dolor sit amet, consectetur adipiscing el..."
        },
        {
            "image": "/Rectangle 55187.png",
            "menu": "Menu item name",
            "amount": "₹231",
            "para": "Lorem ipsum dolor sit amet, consectetur adipiscing el..."
        },
        {
            "image": "/Rectangle 55187.png",
            "menu": "Menu item name",
            "amount": "₹231",
            "para": "Lorem ipsum dolor sit amet, consectetur adipiscing el..."
        },
        {
            "image": "/Rectangle 55187.png",
            "menu": "Menu item name",
            "amount": "₹231",
            "para": "Lorem ipsum dolor sit amet, consectetur adipiscing el..."
        },
        {
            "image": "/Rectangle 55187.png",
            "menu": "Menu item name",
            "amount": "₹231",
            "para": "Lorem ipsum dolor sit amet, consectetur adipiscing el..."
        },
        {
            "image": "/Rectangle 55187.png",
            "menu": "Menu item name",
            "amount": "₹231",
            "para": "Lorem ipsum dolor sit amet, consectetur adipiscing el..."
        },
        {
            "image": "/Rectangle 55187.png",
            "menu": "Menu item name",
            "amount": "₹231",
            "para": "Lorem ipsum dolor sit amet, consectetur adipiscing el..."
        },
    ]

    function openPopup() {
        document.getElementById('popup').style.display = "block";
        document.getElementById('background').style.filter = "blur(2Px)";

    }
    function closePopup() {
        document.getElementById('popup').style.display = "none";
        document.getElementById('background').style.filter = "blur(0px)";

    }
    const[pic , setPic]= useState();
    const [Data, SetData] = useState();
    const [formData, setFormData] = useState({
      menuItem:"",
      type:"",
      cuisines:"",
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
         SetData({ ...formData, pic });
    };
    
   

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(Data); // Submit data here (e.g., API call)

    };
      const postDetails = async (pics) => {
       const formData = new FormData();
       formData.append("someExpressFiles", pics);

        let config = {
          method: "post",
          maxBodyLength: Infinity,
          url: "http://localhost:4000/api/gallery",
          // headers: {
          //   ...data.getHeaders(),
          // },
          data: formData,
        };

        axios
          .request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
            setPic(response?.data?.image_url)
            console.log(pic)
          })
          .catch((error) => {
            console.log(error);
          });
      };
    return (
      <div className="w-full h-[100vh] flex flex-col">
        <div className="fixed mt-8  w-full h-[20px]  flex flex-row items-center justify-between  px-6 box-border  max-w-full  text-zinc-700 font-sans">
          {/* <div className="absolute h-full w-full top-0 right-0 bottom-0 left-0 bg-white" /> */}
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
        {/* popup */}
        <div
          className="absolute top-28 left-[30%]  z-[100] shadow-inner hidden"
          id="popup"
        >
          <div className="w-[40vw]   bg-white pb-8 rounded-md flex  ">
            <div className="w-[40vw] mx-aut  h-fit flex flex-col gap-10">
              <div className="flex justify-between">
                <div className="flex flex-col font-roboto pt-2 mt-6 ml-8 justify-start">
                  <div className="text-xl font-semibold ">Add Menu Item</div>
                  <p className="text-slate-500 mt-2">
                    Create from scratch or select a template to get started
                  </p>
                </div>

                <button onClick={closePopup} className="text-right p-2 mr-4">
                  <ImCross />
                </button>
              </div>
              <div className=" bg-white rounded-md p-4 h-fit ml-4">
                <form
                  className="flex flex-col text-lg font-semibold relative  "
                  onSubmit={handleSubmit}
                >
                  <label htmlFor="menuItem">Menu Item name</label>
                  <input
                    className="w-full h-[50px] p-3 border border-[#E2E8F0] rounded-md focus:outline-none focus:shadow-md"
                    type="text"
                    id="menuItem"
                    name="menuItem"
                    value={formData.menuItem}
                    onChange={handleChange}
                    required
                  />
                  <div>Images</div>
                  <div
                    class="input_container"
                    // className="border-[#E2E8F0] rounded-md focus:outline-none focus:shadow-md"
                  >
                    <label className="mt-4 mb-2  " htmlFor="image">
                      <span>
                        {" "}
                        <img
                          className="absolute w-[130px] h-[95px] left-[37%] top-[23%] object-cover"
                          src="/Group 1171277298.png"
                          alt=""
                        ></img>
                      </span>
                    </label>

                    <input
                      className="w-full h-[100px] p-3 border border-[#E2E8F0] rounded-md focus:outline-none focus:shadow-md "
                      type="file"
                      id="image"
                      name="image"
                      accept="image/*"
                      onChange={(e) => postDetails(e.target.files[0])}
                      required
                    />
                  </div>

                  <label for="image"></label>
                  <label className="mt-4 mb-2" htmlFor="type">
                    Type
                  </label>
                  <select
                    className="w-full h-[50px] p-3 border border-[#E2E8F0] rounded-md focus:outline-none focus:shadow-md"
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                  >
                    <option value="">Select Type</option>
                    <option value="veg">Veg</option>
                    <option value="non-veg">Non-Veg</option>
                  </select>
                  <label className="mt-4 mb-2" htmlFor="cuisines">
                    Cuisines
                  </label>
                  <input
                    className="w-full h-[50px] p-3 border border-[#E2E8F0] rounded-md focus:outline-none focus:shadow-md"
                    type="text"
                    id="cuisines"
                    name="cuisines"
                    value={formData.cuisines}
                    onChange={handleChange}
                  />
                  <button
                    className="w-[137px] h-[42px] bg-[#EAB308] border rounded-md px-[19px] py-[10px] flex justify-center items-center text-[#ffffff] mx-auto mt-4"
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="flex  w-full mt-20 h-full " id="background">
          {/* left */}
          <div className="w-[20%]  bg-white flex flex-col ">
            <Link
              to="/dashboard"
              className="w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-yellow-600 hover:text-white gap-2 "
            >
              <FaHome /> <p>Dashboard</p>
            </Link>
            <Link
              to="/payout"
              className="w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-yellow-600 hover:text-white gap-2"
            >
              <FaBlog />
              <p>Payout</p>
            </Link>
            <Link
              to="/menu"
              className="w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-yellow-600 hover:text-white gap-2"
            >
              <MdMenuBook />
              <p>Menu</p>
            </Link>
            <Link
              to="/editstore"
              className="w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-yellow-600 hover:text-white gap-2"
            >
              <IoStorefrontOutline />
              <p>Edit store detail</p>
            </Link>
            <Link
              to="/offer"
              className="w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-yellow-600 hover:text-white gap-2"
            >
              <BiSolidOffer />
              <p>offers & campaign</p>
            </Link>
            <Link
              to="/pricing"
              className="w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-yellow-600 hover:text-white gap-2"
            >
              <BiSolidOffer />
              <p>Pricing</p>
            </Link>
            <Link
              to="/"
              className="w-[50%] h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-yellow-600 hover:text-white gap-2 mt-48 justify-center rounded-xl ml-16"
            >
              <IoIosLogOut /> <p>Log out</p>
            </Link>
          </div>

          {/* right */}
          <div className="w-[75%] bg-slate-200 ml-6 h-full rounded-md p-6">
            <div className="flex justify-between">
              <h1 className="text-[1.2rem] font-bold w-[40%] ml-4 ">Menu</h1>
              <button
                onClick={openPopup}
                className="w-[200px] bg-yellow-500 h-10 rounded-md"
              >
                Add new Item
              </button>
            </div>

            <div className="grid grid-cols-4 gap-4 mt-10">
              {data.map((item, index) => (
                <div
                  className="h-[236px] flex flex-col  bg-white rounded-md relative"
                  key={index}
                >
                  <img
                    className="w-full h-[174px] object-cover"
                    src={item.image}
                    alt="img"
                  ></img>
                  <button className="absolute mt-2 ml-2 font-normal text-[1.2rem] bg-yellow-500 text-white rounded-2xl px-4">
                    India
                  </button>
                  <button className="absolute mt-2 right-2 bg-slate-500 rounded-full size-7 text-white flex items-center justify-center">
                    <FaPenFancy />
                  </button>
                  <div className="flex justify-between mt-2 ml-4">
                    <h1 className="text-[1.2rem] font-semibold">{item.menu}</h1>
                    <h1 className="text-[1.2rem] font-semibold mr-2">
                      {item.amount}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}

export default Menu
