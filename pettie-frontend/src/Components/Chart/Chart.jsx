// src/components/Chart/Chart.jsx

import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const currentDate = new Date().getDate();
const currentMonth = new Date().getMonth();
const currentYear = new Date().getFullYear();
const lastDayCurrentMonth = new Date(currentYear, currentMonth+1, 0).getDate()
const lastDayLastMonth = new Date(currentYear, currentMonth, 0).getDate()

const labels = Array.from({ length: 13 }, (_, index) => currentDate>=13?`${currentDate-12+index}日`:(currentDate-12+index)>0?`${currentDate-12+index}日`:`${currentDate-12+index+lastDayLastMonth}日`);


const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
    },
  },
  scales: {
    y: {
      suggestedMin: 37,
      suggestedMax: 40,
    },
  }
};

const Chart = ({tempData=[]}) => {
  const [filterDataForDay, setFilterDataForDay] = useState([])

  useEffect(()=>{
    const d = tempData.filter(d=>d.temperature>=38.2&&d.temperature<38.6).slice(0,13)
    d.map((d)=>{
      filterDataForDay.push(d.temperature)
    })
  },[])

  return <>
      <Line options={options} data={{
        labels,
        datasets: [
          {
            label: '平均体温',
            data: filterDataForDay,
            borderColor: 'rgb(255, 205, 86)',
            backgroundColor: 'rgba(255, 205, 86, 0.5)',
          },
        ],
      }} />
    </>;
};

export default Chart;
