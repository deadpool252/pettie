import React from 'react'
import './bottomnavbar.css'
import {Link} from 'react-router-dom'
import { GrContactInfo } from "react-icons/gr";
import { GrHomeRounded } from "react-icons/gr";
import { LiaTemperatureLowSolid } from "react-icons/lia";
import { FaMapLocationDot } from "react-icons/fa6";



const Bottomnavbar = () => {
  return (

    <>
    
    <section className='navbottomBarSection' >
      <div className='nav_bottom'>
        <div className='navBottom'>

          <ul className='nav-menu'>
            <li>
              <Link  to='/'>
                <GrHomeRounded className='icon'/>
              </Link>
            </li>
            <li> 
              <Link  to='#'>
                <GrContactInfo className='icon'/>
              </Link>
            </li>
            <li>
              <Link  to='/temperature'>
                <LiaTemperatureLowSolid className='icon'/>
              </Link>
            </li>
            <li> 
              <Link  to='/location'>
                <FaMapLocationDot className='icon'/>
              </Link>
            </li>
          </ul>
        </div>

        
      </div> 
      
    </section>

    
      
    </>
  );
}

export default Bottomnavbar
