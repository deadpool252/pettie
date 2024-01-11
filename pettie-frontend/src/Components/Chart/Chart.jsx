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

const generateBodyTemperatureData = () => {
  return Array.from({ length: 60 }, () => Math.floor(Math.random() * 6) + 35);
};

const labels = Array.from({ length: 13 }, (_, index) => `${index * 5}秒 `);


const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Temperature Chart per Minute',
    },
  },
  scales: {
    y: {
      suggestedMin: 35,
      suggestedMax: 40,
    },
  },
};

const Chart = () => {
  const [bodyTemperatureData, setBodyTemperatureData] = useState(generateBodyTemperatureData);

  useEffect(() => {
    const interval = setInterval(() => {
      setBodyTemperatureData(generateBodyTemperatureData);
    }, 5 * 1000); // Cập nhật mỗi 5 phút

    return () => clearInterval(interval);
  }, []); // Chạy chỉ một lần khi component mount

  const data = {
    labels,
    datasets: [
      {
        label: 'Body Temperature',
        data: bodyTemperatureData,
        borderColor: 'rgb(255, 205, 86)',
        backgroundColor: 'rgba(255, 205, 86, 0.5)',
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default Chart;
