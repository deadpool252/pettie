import { Marker, Popup, useMap } from 'react-leaflet'
import { useState, useEffect, useRef } from "react"

export const Button = ({text, value=null, petPosition=[], others=[], icon=null, isClick=null})=>{
    const map = useMap()
    const intvl = useRef(null)
    const buttonRef = useRef(null)
    const [position, setPosition] = useState(null)
    const [hover, setHover] = useState(false)

    useEffect(() => {
        if(value==='hos'&&isClick){
            buttonRef.current.click()
        }
    }, []);

    useEffect(() => {
        if(value==='owner'){
            map.locate().on("locationfound", (e)=>{
                setPosition(e.latlng)
            })
        }
    }, [map])

    const setHoverToFalse = () => {
        if (intvl?.current) {
            clearInterval(intvl.current);
        }
        intvl.current = setInterval(()=>{setHover(false)}, 300);
    }

    const handleClickOwner = () => {
        setHover(true)
        map.locate().on("locationfound", (e)=>{
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
            
        })
        setHoverToFalse()
    }

    const handleClickPet = () => {
        setHover(true)
        map.flyTo({lat: petPosition[0], lng: petPosition[1]}, map.getZoom())
        setHoverToFalse()
    }

    const handleClickOthers = () => {
        if(hover){
            setHover(!hover)
        }else{
            setHover(!hover)
            if(value==='hos'){
                map.flyTo({lat: others[1].yp, lng: others[1].xp}, map.getZoom())
            }else{
                map.flyTo({lat: others[3].yp, lng: others[3].xp}, map.getZoom())
            }
        }
    }

    return (
        <div style={{
                color: 'white',
                fontFamily: 'Arial, Helvetica, sans-serif',
                backgroundColor: hover ? '#6AA2FC' : '#3383FF',
                padding: '4px 6px',
                marginBottom: '15px',
                borderRadius: '5px',
                boxShadow: hover ? 'inset 0 0.6em 2em -0.3em rgba(0,0,0,0.15),inset 0 0 0em 0.05em rgba(255,255,255,0.12)' : 'inset 0 -0.6em 1em -0.35em rgba(0,0,0,0.17),inset 0 0.6em 2em -0.3em rgba(255,255,255,0.15),inset 0 0 0em 0.05em rgba(255,255,255,0.12)'
            }}
            ref={buttonRef}
            onClick={value==='owner' ? handleClickOwner : value==='pet' ? handleClickPet : handleClickOthers}
        >
            {text}

            {value==='owner'&&position&&
                <Marker position={position}>
                    <Popup>You are here</Popup>
                </Marker>
            }

            {(value==='hos'||value==='park')&&hover&&
                others.map((e)=>
                    <Marker position={[e.yp-0.0003, e.xp]} icon={icon}>
                        <Popup>
                            {e.name}
                            <br/>
                            {e.category==="clinic"&&"9:30-18:30"}
                        </Popup>
                    </Marker>
                )
            }
        </div>
    )
}