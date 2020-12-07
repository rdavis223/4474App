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
        var busHoverCoor = null

        if (this.props.polyline != null){
            coordinates = (decodePolyline(this.props.polyline));
            renderPolyline = true;
            this.map.fitBounds(new window.google.maps.LatLngBounds(this.props.bounds.southwest, this.props.bounds.northeast))
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
                    renderBusFullPolyline ? (
                        <Polyline path={buscoor} options={{ strokeColor:this.props.busCol}}/>
                    ) : (null)
                }
                {
                    renderBusHoverPolyline ? (
                        <Polyline path={busHoverCoor} options={{ strokeWeight: 1.5, strokeOpacity: 0.8, strokeColor:this.props.busHoverCol}}/>
                    ) : (null)
                }                      
                </GoogleMap>
                </div>
            </div>
                
        )
    }
}


export default Map;
