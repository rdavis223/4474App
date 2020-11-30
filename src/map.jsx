import React, { Component } from "react";
import { LoadScript, GoogleMap, Marker, Polyline } from '@react-google-maps/api';
import decodePolyline from 'decode-google-map-polyline';
import './map.css';
import { fitBounds } from "google-map-react";

class Map extends Component {
    constructor(props){
        super(props);
        this.map = null;
    }

    // componentDidMount(){
    //     var test_bounds =  {
    //         ne: { lat: 52.6754542, lng: 13.7611175 },
    //         sw: { lat: 52.33962959999999, lng: 13.0891554 },
    //         }
    //     console.log(this.map);
    //     const bounds = new window.google.maps.LatLngBounds();
    //     this.map.fitBounds(bounds);    
    // }
    render(){
        //leaving this as an example of how to decode an encoded polyline from google maps api
        var renderPolyline = false;
        var coordinates = null;
        if (this.props.polyline != null){
            coordinates = (decodePolyline(this.props.polyline));
            renderPolyline = true;
            this.map.fitBounds(new window.google.maps.LatLngBounds(this.props.bounds.southwest, this.props.bounds.northeast))
        }

        return (
            <div className="map">
                <div className="google-map" style = { this.props.mapWidth }>
                <GoogleMap
                    onLoad={map => { 
                        this.map = map;
                    }}
                    mapContainerStyle = {{
                        width: this.props.mapWidth.width,
                        height: '100vh'
                      }}
                    center={this.props.location}
                    zoom={this.props.zoomLevel}>
                {
                    renderPolyline ? (
                        <Polyline path={coordinates}/>
                    ) : (null)
                }

                </GoogleMap>

                </div>
            </div>
                
        )
    }
}


export default Map;
