import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Homepage";
import Joinpartner from './Pages/Joinpartner';
import Joinpartnerform from './Pages/Joinpartnerform';
function App() {
  return (
   <div className='app'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/joinpartner" element={<Joinpartner/>}></Route>
        <Route path='joinpartnerform' element={<Joinpartnerform/>}></Route>
      </Routes>
   </div>
  );
}

export default App;
