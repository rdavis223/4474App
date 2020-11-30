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
                        buses.push(d.transit_details.line.name);
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
                    polyline: data[route].overview_polyline.points,
                    bounds: data[route].bounds
                }

                this.data.push(element)
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
                items_to_render.push( <div key={index} onClick={ () => this.props.handleRouteClicked(elem.polyline, elem.bounds)}> 
                                ------------<br/>
                                Buses: {elem.buses.toString()} <br/>
                                Distance: {elem.distance.text} <br/>
                                Duration: {elem.duration.text} <br/>
                                Transfers: {elem.transfers} <br/>
                                Walking: {elem.walking.toString() + "kms"} <br/>
                            </div>   );
            }
        }   


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
                    <div id="InputFieldsContainer">
                        <p>Leaving From: </p>
                        <SearchBox inputID="StartAddress"/>
                        <p>Going To: </p>
                        <SearchBox inputID="EndAddress"/>
                    </div>
                </div>
                <div className="innerForm">
                    <div id="AdditionalOptionsContainer">
                        <AdditionalOptions/>
                        <div id= "FindRoute">
                            <button onClick={this.props.handlePlot} className="Buttons"> Find Route</button>
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

            </div>
        
        
        )
    }
}

export default PlanYourTripTab