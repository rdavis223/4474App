import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Map from './map.jsx'
import MenuButton from './MenuButton.jsx'
import PlanYourTripTab from './PlanYourTripTab.jsx'
// import Geocoder from "google.maps.Geocoder";

var defaultVal = {
  center: {lat: 42.99253105656541, lng: -81.25222223247258}, 
  zoom: 12
}
// CEEPS
var arrivalVal = {lat: 43.00738223906186, lng: -81.26169367032458}
// var arrivalVal = document.getElementById("StartAddress").value;
// BROUGHDALE
var destinationVal = {lat: 42.99253105656541, lng: -81.25222223247258};
const mapWidthFull = {width: "100%"};
const mapWidthTab = {width: "70vw", float: "right"};
class App extends Component {
  
  constructor(props) {
     super(props);
     
     this.state = {
       arrVal: arrivalVal,
       desVal: destinationVal,
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
     this.updateArrival = this.updateArrival.bind(this);
     this.updateDeparture = this.updateDeparture.bind(this);

  };

  updateArrival() {
    const pos = this.state.arrVal.lat;
    console.log("Updating Position..." + pos);
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({location: pos}, (results, status) => {
      if (status === "OK") {
        console.log(results)
      } else {
        console.log("Geocode Unsuccessful")
      }
    });
    
    
    // var reverseGeocodeRequest = "https://maps.googleapis.com/maps/api/geocode/json?latlng="
    //   + this.state.arrVal.lat + "," + this.state.arrVal.lng + "&key="
    // fetch(reverseGeocodeRequest)
    // .then(response => response.json()).then(data => {
    //   console.log(data);
    //   if (document.getElementById("EndAddress") != null) {
    //     document.getElementById("EndAddress").value = "test1";
    //   }
    // })
  }

  updateDeparture(newPosition) {
    destinationVal = newPosition;
    if (document.getElementById("StartAddress") != null) {
      document.getElementById("StartAddress").value = "test2";
    }
  }

  displayPolyline(polyline, bounds){
    this.setState({
      mapPolyline: polyline,
      mapBounds: bounds
    })
  }
  buildRequestUrl(){
    var params = {}
    params['key'] = "xxx";
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

  plotRoute(){
    var url = this.buildRequestUrl();
    console.log(url);
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
      <Map location={defaultVal.center} zoomLevel={defaultVal.zoom} mapWidth={ this.state.mapWidth } polyline = {this.state.mapPolyline} bounds = {this.state.mapBounds} arrMarker = {this.state.arrVal} desMarker = {this.state.desVal} updateArrival = {this.updateArrival} updateDeparture = {this.updateDeparture}/>
      <MenuButton handleClick={this.toggleRouteButton}/>
      <PlanYourTripTab menuVisibility= { this.state.planRouteTabVisable } handleClick = {this.toggleRouteButton} handlePlot = {this.plotRoute} displayRoutes = {this.state.display_routes} route_data={this.state.route_data} sort_by = {this.state.sort_by} handleRouteClicked = {this.displayPolyline}/>
      </div>
      
      );
  }
}
export default App;
