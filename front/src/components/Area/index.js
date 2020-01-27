import React from 'react';
import {
  Grid, Image, Reveal, Header, Segment, Rating,
} from 'semantic-ui-react';
import {
  FaGasPump, FaShoppingCart, FaWifi, FaUtensils, FaAccessibleIcon, FaBaby, FaTableTennis,
} from 'react-icons/fa';
import Zoomarea from 'src/containers/Zoomarea';

import './area.scss';

const square = { width: 3, height: 1 };

const Area = () => (
  <>
    <Segment id="areaname" compact>
      <Header as="h2">Nom_de_l_aire</Header>
    </Segment>

    <Grid centered stackable>
      <Grid.Row>
        <Grid.Column width={6}>
          <Zoomarea />
        </Grid.Column>
        <Grid.Column width={4} textAlign="center" verticalAlign="middle">
          <Segment basic>
            <Rating icon="star" defaultRating={3} maxRating={5} />
          </Segment>
          <Segment>
            <p id="highway">Autoroute A10</p>
            <p id="direction">Direction : Lyon</p>
            <p id="km">243 km</p>
          </Segment>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={5}>
          <Segment className="services" textAlign="center">
            <Header as="h3">Station service</Header>
          </Segment>
          <Segment.Group>
            <Segment>
              <Image centered src="https://upload.wikimedia.org/wikipedia/fr/d/dd/TOTAL_SA_logo.svg" size="small" />
            </Segment>
            <Segment.Group horizontal>
              <Segment textAlign="center" className="gasname">Gazole</Segment>
              <Segment textAlign="center" className="gasprice">1,644 €</Segment>
            </Segment.Group>
            <Segment.Group horizontal>
              <Segment textAlign="center" className="gasname">E85</Segment>
              <Segment textAlign="center" className="gasprice">0,839 €</Segment>
            </Segment.Group>
            <Segment.Group horizontal>
              <Segment textAlign="center" className="gasname">E85</Segment>
              <Segment textAlign="center" className="gasprice">0,839 €</Segment>
            </Segment.Group>
            <Segment.Group horizontal>
              <Segment textAlign="center" className="gasname">E85</Segment>
              <Segment textAlign="center" className="gasprice">0,839 €</Segment>
            </Segment.Group>
          </Segment.Group>
        </Grid.Column>
        <Grid.Column width={6}>
          <Segment className="services" textAlign="center">
            <Header as="h3">Services proposés</Header>
          </Segment>
          <Segment textAlign="center" className="flex">
            <div className="iconlabelled"><FaGasPump className="servicesIcon" /><p>station service</p></div>
            <div className="iconlabelled"><FaShoppingCart className="servicesIcon" /><p>commerce</p></div>
            <div className="iconlabelled"><FaWifi className="servicesIcon" /><p>Wifi</p></div>
            <div className="iconlabelled"><FaUtensils className="servicesIcon" /><p>Restaurant</p></div>
            <div className="iconlabelled"><FaAccessibleIcon className="servicesIcon" /><p>Accès handicap</p></div>
            <div className="iconlabelled"><FaBaby className="servicesIcon" /><p>Nurserie</p></div>
          </Segment>
        </Grid.Column>
        <Grid.Column width={5}>
          <Segment className="services" textAlign="center">
            <Header as="h3">Restaurants</Header>
          </Segment>
          <Segment>
            <Image centered src="https://www.agrociwf.fr/media/6251389/autogrill-logo-research-thumb.jpg?mode=min&width=600&height=315&rnd=130619991200000000" size="small" />
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </>
);

export default Area;
