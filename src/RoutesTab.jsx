import React, { Component } from "react";
import './RoutesTab.css'
import Map from './map.jsx'
import { routePointsJson } from './routePoints.js';
import { routesDataJson } from './routesData.js';

var csvValues = []
var coorPoints = null
var buttons = []
var busBounds
class RoutesTab extends Component 
{
    constructor(props) {
        super(props);
        csvValues = this.parseCsv();
        coorPoints = this.getRoutesList();
        buttons = []
        busBounds = this.getBounds(csvValues,coorPoints)
        for (let i = 0; i < csvValues.length; i++) {
            buttons.push(<button key = {i} id="RoutesTabButtons"
                style = {{width: "100%", height: 40, backgroundColor:('#'+ csvValues[i][1])}}
                onClick={() => this.props.handleBusRouteClicked(coorPoints[csvValues[i][2]], '#'+ csvValues[i][1], busBounds[csvValues[i][2]])}
                onMouseOver={() => this.props.handleBusRouteHover(coorPoints[csvValues[i][2]], '#'+ csvValues[i][1])}>
                {csvValues[i][0]}
            </button>)
        }
    }

    getBounds(values,points)
    {    
        var totalBounds = {};  
        for (let i = 0; i < values.length; i++) {          
            var bounds = new window.google.maps.LatLngBounds();
            var subset = points[values[i][2]]
            for (var x=0;x<subset.length;x++)
            {
                bounds.extend(subset[x]);
            }
            totalBounds[values[i][2]] = bounds;
        }
        return totalBounds;
    }
    getRoutesList()
    {
        var values = {}
        for (let i = 0; i < routePointsJson.length; i++) {
            if (values.hasOwnProperty(routePointsJson[i]['route_id']))
            {
                values[routePointsJson[i]['route_id']].push({lat: parseFloat(routePointsJson[i]['shape_pt_lat']), lng: parseFloat(routePointsJson[i]['shape_pt_lon'])})
            }
            else
            {
                values[routePointsJson[i]['route_id']] = [{lat: parseFloat(routePointsJson[i]['shape_pt_lat']), lng: parseFloat(routePointsJson[i]['shape_pt_lon'])}]
            }
        }
        return values
    }

    parseCsv()
    {
      var info = [];
      for(var i = 0; i < routesDataJson.length; i++) {
        var obj = routesDataJson[i];
        info.push([obj['route_long_name'], obj['route_color'],obj['route_id']]);
      }
      return info;
    }

    render() {
        var visability = "hide"
        if (this.props.menuVisibility) {
            visability = "show";
        }
        return (
            <div id="RoutesTabContainer" className={ visability }>
                <div id="RoutesCloseButtonContainer">
                     <button className="RoutesCloseButton" onClick= {this.props.handleClick}>Close</button>
                </div>
                <div id="RoutesTitleContainer">
                    Current Routes
                </div>
                <div id = "RoutesTabButtonsContainer">
                    {buttons}
                </div>
            </div>     
        )
    }
}
export default RoutesTab