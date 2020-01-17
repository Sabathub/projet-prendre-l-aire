// Import NPM
import React, { Component } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';
// Import local
import './home.scss';
import HomeMap from './homemap.js';

export default class Home extends Component {
  state = {
    activeIndex: 0,
   }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <>
{/* // Composant Accordéon de Semantic UI pour la description */}
      <Accordion fluid styled id="description">
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          Qu'est ce que Prendre l'aire?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque esse nam corporis error quam expedita, beatae quos ullam laudantium eius odio laborum vitae, dolore assumenda qui. Incidunt sapiente quos hic voluptate, at quod sunt amet aliquam voluptatibus beatae nemo maxime quo nulla quibusdam fuga quis. Eligendi autem sit in dolorem iusto veniam, maxime exercitationem quia deleniti voluptate? Cumque illo ullam nisi temporibus in consectetur dolor deleniti quidem omnis animi consequuntur pariatur facere ad a, quod repellendus non perferendis rem adipisci quos similique laudantium libero. Possimus veniam quia laboriosam accusantium dolores quos repudiandae, labore sint ullam delectus culpa, praesentium ratione unde ducimus inventore animi deleniti mollitia quam. Ab, culpa quia. Sit, consectetur. Quidem error, officiis quod reiciendis voluptas nihil exercitationem voluptatibus sed dolorem recusandae! Voluptate nihil impedit eligendi assumenda nisi molestias sunt iste ea et voluptates iure delectus cumque animi, amet atque voluptatum natus ut at, similique, adipisci beatae! Fugit similique ex sint labore officiis dolor dolorum odio, id asperiores et quo, magnam ipsa eius! Dolorem possimus quos animi culpa cupiditate explicabo commodi id quae! Porro accusamus sit quam in rerum quis tempora quas praesentium sequi, quia consequuntur nobis asperiores veritatis repudiandae laboriosam ex repellat assumenda. Corrupti vero delectus veritatis amet iste reiciendis a assumenda modi alias veniam quaerat eaque ipsa ipsam mollitia, esse nemo ex. Recusandae libero fuga voluptatum soluta eius minus a nostrum quis iure veritatis ipsam quas inventore nemo rerum, quae illum tenetur. Assumenda pariatur quo in soluta qui, tenetur quia impedit quibusdam sequi nesciunt molestiae expedita praesentium ratione laudantium quidem. Facilis placeat rerum ea ratione! Vitae, reiciendis consectetur. Debitis similique quasi, dicta id ut quod recusandae ipsa nemo asperiores magni reprehenderit iusto atque, suscipit ad quisquam temporibus quas odit? Facere, sint quo aliquam ullam earum praesentium quae doloremque quibusdam fugiat est omnis! Iure recusandae hic temporibus nulla?
          </p>
        </Accordion.Content>
      </Accordion>
      <p>Liste déroulante de filtres</p>
{/* // Composant Map de React-Leaflet pour la carte */}
      <HomeMap />
      

      </>
    )
  }
}
