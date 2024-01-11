import React, {useEffect} from 'react'
import './home.css'

import Aos from 'aos'
import 'aos/dist/aos.css'
import Navbar from '../Components/Navbar/Navbar'
import Bottomnavbar from '../Components/Navbar/Bottomnavbar'

const Home = () => {
  //react hook to add a scroll
  //hiệu ứng lúc reload lại trang các thành phần sẽ di chuyển lên
  useEffect(() =>{
    Aos.init({duration: 2000})
  })
  return (
    <>
    <section className='home_container'>
      <div>
        
      </div>


    </section>
    
    </>
  )
}

export default Home
