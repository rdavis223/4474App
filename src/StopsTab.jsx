import React, { Component } from "react";
import Map from './map.jsx'
import { stopsJson } from './stops.js';
import { Marker } from '@react-google-maps/api';
import './StopsTab.css';
import bus_pin from './images/bus_pin.png';
var stopValues = {}
var markers = []
class StopsTab extends Component 
{
    constructor(props) {
        super(props);
        markers = [];
        stopValues = this.getStopsList();
        for (var keyVal in stopValues) {
            var lat = stopValues[keyVal][0]['stop_lat']
            var long = stopValues[keyVal][0]['stop_lon']
            markers.push(
                <Marker key = {keyVal} position={{'lat':lat,'lng':long}} title = "Display all routes that stop at this bus stop" icon = { bus_pin } onClick = {this.props.proccessStop.bind(this,stopValues[keyVal])}/>
                )
        }
        this.props.handleStopsClicked(markers);
    }
    getStopsList()
    {
        var values = {}
        for (let i = 0; i < stopsJson.length; i++) {
            var stop = stopsJson[i]
            if (values.hasOwnProperty([stop["stop_lat"],stop["stop_lon"]]))
            {
                values[[stop["stop_lat"],stop["stop_lon"]]].push(stop);
            }
            else
            {
                values[[stop["stop_lat"],stop["stop_lon"]]] = [stop];
            }
        }
        return values;
    }

    render() {
        var visability = "hide"
        if (this.props.menuVisibility) {
            visability = "show";
        }
        return (
            <div id="StopsTabContainer" className={ visability } style = {this.props.menuWidth}>
            
                <div id="StopCloseButtonContainer">
                    <button className="StopCloseButton" onClick= {this.props.closeStops}>Close</button>
                </div>
                <div id="StopTitleContainer">
                    {this.props.stopname}
                </div>
                <div id="StopContent">
                    <div id = "Stops">
                        {this.props.stopInfo}
                    </div>
                </div>
        </div> );
    }
}
export default StopsTab