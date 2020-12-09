import React, { Component } from "react";
import { LoadScript, GoogleMap, Marker, Polyline, Symbol } from '@react-google-maps/api';
import decodePolyline from 'decode-google-map-polyline';
import './map.css';
import finish_pin from './images/finish_pin.png';
import start_pin from './images/start_pin.png';

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
        var renderBusFullPolyline = false;
        var renderBusHoverPolyline = false;
        var markers = [];
        var busHoverCoor = null

        if (this.props.polyline != null){
            coordinates = (decodePolyline(this.props.polyline));
            renderPolyline = true;
            if (this.props.mapDrawn == 'Drawn')
            {
                this.map.fitBounds(this.props.bounds)
            }
        }
        if (this.props.busPoly)
        {
            renderBusFullPolyline = true;
            buscoor = this.props.busPoly;
            if (this.props.buttonType == 'Full')
            {
                this.map.fitBounds(this.props.busRouteBounds);
            }
        }
        if (this.props.busHoverPoly)
        {
            renderBusHoverPolyline = true;
            busHoverCoor = this.props.busHoverPoly;
        }
        if (this.props.renderStops)
        {
            if (this.props.stopZoom == "Zoom")
            {
                var b = new window.google.maps.LatLngBounds();
                var lat = this.map.center.lat();
                var lng = this.map.center.lng();
                b.extend({"lat": lat+0.003, "lng": lng +0.003})
                b.extend({"lat": lat-0.003, "lng": lng -0.003})
                this.map.fitBounds(b);
            }
            markers = this.props.sData;
        }

        return (
            <div className="map">
                <div className="google-map" style = { this.props.mapWidth }>
                <GoogleMap
                    onLoad={map => { 
                        this.map = map;
                    }}
                    options={{fullscreenControl: false}}
                    mapContainerStyle = {{
                        width: this.props.mapWidth.width,
                        height: this.props.mapWidth.height
                        }}
                    center={this.props.location}
                    zoom={this.props.zoomLevel}>
                {
                    renderPolyline ? (
                        <Polyline path={coordinates}/>
                    ) : (null)
                } 
                {
                    renderBusFullPolyline ? (
                        <Polyline path={buscoor} options={{ strokeColor:this.props.busCol}}/>
                    ) : (null)
                }
                {
                    renderBusHoverPolyline ? (
                        <Polyline path={busHoverCoor} options={{ strokeWeight: 1.5, strokeOpacity: 0.8, strokeColor:this.props.busHoverCol}}/>
                    ) : (null)
                }
                {
                    this.props.renderStops?(markers):(null)           
                }                     
                <Marker 
                onLoad = { marker => {
                    this.End_Marker = marker;
                    window.End_Marker = marker;
                }}
                    icon = { finish_pin }
                    draggable = {true}
                    onDragEnd = {() => { this.endUpdate() }}             
                    clickable = {true}
                    defaultClickable = {true}
                    position = {{ lat: arrLat, lng: arrLng }}
                />
                <Marker 
                onLoad = { marker => {
                    this.Start_Marker = marker;
                    window.Start_Marker = marker;
                }}
                    icon = {start_pin}
                    draggable = {true}
                    onDragEnd = {() => { this.startUpdate() }}
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
