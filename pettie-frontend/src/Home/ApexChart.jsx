import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

export default function ApexChart () {
    const [chartData, setChartData] = useState({
        series: [44, 55, 67, 83],
        options: {
          chart: {
            height: 350,
            type: 'radialBar',
          },
          plotOptions: {
            radialBar: {
              dataLabels: {
                name: {
                  fontSize: '22px',
                },
                value: {
                  fontSize: '16px',
                },
                total: {
                  show: true,
                  label: 'Total',
                  formatter: function (w) {
                    // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                    return 249;
                  },
                },
              },
            },
          },
          labels: ['活動量', '散歩時間', '睡眠量', '水の摂取量'],
        },
      });
    
      useEffect(() => {
        // You can perform any side effect here if needed
      }, []);


      return (
        <div style={{ marginTop: "80px" }}>
          
          <div id="chart">
        <Chart options={chartData.options} series={chartData.series} type="radialBar" height={350} />
      </div>
      <div id="html-dist"></div>
        </div>
      );
}