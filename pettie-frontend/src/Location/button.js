import { Marker, Popup, useMap } from 'react-leaflet'
import { useState, useEffect, useRef } from "react"
import dog from "../img/dog.png"
import hos from "../img/hos.png"
import park from "../img/park.png"
import L from "leaflet";
import "leaflet-routing-machine";

export const Button = ({text, value=null, petPosition=null, others=[], icon=null, userlat=null, setUserlat=null, to=null, routing=null, setRouting=null})=>{
    const map = useMap()
    const intvl = useRef(null)
    const [position, setPosition] = useState(null)
    const [hover, setHover] = useState(false)
    const [selectedId, setSelectedId] = useState(null)

    useEffect(() => {
        if(((value==='hos'&&to==="hos")||(value==='park'&&to==="park"))&&others.length>0){
            setHover(true)
            if(routing!=null){map.removeControl(routing)}
            if(value==='hos'){
                flyTo(others[1].yp,others[1].xp)
                setSelectedId(12)
            }else{
                flyTo(others[3].yp,others[3].xp)
                setSelectedId(4)
            }
        }
    }, [to, userlat, others]);
    const flyTo = (lat, lng) =>{
        map.flyTo({lat: (lat+userlat.lat)/2, lng: (lng+userlat.lng)/2}, map.getZoom())
        setRouting(L.Routing.control({
            waypoints: [
            L.latLng(userlat.lat, userlat.lng),
            L.latLng(lat, lng)
            ],
            lineOptions: {
            styles: [
                {
                color: "blue",
                opacity: 0.6,
                weight: 4
                }
            ]
            },
            addWaypoints: false,
            draggableWaypoints: false,
            fitSelectedRoutes: false,
            showAlternatives: false,
            routeWhileDragging: true,
            show: false,
            createMarker: function() { return null; }
        }).addTo(map))
    }

    useEffect(() => {
        if(value==='owner'){
            map.locate().on("locationfound", (e)=>{
                setPosition([34.7063425,135.5034314])
                setUserlat({lat: 34.7063425, lng: 135.5034314})
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
            setPosition([34.7063425,135.5034314])
            map.flyTo([34.7063425,135.5034314], map.getZoom())
            
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
            if(value=="hos"&&routing){
                map.removeControl(routing)
                setRouting(null)
            }
            if(value=="park"&&routing){
                map.removeControl(routing)
                setRouting(null)
            }
        }else{
            setHover(!hover)
            if(value==='hos'){
                map.flyTo({lat: others[1].yp, lng: others[1].xp}, map.getZoom())
            }else{
                map.flyTo({lat: others[3].yp, lng: others[3].xp}, map.getZoom())
            }
        }
    }

    const handleClickFinding = (id) =>{
        if(selectedId===id){
            setSelectedId(null)
            if(routing!=null){map.removeControl(routing)}
        }else{
            setSelectedId(id)
            if(routing!=null){map.removeControl(routing)}
            if(value==='pet'){
                setRouting(L.Routing.control({
                        waypoints: [
                        L.latLng(userlat.lat, userlat.lng),
                        L.latLng(petPosition[0], petPosition[1])
                        ],
                        lineOptions: {
                        styles: [
                            {
                            color: "blue",
                            opacity: 0.6,
                            weight: 4
                            }
                        ]
                        },
                        addWaypoints: false,
                        draggableWaypoints: false,
                        fitSelectedRoutes: false,
                        showAlternatives: false,
                        routeWhileDragging: true,
                        show: false,
                        createMarker: function() { return null; }
                    }).addTo(map)
                )
            }else{
                let clickedLocaton = others.find(e=>e.id===id)
                setRouting(L.Routing.control({
                        waypoints: [
                        L.latLng(userlat.lat, userlat.lng),
                        L.latLng(clickedLocaton.yp, clickedLocaton.xp)
                        ],
                        lineOptions: {
                        styles: [
                            {
                            color: "blue",
                            opacity: 0.6,
                            weight: 4
                            }
                        ]
                        },
                        addWaypoints: false,
                        draggableWaypoints: false,
                        fitSelectedRoutes: false,
                        showAlternatives: false,
                        routeWhileDragging: true,
                        show: false,
                        createMarker: function() { return null; }
                    }).addTo(map)
                )
            }
        }
        
    }

    return (
        <div style={{
                display:'flex',
                justifyContent:'right',
                alignItems: 'center',
                marginBottom: value!='park'?'15px':'',
            }}
            onClick={value==='owner' ? handleClickOwner : value==='pet' ? handleClickPet : handleClickOthers}
        >
            <div style={{
                    color: 'white',
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    fontSize: '18px',
                    backgroundColor: hover ? '#6AA2FC' : '#3383FF',
                    padding: '5px 10px',
                    borderRadius: '5px',
                    boxShadow: hover ? 'inset 0 0.6em 2em -0.3em rgba(0,0,0,0.15),inset 0 0 0em 0.05em rgba(255,255,255,0.12)' : 'inset 0 -0.6em 1em -0.35em rgba(0,0,0,0.17),inset 0 0.6em 2em -0.3em rgba(255,255,255,0.15),inset 0 0 0em 0.05em rgba(255,255,255,0.12)'
                }}
            >
                {text.split('').map(char=>{
                    return <>{char}<br/></>
                })}

                {value==='pet'&&petPosition&&
                    <Marker position={petPosition} icon={icon}>
                        <Popup>
                            わんわん
                            <br/>
                            <div style={{
                                    width: "fit-content",
                                    color: 'white',
                                    fontFamily: 'Arial, Helvetica, sans-serif',
                                    fontSize: '18px',
                                    backgroundColor: '#3383FF',
                                    padding: '5px 10px',
                                    borderRadius: '5px',
                                    boxShadow: 'inset 0 -0.6em 1em -0.35em rgba(0,0,0,0.17),inset 0 0.6em 2em -0.3em rgba(255,255,255,0.15),inset 0 0 0em 0.05em rgba(255,255,255,0.12)'
                                }}
                                onClick={(a)=>{
                                    a.stopPropagation()
                                    map.closePopup()
                                    handleClickFinding(0)
                                }}
                            >{selectedId===0?"ルート外す":"ルート検索"}</div>
                        </Popup>
                    </Marker>
                }

                {value==='owner'&&position&&
                    <Marker position={position}>
                        <Popup>ここにおるぜ</Popup>
                    </Marker>
                }

                {(value==='hos'||value==='park')&&hover&&
                    others.map((e, i)=>
                        <Marker position={[e.yp-0.0003, e.xp]} icon={icon} >
                            <Popup>
                                {e.name}
                                <br/>
                                {e.category==="clinic"&&"9:30~18:30"}
                                <br/>
                                <div style={{
                                        width: "fit-content",
                                        color: 'white',
                                        fontFamily: 'Arial, Helvetica, sans-serif',
                                        fontSize: '18px',
                                        backgroundColor: '#3383FF',
                                        padding: '5px 10px',
                                        borderRadius: '5px',
                                        boxShadow: 'inset 0 -0.6em 1em -0.35em rgba(0,0,0,0.17),inset 0 0.6em 2em -0.3em rgba(255,255,255,0.15),inset 0 0 0em 0.05em rgba(255,255,255,0.12)'
                                    }}
                                    // onClick={handleClickFinding(e.id)}
                                    onClick={(a)=>{
                                        a.stopPropagation()
                                        map.closePopup()
                                        handleClickFinding(e.id)
                                    }}
                                >{selectedId===e.id?"ルート外す":"ルート検索"}</div>
                            </Popup>
                        </Marker>
                    )
                }
            </div>
            <div style={{
                width:'40px',
            }}>
                {value==='owner'?<img style={{marginLeft: '8px', width: '25px'}} src='https://esm.sh/leaflet@1.9.2/dist/images/marker-icon-2x.png'/>:value==='hos'?<img src={hos}/>:value==='park'?<img src={park}/>:<img src={dog}/>}
            </div>
        </div>
    )
}