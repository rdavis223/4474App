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
import StopsTab from './StopsTab.jsx'
import StopsButton from './StopsButton'

var defaultVal = {
  center: {lat: 42.962896, lng: -81.197274}, 
  zoom: 12
}

const mapWidthFull = {width: "100%", height: "100vh"};
const mapWidthPlanRouteTab = {width: "70vw", marginLeft: "30vw"};
const mapWidthBusRoutesTab = {width: "86vw", marginRight: "14vw"}
const mapWidthBothTabs = {width: "56vw", marginLeft: "30vw"}

const mapHeightFull = {height: "100%"}
const mapHeightStopsTabs = {height: "75vh", marginBottom: "0vw"}
class App extends Component {
  
  constructor(props) {
     super(props);
     
     this.state = {
       planRouteTabVisable: false,
       busRoutesTabVisable: false,
       stopsTabVisible: false,
       mapWidth: mapWidthFull,
       route_data: null,
       display_routes: false,
       sort_by: null,
       mapPolyline: null,
       mapBounds: null,
       busPolyline: null,
       busColour: '#00ffff',
       directionsVisable: false,
       stopsData:null,
       renderStops:false,
       stopname:"",
       stopInfo:null,
       stopZoom:"Marker",
       busHoverPoly: null,
       busHoverColour: '#00ffff',
       lastPressed:null,
       busBounds:null,
       mapDrawn:"NotDrawn"
     };
     this.toggleRouteButton = this.toggleRouteButton.bind(this);
     this.toggleBusRoutesButton = this.toggleBusRoutesButton.bind(this);
     this.displayPolyline = this.displayPolyline.bind(this);
     this.displayBusPolyline = this.displayBusPolyline.bind(this);
     this.displayBusHoverPolyline = this.displayBusHoverPolyline.bind(this);
     this.plotRoute = this.plotRoute.bind(this);
     this.closeDirectionsPage = this.closeDirectionsPage.bind(this);
     this.displayStops = this.displayStops.bind(this);
     this.activateStopsTab = this.activateStopsTab.bind(this);
     this.closeStopsTab = this.closeStopsTab.bind(this);
     this.toggleBusRoutesButton = this.toggleBusRoutesButton.bind(this);
     this.stopsVisible = this.stopsVisible.bind(this);
     this.proccessStop = this.proccessStop.bind(this);
    };

  displayPolyline(polyline, bounds, index){
    this.setState({
      mapPolyline: polyline,
      mapBounds: bounds,
      directionsVisable: true,
      planRouteTabVisable: false,
      directionsIndex: index,
      mapDrawn: 'Drawn',
      stopZoom:"Marker",
      lastPressed: 'Hover'
    })
  }

  closeDirectionsPage(){
    this.setState({
      directionsVisable: false,
      planRouteTabVisable: true,
      mapDrawn: 'NotDrawn'
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
          var dateValue = document.getElementById(eID).value
          if (dateValue == "" || dateValue  == null){
            window.alert("The date field is blank, please enter a date");
            this.setState({
              loading: false
            });
            return
          }
          var today = new Date();
          var time = new Date(dateValue)
          if (time < today){
            window.alert("The date specfied is in the past, please enter a valid date in the future instead. ")
            this.setState({
              loading: false
            });
            return
          }
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

  displayBusPolyline(polyline, bColour, bounds){
    this.setState({
      busPolyline: polyline,
      busColour: bColour,
      busBounds: bounds,
      lastPressed: 'Full',
      stopZoom:"Marker",
      mapDrawn: 'NotDrawn'
    })
  }
  displayBusHoverPolyline(polyline, bColour){
    this.setState({
      busHoverPolyline: polyline,
      busHoverColour: bColour,
      lastPressed: 'Hover'
    })
  }

  resizeTabs(){
    var currentHeight = 100;
    var currentWidth = 100;
    var s = {};
    if (this.state.planRouteTabVisable){
      currentWidth = currentWidth - 30;
      s["marginLeft"] = "30vw";
    } 
    if (this.state.stopsTabVisible) {
      currentHeight = currentHeight - 25
    } 
    if (this.state.busRoutesTabVisable){
      currentWidth = currentWidth - 14;
      if (!this.state.planRouteTabVisable){
        s["marginRight"] = "14vw";
      }
    } 
    s["width"] = currentWidth.toString() + "vw";
    s["height"] = currentHeight.toString() + "vh";
    return s
  }

  toggleRouteButton(){
    var newMapWidth = "";
    this.state.planRouteTabVisable = !this.state.planRouteTabVisable;
    if (!this.state.planRouteTabVisable){
      this.state.mapPolyline = null;
    }
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
      this.displayBusPolyline([], "00ffff", null);
      this.displayBusHoverPolyline([], "00ffff");
    }
    newMapWidth = this.resizeTabs();
    this.setState(
      {
        mapWidth: newMapWidth
      }
      
    );
    console.log(this.state.busRoutesTabVisable);
  }

  activateStopsTab()
  {
    this.state.stopsTabVisible = true;
    var newMap = this.resizeTabs();
    this.setState(
      {
        mapWidth: newMap,
        stopZoom:"Marker"
      }  
    );
  }

  closeStopsTab()
  {
    this.state.stopsTabVisible = false;
    var newMap = this.resizeTabs()
    this.setState(
      {
        mapWidth: newMap,
        stopZoom:"Marker"
      }  
    ); 
  }
  displayStops(data)
  {
    this.setState({
      stopsData:data
    })
  }

  stopsVisible()
  {
    if (this.state.renderStops){
      this.setState({
      renderStops:false,
      stopsTabVisible:false,
      stopZoom:"Marker",
      lastPressed: 'Hover',
      mapDrawn: 'NotDrawn'
    })
    this.closeStopsTab()
    }
    else
    {    
      this.setState({
      renderStops:true,
      stopZoom:"Zoom",
      lastPressed: 'Hover',
      mapDrawn: 'NotDrawn'
    })
    }
  }

  proccessStop(values)
  {
      var stopinfo = [];
      for (var entry in values)
      {
          var stopName = values[entry]['stop_name'];
          stopinfo.push(<div key = {values[entry]['route_id']} className={"block"} style = {{width: 200, height: 40, backgroundColor:('#'+ values[entry]['route_color'])}}>
             {values[entry]['route_id']}
          </div>
          )
      }
      this.setState({
        stopname:stopName,
        stopInfo:stopinfo
      })
      this.activateStopsTab();
  }

  render() {
    return (
      <div>
      <Map location={defaultVal.center} zoomLevel={defaultVal.zoom} mapWidth={ this.state.mapWidth } polyline = {this.state.mapPolyline} bounds = {this.state.mapBounds} busPoly = {this.state.busPolyline} busCol = {this.state.busColour} busHoverPoly = {this.state.busHoverPolyline} busHoverCol={this.state.busHoverColour} buttonType = {this.state.lastPressed} busRouteBounds = {this.state.busBounds} sData = {this.state.stopsData} renderStops = {this.state.renderStops} stopZoom = {this.state.stopZoom} mapDrawn = {this.state.mapDrawn}/>
      <MenuButton toggle={this.state.planRouteTabVisable} handleClick={this.toggleRouteButton}/>
      <RoutesButton toggle={this.state.busRoutesTabVisable} handleClick={this.toggleBusRoutesButton}/>
      <StopsButton toggle={this.state.renderStops} handleClick={this.stopsVisible}/>
      <StopsTab proccessStop = {this.proccessStop} stopname = {this.state.stopname} stopInfo = {this.state.stopInfo} menuVisibility = { this.state.stopsTabVisible }  menuWidth = {this.state.mapWidth} handleClick = {this.activateStopsTab} closeStops = {this.closeStopsTab} handleStopsClicked = {this.displayStops}/>
      <PlanYourTripTab menuVisibility= { this.state.planRouteTabVisable } handleClick = {this.toggleRouteButton} handlePlot = {this.plotRoute} displayRoutes = {this.state.display_routes} route_data={this.state.route_data} sort_by = {this.state.sort_by} handleRouteClicked = {this.displayPolyline}/>
      <BusRoutesTab menuVisibility = { this.state.busRoutesTabVisable } handleClick = {this.toggleBusRoutesButton}  handleBusRouteClicked = {this.displayBusPolyline} handleBusRouteHover = {this.displayBusHoverPolyline}/>
      { this.state.directionsVisable ?
      (<Directions menuVisibility = { this.state.directionsVisable } steps = {this.state.route_data[this.state.directionsIndex].legs[0].steps} handlePageClose = {this.closeDirectionsPage}/>) : (null) }
      
      </div>
      
      );
  }
}
export default App;
