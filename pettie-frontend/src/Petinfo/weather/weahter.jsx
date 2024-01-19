// bb2e91072b20da99f1773c268abc903a
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
    const [location, setLocation] = useState(null);
    const [weather, setWeather] = useState(null);
    const [currentDate, setCurrentDate] = useState(null);
    const [weatherIconUrl, setWeatherIconUrl] = useState(null);

    useEffect(() => {
    // 获取地理位置
    navigator.geolocation.getCurrentPosition(
        position => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });

        // 获取天气信息
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=bb2e91072b20da99f1773c268abc903a`)
            .then(response => {
            setWeather(response.data);
            // 设置天气图标URL
            const iconCode = response.data.weather[0].icon;
            setWeatherIconUrl(`http://openweathermap.org/img/wn/${iconCode}.png`);
            })
            .catch(error => {
            console.error('Error fetching weather data:', error);
            });
        },
        error => {
        console.error('Error getting location:', error);
        }
    );

    // 获取当前日期
    const now = new Date();
    const options = { month: 'long', day: 'numeric', weekday: 'long' };
    const formattedDate = now.toLocaleDateString('jp', options);
    setCurrentDate(formattedDate);
  }, []); // 空数组确保只在组件挂载时运行一次

    // 在组件外定义翻译函数
    const translateWeatherDescription = (description) => {
    const translationMap = {
        'Clear': '晴れ',
        'Clouds': '曇り',
        'Rain': '雨',
        'Snow': '雪',
        'scattered clouds':'雲がまばらに出る',
        'broken clouds':'ちぎれた雲',
    };

    return translationMap[description] || description;
};

    return (
    <div style={{marginTop:"80px",marginLeft:"10px",background:"gray"}}>
        {/* {location && (
        <p>
            当前位置: 纬度 {location.latitude}, 经度 {location.longitude}
        </p>
        )} */}

        <p>今日は {currentDate}</p>
        
        {weather && (
            <div>   
            <p>天気 {translateWeatherDescription(weather.weather[0].description)}</p>
            <img 
            style={{ width: '50px', height: '50px' }}
            src={weatherIconUrl} alt="Weather Icon" />
            <p>温度は {(weather.main.temp - 273.15).toFixed(2)} ℃</p>
            {/* 其他天气信息 */}
            </div>
        )}

    </div>
    );
};

export default Weather;
