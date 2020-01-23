import React from 'react';
import { Dropdown, Menu, Icon, Button } from 'semantic-ui-react';

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

const Homesearch = () => (
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

);

export default Homesearch;
