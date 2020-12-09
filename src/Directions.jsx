import React, { Component } from "react";
import './Directions.css'


class Directions extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        var visability = "hide";
        if (this.props.menuVisibility) {
            visability = "show";
        }
        var items = [];
        var data = this.props.steps;
        var hasInnerSteps = false;
        for (var step in data){
            var stepData = data[step];
            var innerItems = [];
            for (var innerStep in stepData.steps){
                var innerStepData = stepData.steps[innerStep];
                if ("instructions" in innerStepData){
                    innerItems.push(<div key = { innerStep } className = "innerDirections">
                                    <p dangerouslySetInnerHTML={ {__html : (parseInt(step) + 1).toString() + "." + (parseInt(innerStep) + 1).toString() + " : "+ innerStepData.instructions }}></p>
                                </div>)
                }
            }
            
            
            items.push(<div key = { step }>
                        { (parseInt(step) + 1).toString()} : { stepData.instructions } <br/>
                        Distance: { stepData.distance.text } <br/>
                        Duration: { stepData.duration.text } <br/>
                        {
                            stepData.travel_mode == "TRANSIT" ? (
                                <div className="innerDirections"> 
                                Headsign: {stepData.transit.headsign} <br/> 
                                Departing From : Stop: {stepData.transit.departure_stop.name}, Time: {stepData.transit.departure_time.text} <br/>
                                Arriving At: Stop: { stepData.transit.arrival_stop.name}, Time: { stepData.transit.arrival_time.text} <br/></div>
                            ) : (null)
                        }
                        
                        {innerItems}
                        <br/>    
                    </div>)
                    
        }
        return ( 
            
            <div id="DirectionsContainer" className={ visability }>
                <button onClick= {this.props.handlePageClose}> Back </button>
                { items }
            </div>
        
        )
    }
}

export default Directions