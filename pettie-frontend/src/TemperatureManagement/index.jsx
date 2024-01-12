import React, {useEffect} from 'react'
import './index.css'
import '../app.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Navbar from '../Components/Navbar/Navbar'
import Bottomnavbar from '../Components/Navbar/Bottomnavbar'
import Chart from '../Components/Chart/Chart';
import Weather from '../Components/Weather/weather'

const Temperature = () => {
  //react hook to add a scroll
  //hiệu ứng lúc reload lại trang các thành phần sẽ di chuyển lên
  useEffect(() =>{
    Aos.init({duration: 2000})
  })
  return (
    <>
    <section className='h-full mt-[100px]'>
      <div>
        <Chart />
      </div>
      <div className="flex justify-center items-center">
        <Weather />
      </div>


    </section>
    
    </>
  )
}

export default Temperature