import { useState } from 'react';

const Temp = () => {
    const [temp, setTemt] = useState();
    const es = new EventSource("http://127.0.0.1:8000/api/sse/temp")
    es.onmessage = (e) => {
        // setTemt(e.data.dt)
        console.log(e)
    };
    return (
        <div>
            MAP
            <br/>
            {temp}
        </div>
    )
}

export default Temp;