import React ,{useState}from 'react'
import './home.css'
import dogs  from '../Petinfo/dogdata';
import ApexChart from './ApexChart';
import Calories from './Calories'; 
import Bettery from './Bettery';

export default function Home () {
  const today = new Date();
  const temperature = 26;

  const [selectedDog, setSelectedDog] = useState(dogs[0]);  
  const handleDogClick = (dog) => {
      setSelectedDog(dog);
  };

  return (
    <>
      <div style={{marginTop: "75px"}}>
      {/* select  */}
        <div className="dog-icons">
          <div className={`dog-icon-container`} onClick={() => handleDogClick({})}>   
          </div>      
            {dogs.map((dog) => (
              <div key={dog.id} className={`dog-icon-container ${selectedDog.id === dog.id ? 'selected' : ''}`} onClick={() => handleDogClick(dog)}>
                  <img src={dog.img} alt={dog.name} className="dog-icon" />
                    <div className='dog-name'>
                    <p>{dog.name}</p>
                    </div>    
              </div>       
            ))} 
        </div>
      
      {/* 下のBOX */}

        <div className='status' style={{marginTop:"120px"}}>
          <ApexChart/>
          <hr/>
          <Calories/>
          <hr/>
          <Bettery/>
          {/* 體溫 心律 */}
          </div>
      </div>
    
    </>
  )
}
