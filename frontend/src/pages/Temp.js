import { useState } from 'react';

const Temp = () => {
    // const [temp, setTemt] = useState();
    const es = new EventSource("http://126.26.154.136/api/ssetemp")
    es.onmessage = (e) => {
        // setTemt(e.data.dt)
        console.log(e)
    };
    return (
        <div>
            TEMP
            <br/>
            {/* {temp} */}
        </div>
    )
}

export default Temp;