import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Image, Segment, Grid, Button, Icon, Header, Modal, Form, Comment, Divider,
} from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';

import './profile.scss';

const Profile = ({
  profileData,
  usernameValue,
  passwordValue,
  changeInputValue,
  editUsername,
  editPassword,
  deleteUser,
  submitedUsername,
  submitedPassword,
  logged,
}) => {
  const handleChange = (evt) => {
    const { value: fieldValue } = evt.target;
    const fieldName = evt.target.id;
    changeInputValue(fieldValue, fieldName);
  };
  const handleSubmitUsername = (evt) => {
    evt.preventDefault();
    editUsername();
  };
  const handleSubmitPassword = (evt) => {
    evt.preventDefault();
    editPassword();
  };
  const handleClick = (evt) => {
    evt.preventDefault();
    deleteUser();
  };

  if (submitedUsername) {
    window.location.reload(false);
  }
  if (submitedPassword) {
    window.location.reload(false);
  }
  if (!logged) {
    return <Redirect to="/" />;
  }

  return (
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
                id="modalUsername"
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
                <Modal.Header>Modifier mon pseudo</Modal.Header>
                <Modal.Content image>
                  <Modal.Description>
                    <Form id="form" onSubmit={handleSubmitUsername}>
                      <Form.Field>
                        <label htmlFor="username">
                        Choisissez votre nouveau pseudonyme
                          <Form.Input
                            type="text"
                            icon="user"
                            iconPosition="left"
                            placeholder="Votre nouveau pseudonyme"
                            id="username"
                            name="username"
                            value={usernameValue}
                            onChange={handleChange}
                          />
                        </label>
                      </Form.Field>
                      <Button type="submit" color="teal">Envoyer</Button>
                    </Form>
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
                <Modal.Header>Modifier mon mot de passe</Modal.Header>
                <Modal.Content image>
                  <Modal.Description>
                    <Form id="form" onSubmit={handleSubmitPassword}>
                      <Form.Field>
                        <label htmlFor="password">
                        Saisissez votre nouveau mot de passe
                          <Form.Input
                            type="password"
                            icon="lock"
                            iconPosition="left"
                            placeholder="Votre nouveau mot de passe"
                            id="password"
                            name="password"
                            value={passwordValue}
                            onChange={handleChange}
                          />
                        </label>
                      </Form.Field>
                      <Button type="submit" color="teal">Envoyer</Button>
                    </Form>
                  </Modal.Description>
                </Modal.Content>
              </Modal>

              <Modal
                trigger={(
                  <Button animated color="red">
                    <Button.Content visible>Supprimer mon compte</Button.Content>
                    <Button.Content hidden>
                      <Icon name="trash" />
                    </Button.Content>
                  </Button>
                )}
                basic
                size="small"
              >
                <Header icon="archive" content="Supprimer mon compte" />
                <Modal.Content>
                  <p>
                    Êtes-vous vraiment sûr de vouloir supprimer votre compte?
                  </p>
                </Modal.Content>
                <Modal.Actions>
                  <Button basic color="red" inverted>
                    <Icon name="remove" /> Non
                  </Button>
                  <Button
                    color="green"
                    inverted
                    onClick={handleClick}
                  >
                    <Icon name="checkmark" /> Oui
                  </Button>
                </Modal.Actions>
              </Modal>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <h2 id="commentsTitle">Mes commentaires</h2>

        <Grid divided="vertically">
          <Grid.Row columns={1}>
            {profileData.comments != null && profileData.comments.map((comment) => (
              <>
                <Grid.Column>
                  <Comment key={comment.id}>
                    <Comment.Content>
                      <Comment.Author as="a">{profileData.comments.username}</Comment.Author>
                      <Comment.Metadata>
                        <div>{comment.createdAt}</div>
                      </Comment.Metadata>
                      <Comment.Text>{comment.description}</Comment.Text>
                    </Comment.Content>
                  </Comment>

                  <Divider />
                </Grid.Column>
              </>
            ))}
            {profileData.comments == null && (
              <>
                <Grid.Column>
                  <div>
                    <p>Vous n'avez posté aucun commentaire pour le moment.</p>
                  </div>
                </Grid.Column>
              </>
            )}

          </Grid.Row>

        </Grid>

      </Segment>
    </Container>
  );
};

Profile.propTypes = {
  profileData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      rate: PropTypes.number.isRequired,
      createdAt: PropTypes.string.isRequired,
      area: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired,
    })).isRequired,
  }).isRequired,
  usernameValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  changeInputValue: PropTypes.func.isRequired,
  editUsername: PropTypes.func.isRequired,
  editPassword: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
  submitedUsername: PropTypes.bool.isRequired,
  submitedPassword: PropTypes.bool.isRequired,
  logged: PropTypes.bool.isRequired,
};

export default Profile;
