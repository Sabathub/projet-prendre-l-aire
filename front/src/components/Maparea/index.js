import React from 'react';
import PropTypes from 'prop-types';
import {
  Map, TileLayer, Marker, Popup,
} from 'react-leaflet';


import './maparea.scss';

const Maparea = ({
  lat, lng, zoom, markerlat, markerlng,
}) => {
  const position = [lat, lng];
  const markerPosition = [markerlat, markerlng];

  return (
    <Map id="mapid" center={position} zoom={zoom}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={markerPosition}>
        <Popup>
            Première popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </Map>
  );
};

Maparea.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  zoom: PropTypes.number.isRequired,
  markerlat: PropTypes.number.isRequired,
  markerlng: PropTypes.number.isRequired,
};

export default Maparea;
