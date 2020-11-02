import React from 'react'
import logo from './logo.svg';
import './App.css';
import Map from './map.jsx'
var defaultVal = {
  center: {lat: 40.73, lng: -73.93}, 
  zoom: 12
}
function App() {
  return (
    <Map location={defaultVal.center} zoomLevel={defaultVal.zoom}/>
  );
}

export default App;
