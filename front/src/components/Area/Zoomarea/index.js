import React from 'react';
import PropTypes from 'prop-types';
import {
  Map, TileLayer,
} from 'react-leaflet';


import './zoomarea.scss';

const Zoomarea = ({ latitude, longitude }) => {
  const position = [latitude, longitude];
  return (
    <>
      <Map
        id="zoomarea"
        center={position}
        zoom={17}
        zoomControl={false}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </Map>
    </>

  );
};

Zoomarea.propTypes = {
  latitude: PropTypes.string.isRequired,
  longitude: PropTypes.string.isRequired,
};

export default Zoomarea;
