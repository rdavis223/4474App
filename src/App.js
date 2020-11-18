import React from 'react'
import logo from './logo.svg';
import './App.css';
import Map from './map.jsx'
import MenuButton from './MenuButton.jsx'
import PlanYourTripTab from './PlanYourTripTab.jsx'

var defaultVal = {
  center: {lat: 40.73, lng: -73.93}, 
  zoom: 12
}

var planYourTripVisable = false;
function togglePlanYourTripVisability(){
  planYourTripVisable = !planYourTripVisable;
}

function App() {
  return (
    <div>

    <Map location={defaultVal.center} zoomLevel={defaultVal.zoom}/>
    <MenuButton toggleFunction = { togglePlanYourTripVisability }/>
    <PlanYourTripTab menuVisibility= {planYourTripVisable} toggleFunction= { togglePlanYourTripVisability }/>
    </div>
    
    );
}

export default App;
