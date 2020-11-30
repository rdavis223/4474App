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
const mapWidthTab = {width: "70vw", float: "right"};
class App extends Component {
  
  constructor(props) {
     super(props);
     
     this.state = {
       planRouteTabVisable: false,
       mapWidth: mapWidthFull,
       route_data: null,
       display_routes: false,
       sort_by: null,
       mapPolyline: null,
       mapBounds: null
     };
     this.toggleRouteButton = this.toggleRouteButton.bind(this);
     this.plotRoute = this.plotRoute.bind(this);
     this.displayPolyline = this.displayPolyline.bind(this);

  };


  displayPolyline(polyline, bounds){
    this.setState({
      mapPolyline: polyline,
      mapBounds: bounds
    })
  }
  buildRequestUrl(){
    var params = {}
    params['key'] = "AIzaSyD8LiaQi4w3UySiDfi_38xpGvJ2iqFv7Hk";
    params['mode'] = "transit"
    params['transit_mode'] = "bus"
    params['origin'] = document.getElementById("StartAddress").value;
    params['destination'] = document.getElementById("EndAddress").value;
    params['alternatives'] = "true";
    var min_walking = document.getElementById("min_walking");
    var min_transfers = document.getElementById("min_transfers");
    if (min_walking !== null && min_transfers !==null ){
      if (min_walking.checked){
        this.state.sort_by = "walking";
        params['transit_routing_preference'] = 'less_walking';
      } else if (min_transfers.checked){
        params['transit_routing_preference'] = 'fewer_transfers';
        this.state.sort_by = "transfers";
      }
    }
    var url = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/directions/json?";
    for (var key in params){
      var value = params[key];
      console.log(value);
      value = value.replace(/ /g, "+");
      url += key + "="+ value + "&";
    }
    return url
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
    var newMapWidth = "";
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
      <Map location={defaultVal.center} zoomLevel={defaultVal.zoom} mapWidth={ this.state.mapWidth } polyline = {this.state.mapPolyline} bounds = {this.state.mapBounds}/>
      <MenuButton handleClick={this.toggleRouteButton}/>
      <PlanYourTripTab menuVisibility= { this.state.planRouteTabVisable } handleClick = {this.toggleRouteButton} handlePlot = {this.plotRoute} displayRoutes = {this.state.display_routes} route_data={this.state.route_data} sort_by = {this.state.sort_by} handleRouteClicked = {this.displayPolyline}/>
      </div>
      
      );
  }
}
export default App;
