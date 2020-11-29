import React, { Component } from "react";
import { LoadScript, GoogleMap, Marker, Polyline } from '@react-google-maps/api';
import decodePolyline from 'decode-google-map-polyline';
import './map.css';

class Map extends Component {
    render(){
        //leaving this as an example of how to decode an encoded polyline from google maps api
        var polyline = "{eoeGz{}nNjAe@Nf@dAvA|@fCxCaDFNGO^a@v@_@dEkBtHaDbNyFpLyEpF_CpKmEfA_@nCkAlH}ClAg@~Aq@BN~@_@";
        var coordinates = (decodePolyline(polyline));
        console.log(coordinates)
        return (
            <div className="map">
                <div className="google-map" style = { this.props.mapWidth }>
                <GoogleMap
                    mapContainerStyle = {{
                        width: this.props.mapWidth.width,
                        height: '100vh'
                      }}
                    center={this.props.location}
                    zoom={this.props.zoomLevel}
                >  
                <Polyline path = {coordinates}/>
                </GoogleMap>

                </div>
            </div>
                
        )
    }
}


export default Map;
