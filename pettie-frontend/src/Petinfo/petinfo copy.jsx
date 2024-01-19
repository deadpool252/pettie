import React, {useState} from 'react'
import Petlist from './petlist';
import dogs  from './dogdata';
import Weather from './weather/weahter';

const Petinfo = () => {
    return(
        <div>
            <div>
            <Weather/>
            <Petlist dogs={dogs}/>
            </div>
        </div>
    )
}

export default Petinfo;