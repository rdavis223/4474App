import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Map from './map.jsx'
import MenuButton from './MenuButton.jsx'
import RoutesButton from './RoutesButton.jsx'
import PlanYourTripTab from './PlanYourTripTab.jsx'
import Directions from './Directions.jsx'
import BusRoutesTab from './RoutesTab.jsx'
import { FusionTablesLayer } from "react-google-maps";

var defaultVal = {
  center: {lat: 42.962896, lng: -81.197274}, 
  zoom: 12
}

const mapWidthFull = {width: "100%"};
const mapWidthPlanRouteTab = {width: "70vw", marginLeft: "30vw"};
const mapWidthBusRoutesTab = {width: "86vw", marginRight: "14vw"}
const mapWidthBothTabs = {width: "56vw", marginLeft: "30vw"}
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
       busColour: '#00ffff',
       directionsVisable: false,
       loading: false
     };
     this.toggleRouteButton = this.toggleRouteButton.bind(this);
     this.toggleBusRoutesButton = this.toggleBusRoutesButton.bind(this);
     this.displayPolyline = this.displayPolyline.bind(this);
     this.displayBusPolyline = this.displayBusPolyline.bind(this);
     this.plotRoute = this.plotRoute.bind(this);
     this.closeDirectionsPage = this.closeDirectionsPage.bind(this);
    };

  displayPolyline(polyline, bounds, index){
    console.log(polyline);
    this.setState({
      mapPolyline: polyline,
      mapBounds: bounds,
      directionsVisable: true,
      planRouteTabVisable: false,
      directionsIndex: index
    })
  }

  closeDirectionsPage(){
    this.setState({
      directionsVisable: false,
      planRouteTabVisable: true,
    })
  }

  plotRoute(){
    if (document.getElementById("StartAddress").value == "" || document.getElementById("EndAddress").value == ""){
      window.alert("Please Enter Both Origin and Destination to Plan Your Trip!");
      return
    }

    this.setState({
      display_routes: false,
      loading: true
    });
    var params = {}
    params['travelMode'] = "TRANSIT"
    params['transitOptions'] = {
      modes: ['BUS']
    }
    params['origin'] = document.getElementById("StartAddress").value;
    params['destination'] = document.getElementById("EndAddress").value;
    params['provideRouteAlternatives'] = true;
    var min_walking = document.getElementById("min_walking");
    var min_transfers = document.getElementById("min_transfers");
    if (min_walking !== null && min_transfers !==null ){
      if (min_walking.checked){
        this.state.sort_by = "walking";
        params['transitOptions']['routingPreference'] = 'less_walking';
      } else if (min_transfers.checked){
        params['transitOptions']['routingPreference'] = 'fewer_transfers';
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
          var time = new Date(document.getElementById(eID).value)
          if (time_options[index].value == "arriving"){
            params['transitOptions']["arrivalTime"] = time;
          } else if (time_options[index].value == "leaving"){
            params['transitOptions']["departureTime"] = time;
          }
        }
    }
    }
    var dir = new window.google.maps.DirectionsService()
    dir.route(params, (response, status) => {
      console.log(response);
      if (status === "OK") {
        this.setState({
              route_data: response.routes,
              display_routes: true,
              loading: false
            });
      } else {
        this.setState({
          route_data: "No Results",
          display_routes: true,
          loading: false
        });
      }
    }
  );
  }

  displayBusPolyline(polyline, bColour){
    this.setState({
      busPolyline: polyline,
      busColour: bColour,
    })
  }


  resizeTabs(){
    if (this.state.planRouteTabVisable && this.state.busRoutesTabVisable){
      return mapWidthBothTabs;
    } else if (this.state.planRouteTabVisable) {
      return mapWidthPlanRouteTab;
    } else if (this.state.busRoutesTabVisable){
      return mapWidthBusRoutesTab;
    } else {
      return mapWidthFull;
    }
  }

  toggleRouteButton(){
    var newMapWidth = "";
    this.state.planRouteTabVisable = !this.state.planRouteTabVisable;

    newMapWidth = this.resizeTabs();
    this.setState(
      {
        mapWidth: newMapWidth
      }
      
    );
    console.log(this.state.planRouteTabVisable);
  }

  toggleBusRoutesButton(){
    var newMapWidth = "";
    this.state.busRoutesTabVisable = !this.state.busRoutesTabVisable;
    if (!this.state.busRoutesTabVisable){
      this.displayBusPolyline([], "00ffff");
    }
    newMapWidth = this.resizeTabs();
    this.setState(
      {
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
      <PlanYourTripTab menuVisibility= { this.state.planRouteTabVisable } handleClick = {this.toggleRouteButton} handlePlot = {this.plotRoute} displayRoutes = {this.state.display_routes} route_data={this.state.route_data} sort_by = {this.state.sort_by} handleRouteClicked = {this.displayPolyline} loading = {this.state.loading}/>
      <BusRoutesTab menuVisibility = { this.state.busRoutesTabVisable } handleClick = {this.toggleBusRoutesButton}  handleBusRouteClicked = {this.displayBusPolyline}/>
      { this.state.directionsVisable ?
      (<Directions menuVisibility = { this.state.directionsVisable } steps = {this.state.route_data[this.state.directionsIndex].legs[0].steps} handlePageClose = {this.closeDirectionsPage}/>) : null }
      </div>
      
      );
  }
}
export default App;
