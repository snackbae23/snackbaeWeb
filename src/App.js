import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Homepage";
import Joinpartner from './Pages/Joinpartner';
// import Joinpartnerform from './Pages/Joinpartnerform';
import AboutUs from "./Pages/AboutUs";
import Login from "./Pages/Login";
import Blogs from './Pages/Blog';
import Blogdetail from './Pages/Blogdetail';


function App() {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/joinpartner" element={<Joinpartner />}></Route>
        <Route path="/aboutUs" element={<AboutUs />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path = '/blog' element ={<Blogs/>}></Route>
        <Route path = '/blogdetail' element ={<Blogdetail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
