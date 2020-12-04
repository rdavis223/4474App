import React, { Component } from "react";
import { LoadScript, GoogleMap, Marker, Polyline } from '@react-google-maps/api';
import decodePolyline from 'decode-google-map-polyline';
import './map.css';
import { fitBounds } from "google-map-react";

class Map extends Component {
    constructor(props){
        super(props);
        this.map = null;
        this.arrMarker = props.arrMarker;
        this.desMarker = props.desMarker;
        this.updateArrival = props.updateArrival;
        this.updateDeparture = props.updateDeparture;
    }

    // onArrPositionChanged() {
    //     arrLat = this.getPosition().lat;
    //     arrLng = this.getPosition().lng;
    // }

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
        console.log(this.arrMarker);
        var arrLat = this.arrMarker.lat;
        var arrLng = this.arrMarker.lng;
        var desLat = this.desMarker.lat;
        var desLng = this.desMarker.lng;
        // var destinationAddress = "lat: 42.99253105656541, lng: -81.25222223247258";
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
                <Marker 
                    id = 'arrival_pin'
                    draggable = {true}
                    onDragEnd = {this.props.updateArrival(this.position)}
                    title = 'The Ceeps'
                    label = "Arrival"
                    clickable = {true}
                    defaultClickable = {true}
                    position = {{ lat: arrLat, lng: arrLng }}
                />
                <Marker 
                    id = 'destination_pin'
                    draggable = {true}
                    onDragEnd = {this.props.updateDeparture(this.position)}
                    title = 'Broughdale'
                    label = "Destination"
                    clickable = {true}
                    defaultClickable = {true}
                    position = {{ lat: desLat, lng: desLng }}
                />
                </GoogleMap>

                </div>
            </div>
                
        )
    }
}


export default Map;
