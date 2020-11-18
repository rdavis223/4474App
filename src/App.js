import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Map from './map.jsx'
import MenuButton from './MenuButton.jsx'
import PlanYourTripTab from './PlanYourTripTab.jsx'

var defaultVal = {
  center: {lat: 40.73, lng: -73.93}, 
  zoom: 12
}

class App extends Component {
  
  constructor(props) {
     super(props);
     
     this.state = {
       planRouteTabVisable: false
     };
     this.handleRouteButton = this.handleRouteButton.bind(this);
     this.toggleRouteButton = this.toggleRouteButton.bind(this);
  };

  handleRouteButton( e ){
    this.toggleRouteButton()
    e.stopPropagation();
  }

  toggleRouteButton(){
    this.setState(
      {
        planRouteTabVisable: !this.state.planRouteTabVisable
      }
      
    );
    console.log(this.state.planRouteTabVisable);

  }
  render() {
    return (
      <div>
      <Map location={defaultVal.center} zoomLevel={defaultVal.zoom}/>
      <MenuButton handleClick={this.handleRouteButton}/>
      <PlanYourTripTab menuVisibility= { this.state.planRouteTabVisable }/>
      </div>
      
      );
  }
}
export default App;
