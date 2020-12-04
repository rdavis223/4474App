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
const mapWidthTab = {width: "70vw", float: "right"};
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

    var time_options = document.getElementsByName("time_options");
    for (var index in time_options){
      if (time_options[index].checked){
        if (time_options[index].value == "now"){
          break;
        } else {
          var eID = time_options[index].value + "_at_input";
          var time = new Date(document.getElementById(eID).value).getTime();
          time = (time/1000).toString()
          if (time_options[index].value == "arriving"){
            params["arrival_time"] = time;
          } else if (time_options[index].value == "leaving"){
            params["departure_time"] = time;
          }
        }
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
      <PlanYourTripTab menuVisibility= { this.state.planRouteTabVisable } handleClick = {this.toggleRouteButton} handlePlot = {this.plotRoute} displayRoutes = {this.state.display_routes} route_data={this.state.route_data} sort_by = {this.state.sort_by} handleRouteClicked = {this.displayPolyline}/>
      <BusRoutesTab menuVisibility = { this.state.busRoutesTabVisable } handleClick = {this.toggleBusRoutesButton}  handleBusRouteClicked = {this.displayBusPolyline}/>
      </div>
      
      );
  }
}
export default App;
