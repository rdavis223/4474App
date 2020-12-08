import React, { Component } from "react";
import './StopsButton.css';

class StopsButton extends Component{
    render() {
        return (
            <button id="StopsButton" 
            style = {{width: 160, height: 60}}
            onClick= {this.props.handleClick}>
                Show Stops</button>
        );
      }
}
     
export default StopsButton;