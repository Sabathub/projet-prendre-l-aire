import React from 'react';
import {
  Dropdown, Dimmer, Loader,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';


const Homesearch = ({
  highways,
  arealoading,
  changeMarkersValue,
}) => {
  const areaOptions = highways.map((highway) => ({
    key: highway.id,
    text: highway.highways.name + highway.name,
    value: highway.id,
  }));

  const handleChange = (evt, data) => {
    changeMarkersValue({ newAreasValue: data.value });
    console.log(data.value);
  };

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
        onChange={handleChange}
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
  changeMarkersValue: PropTypes.func.isRequired,
};

export default Homesearch;
