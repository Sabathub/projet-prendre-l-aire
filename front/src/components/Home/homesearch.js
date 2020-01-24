import React from 'react';
import {
  Dropdown, Menu, Button, Dimmer, Loader,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';


const Homesearch = ({
  // highways,
  loading,
}) => {
  //const areaOptions = highways.map((highway) => highway.name);
  const areaOptions = [
    {
      key: 'A6',
      text: 'A6',
      value: 'A6',
    },
    {
      key: 'A10',
      text: 'A10',
      value: 'A10',
    },
    {
      key: 'A17',
      text: 'A17',
      value: 'A17',
    },
    {
      key: 'A20',
      text: 'A20',
      value: 'A20',
    },
    {
      key: 'A35',
      text: 'A35',
      value: 'A35',
    },
    {
      key: 'A43',
      text: 'A43',
      value: 'A43',
    },
  ];

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
  /* highways: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    areas: PropTypes.PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      direction: PropTypes.string.isRequired,
    }).isRequired,
  })).isRequired, */
  loading: PropTypes.bool.isRequired,
};

export default Homesearch;
