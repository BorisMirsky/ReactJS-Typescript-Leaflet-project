import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './App.css';
import Markers from './Markers'; 


export function Home(): any {
    return (
            <MapContainer
            center={[14.0, -17.0]}
                zoom={3}
                scrollWheelZoom={true}
                dragging={true}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Markers />
            </MapContainer>
        );
}


export default Home;