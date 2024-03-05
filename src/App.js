import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import AdminLogin from './Pages/AdminLogin';
import { Route, Routes, useLocation } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Joinpartner from './Pages/Joinpartner';

import AboutUs from "./Pages/AboutUs";
import Login from "./Pages/Login";
import Blogs from './Pages/Blog';
import Blogdetail from './Pages/Blogdetail';
import DashBoard from './Pages/DashBoard';
import AdminDashboard from './Pages/AdminDashboard';
import Payout from './Pages/Payout';
import Menu from './Pages/Menu';
import Home from './Pages/Home';
import Form from './Pages/Form';
import Review from './Pages/Review';
import Customer from './Pages/Customer';
import EditStoreDetail from './Pages/EditStoreDetail';
import Offer from './Pages/Offer';
import Pricing from './Pages/Pricing';
import DashboardAdmin from './Pages/DashboardAdmin';
import AdminMerchant from './Pages/AdminMerchant';
import AdminMerchantProfile from './Pages/AdminMerchantProfile';
import AdminBookings from './Pages/AdminBookings';
import AdminSales from './Pages/AdminSales';
import { restaurantContext } from './context/restaurantContext';
import { useState,useEffect } from 'react';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import TermsCondition from './Pages/TermsCondition';




const excludedPaths = ['/dashboard', '/admin/dashboard', '/admin/merchant', '/adminDashboard', '/form', '/payout', '/menu', '/review', '/customer', '/editstore', '/offer', '/pricing', '/admin/merchantProfile/:id', '/admin/bookings', '/admin/sales'];


function App() {

  const location = useLocation();
  const [resId, setResId] = useState('');
  const [login,setlogin] =useState("false");


  useEffect(() => {
    setlogin(false);
  }, []);

  
  const handleScrollChange = (newLoginValue) => {
    setlogin(newLoginValue);
  };

  return (
    <div className='app'>
      {/* <Navbar /> */}
      <restaurantContext.Provider value={{ resId, setResId }}>
        {!excludedPaths.includes(location.pathname) && <Navbar login={login} setlogin={setlogin} />}
        <Routes>

          {/* <Switch> */}
         {/* <Route path="/" element={<Home />}></Route> */}

          <Route path="/" element={<Homepage login={login} setlogin={setlogin} onScrollChange={handleScrollChange} />}></Route>
          {/* this is for user home */}
          <Route path="/home" element={<Home />}></Route> 

          <Route path="/joinpartner" element={<Joinpartner />}></Route>
          <Route path="/aboutUs" element={<AboutUs />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path='/dashboard' element={<DashBoard />}></Route>

          <Route path='/blog' element={<Blogs />}></Route>``
          <Route path='/blogdetail' element={<Blogdetail />}></Route>
          <Route path='/adminlogin' element={<AdminLogin />}></Route>
          <Route path='/adminDashboard' element={<AdminDashboard />}></Route>

          <Route path='/blog' element={<Blogs />}></Route>
          <Route path='/blogdetail' element={<Blogdetail />}></Route>
          <Route path='/form' element={<Form />}></Route>
          <Route path='/payout' element={<Payout />}></Route>
          <Route path='/menu' element={<Menu />}></Route>
          <Route path='/review' element={<Review />}></Route>
          <Route path='/customer' element={<Customer />}></Route>
          <Route path='/editstore' element={<EditStoreDetail />}></Route>
          <Route path='/offer' element={<Offer />}></Route>
          <Route path='/pricing' element={<Pricing />}></Route>
          <Route path='/privacyPolicy' element={<PrivacyPolicy />}></Route>
          <Route path='/termsCondition' element={<TermsCondition />}></Route>


          <Route path='/admin/dashboard' element={<DashboardAdmin />}></Route>
          <Route path='/admin/merchant' element={<AdminMerchant />}></Route>
          <Route path='/admin/merchantProfile/:id' element={<AdminMerchantProfile/>}></Route>
          <Route path='/admin/bookings' element={<AdminBookings />}></Route>
          <Route path='/admin/sales' element={<AdminSales />}></Route>
          {/* </Switch> */}
        </Routes>
      </restaurantContext.Provider>
    </div>
  );
}

export default App;
