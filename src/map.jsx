import React, { Component } from "react";
import { LoadScript, GoogleMap, Marker, Polyline } from '@react-google-maps/api';
import decodePolyline from 'decode-google-map-polyline';
import './map.css';
import { fitBounds } from "google-map-react";

class Map extends Component {
    constructor(props){
        super(props);
        this.map = null;
        this.Arrival_Marker = null;
        this.Departure_Marker = null;
        this.arrMarker = props.arrMarker;
        this.desMarker = props.desMarker;
        this.updateArrival = props.updateArrival;
        this.updateDeparture = props.updateDeparture;

        this.onMarkerMounted = element => {
            this.setState(prevState => ({
                markers: [...prevState.markers, element.marker]
            }))
        }
    }

    arrivalUpdate() {
        const arrival_marker_lat = this.Arrival_Marker.getPosition().lat();
        const arrival_marker_lng = this.Arrival_Marker.getPosition().lng();
        const coords = new window.google.maps.LatLng(arrival_marker_lat, arrival_marker_lng)
        // console.log("Lat: " + arrival_marker_lat + "\nLng: " + arrival_marker_lng + "\nCoords: " + coords)
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({location: coords}, (results, status) => {
          if (status === "OK") {
            document.getElementById("StartAddress").value = results[0].formatted_address
          } else {
            console.log("Geocode Unsuccessful")
          }
        });
    }

    departureUpdate() {
        const departure_marker_lat = this.Departure_Marker.getPosition().lat();
        const departure_marker_lng = this.Departure_Marker.getPosition().lng();
        const coords = new window.google.maps.LatLng(departure_marker_lat, departure_marker_lng)
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({location: coords}, (results, status) => {
          if (status === "OK") {
            // console.log(results)
            document.getElementById("EndAddress").value = results[0].formatted_address
          } else {
            console.log("Geocode Unsuccessful")
          }
        });
    }

    render(){
        //leaving this as an example of how to decode an encoded polyline from google maps api
        // var polyline = 'neuaEejkbUEGc@j@PXl@p@P\\a@f@GHyDtEgC`DoCfDzHbQp@rAbH`JdBtBrCjDn@p@dDbDfIvHfD~CrK~Jo@z@uCrDmJnL}^ld@mVjZmQrTgArAFJ';
        // var coordinates = (decodePolyline(polyline));
        // console.log(coordinates)
        var renderPolyline = false;
        var renderBusPolyline = false;
        // console.log(this.arrMarker);
        var arrLat = this.arrMarker.lat;
        var arrLng = this.arrMarker.lng;
        var desLat = this.desMarker.lat;
        var desLng = this.desMarker.lng;
        // var destinationAddress = "lat: 42.99253105656541, lng: -81.25222223247258";
        var coordinates = null;
        var buscoor = null;

        if (this.props.polyline != null){
            coordinates = (decodePolyline(this.props.polyline));
            renderPolyline = true;
            this.map.fitBounds(new window.google.maps.LatLngBounds(this.props.bounds.southwest, this.props.bounds.northeast))
        }
        if (this.props.busPoly)
        {
            renderBusPolyline = true;
            buscoor = this.props.busPoly;
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
                {
                    renderBusPolyline ? (
                        <Polyline path={buscoor} style ={{fillColor:this.props.busCol}}/>
                    ) : (null)
                }                     
                <Marker 
                onLoad = { marker => {
                    this.Arrival_Marker = marker;
                }}
                    id = 'arrival_pin'
                    draggable = {true}
                    onDragEnd = {() => { this.arrivalUpdate() }}
                    title = 'The Ceeps'
                    label = "Arrival"
                    clickable = {true}
                    defaultClickable = {true}
                    position = {{ lat: arrLat, lng: arrLng }}
                />
                <Marker 
                onLoad = { marker => {
                    this.Departure_Marker = marker;
                }}
                    id = 'destination_pin'
                    draggable = {true}
                    onDragEnd = {() => { this.departureUpdate() }}
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
