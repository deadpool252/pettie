import React, {useState} from 'react'
// import Petlist from './petlist';
import { FaPlusCircle} from 'react-icons/fa';
import dogs  from './dogdata';
import './index.css' 


const Petinfo = () => {
    const [selectedDog, setSelectedDog] = useState(dogs[0]);  // 默认选择第一个狗狗

    const handleDogClick = (dog) => {
        setSelectedDog(dog);
    };

    return(
        <div className='outframe' style={{marginTop:"75px"}}>
            {/* dog-icon-bar  */}
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
                
                <div className='mt-[-25px]'><FaPlusCircle size="52" color="#00796b" /></div>
            </div>
            
            {/* dog-profile-pic */}
            <div className="dog-profile-pic">
                <img src={selectedDog.img} alt={selectedDog.name} className="selected-dog-image" />
            </div>

            <div className='dog-details'>
                <div className='detail-name'>
                    <p>{selectedDog.name}</p>
                </div>
                <div className='dog-weight'>
                    <p>{selectedDog.weight}</p>
                </div>
                <div className='dog-age'>
                    <p>{selectedDog.age}</p>
                </div>
                <div className='detail-info'>
                    <p>{selectedDog.sex}</p>
                </div>
            </div>
                


            {/* 以下は生活情報 */}
            <div className='life-info-item'>

                <div className='life-info-container'>
                    <p>避妊手術：{selectedDog.neutered ? '是' : '否'}</p>
                </div>

                <div className='life-info-container'>
                    <p>狂犬病ワクチン接種：{selectedDog.vaccinated ? '是' : '否'}</p>
                </div>

                <div className='life-info-container'>
                    <p>最近の病気記録：{selectedDog.lastCheckup}</p>
                </div>

                <div className='life-info-container'>
                    <p>病院名：{selectedDog.clinic}</p>
                </div>

                <div className='life-info-container'>
                    <p>誕生日：{selectedDog.birth}</p>
                </div>

                <div className='life-info-container'>
                    <p>好きなもの：{selectedDog.love}</p>
                </div>
                
                <div className='life-info-container'>
                    <p>食べないもの：{selectedDog.hate}</p>
                </div>

                <div className='life-info-container'>
                    <p>散歩記録：{selectedDog.walk}</p>
                </div>

                <div className='life-info-container'>
                    <p>餌：{selectedDog.eat}</p>
                </div>
                
                <div className='life-info-container'>
                    <p>うんち回数：{selectedDog.shit}</p>
                </div>

            </div>

            {/* memo */}
            <div className='memo'>
                <p>memo</p>
            </div>
            
        </div>
    );
};

export default Petinfo;