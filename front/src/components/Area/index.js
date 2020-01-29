import React from 'react';
import {
  Grid, Image, Header, Segment, Rating,
} from 'semantic-ui-react';
import {
  FaGasPump, FaShoppingCart, FaWifi, FaUtensils, FaAccessibleIcon, FaBaby,
} from 'react-icons/fa';
import Zoomarea from 'src/containers/Zoomarea';
import CommentsArea from 'src/containers/CommentsArea';
// import Carousel component
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import './area.scss';

const Area = () => (
  <>
    <Segment id="areaname" compact>
      <Header as="h2">Nom_de_l_aire</Header>
    </Segment>

    <Grid centered stackable>
      <Grid.Row>
        <Grid.Column width={5}>
          <Zoomarea />
        </Grid.Column>
        <Grid.Column width={5} textAlign="center" verticalAlign="middle">
          <Segment basic>
            <Rating icon="star" defaultRating={3} maxRating={5} disabled />
            <p id="rating">Note moyenne de 12 avis</p>
          </Segment>
          <Segment id="area-infos">
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
      <Grid.Row>
        <Grid.Column width={8} textAlign="center">
          <Segment className="services">
            <Header as="h3">Galerie d'images</Header>
          </Segment>
          <Carousel infiniteLoop useKeyboardArrows dynamicHeight>
            <div>
              <img alt="image1" src="https://images.unsplash.com/photo-1558981359-219d6364c9c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
            </div>
            <div>
              <img alt="image2" src="https://images.unsplash.com/photo-1580125311881-fd485603cc42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
            </div>
            <div>
              <img alt="image3" src="https://images.unsplash.com/photo-1580125350380-ee0d38f38a0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
            </div>
          </Carousel>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <CommentsArea />
  </>
);

export default Area;
