import React from 'react';
import {
  Dropdown, Dimmer, Loader,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';


const Homesearch = ({
  highways,
  loading,
}) => {
  const areaOptions = highways.map((highway) => ({
    key: highway.id,
    text: highway.name,
    value: highway.name,
  }));

  console.log(highways);

  return (
    <>
      {loading && (
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
  loading: PropTypes.bool.isRequired,
};

export default Homesearch;
