import React, { Component } from "react";
import './PlanYourTripTab.css'
import SearchBox from './SearchBox.jsx'
import AdditionalOptions from './AdditionalOptions.jsx'

class PlanYourTripTab extends Component {
    constructor(props) {
        super(props);
        this.switchAddy = this.switchAddy.bind(this)
        this.data = []
    }
    switchAddy(){
        var startBox = document.getElementById("StartAddress");
        var endBox = document.getElementById("EndAddress");
        var startValue = startBox.value;
        var endValue = endBox.value;

        startBox.value = endValue;
        endBox.value = startValue;

        var tempStart = {...window.last_start_loc}
        var tempEnd = {...window.last_end_loc}

        window.Start_Marker.setPosition(new window.google.maps.LatLng(tempEnd["lat"], tempEnd["lng"]));
        window.last_start_loc = tempEnd;

        window.End_Marker.setPosition(new window.google.maps.LatLng(tempStart["lat"], tempStart["lng"]));
        window.last_end_loc = tempStart

    }

    updateStart() {
        if (document.getElementById("StartAddress") != null) {
            const address = document.getElementById("StartAddress").value;
            const geocoder = new window.google.maps.Geocoder();
            geocoder.geocode({address: address}, (results, status) => {
                if (status === "OK") {
                    window.Departure_Marker.setPosition(results[0].geometry.location)
                } else {
                    console.log("Geocode Unsuccessful")
                }
            });
        }
    }

    render() {
        this.data = []
        var visability = "hide"
        if (this.props.menuVisibility) {
            visability = "show";
        }

        var items_to_render = []
        var data = this.props.route_data;
        if (data !== null){
            for (var route in data){
                var r = data[route].legs[0];
                var buses = [];
                var walking_distance = 0;
                for (var step in r.steps){
                    var d = r.steps[step];
                    if (d.travel_mode == "TRANSIT"){
                        buses.push(d.transit.line.name);
                    } else if (d.travel_mode == "WALKING"){
                        walking_distance += d.distance.value;
                    }
                }
                walking_distance = walking_distance/1000;
                var element = {
                    buses: buses,
                    distance: r.distance,
                    duration: r.duration,
                    transfers: buses.length - 1,
                    walking : walking_distance,
                    polyline: data[route].overview_polyline,
                    bounds: data[route].bounds,
                    arrival: r.arrival_time.text,
                    departure: r.departure_time.text
                }
                this.data.push(element);
            }
            if (this.props.sort_by == "walking") {
                this.data = this.data.sort((a,b) => a.walking - b.walking);
            } else if (this.props.sort_by == "transfers"){
                this.data = this.data.sort((a,b) => a.transfers - b.transfers);
            } else {
                this.data = this.data.sort((a,b) => a.distance.value - b.distance.value);
            }

            for (var index in this.data){
                var elem = this.data[index];
                items_to_render.push( <div key={index} onClick={ () => this.props.handleRouteClicked(elem.polyline, elem.bounds, index)}> 
                    <div className="RoutesOption">
                        <div className="flexContainer">
                            <div className="leftBox">
                                <b>Depart At:</b> {elem.departure}
                            </div>
                            <div className="rightBox">
                                <b>Arriving At:</b> {elem.arrival}
                            </div>
                        </div>
                        <hr /> 
                        <div className="flexContainer">
                            <div className="leftBox">
                                <b>Buses to Take:</b><br />
                                <b>Distance:</b><br />
                                <b>Duration:</b><br />
                            </div>
                            <div className="rightBox">
                                {elem.buses.toString()}<br />
                                {elem.distance.text}<br />
                                {elem.duration.text}<br />
                            </div>
                        </div>
                        <hr />
                        <div className="flexContainer">
                            <div className="leftBox">
                                <h1><b>Transfers:</b> </h1><h2>{elem.transfers}</h2>
                            </div>
                            <div className="rightBox">
                                <h1><b>Walking:</b> </h1><h2>{elem.walking.toString() + " km"}</h2>
                            </div>
                        </div>
                    </div>
                </div>   );
            }
        }   

        var min_date = new Date().toISOString()
        return (
            <div id="PlanYourTripContainer" className={ visability }>
                <div id="CloseButtonContainer">
                    <button className="CloseButton" onClick= {this.props.handleClick}>Close</button>
                </div>
                <div id="TitleContainer">
                    Plan A Trip
                </div>
                <div className="innerForm">
                    <div id="SwitchLogoContainer">
                        <div className="SwitchLogo" onClick= {this.switchAddy}></div>
                    </div>
                    <div id="InputFieldsContainer" title = "Input an address">
                        <p>Leaving From: </p>
                        <SearchBox inputID="StartAddress"/>
                        <p>Going To: </p>
                        <SearchBox inputID="EndAddress"/>
                    </div>
                </div>
                <div className="innerForm">
                    <div id="AdditionalOptionsContainer" >
                        <div id="TimeOptionsContainer" title = "Set a date and time">
                            <label><input type="radio" id="time_now" name="time_options" value="now" defaultChecked/>Leaving Now</label><br/>
                            <label><input type="radio" id="time_leaving" name="time_options" value="leaving"/>
                            Leaving At: </label>
                            <input type="datetime-local" id="leaving_at_input"
                            name="meeting-time" 
                            /><br/>
                            <label><input type="radio" id="time_arriving" name="time_options" value="arriving"/>Arriving At: </label>
                            <input type="datetime-local" id="arriving_at_input"
                            name="meeting-time" />
                            <br/>
                        </div>
                        <AdditionalOptions/>
                        <div id= "FindRoute">
                            <button onClick={this.props.handlePlot} title = "Display the best routes" className="FindRouteButton"> Find Route</button>
                        </div>
                    </div>
                </div>
                { this.props.displayRoutes ? (
                <div className="innerForm">
                    <div id="RoutesBox"> 
                        {items_to_render}
                    </div>
                </div>
                ) : (null) }
                {this.props.loading ? (
                <div className="innerFormLoader">
                    <div className="loader"></div> 
                </div>
                ) : (null)
                }

            </div>
        )
    }
}

export default PlanYourTripTab