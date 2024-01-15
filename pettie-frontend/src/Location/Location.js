import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import React, { useState, useEffect, useRef } from 'react'
import API from "../api/api"
import { dogIcon, hosIcon, parkIcon } from './icon'
import { Button } from './button'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FaExpand } from "react-icons/fa";

export default function Location () {
    const clicked = false
    const [index, setIndex] = useState(1)
    const [position, setPosition] = useState(null)
    const [petLocation, setPetLocation] = useState([])
    const [parkLocation, setParkLocation] = useState([])
    const [hosLocation, setHosLocation] = useState([])
    const [showButton, setShowButton] = useState(false)
    
    useEffect(()=>{
        API.get('atHome/').then(res=>{
            setPetLocation(res.data)
            setPosition([res.data[0].y, res.data[0].x])
        })

        API.get('petplace/').then(res=>{
            setParkLocation(res.data.slice(0,10))
            setHosLocation(res.data.slice(10))
        })
    }, [])

    useEffect(()=>{
        let oneminute = 1000;
        let interval = setInterval(()=>{
            if(index>=119){
                setIndex(0)
            }else{
                setIndex(index+1)
            }
            setPosition([petLocation[index].y, petLocation[index].x])
        }, oneminute)
        return () => clearInterval(interval)
    }, [index, petLocation])

    const handleClickNofi = () => toast.warn('🦄 Wow so easy!', {
        position: "bottom-center",
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
        });
    
    return (position&&
        <div style={{marginTop: "70px", width: "100%", height: "100%"}}>
            <ToastContainer
                position="bottom-center"
                autoClose={false}
                limit={7}
                newestOnTop={false}
                closeOnClick
                rtl
                pauseOnFocusLoss
                draggable={false}
                theme="light"
            />
            <div style={{width:'100%', height: '100%'}}>
                <MapContainer style={{width:'100%', height: '100%'}} center={position} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position} icon={dogIcon}>
                        <Popup>
                            わんわん
                        </Popup>
                    </Marker>
                    <div style={{
                        position:'absolute',
                        zIndex:'500',
                        right: '55px',
                        bottom: '70px',
                        width: "40px",
                        height: "40px",
                        borderRadius: "20px",
                        border: showButton?'2px solid gray':'2px solid black',
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backdropFilter: 'blur(2px)',
                    }}>
                        <FaExpand style={{width: "30px", height: "30px", transition: "1s", rotate: showButton?"0deg":"90deg", color: showButton?'gray':'black'}} onClick={()=>{setShowButton(!showButton)}}/>
                    </div>
                    <div style={{
                        backdropFilter: 'blur(5px)',
                        borderRadius: '5px',
                        padding: '5px',
                        position:'absolute',
                        zIndex:'500',
                        right: '10px',
                        bottom: showButton?'120px':'0px',
                        transition: "visibility 0.3s, opacity 0.3s linear, bottom 1s",
                        visibility: showButton?"visible":"hidden",
                        opacity: showButton?"1":"0"
                    }}>
                        <Button text='ペット' value='pet' petPosition={position}/>
                        <Button text='俺' value='owner'/>
                        <Button text='病院' value='hos' others={hosLocation} icon={hosIcon} isClick={clicked}/>
                        <Button text='公園' value='park' others={parkLocation} icon={parkIcon}/>
                        {/* <div style={{
                                color: 'white',
                                fontFamily: 'Arial, Helvetica, sans-serif',
                                backgroundColor: '#3383FF',
                                padding: '4px 6px',
                                marginBottom: '15px',
                                borderRadius: '5px',
                                boxShadow: 'inset 0 -0.6em 1em -0.35em rgba(0,0,0,0.17),inset 0 0.6em 2em -0.3em rgba(255,255,255,0.15),inset 0 0 0em 0.05em rgba(255,255,255,0.12)'
                            }}
                            onClick={handleClickNofi}
                        >
                            Nofi
                        </div> */}
                    </div>
                </MapContainer>
            </div>
        </div>
    )
}