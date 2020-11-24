import React from 'react'
import PropTypes from 'prop-types'
import './SearchBox.css'
export default class SearchBox extends React.Component {
  render() {
    return <div className="addressInput"><input id={this.props.inputID} size = "40" type="text"/> </div>;
  }
  componentDidMount() {
    var input = document.getElementById(this.props.inputID)
    // eslint-disable-next-line no-undef
    this.searchBox = new google.maps.places.SearchBox(input);
  }
ß
}