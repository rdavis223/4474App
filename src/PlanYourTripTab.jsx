import React, { Component } from "react";
import './PlanYourTripTab.css'
import SearchBox from './SearchBox.jsx'
import SwitchLogo from './images/switch_icon.png'
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
        return (
            <div id="PlanYourTripContainer" className={ visability }>
                <button onClick= {this.props.handleClick}>Close</button>
                <div className="innerForm">
                    <div id="SwitchLogoContainer">
                        <img onClick= {this.switchAddy} id="SwitchLogo"src={SwitchLogo}/>
                    </div>
                    <div id="InputFieldsContainer">
                        <p>Leaving From: </p>
                        <SearchBox inputID="StartAddress"/>
                        <p>Going To: </p>
                        <SearchBox inputID="EndAddress"/>
                    </div>
                    <div id="AdditionalOptionsContainer">
                    <AdditionalOptions/>
                    <div id= "FindRoute">
                    <button> Find Route</button>
                    </div>
                    </div>
                </div>
            </div>
        
        
        )
    }
}

export default PlanYourTripTab