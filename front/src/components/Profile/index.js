import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Image, Segment, Grid, Button, Icon, Header, Modal, Form, Comment, Divider,
} from 'semantic-ui-react';
import { Redirect, Route } from 'react-router-dom';

import './profile.scss';

class Profile extends React.Component {
  componentDidMount() {


  }

  componentDidUpdate(prevProps) {
    const { submitedUsername, submitedPassword, logged } = this.props;
    const Refresh = ({ path = '/' }) => (
      <Route
        path={path}
        component={({ history, location, match }) => {
          history.replace({
            ...location,
            pathname: location.pathname.substring(match.path.length),
          });
          return null;
        }}
      />
    );
    if ((submitedUsername !== prevProps.submitedUsername)
      || (submitedPassword !== prevProps.submitedUsername)) {
      return <Refresh path="/profile" />;
    }
    if (!logged) {
      return <Redirect to="/" />;
    }
  }


  render() {
    const {
      profileData,
      usernameValue,
      passwordValue,
      changeInputValue,
      editUsername,
      editPassword,
      deleteUser,
      showModalUsername,
      closingModalUsername,
      openModalUsername,
      showModalPassword,
      closingModalPassword,
      openModalPassword,
      showModalDelete,
      closingModalDelete,
      openModalDelete,

    } = this.props;
    const closeModalUsername = () => {
      closingModalUsername();
    };
    const closeModalPassword = () => {
      closingModalPassword();
    };
    const closeModalDelete = () => {
      closingModalDelete();
    };
    const handleChange = (evt) => {
      const { value: fieldValue } = evt.target;
      const fieldName = evt.target.id;
      changeInputValue(fieldValue, fieldName);
    };
    const handleSubmitUsername = (evt) => {
      evt.preventDefault();
      editUsername();
      closeModalUsername();
    };
    const handleSubmitPassword = (evt) => {
      evt.preventDefault();
      editPassword();
      closeModalPassword();
    };
    const handleClick = (evt) => {
      evt.preventDefault();
      if (confirm('Êtes-vous vraiment sûr de vouloir supprimer votre compte de façon définitive ?')) {
        deleteUser();
        closeModalDelete();
      }
      else {
        closeModalDelete();
      }
    };
    const handleClickNo = (evt) => {
      evt.preventDefault();
      closeModalDelete();
    };
    const handleOpenModalUsername = () => {
      openModalUsername();
    };
    const handleOpenModalPassword = () => {
      openModalPassword();
    };
    const handleOpenModalDelete = () => {
      openModalDelete();
    };
    const profileDatas = JSON.parse(window.localStorage.getItem('profileData'));

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
                <p>Bonjour {profileDatas.username} !</p>
                <p>{profileDatas.email}</p>
              </Grid.Column>
              <Grid.Column width={4} textAlign="center">
                <Modal
                  id="modalUsername"
                  trigger={(
                    <Button
                      animated
                      color="teal"
                      onClick={handleOpenModalUsername}
                    >
                      <Button.Content visible>Modifier mon pseudo</Button.Content>
                      <Button.Content hidden>
                        <Icon name="pencil alternate" />
                      </Button.Content>
                    </Button>
                  )}
                  basic
                  open={showModalUsername}
                  onClose={closeModalUsername}
                  closeIcon
                  size="mini"
                >
                  <Modal.Header>Modifier mon pseudo</Modal.Header>
                  <Modal.Content image>
                    <Modal.Description>
                      <Form className="form" onSubmit={handleSubmitUsername}>
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
                    <Button
                      id="buttonEditPassword"
                      animated
                      color="yellow"
                      onClick={handleOpenModalPassword}
                    >
                      <Button.Content visible>Modifier mon mot de passe</Button.Content>
                      <Button.Content hidden>
                        <Icon name="pencil alternate" />
                      </Button.Content>
                    </Button>
                  )}
                  basic
                  open={showModalPassword}
                  onClose={closeModalPassword}
                  closeIcon
                  size="mini"
                >
                  <Modal.Header>Modifier mon mot de passe</Modal.Header>
                  <Modal.Content image>
                    <Modal.Description>
                      <Form className="form" onSubmit={handleSubmitPassword}>
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
                    <Button
                      id="buttonDelete"
                      animated
                      color="red"
                      onClick={handleOpenModalDelete}
                    >
                      <Button.Content visible>Supprimer mon compte</Button.Content>
                      <Button.Content hidden>
                        <Icon name="trash" />
                      </Button.Content>
                    </Button>
                  )}
                  basic
                  open={showModalDelete}
                  onClose={closeModalDelete}
                  closeIcon
                  size="mini"
                >
                  <Header icon="archive" content="Supprimer mon compte" />
                  <Modal.Content>
                    <p>
                      Voulez-vous supprimer votre compte?
                    </p>
                  </Modal.Content>
                  <Modal.Actions>
                    <Button
                      basic
                      color="red"
                      inverted
                      onClick={handleClickNo}
                    >
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
              {profileDatas.comments != null && profileDatas.comments.map((comment) => (
                <>
                  <Grid.Column>
                    <Comment key={comment.id}>
                      <Comment.Content>
                        <Comment.Author as="a">{profileDatas.username}</Comment.Author>
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
              {profileDatas.comments == null && (
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
  }
}

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
  showModalUsername: PropTypes.bool.isRequired,
  closingModalUsername: PropTypes.func.isRequired,
  openModalUsername: PropTypes.func.isRequired,
  showModalPassword: PropTypes.bool.isRequired,
  closingModalPassword: PropTypes.func.isRequired,
  openModalPassword: PropTypes.func.isRequired,
  showModalDelete: PropTypes.bool.isRequired,
  closingModalDelete: PropTypes.func.isRequired,
  openModalDelete: PropTypes.func.isRequired,
};

export default Profile;
