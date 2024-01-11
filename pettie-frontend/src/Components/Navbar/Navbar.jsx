import React, {useState} from 'react'
import './navbar.css'
import {FaBars} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {AiOutlineClose} from 'react-icons/ai'
import { SidebarData } from './SidebarData'
import { IconContext } from 'react-icons'
import {MdOutlinePets} from 'react-icons/md'
// import Home from '../Home/Home'


const Navbar = () => {
  const [sidebar, SetSidebar] = useState(false)

  const showSidebar = () => SetSidebar(!sidebar)

  const [value, setValue] = React.useState(0);


  return (
    // <h1>Navbar</h1>
    <>
    
    <section> 
      <header className='header flex'>

        <div className='logoDiv'>
            <a href="#" className='logo flex'>
              <h1><MdOutlinePets className='icon' />Pettie.</h1>
            </a>
        </div>
        {/* <IconContext.Provider value={{color: 'hsl(199, 100% ,33%)'}}> */}
        <div className="navbar">

          <Link to="#" className='menu_bars'>
            <FaBars onClick={showSidebar} size={25} className='icon'/>
          </Link>
        </div>
        {/* </IconContext.Provider> */}
      

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items'  onClick={showSidebar}>
          {/* <IconContext.Provider value={{color: 'fff'}}> */}
            <li className='navbar-togger'>
              <Link  to='#' className='menu_bars'>
                <AiOutlineClose className='icon' />
              </Link>
            </li>
          {/* </IconContext.Provider> */}

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <div className='icon'>{item.icon}</div>
                    <span>{item.title}</span>
                  </Link>


                </li>
              )
            })}
          </ul>

        </nav>
      
      </header>
      {/* <main>
        <Home></Home>
      </main> */}
    </section>

    
      
    </>
  );
}

export default Navbar
