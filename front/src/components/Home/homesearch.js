import React from 'react';
import {
  Dropdown, Menu, Button, Dimmer, Loader,
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

  return (
    <>
      {loading && (
      <Dimmer active inverted>
        <Loader inverted content="Chargement" />
      </Dimmer>
      )}
      <Menu secondary>
        <Dropdown
          placeholder="Selectionner une autoroute"
          fluid
          selection
          options={areaOptions}
          id="highwayslist"
        />
        <Menu.Menu position="right">
          <Button id="crosshair" icon="crosshairs" color="teal" title="Trouver les aires à proximité de ma position" />
        </Menu.Menu>
      </Menu>
    </>
  );
};

Homesearch.propTypes = {
  highways: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    /* areas: PropTypes.PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      direction: PropTypes.string.isRequired,
    }).isRequired, */
  })).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Homesearch;
