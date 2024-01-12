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


const App = () => {
  return (
    <Router>
     <Navbar/>
    
        <Routes>
          {/* <Route path="/footer" element={<Footer/>} /> */}
          <Route path="/temperature" element={<TemperatureManagement/>} />
          
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="*" element={<NoMatch />} /> */}
          <Route path="/" exact component={Home} />
          <Route path="/location" element={<Location/>} />

        </Routes>
      <Bottomnavbar/>
    </Router>
  );
}

export default App
