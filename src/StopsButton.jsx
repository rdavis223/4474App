import React, { Component } from "react";
import './StopsButton.css';

class StopsButton extends Component{
    render() {
        var btn_text = "Show Nearby Stops"
        if (this.props.toggle) {
            btn_text = "Hide Nearby Stops"
        }

        return (
            <button id="StopsButton" 
            style = {{width: 160, height: 60}}
            onClick= {this.props.handleClick}>
                { btn_text }</button>
        );
      }
}
     
export default StopsButton;