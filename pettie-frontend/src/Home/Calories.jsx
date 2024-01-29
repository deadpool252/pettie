import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

export default function Calories () {
    const [chartData, setChartData] = useState({
        series: [
          { name: '歩数', data: [5, 3, 9, 400, 320, 45, 80, 120, 500, 390, 205, 40, 0] },
        //   { name: 'Revenue', data: [76, 85, 101, 98, 87, 105, 91, 114, 94] },
        //   { name: 'Free Cash Flow', data: [35, 41, 36, 26, 45, 48, 52, 53, 41] },
        ],
        options: {
          chart: {
            type: 'bar',
            height: 350,
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '55%',
              endingShape: 'rounded',
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            show: true,
            width: 2,
            colors: ['transparent'],
          },
          xaxis: {
            categories: ['0時', '2時', '4時', '6時', '8時', '10時', '12時', '14時','16時','18時','20時','22時',],
          },
          yaxis: {
            title: {
              text: '歩数',
            },
          },
          fill: {
            opacity: 1,
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return val + ' steps ';
              },
            },
          },
        },
      });
    
      useEffect(() => {
        // You can perform any side effect here if needed
      }, []);

    return (
        <div style={{ marginTop: "80px" }}>
        
        <div id="chart" className='cal-chart'>
        <Chart options={chartData.options} series={chartData.series} type="bar" height={350} />
        </div>
        <div id="html-dist"></div>
        </div>
        
    );
}