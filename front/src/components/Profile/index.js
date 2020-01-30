import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Image, Segment, Grid, Button, Icon, Header, Modal,
} from 'semantic-ui-react';

import './profile.scss';

const Profile = ({ profileData }) => (
  <Container>
    <h1>Mon profil</h1>
    <Segment>

      <Grid columns={3} stackable centered>
        <Grid.Row verticalAlign="middle">
          <Grid.Column width={3} textAlign="center">
            <Image className="avatar" src="https://react.semantic-ui.com/images/avatar/large/matthew.png" centered circular />
          </Grid.Column>
          <Grid.Column id="info" width={5} textAlign="left">
            <p>Bonjour {profileData.username} !</p>
            <p>{profileData.email}</p>
          </Grid.Column>
          <Grid.Column width={4} textAlign="center">
            <Modal
              trigger={(
                <Button animated color="teal">
                  <Button.Content visible>Modifier mon pseudo</Button.Content>
                  <Button.Content hidden>
                    <Icon name="pencil alternate" />
                  </Button.Content>
                </Button>
              )}
              basic
              size="small"
            >
              <Modal.Header>Select a Photo</Modal.Header>
              <Modal.Content image>
                <Image wrapped size='medium' src='/images/avatar/large/rachel.png' />
                <Modal.Description>
                  <Header>Default Profile Image</Header>
                  <p>
                    We've found the following gravatar image associated with your e-mail
                    address.
                  </p>
                  <p>Is it okay to use this photo?</p>
                </Modal.Description>
              </Modal.Content>
            </Modal>

            <Modal
              trigger={(
                <Button animated color="yellow">
                  <Button.Content visible>Modifier mon mot de passe</Button.Content>
                  <Button.Content hidden>
                    <Icon name="pencil alternate" />
                  </Button.Content>
                </Button>
              )}
              basic
              size="small"
            >
              <Modal.Header>Select a Photo</Modal.Header>
              <Modal.Content image>
                <Image wrapped size='medium' src='/images/avatar/large/rachel.png' />
                <Modal.Description>
                  <Header>Default Profile Image</Header>
                  <p>
                    We've found the following gravatar image associated with your e-mail
                    address.
                  </p>
                  <p>Is it okay to use this photo?</p>
                </Modal.Description>
              </Modal.Content>
            </Modal>

            <Modal
              trigger={(
                <Button animated color="red">
                  <Button.Content visible>Supprimez mon compte</Button.Content>
                  <Button.Content hidden>
                    <Icon name="trash" />
                  </Button.Content>
                </Button>
              )}
              basic
              size="small"
            >
              <Header icon='archive' content='Archive Old Messages' />
              <Modal.Content>
                <p>
                  Your inbox is getting full, would you like us to enable automatic
                  archiving of old messages?
                </p>
              </Modal.Content>
              <Modal.Actions>
                <Button basic color='red' inverted>
                  <Icon name='remove' /> No
                </Button>
                <Button color='green' inverted>
                  <Icon name='checkmark' /> Yes
                </Button>
              </Modal.Actions>
            </Modal>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <h2 id="commentsTitle">Mes commentaires</h2>

      <Grid divided="vertically">
        <Grid.Row columns={2}>
          <Grid.Column>
            <Image className="comment" src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
          </Grid.Column>
          <Grid.Column>
            <Image className="comment" src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={3}>
          <Grid.Column>
            <Image className="comment" src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
          </Grid.Column>
          <Grid.Column>
            <Image className="comment" src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
          </Grid.Column>
          <Grid.Column>
            <Image className="comment" src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
          </Grid.Column>
        </Grid.Row>
      </Grid>

    </Segment>
  </Container>
);

Profile.propTypes = {
  profileData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      rate: PropTypes.number.isRequired,
      area: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired,
    })).isRequired,
  }).isRequired,
};

export default Profile;
