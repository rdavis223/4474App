import React, { Component } from "react";
import './StopsButton.css';

class StopsButton extends Component{
    render() {
        return (
            <button id="StopsButton" 
            style = {{width: 160, height: 30}}
            onClick= {this.props.handleClick}>
                Stops</button>
        );
      }
}
     
export default StopsButton;