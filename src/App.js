import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Map from './map.jsx'
import MenuButton from './MenuButton.jsx'
import RoutesButton from './RoutesButton.jsx'
import PlanYourTripTab from './PlanYourTripTab.jsx'
import BusRoutesTab from './RoutesTab.jsx'

var defaultVal = {
  center: {lat: 42.962896, lng: -81.197274}, 
  zoom: 12
}

const mapWidthFull = {width: "100%"};
const mapWidthTab = {width: "70vw", float: "right"}
const mapWidthRoutesTab = {width: "86vw", float: "left"}

class App extends Component {
  
  constructor(props) {
     super(props);
     
     this.state = {
       planRouteTabVisable: false,
       busRoutesTabVisable: false,
       mapWidth: mapWidthFull,
       route_data: null,
       display_routes: false,
       sort_by: null,
       mapPolyline: null,
       mapBounds: null,
       busPolyline: null,
       busColour: '#00ffff'
     };
     this.toggleRouteButton = this.toggleRouteButton.bind(this);
     this.toggleBusRoutesButton = this.toggleBusRoutesButton.bind(this);
     this.displayPolyline = this.displayPolyline.bind(this);
     this.displayBusPolyline = this.displayBusPolyline.bind(this);
    };

  displayPolyline(polyline, bounds){
    this.setState({
      mapPolyline: polyline,
      mapBounds: bounds
    })
  }

  displayBusPolyline(polyline, bColour){
    this.setState({
      busPolyline: polyline,
      busColour: bColour
    })
  }
  plotRoute(){
    var url = this.buildRequestUrl();

    fetch(url)
    .then(response => response.json()).then(data => {
      console.log(data);
      this.setState({
        route_data: data.routes,
        display_routes: true
      })
    })
  }

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

  toggleBusRoutesButton(){
    var newMapWidth = ""
    if (this.state.busRoutesTabVisable){
      newMapWidth = mapWidthFull;
      this.displayBusPolyline([], "00ffff")
    } else {
      newMapWidth = mapWidthRoutesTab;
    }
    this.setState(
      {
        busRoutesTabVisable: !this.state.busRoutesTabVisable,
        mapWidth: newMapWidth
      }
      
    );
    console.log(this.state.busRoutesTabVisable);
  }

  render() {
    return (
      <div>
      <Map location={defaultVal.center} zoomLevel={defaultVal.zoom} mapWidth={ this.state.mapWidth } polyline = {this.state.mapPolyline} bounds = {this.state.mapBounds} busPoly = {this.state.busPolyline} busCol = {this.state.busColour}/>
      <MenuButton handleClick={this.toggleRouteButton}/>
      <RoutesButton handleClick={this.toggleBusRoutesButton}/>
      <PlanYourTripTab menuVisibility= { this.state.planRouteTabVisable } handleClick = {this.toggleRouteButton}/>
      <BusRoutesTab menuVisibility = { this.state.busRoutesTabVisable } handleClick = {this.toggleBusRoutesButton}  handleBusRouteClicked = {this.displayBusPolyline}/>
      </div>
      
      );
  }
}
export default App;
