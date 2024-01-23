import React, {useEffect, useState, useRef} from 'react'
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
import API from "../api/api"

const Temperature = () => {
  const [tempData, setTempData] = useState([])
  const ref = useRef(null);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/home');
  };

  const [isVisible, setIsVisible] = useState(true);
  const [isClick, setIsClick] = useState(false)
  const [flag, setFlag] = useState(false)

  useEffect(()=>{
    API.get('normalTemp/').then(res=>{
      setTempData(res.data)
    })
  },[])

  useEffect(() => {
    const intervalId = setInterval(() => {
      if(isClick){
        if(flag){
          setFlag(true)
        }else{
          setIsClick(false)
          setIsVisible(prev => !prev);
        }
      }else{
        setIsVisible(prev => !prev);
      }
    }, 6000); // Kích thước của mỗi khoảng thời gian: 3s hiện, 3s ẩn

    return () => {
      clearInterval(intervalId);
    };
  }, []); 
  useEffect(() =>{
    Aos.init({duration: 2000})
  })
  return (
    <section className='w-full gap-[10px]' style={{height:"calc(100% - 120px)", marginTop: "67px", overflow: "scroll", paddingBottom: "50px"}}>
      <div className='flex p-[10px] mb-[20px]' style={{width: "100%"}} ref={ref}>
        {tempData.length>0&&
          <Chart tempData={tempData} />
        }
      </div>
    
      <div className='flex justify-center items-center'>
        <span className='w-5/6 font-semibold text-[15px]'>今日の時間ごとに平均体温</span>
      </div>
      <div className='mb-[20px] flex justify-center items-center '>
        
        <div className="p-[10px] rounded-[10px] text-[black] shadow-lg   w-5/6 scrollable-container text-[15px]"
          style={{background:"linear-gradient(120deg, #daedff, #f5f5f5 )"}}
        >
          
          <div className="scrollable-content overflow-x-auto">
            {tempData.length>0&&
              <TemperatureTable tempData={tempData} ref2={ref}/>
            }
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center'>
        <span className='w-5/6 font-semibold text-[15px]'>ペット状態</span>
      </div>
      <div className='mb-[20px] flex justify-center items-center text-[15px]' onClick={()=>{setIsClick(true);setIsVisible(true)}}>
        
          {/* <div className="flex p-[10px] bg-[#F5968B] text-[black] shadow-lg rounded-[10px] text-[#FFF5E1] w-5/6 bg-[#f5f5f5] scrollable-container"> */}
          <div className="flex p-[10px]   shadow-lg rounded-[10px] w-5/6 bg-[#f5f5f5] scrollable-container"
             style={{background:"linear-gradient(120deg, RGB(22, 222, 115) , RGB(103, 235, 195))"}}
          >
            <div className='w-[20%] font-black text-[#1e694a] '>
              <span>元気</span>
            </div>
            <div className='w-[80%] rounded-[10px] 0 flex text-[black]' style={{justifyContent: "end", marginRight: isVisible?"0px":"40px", visibility:isVisible?"visible":"hidden", opacity:isVisible?"1":"0", transition: "1s"}}>
                <p onClick={()=>{navigate('/location/park')}} className='border select-none p-2 bg-[#c6fcd0] rounded-[10px]'>散歩しましょうか</p>
            </div>
          </div>
        
      </div>

      <div className='flex justify-center items-center '>
        <span className='w-5/6 font-semibold text-[15px]'>天気情報</span>
      </div>
      <div className="flex justify-center items-center">
        <Weather city_name="OSAKA" />
      </div>

      <div className='flex justify-center items-center pt-[80px]'>
        <span className='w-5/6 font-semibold text-[15px]'>ペット状態</span>
      </div>
      <div className='mb-[20px] flex justify-center items-center text-[15px]' onClick={()=>{setIsVisible(true)}}>
          <div className="flex p-[10px] bg-[#DEFFC9] shadow-lg rounded-[10px] text-[#FFF5E1] w-5/6 bg-[#f5f5f5] scrollable-container"
            style={{background:"linear-gradient(120deg, #fd8282 , #f8ff9d)"}}
          >
            <div className='w-[20%] font-black'>
              <span className='text-[black]'>高熱</span>
            </div>
            <div className='w-[80%] rounded-[10px] 0 flex text-[black]' style={{justifyContent: "end", marginRight: isVisible?"0px":"40px", visibility:isVisible?"visible":"hidden", opacity:isVisible?"1":"0", transition: "1s"}}>
                <p onClick={()=>{navigate('/location/hos')}} className='border select-none p-2 bg-[#f1ffb0] rounded-[10px]'>病院検索</p>
                    
            </div>
          </div>
        
      </div>
    </section>
  )
}

export default Temperature