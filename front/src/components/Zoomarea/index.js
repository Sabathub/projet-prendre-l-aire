import React from 'react';
import PropTypes from 'prop-types';
import {
  Map, TileLayer,
} from 'react-leaflet';


import './zoomarea.scss';

const Zoomarea = () => {
  const position = [48.594189, 2.442461];

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

/* Zoomarea.propTypes = {
  arealat: PropTypes.string.isRequired,
  arealng: PropTypes.string.isRequired,
  areazoom: PropTypes.number.isRequired,
  areas: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    latitude: PropTypes.string.isRequired,
    longitude: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    highway: PropTypes.PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  })).isRequired,
  loading: PropTypes.bool.isRequired,
}; */

export default Zoomarea;
