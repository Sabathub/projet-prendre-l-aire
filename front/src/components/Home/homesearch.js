import React from 'react';
import {
  Dropdown, Dimmer, Loader,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';


const Homesearch = ({
  highways,
  arealoading,
}) => {
  const areaOptions = highways.map((highway) => ({
    key: highway.id,
    text: highway.highways.name + highway.name,
    value: highway.highways.name + highway.name,
  }));

  return (
    <>
      {arealoading && (
      <Dimmer active inverted>
        <Loader inverted content="Chargement" />
      </Dimmer>
      )}
      <Dropdown
        placeholder="Selectionner une autoroute"
        fluid
        selection
        options={areaOptions}
        id="highwayslist"
      />
    </>
  );
};

Homesearch.propTypes = {
  highways: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    areas: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })).isRequired,
    highways: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  })).isRequired,
  arealoading: PropTypes.bool.isRequired,
};

export default Homesearch;
