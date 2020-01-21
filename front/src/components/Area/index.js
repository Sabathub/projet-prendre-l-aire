import React from 'react';
import { Grid, Image, Reveal } from 'semantic-ui-react';
import { FaStar, FaRegStar } from 'react-icons/fa';

import './area.scss';

const Area = () => (
  <>
    <h1>Aire blablabla</h1>
    <Grid celled>
      <Grid.Row>
        <Grid.Column width={6}>
          <Image src="https://react.semantic-ui.com/images/wireframe/image.png " />
        </Grid.Column>
        <Grid.Column width={9}>
          <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStar />
          <p id="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur omnis corporis, neque error delectus voluptas ducimus autem nostrum perferendis cum rerum voluptatibus et accusamus? Tempora expedita facilis eius voluptas eaque commodi unde assumenda error, tenetur minus esse modi hic, iste ut praesentium deleniti alias consectetur beatae obcaecati voluptatem. Consectetur soluta, harum cumque mollitia optio, repudiandae quo voluptatibus dolor praesentium modi, temporibus animi ea. Nesciunt eveniet cupiditate laborum maiores adipisci.</p>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={5}>
          <Reveal animated="move">
            <Reveal.Content visible>
              <Image src="https://react.semantic-ui.com/images/wireframe/square-image.png" size="small" />
            </Reveal.Content>
            <Reveal.Content hidden>
              <Image src="https://react.semantic-ui.com/images/avatar/large/chris.jpg" size="small" />
            </Reveal.Content>
          </Reveal>
        </Grid.Column>
        <Grid.Column width={6}>
          <Reveal animated="move up">
            <Reveal.Content visible>
              <Image src="https://react.semantic-ui.com/images/wireframe/square-image.png "size="small" />
            </Reveal.Content>
            <Reveal.Content hidden>
              <Image src="https://react.semantic-ui.com/images/avatar/large/justen.jpg" size="small" />
            </Reveal.Content>
          </Reveal>
        </Grid.Column>
        <Grid.Column width={5}>
          <Reveal animated="move right">
            <Reveal.Content visible>
              <Image src="https://react.semantic-ui.com/images/wireframe/square-image.png" size="small" />
            </Reveal.Content>
            <Reveal.Content hidden>
              <Image src="https://react.semantic-ui.com/images/avatar/large/jenny.jpg" size="small" />
            </Reveal.Content>
          </Reveal>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </>
);

export default Area;
