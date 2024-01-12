import L from 'leaflet';
import dog from "../img/dog.png"
import hos from "../img/hos.png"
import park from "../img/park.png"

export const dogIcon = new L.Icon({
    iconUrl: dog,
    iconSize: [36, 41],
    iconAnchor: [20, 40],
    popupAnchor: [1, -34],
});

export const hosIcon = new L.Icon({
    iconUrl: hos,
    iconSize: [40, 41],
    iconAnchor: [19, 40],
    popupAnchor: [1, -34],
});

export const parkIcon = new L.Icon({
    iconUrl: park,
    iconSize: [40, 41],
    iconAnchor: [17, 37],
    popupAnchor: [1, -34],
});