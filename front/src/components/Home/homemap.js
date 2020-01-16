import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'


import './home.scss';

export default class HomeMap extends Component {
  state = {
    lat: 46.1314298,
    lng: 1.5424725,
    zoom: 5,
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <Map id="mapid" center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Première popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    )
  }
}