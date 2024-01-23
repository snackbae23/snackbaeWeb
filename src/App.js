import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import AdminLogin from './Pages/AdminLogin';
import { Route, Routes,useLocation } from "react-router-dom";
import Home from "./Pages/Homepage";
import Joinpartner from './Pages/Joinpartner';
// import Joinpartnerform from './Pages/Joinpartnerform';
import AboutUs from "./Pages/AboutUs";
import Login from "./Pages/Login";
import Blogs from './Pages/Blog';
import Blogdetail from './Pages/Blogdetail';
import DashBoard from './Pages/DashBoard';
import AdminDashboard from './Pages/AdminDashboard';

import Form from './Pages/Form';

const excludedPaths = ['/dashboard','/adminDashboard','/form'];

function App() {

  const location = useLocation();

  return (
    <div className='app'>
      {/* <Navbar /> */}
      {!excludedPaths.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/joinpartner" element={<Joinpartner/>}></Route>
        <Route path="/aboutUs" element={<AboutUs />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path='/dashboard' element={<DashBoard />}></Route>

        <Route path='/blog' element ={<Blogs/>}></Route>
        <Route path='/blogdetail' element ={<Blogdetail/>}></Route>
        <Route path='/adminlogin' element={<AdminLogin/>}></Route>
        <Route path='/adminDashboard' element={<AdminDashboard/>}></Route>

        <Route path = '/blog' element ={<Blogs/>}></Route>
        <Route path = '/blogdetail' element ={<Blogdetail/>}></Route>
        <Route path = '/form' element ={<Form/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
