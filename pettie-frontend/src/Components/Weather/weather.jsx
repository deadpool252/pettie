import { useState, useEffect } from 'react';
import dayjs from 'dayjs';

const weatherMainTranslation = {
  'Clear': '晴れ',
  'Clouds': '曇り',
  'Rain': '雨',
  'Drizzle': '霧雨',
  'Thunderstorm': '雷雨',
  'Snow': '雪',
  'Mist': '霧',
  'Osaka' : '大阪'
  // Thêm các giá trị khác nếu cần
};

function Weather({city_name}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    fetch(`${process.env.REACT_APP_OW_API_URL}/weather/?q=${city_name}&APPID=${process.env.REACT_APP_OW_API_KEY}&units=metric`)
    .then(res => res.json())
    .then(result => {
      console.log(result);
      setData(result);
      setLoading(false);
    })
    .finally(() => {
      setLoading(false);
    });
  },[city_name])
  if (loading) {
    return <div>
    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg></div>;
  }
    return (
      <div className="w-5/6">
        <div className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-300
                      h-28 rounded-xl shadow-lg
                      transform hover:scale-110 transition-transform
                      text-[#FFF5E1] relative">           
          <div className="w-full px-8 absolute top-6">
            <div className="flex justify-between flex items-start">
              <div>
                <p className="font-light">現在地</p>
                <p className="text-lg font-medium tracking-widest">
                  {weatherMainTranslation[data.name] || data.name}

                </p>
                <p className="font-bold tracking-more-wider text-sm">
                    { dayjs(data.ts).format('YYYY-MM-DD')}
                  </p>
              </div>

              <div className='mt-[-30px]'>
                <p className="top-0 font-light text-xs">
                  温度
                </p>
                <p className="font-bold tracking-more-wider text-sm">
                  {data.main.temp}°C
                </p>
              </div>

              <div className='mt-[-25px]'>
                <img className='w-[45px] h-[45px]' src={`${process.env.REACT_APP_OW_ICON_URL}/${data.weather[0].icon}.png`} 
                  alt={data.weather[0].description}
                />

                <p className='flex items-center justify-center text-[15px]'>
                  {weatherMainTranslation[data.weather[0].main] || data.weather[0].main}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    )
  }
  
  export default Weather