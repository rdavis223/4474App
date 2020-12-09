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
                    innerItems.push(<div className = "innerDirections" key={step.toString()+"."+innerStep.toString()}>
                                    <p dangerouslySetInnerHTML={ {__html : (parseInt(step) + 1).toString() + "." + (parseInt(innerStep) + 1).toString() + ": "+ innerStepData.instructions }}></p>
                                </div>)
                }
            }
            
            
            items.push(<div key={step}>
                <div id="DirectionNumber">
                    { (parseInt(step) + 1).toString()}
                </div>
                    <div id="DirectionItems">
                        { stepData.instructions } <br/>
                        <b>Distance:</b> { stepData.distance.text } <br/>
                        <b>Duration:</b> { stepData.duration.text } <br/>
                        {
                            stepData.travel_mode == "TRANSIT" ? (
                                <div className="innerDirectionsOther"> 
                                <b>Bus Sign:</b> {stepData.transit.headsign} <br/> 
                                <b>Departing From:</b> Stop: {stepData.transit.departure_stop.name}, Time: {stepData.transit.departure_time.text} <br/>
                                <b>Arriving At:</b> Stop: { stepData.transit.arrival_stop.name}, Time: { stepData.transit.arrival_time.text} <br/></div>
                            ) : (null)
                        }
                        
                        {innerItems}
                        <br/>    
                    </div>
                </div>)
                    
        }
        return ( 
            
            <div id="DirectionsContainer" className={ visability }>
                <div id="DirBackButtonContainer">
                    <button onClick= {this.props.handlePageClose} className="DirBackButton">Back</button>
                </div>
                <div id="DirTitleContainer">
                    Directions
                </div>
                <div id="DirItemsContainer">
                    { items }
                </div>
            </div>
        
        )
    }
}

export default Directions