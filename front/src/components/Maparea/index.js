import React from 'react';
import PropTypes from 'prop-types';
import {
  Map, TileLayer, Marker, Popup,
} from 'react-leaflet';
import {
  Dimmer, Loader, Button, Header,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import slugify from 'slugify';
import LocateControl from './locatecontrol';


import './maparea.scss';

const Maparea = ({
  lat, lng, zoom, areas, loading,
}) => {
  const position = [lat, lng];

  const locateOptions = {
    position: 'topright',
    strings: {
      title: 'Montre moi les aires d\'autoroute à proximité de ma postition',
    },
  };

  return (
    <>
      {loading && (
      <Dimmer active inverted>
        <Loader inverted content="Chargement" />
      </Dimmer>
      )}
      <Map id="mapid" center={position} zoom={zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {!loading && areas.map((area) => (
          <Marker position={[area.latitude, area.longitude]} key={area.id}>
            <Popup>
              <p className="popup-area-name">{area.name}</p>
              <p className="direction">{area.destinations.highways.name} > {area.destinations.name}</p>

              <Button as={Link} to={`/areas/${slugify(area.name)}`} size="mini" color="teal">Fiche détaillée</Button>
            </Popup>
          </Marker>
        ))}
        <LocateControl options={locateOptions} startDirectly />
      </Map>
    </>

  );
};

Maparea.propTypes = {
  lat: PropTypes.string.isRequired,
  lng: PropTypes.string.isRequired,
  zoom: PropTypes.number.isRequired,
  areas: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    zipcode: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    kilometers: PropTypes.string.isRequired,
    latitude: PropTypes.string.isRequired,
    longitude: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      rate: PropTypes.number.isRequired,
    })).isRequired,
    gasstation: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    gasprices: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      price: PropTypes.string.isRequired,
      gastype: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired,
    })).isRequired,
    restaurants: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })).isRequired,
    services: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })).isRequired,
    destinations: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      highways: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired,
    })).isRequired,
  })).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Maparea;
