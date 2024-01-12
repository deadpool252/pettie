import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import React, { useState, useEffect, useRef } from 'react'
import API from "../api/api"
import { dogIcon, hosIcon, parkIcon } from './icon'
import { Button } from './button'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Location () {
    const clicked = false
    const [index, setIndex] = useState(1)
    const [position, setPosition] = useState(null)
    const [petLocation, setPetLocation] = useState([])
    const [parkLocation, setParkLocation] = useState([])
    const [hosLocation, setHosLocation] = useState([])
    
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
        <div style={{marginTop: "70px", width: "100%", height: "100%", backgroundColor: "black"}}>
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
                <MapContainer style={{width:'auto', height: 'auto'}} center={position} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position} icon={dogIcon}>
                        <Popup>
                            Dawg
                        </Popup>
                    </Marker>
                    <div style={{position:'absolute', zIndex:'10000', right: '10px', top: '10px'}}>
                        <Button text='Pet' value='pet' petPosition={position}/>
                        <Button text='My Place' value='owner'/>
                        <Button text='Hospital' value='hos' others={hosLocation} icon={hosIcon} isClick={clicked}/>
                        <Button text='Park' value='park' others={parkLocation} icon={parkIcon}/>
                        <div style={{
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
                        </div>
                    </div>
                </MapContainer>
            </div>
        </div>
    )
}