import React, { useState, useEffect, useRef } from 'react';

const currentHour = new Date().getHours()
const TemperatureTable = ({ tempData=[], ref2 }) => {
  const ref = useRef(null);
  const [data, setData] = useState([])
  useEffect(()=>{
    let data = []
    let da = tempData.slice(40,40+currentHour)
    da.map((d, i)=>{
      data.push({time:i+1===currentHour?"現在":i+1+"時", temp:d.temperature})
    })
    setData(data)
  },[])

  useEffect(()=>{
    ref.current?.scrollIntoView()
    ref2.current?.scrollIntoView()
  },[data])

  
  return (
    <table>
      <tbody>
        <tr>
          {data.map((item, index) => (
            index+1===currentHour?
            <td className='p-[7px]' ref={ref} style={{fontWeight: "bolder"}} key={index}>{item.time}</td>
            :
            <td className='p-[7px]' key={index}>{item.time}</td>
          ))}
        </tr>
        <tr>
          {data.map((item, index) => (
            index+1===currentHour?
            <td className='p-[7px]' style={{fontWeight: "bolder"}} key={index}>{item.temp.toFixed(1)}°</td>
            :
            <td className='p-[7px]' key={index}>{item.temp.toFixed(1)}°</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default TemperatureTable;
