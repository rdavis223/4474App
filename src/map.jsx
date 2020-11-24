import React from 'react'
import GoogleMapReact from 'google-map-react'
import './map.css'


const Map = ({ location, zoomLevel, mapWidth }) => (
<div className="map">
    <div className="google-map" style = { mapWidth }>
    <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyD8LiaQi4w3UySiDfi_38xpGvJ2iqFv7Hk' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
    >
    </GoogleMapReact>
    </div>
    </div>
    
)

export default Map