import React, { Component } from "react";
import './MenuButton.css';

class MenuButton extends Component{
    render() {
        var btn_toggle = "show"
        if (this.props.toggle){
            btn_toggle = "hide"
        }
        return (
          <button id="PlanYourTripButton" className={btn_toggle} title = "Find a route to your destination" onClick= {this.props.handleClick}>Plan A Trip</button>
        );
      }
}
     
export default MenuButton;