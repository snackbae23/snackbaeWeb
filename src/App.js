import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Homepage";
function App() {
  return (
   <div className='app'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
   </div>
  );
}

export default App;
