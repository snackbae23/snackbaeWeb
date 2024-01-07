import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Homepage";
import Joinpartner from './Pages/Joinpartner';
function App() {
  return (
   <div className='app'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/joinpartner" element={<Joinpartner/>}></Route>
      </Routes>
   </div>
  );
}

export default App;
