// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import AdminLogin from './Pages/AdminLogin';
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Homepage";
import Joinpartner from './Pages/Joinpartner';
// import Joinpartnerform from './Pages/Joinpartnerform';
import AboutUs from "./Pages/AboutUs";
import Login from "./Pages/Login";
import Blogs from './Pages/Blog';
import Blogdetail from './Pages/Blogdetail';
import DashBoard from './Pages/DashBoard';
import AdminDashboard from './Pages/AdminDashboard';
import Payout from './Pages/Payout';
import Menu from './Pages/Menu';

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
import AdminAppControl from './Pages/AdminAppControl';
import AdminControl from './Pages/AdminControl';

const excludedPaths = ['/dashboard', '/admin/dashboard', '/admin/merchant', '/adminDashboard', '/form', '/payout', '/menu', '/review', '/customer', '/editstore', '/offer', '/pricing', '/admin/merchantProfile', '/admin/bookings', '/admin/sales', '/admin/appControl', '/admin/admincontrol'];

function App() {

  const location = useLocation();

  return (
    <div className='app'>
      {/* <Navbar /> */}
      {!excludedPaths.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />}></Route>
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

        <Route path='/admin/dashboard' element={<DashboardAdmin />}></Route>
        <Route path='/admin/merchant' element={<AdminMerchant />}></Route>
        <Route path='/admin/merchantProfile' element={<AdminMerchantProfile />}></Route>
        <Route path='/admin/bookings' element={<AdminBookings />}></Route>
        <Route path='/admin/sales' element={<AdminSales />}></Route>
        <Route path='/admin/appControl' element={<AdminAppControl />}></Route>
        <Route path='/admin/adminControl' element={<AdminControl />}></Route>
      </Routes>
    </div>
  );
}

export default App;
