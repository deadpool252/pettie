import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './index.css'
import '../app.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Navbar from '../Components/Navbar/Navbar'
import Bottomnavbar from '../Components/Navbar/Bottomnavbar'
import Chart from '../Components/Chart/Chart';
import Weather from '../Components/Weather/weather'
import TemperatureTable from '../Components/TemperatureTable/TemperatureTable';

const Temperature = () => {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/home');
  };

  const petData = [
    { time: "現在", temperature: "12°C", status: "平気" },
    { time: "12時", temperature: "12°C", status: "熱" },
    { time: "13時", temperature: "12°C", status: "運動" },
   
    { time: "14時", temperature: "12°C" },
    { time: "15時", temperature: "12°C" },

    { time: "16時", temperature: "12°C" },
    { time: "17時", temperature: "12°C" },

    { time: "18時", temperature: "12°C" },
    { time: "19時", temperature: "12°C" },
    { time: "20時", temperature: "12°C" },
    { time: "21時", temperature: "12°C" },
    { time: "22時", temperature: "12°C" },
    { time: "18時", temperature: "12°C" },
    { time: "19時", temperature: "12°C" },
    { time: "20時", temperature: "12°C" },
    { time: "21時", temperature: "12°C" },
    { time: "22時", temperature: "12°C" },
  ];
  const [isVisible, setIsVisible] = useState(true);


  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(prev => !prev);
    }, 6000); // Kích thước của mỗi khoảng thời gian: 3s hiện, 3s ẩn

    return () => {
      clearInterval(intervalId);
    };
  }, []); 

  const reversedTemperatureData = [...petData].reverse();
  useEffect(() =>{
    Aos.init({duration: 2000})
  })
  return (
    <>
    
    <section className='w-full h-screen gap-[10px]'>
      
      <div className='flex p-[10px] mb-[20px] pt-[67px]'>
        <Chart />
      </div>
    
      <div className='flex justify-center items-center'>
        <span className='w-5/6 font-semibold text-[15px]'>時間ごとに平均温度</span>
      </div>
      <div className='mb-[20px] flex justify-center items-center '>
        
        <div className="p-[10px] rounded-[10px] text-[black] shadow-lg bg-[#f5f5f5] w-5/6 scrollable-container text-[15px]">
          
          <div className="scrollable-content overflow-x-auto">
            <TemperatureTable data={reversedTemperatureData} />
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center'>
        <span className='w-5/6 font-semibold text-[15px]'>ペット状態</span>
      </div>
      <div className='mb-[20px] flex justify-center items-center text-[15px]'>
      {petData[0].status === '平気' && (
        // <div className="flex p-[10px] bg-[#F5968B] text-[black] shadow-lg rounded-[10px] text-[#FFF5E1] w-5/6 bg-[#f5f5f5] scrollable-container">
        <div className="flex p-[10px] bg-[#DEFFC9] text-[black] shadow-lg rounded-[10px] text-[#FFF5E1] w-5/6 bg-[#f5f5f5] scrollable-container">
          <div className='w-[20%] '>
            <span className='text-[black]'>{petData[0].status}</span>
          </div>
          <div className='w-[80%] rounded-[10px] 0 flex' style={{justifyContent: "end", marginRight: isVisible?"0px":"40px", visibility:isVisible?"visible":"hidden", opacity:isVisible?"1":"0", transition: "1s"}}>
            {/* <p className='border select-none p-2 bg-[#d4d4d8] rounded-[10px]'>散歩しましょうか</p> */}
            {petData[0].status === '平気' && (
              <p onClick={handleButtonClick} className='border select-none p-2 bg-[#d4d4d8] rounded-[10px]'>散歩しましょうか</p>
            )}           
          </div>
        </div>
      )}
      </div>

      <div className='flex justify-center items-center'>
        <span className='w-5/6 font-semibold text-[15px]'>天気情報</span>
      </div>
      <div className="flex justify-center items-center">
      <Weather city_name="OSAKA" />
      </div>
    </section>
    
    </>
  )
}

export default Temperature