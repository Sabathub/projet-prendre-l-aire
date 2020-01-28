import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import {
  Grid,
  Image,
  Reveal,
  Header,
  Segment,
} from 'semantic-ui-react';
import {
  FaStar,
  FaRegStar,
  FaGasPump,
  FaShoppingCart,
  FaWifi,
  FaUtensils,
  FaAccessibleIcon,
  FaBaby,
  FaTableTennis,
} from 'react-icons/fa';
import Maparea from 'src/containers/Maparea';

import './area.scss';

const square = { width: 3, height: 1 };

const Area = ({ areaData, loading, found }) => (

  <>
    {!loading && found && (
      <>
        <h1>{areaData.name}</h1>
        <Grid celled stackable>
          <Grid.Row>
            <Grid.Column width={6}>
              <Maparea />
            </Grid.Column>
            <Grid.Column width={9}>
              <FaStar className="stars" /> <FaStar className="stars" /> <FaStar className="stars" /> <FaStar className="stars" /> <FaRegStar className="stars" />
              <p id="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod repellat itaque nobis dignissimos officiis possimus, facere sit minima quis? Quas necessitatibus ex voluptas enim expedita optio est cumque, pariatur consectetur. Omnis magnam culpa dolorum temporibus, nobis tempore reprehenderit. Ducimus, mollitia? Libero quia odit quas quo quos quam vitae ab laboriosam dolorum fugit voluptas obcaecati a itaque recusandae reprehenderit expedita, eveniet, voluptates veniam! Minima nihil dolore sunt eaque! Dicta totam harum aut. Optio assumenda voluptatum quod iure ipsa expedita cum eos suscipit atque, dicta, velit consequatur explicabo. Beatae velit totam asperiores veniam. Excepturi quidem reiciendis accusantium neque illo delectus voluptatum ratione laboriosam vero deserunt nemo iure culpa praesentium molestiae quibusdam beatae animi dolorum, eius quasi optio error laudantium dolores sapiente earum? Amet, nemo impedit.</p>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={5}>
              <Reveal animated="move up">
                <Reveal.Content visible>
                  <Header className="title" as="h2">Station service</Header>
                </Reveal.Content>
                <Reveal.Content id="gas" hidden>
                  <Segment circular style={square}>
                    <Header as="h5">
                      Sans Plomb 95
                    </Header>
                  </Segment>
                  <Segment circular inverted style={square}>
                    <Header as="h5">
                      Sans Plomb 98
                    </Header>
                  </Segment>
                </Reveal.Content>
              </Reveal>
            </Grid.Column>
            <Grid.Column width={6}>
              <Reveal animated="move up">
                <Reveal.Content visible>
                  <Header className="title" as="h2">Services Proposés</Header>
                </Reveal.Content>
                <Reveal.Content hidden>
                  <FaGasPump className="services" /> <FaShoppingCart className="services" /> <FaWifi className="services" /> <FaUtensils className="services" /> <FaAccessibleIcon className="services" /> <FaBaby className="services" /> <FaTableTennis className="services" />
                </Reveal.Content>
              </Reveal>
            </Grid.Column>
            <Grid.Column width={5}>
              <Reveal animated="move up">
                <Reveal.Content visible>
                  <Header className="title" as="h2">Les Restaurants</Header>
                </Reveal.Content>
                <Reveal.Content hidden>
                  <Image src="https://www.agrociwf.fr/media/6251389/autogrill-logo-research-thumb.jpg?mode=min&width=600&height=315&rnd=130619991200000000" size="small" />
                </Reveal.Content>
              </Reveal>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    )}
    {!found && <Redirect to="/not-found" />}
  </>
);

Area.propTypes = {
  areaData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    zipcode: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    kilometers: PropTypes.string.isRequired,
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
  }).isRequired,
  loading: PropTypes.bool.isRequired,
  found: PropTypes.bool.isRequired,
};

export default Area;
