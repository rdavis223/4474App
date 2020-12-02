import React, { Component } from "react";
import './RoutesButton.css';

class MenuButton extends Component{
    render() {
        return (
            <button id="BusRoutesButton" 
            style = {{width: 160, height: 30}}
            onClick= {this.props.handleClick}>
                Bus Routes</button>
        );
      }
}
     
export default MenuButton;
