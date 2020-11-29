import React, { Component } from "react";
import { withGoogleMap, LoadScript, GoogleMap, Marker, Polyline } from '@react-google-maps/api';
import decodePolyline from 'decode-google-map-polyline'
import './map.css'


class Map extends Component {
    render(){
        //leaving this as an example of how to decode an encoded polyline from google maps api
        // var polyline = 'neuaEejkbUEGc@j@PXl@p@P\\a@f@GHyDtEgC`DoCfDzHbQp@rAbH`JdBtBrCjDn@p@dDbDfIvHfD~CrK~Jo@z@uCrDmJnL}^ld@mVjZmQrTgArAFJ';
        // var coordinates = (decodePolyline(polyline));
        // console.log(coordinates)
        return (
            <div className="map">
                <div className="google-map" style = { this.props.mapWidth }>
                <LoadScript googleMapsApiKey='AIzaSyD8LiaQi4w3UySiDfi_38xpGvJ2iqFv7Hk'>
                <GoogleMap
                    mapContainerStyle = {{
                        width: this.props.mapWidth.width,
                        height: '100vh'
                      }}
                    center={this.props.location}
                    zoom={this.props.zoomLevel}
                >
                    
                </GoogleMap>

                </LoadScript>
                </div>
            </div>
                
        )
    }
}


export default Map;
