import { useState } from 'react'; 
import './index.css'
import { Component } from 'react';
import ReactRoundedImage from "react-rounded-image"

const Petlist = ({dogs}) => { 
    
    const [state] = useState ();

    if (!dogs ) {
        return <p>No dogs data available.</p>;
    }
    
    const listItems = dogs.map((dog) => (
        <div key={dog.id}>
            <div >

                <div className='petimg'>
                <ReactRoundedImage
                image={dog.img}
                // roundedColor=""
                imageWidth="150"
                imageHeight="150"
                roundedSize="3"
                // borderRadius="70"

                />
                
                {/* <li>
                    <img src={dog.img} alt={dog.name} />
                </li> */}
                </div>

                <div className='list'>
                <p>{dog.name}</p>
                <p>{dog.weight}</p>
                <p>{dog.age}</p>
                </div>

            </div>
        </div>
    ));
        
    return <ul className='content'>{listItems}</ul>;
};
    
export default Petlist;