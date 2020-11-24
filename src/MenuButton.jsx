import React, { Component } from "react";
import './MenuButton.css';

class MenuButton extends Component{
    render() {
        return (
          <button id="PlanYourTripButton" onClick= {this.props.handleClick}>Plan A Trip</button>
        );
      }
}
     
export default MenuButton;