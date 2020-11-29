import React, { Component } from "react";
import './PlanYourTripTab.css'
import SearchBox from './SearchBox.jsx'
import AdditionalOptions from './AdditionalOptions.jsx'

class PlanYourTripTab extends Component {
    constructor(props) {
        super(props);
        this.switchAddy = this.switchAddy.bind(this)
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
        var visability = "hide"
        if (this.props.menuVisibility) {
            visability = "show";
        }

        var items = []
        var data = this.props.route_data;
        if (data !== null){
            for (var route in data){
                var r = data[route].legs[0];
                var buses = []
                for (var step in r.steps){
                    var d = r.steps[step];
                    if (d.travel_mode == "TRANSIT"){
                        buses.push(d.transit_details.line.name);
                    }
                }
                items.push( <div key={route}> 
                                ------------<br/>
                                Distance: {r.distance.text} <br/>
                                Duration: {r.duration.text} <br/>
                                Transfers: {buses.length - 1} <br/>
                                Buses: {buses.toString()} <br/>
                            </div>   )
                }
        }   


        return (
            <div id="PlanYourTripContainer" className={ visability }>
                <div id="CloseButtonContainer">
                    <button class="CloseButton" onClick= {this.props.handleClick}>Close</button>
                </div>
                <div id="TitleContainer">
                    Plan A Trip
                </div>
                <div className="innerForm">
                    <div id="SwitchLogoContainer">
                        <div class="SwitchLogo" onClick= {this.switchAddy}></div>
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
                            <button onClick={this.props.handlePlot} class="Buttons"> Find Route</button>
                        </div>
                    </div>
                </div>
                { this.props.displayRoutes ? (
                <div className="innerForm">
                    <div id="RoutesBox"> 
                        {items}
                    </div>
                </div>
                ) : (null) }

            </div>
        
        
        )
    }
}

export default PlanYourTripTab