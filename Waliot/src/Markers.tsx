import { Marker, useMap, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './App.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import L, { Icon } from 'leaflet';
import React, { useState, useEffect, ReactElement } from 'react'


let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

const RedIcon = new L.Icon({
    iconUrl: "RedPin.png",
    shadowUrl: iconShadow,
    iconSize: [35, 41],
});


let clicked: boolean = false;


function Markers(): any {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    function handleClick(ind:number) {
        setSelectedIndex(ind) 
    }

    function getMarkerIcon(ind: number) {
        if (ind === selectedIndex)
            return RedIcon;
        return DefaultIcon;
    }

    //---------------------------------------------------------------
    const fetchUrl: string = "https://raw.githubusercontent.com/waliot/test-tasks/master/assets/data/frontend-1-dataset.json";
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(fetchUrl)
            .then((response) => response.json())
            .then((response) => {
                setData(response);
            });
    }, []);

    //---------------------------------------------------------------
    const map = useMap();
    return data.map((coordinata: any, index: number) => {
        return <Marker
            key={index}
            position={[coordinata.latitude, coordinata.longitude]}
            icon={getMarkerIcon(index)}
            eventHandlers={{
                click: () => {
                    map.setView(
                        [coordinata.latitude, coordinata.longitude], 10);
                    clicked = !clicked;
                    handleClick(index);
                    },
             }}
        >
            <Popup>
                <span>{coordinata.name}</span>
            </Popup>
        </Marker>;
    });
}


export default Markers; 