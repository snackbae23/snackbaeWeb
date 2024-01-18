import React, { useEffect } from 'react'
import { useState } from 'react';
import AdminNav from '../Components/AdminNav'
import axios from 'axios';
function AdminDashboard() {

  const [resData, setResData] = useState();

  const getAllData = async () => {
    try {
      // const getData = await fetch(
      //   `${process.env.REACT_APP_BASE_URL}/getPartnerData`,
      //   {
      //     method: "GET",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   }
      // );
      const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
      const {response} = await axios.get(`${process.env.REACT_APP_BASE_URL}/getPartnerData`);
      setResData(response);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllData();
  },[]);
  console.log(resData);
  return (
    <div>
      <AdminNav />
      <div className='w-[80vw] mx-auto mt-14'>
        <div>
          <div className='font-bold text-3xl'>Restaurant Details</div>
          <div className='text-sm opacity-80'>Restaurants that want to tie up </div>
        </div>
        <div className='mt-7 '>
          <table className='w-full'>
            <thead className="bg-gray-50 dark:bg-gray-800 min-w-full">
              <tr>
                <th
                  scope="col"
                  className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                >
                  <span>Restaurant Name</span>
                </th>
                <th
                  scope="col"
                  className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                >
                  Contact
                </th>

                <th
                  scope="col"
                  className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                >
                  Location
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
              {resData?.data?.map((restaurant) => {
                return(
                <tr key={restaurant._id}>
                  <td className="py-4 px-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">
                      {restaurant.rname}
                    </div>
                  </td>
                  <td className="px-12 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">
                      {restaurant.phone}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-300">
                      {restaurant.email}
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    {restaurant.loc}
                  </td>
                </tr>
              )})
            
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard