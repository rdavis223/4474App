import React, { Component } from "react";
import { LoadScript, GoogleMap, Marker, Polyline, Symbol } from '@react-google-maps/api';
import decodePolyline from 'decode-google-map-polyline';
import './map.css';

class Map extends Component {
    constructor(props){
        super(props);
        this.map = null;
        this.arrMarker = props.arrMarker;
        this.desMarker = props.desMarker;
        this.startAddress = document.getElementById("StartAddress")
        this.endAddress = document.getElementById("EndAddress")
        this.inputFields = document.getElementById("InputFieldsContainer")
    }

    endUpdate() {
        const end_marker_lat = this.End_Marker.getPosition().lat();
        const end_marker_lng = this.End_Marker.getPosition().lng();
        const coords = new window.google.maps.LatLng(end_marker_lat, end_marker_lng)
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({location: coords}, (results, status) => {
          if (status === "OK") {
            document.getElementById("EndAddress").value = results[0].formatted_address
          } else {
            console.log("Geocode Unsuccessful")
          }
        });
    }

    startUpdate() {
        const start_marker_lat = this.Start_Marker.getPosition().lat();
        const start_marker_lng = this.Start_Marker.getPosition().lng();
        const coords = new window.google.maps.LatLng(start_marker_lat, start_marker_lng)
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({location: coords}, (results, status) => {
          if (status === "OK") {
            // console.log(results)
            document.getElementById("StartAddress").value = results[0].formatted_address
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
        // var red_pin = new window.google.maps.Symbol("./images/red_pin.svg")

        if (this.props.polyline != null){
            coordinates = (decodePolyline(this.props.polyline));
            renderPolyline = true;
            this.map.fitBounds(this.props.bounds);
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
                    this.End_Marker = marker;
                    window.End_Marker = marker;
                }}
                    draggable = {true}
                    onDragEnd = {() => { this.endUpdate() }}
                    label = "Destination"               
                    clickable = {true}
                    defaultClickable = {true}
                    position = {{ lat: arrLat, lng: arrLng }}
                />
                <Marker 
                onLoad = { marker => {
                    this.Start_Marker = marker;
                    window.Start_Marker = marker;
                }}
                    draggable = {true}
                    onDragEnd = {() => { this.startUpdate() }}
                    label = "Starting"
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
