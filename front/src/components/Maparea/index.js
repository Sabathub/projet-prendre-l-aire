import React from 'react';
import PropTypes from 'prop-types';
import {
  Map, TileLayer, Marker, Popup,
} from 'react-leaflet';
import {
  Dimmer, Loader, Button,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import slugify from 'slugify';
import LocateControl from './locatecontrol';


import './maparea.scss';

const Maparea = ({
  lat, lng, zoom, areas, arealoading, newAreasValue,
}) => {
  const position = [lat, lng];

  const locateOptions = {
    position: 'topright',
    strings: {
      title: 'Montre moi les aires d\'autoroute à proximité de ma postition',
    },
  };

  console.log(arealoading);

  let newAreas = [];

  if (newAreasValue && areas) {
    newAreas = areas.filter((area) => (
      area.destinations.highways.id === newAreasValue.highwayId
    ));
  }

  return (
    <>
      {arealoading && (
      <Dimmer active inverted>
        <Loader inverted content="Chargement" />
      </Dimmer>
      )}
      <Map id="mapid" center={position} zoom={zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {!arealoading && !newAreasValue && areas.map((area) => (
          <Marker position={[area.latitude, area.longitude]} key={area.id}>
            <Popup>
              <p className="popup-area-name">{area.name}</p>

              <Button as={Link} to={`/areas/${slugify(area.name)}`} size="mini" color="teal">Fiche détaillée</Button>
            </Popup>
          </Marker>
        ))}
        {!arealoading && newAreasValue && newAreas.map((area) => (
          <Marker position={[area.latitude, area.longitude]} key={newAreasValue.highwayId}>
            <Popup>
              <p className="popup-area-name">{area.name}</p>

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
    zipCode: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    kilometers: PropTypes.string.isRequired,
    latitude: PropTypes.string.isRequired,
    longitude: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      rate: PropTypes.number.isRequired,
    })).isRequired,
    /* gasStation: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired, */
    gasPrices: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      price: PropTypes.string.isRequired,
      gasType: PropTypes.shape({
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
  arealoading: PropTypes.bool.isRequired,
  newAreasValue: PropTypes.shape({
    highwayId: PropTypes.number.isRequired,
  }).isRequired,
};

export default Maparea;
