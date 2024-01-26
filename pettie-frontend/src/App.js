//rafce
import React from 'react'
import './app.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Home from './Home/Home'
import TemperatureManagement from './TemperatureManagement/index'
import Bottomnavbar from './Components/Navbar/Bottomnavbar'
import Location from './Location/Location';
import Petinfo from './Petinfo/petinfo'
import ApexCharts from './Home/ApexChart';
import Calories from './Home/Calories';
import Bettery from './Home/Bettery';


const App = () => {
  return (
    <Router>
    <Navbar/>
    
        <Routes>
          {/* <Route path="/footer" element={<Footer/>} /> */}
          <Route path="/temperature" element={<TemperatureManagement/>} />
          
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="*" element={<NoMatch />} /> */}
          <Route path="/home" element={<Home/>} />
          <Route path="/location" element={<Location/>} />
          <Route path="/location/:to" element={<Location/>} />
          <Route path="/petinfo" element={<Petinfo/>} />
          <Route path="/apexchart" element={<ApexCharts/>} />
          <Route path="/calories" element={<Calories/>} />
          <Route path="/bettery" element={<Bettery/>} />

        </Routes>
      <Bottomnavbar/>
    </Router>
  );
}

export default App
