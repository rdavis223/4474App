import React from 'react'
import PropTypes from 'prop-types'
import './SearchBox.css'
export default class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.updateStart = this.updateStart.bind(this)
  }
  render() {
    return <div className="addressInput"><input id={this.props.inputID} onBlur = {this.updateStart} size = "40" type="text"/> </div>;
  }
  componentDidMount() {
    var input = document.getElementById(this.props.inputID)
    // eslint-disable-next-line no-undef
    this.searchBox = new google.maps.places.SearchBox(input);
  }
  updateStart() {
    console.log(this)
    if (document.getElementById(this.props.inputID) != null) {
        const address = document.getElementById(this.props.inputID).value;
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({address: address}, (results, status) => {
          if (status === "OK") {
            console.log(results)
            if (this.props.inputID == "StartAddress" ) {
              window.Start_Marker.setPosition(results[0].geometry.location)
            } else {
              window.End_Marker.setPosition(results[0].geometry.location)
            }
          } 
          else {
            console.log("Geocode Unsuccessful")
          }
        });
    }
  }
ß
}