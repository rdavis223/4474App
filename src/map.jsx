import React, { Component } from "react";
import { LoadScript, GoogleMap, Marker, Polyline } from '@react-google-maps/api';
import decodePolyline from 'decode-google-map-polyline';
import './map.css';

class Map extends Component {
    constructor(props){
        super(props);
        this.map = null;
    }
    render(){
        //leaving this as an example of how to decode an encoded polyline from google maps api
        // var polyline = 'neuaEejkbUEGc@j@PXl@p@P\\a@f@GHyDtEgC`DoCfDzHbQp@rAbH`JdBtBrCjDn@p@dDbDfIvHfD~CrK~Jo@z@uCrDmJnL}^ld@mVjZmQrTgArAFJ';
        // var coordinates = (decodePolyline(polyline));
        // console.log(coordinates)
        var renderPolyline = false;
        var renderBusFullPolyline = false;
        var renderBusHoverPolyline = false;
        var coordinates = null;
        var buscoor = null;
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
                </GoogleMap>
                </div>
            </div>
                
        )
    }
}


export default Map;
