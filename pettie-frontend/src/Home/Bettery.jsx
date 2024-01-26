import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import ApexCharts from 'apexcharts';
import './bettery.css'


export default function Bettery () {
    useEffect(() => {
        const optionsProgress1 = {
            chart: {
              height: 70,
              type: 'bar',
              stacked: true,
              sparkline: {
                enabled: true
              }
            },
            plotOptions: {
              bar: {
                horizontal: true,
                barHeight: '20%',
                colors: {
                  backgroundBarColors: ['#40475D']
                }
              },
            },
            stroke: {
              width: 0,
            },
            series: [{
              name: 'Process 1',
              data: [44]
            }],
            title: {
              floating: true,
              offsetX: -10,
              offsetY: 5,
              text: 'Lucky Bettery'
            },
            subtitle: {
              floating: true,
              align: 'right',
              offsetY: 0,
              text: '44%',
              style: {
                fontSize: '20px'
              }
            },
            tooltip: {
              enabled: false
            },
            xaxis: {
              categories: ['Process 1'],
            },
            yaxis: {
              max: 100
            },
            fill: {
              opacity: 1
            }
          };
        
        const chartProgress1 = new ApexCharts(document.querySelector('#progress1'), optionsProgress1);
        chartProgress1.render();

        // 在组件卸载时销毁图表
        return () => {
        chartProgress1.destroy();
        };
        }, []);

    return(
        <div>
            <div id="progress1">
            <Chart options={{}} series={[]} type="bar" height={70} />
            </div>
            <div id="html-dist"></div>
        </div>
    );
}