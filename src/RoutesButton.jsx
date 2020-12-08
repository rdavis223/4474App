import React, { Component } from "react";
import './RoutesButton.css';

class RoutesButton extends Component{
    render() {
        return (
            <button id="BusRoutesButton" 
            style = {{width: 160, height: 60}}
            onClick= {this.props.handleClick}>
                Bus Routes</button>
        );
      }
}
     
export default RoutesButton;
