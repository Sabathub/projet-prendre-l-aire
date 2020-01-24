// Import NPM
import React, { Component } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';
// Import local
import './home.scss';
import Maparea from 'src/containers/Maparea';
import Homesearch from './homesearch';


export default class Home extends Component {
  state = {
    activeIndex: 0,
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    return (
      <>
        {/* // Composant Accordéon de Semantic UI pour la description */}
        <h1>Page d'accueil</h1>
        <Accordion fluid styled id="description">
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
          Qu'est ce que Prendre l'aire?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <p>
            Lorem ipsum dolor sit amet.
            </p>
          </Accordion.Content>
        </Accordion>
        <Homesearch />
        <Maparea />
      </>
    );
  }
}
