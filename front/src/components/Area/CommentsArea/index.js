import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Comment, Form, Header, Segment, Divider,
} from 'semantic-ui-react';
// import Moment from 'react-moment';

import './commentsarea.scss';

const CommentsArea = ({ comments, logged }) => (
  <Comment.Group id="comments-section">
    <Segment className="services" textAlign="center">
      <Header as="h3">Commentaires</Header>
    </Segment>

    {comments != null && comments.map((comment) => {
      const currentDate = new Date(comment.createdAt);

      const date = currentDate.getDate();
      const month = currentDate.getMonth();
      const year = currentDate.getFullYear();
      const hour = currentDate.getHours();
      const second = currentDate.getSeconds();
      const monthNames = [
        'janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre',
      ];
      return (
        <>
          <Comment key={comment.id}>
            <Comment.Content>
              <Comment.Author as="a">{comment.user.username}</Comment.Author>
              <Comment.Metadata>
                <div>
                  posté le {date} {monthNames[month]} {year} à {hour}h{second}
                </div>
              </Comment.Metadata>
              <Comment.Text>{comment.description}</Comment.Text>
            </Comment.Content>
          </Comment>

          <Divider />
        </>
      );
    })}
    {comments == null && (
      <>
        <Comment key="999">
          <Comment.Content>
            <Comment.Text>
              Il n'existe aucun commentaire pour cette aire pour le moment
            </Comment.Text>
          </Comment.Content>
        </Comment>
        <Divider />
      </>
    )}
    {logged && (
    <Form reply>
      <Form.TextArea />
      <Button content="Ajoutez un commentaire" labelPosition="left" icon="edit" primary />
    </Form>
    )}
  </Comment.Group>
);

CommentsArea.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      username: PropTypes.string.isRequired,
    }).isRequired,
  })).isRequired,
};

export default CommentsArea;