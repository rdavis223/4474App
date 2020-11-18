import React, { Component } from "react";
import './PlanYourTripTab.css'
class PlanYourTripTab extends Component {
    
    render() {
        var visability = "hide"
        if (this.props.menuVisibility) {
            visability = "show";
        }

        return (
            <div id="PlanYourTripContainer" className={ visability }>
                <button onClick= {this.props.toggleFunction()}> Hello</button>
                <p> Some Menu ITems</p>
            </div>
        
        
        )
    }
}

export default PlanYourTripTab