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
const mapWidthFull = {width: "100%"};
const mapWidthTab = {width: "70%", float: "right"}
class App extends Component {
  
  constructor(props) {
     super(props);
     
     this.state = {
       planRouteTabVisable: false,
       mapWidth: mapWidthFull
     };
     this.toggleRouteButton = this.toggleRouteButton.bind(this);
  };
 
  toggleRouteButton(){
    var newMapWidth = ""
    if (this.state.planRouteTabVisable){
      newMapWidth = mapWidthFull;
    } else {
      newMapWidth = mapWidthTab;
    }
    this.setState(
      {
        planRouteTabVisable: !this.state.planRouteTabVisable,
        mapWidth: newMapWidth
      }
      
    );
    console.log(this.state.planRouteTabVisable);

  }
  render() {
    return (
      <div>
      <Map location={defaultVal.center} zoomLevel={defaultVal.zoom} mapWidth={ this.state.mapWidth }/>
      <MenuButton handleClick={this.toggleRouteButton}/>
      <PlanYourTripTab menuVisibility= { this.state.planRouteTabVisable } handleClick = {this.toggleRouteButton}/>
      </div>
      
      );
  }
}
export default App;
