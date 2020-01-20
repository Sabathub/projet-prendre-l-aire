import React from 'react'
import { Container, Image, Segment, Grid, Button, Icon } from 'semantic-ui-react'

 import './profile.scss';

 const Profile = () => (
   <Container>
     <h1>Mon profil</h1>
     <Segment>

      <Grid columns={3} stackable centered>
        <Grid.Row verticalAlign='middle'>
          <Grid.Column width={3} textAlign='center'>
            <Image className='avatar' src='https://react.semantic-ui.com/images/avatar/large/matthew.png' centered circular />
          </Grid.Column>
          <Grid.Column id='info' width={5} textAlign='left'>
            <p>Bonjour pseudo !</p>
            <p>Nom Prénom</p>
            <p>Email</p>
          </Grid.Column>
          <Grid.Column width={4} textAlign='center'>
            <Button animated color='red'>
              <Button.Content visible>Modifier mon profil</Button.Content>
              <Button.Content hidden>
                <Icon name='pencil alternate' />
              </Button.Content>
            </Button>
            <Button animated color='teal'>
              <Button.Content visible>Supprimer mon compte</Button.Content>
              <Button.Content hidden>
                <Icon name='trash' />
              </Button.Content>
            </Button>
          </Grid.Column>
        </Grid.Row>     
      </Grid>
      
      <h2 id="commentsTitle">Mes commentaires</h2>

      <Grid divided='vertically'>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Image className="comment" src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
          </Grid.Column>
          <Grid.Column>
            <Image className="comment" src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={3}>
          <Grid.Column>
            <Image className="comment" src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
          </Grid.Column>
          <Grid.Column>
            <Image className="comment" src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
          </Grid.Column>
          <Grid.Column>
            <Image className="comment" src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
          </Grid.Column>
        </Grid.Row>
      </Grid>

     </Segment>
    </Container>  
 );

 export default Profile;
