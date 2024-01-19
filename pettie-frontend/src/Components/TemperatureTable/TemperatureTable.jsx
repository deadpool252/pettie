import React from 'react';

const TemperatureTable = ({ data }) => {
  return (
    <table>
      <tbody>
        <tr>
          {data.map((item, index) => (
            <td className='p-[7px]' key={index}>{item.time}</td>
          ))}
        </tr>
        <tr>
          {data.map((item, index) => (
            <td className='p-[7px]' key={index}>{item.temperature}</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default TemperatureTable;
