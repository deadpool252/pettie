import React from 'react'
import './home.css'


export default function Home () {
  const today = new Date();

  const temperature = 26;

  return (
    <>
      <div style={{marginTop: "70px"}}>
              <div style={{ marginTop: "70px" }}>
        <div>
          <p>今天的日期是：{today.toDateString()}</p>
          <p>溫度：{temperature} °C</p>
          {/* 其他Home組件的內容 */}
        </div>
      </div>

      </div>
    
    </>
  )
}
