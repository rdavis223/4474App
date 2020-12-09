import React, { Component } from "react";
import './RoutesButton.css';

class RoutesButton extends Component{
    render() {
        var btn_toggle = "show"
        if (this.props.toggle){
            btn_toggle = "hide"
        }
        return (
            <button id="BusRoutesButton" 
            title = "See list of active bus routes"
            style = {{width: 160, height: 60}}
            className = {btn_toggle}
            onClick= {this.props.handleClick}>
                Bus Routes</button>
        );
      }
}
     
export default RoutesButton;
