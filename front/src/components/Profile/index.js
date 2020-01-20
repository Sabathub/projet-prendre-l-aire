import React from 'react'
import { Container, Image, Segment, Grid, Button, Icon } from 'semantic-ui-react'

 import './profile.scss';

 const Profile = () => (
   <Container>
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
              <Button.Content visible>Modifiez</Button.Content>
              <Button.Content hidden>
                <Icon name='pencil alternate' />
              </Button.Content>
            </Button>
            <Button animated color='teal'>
              <Button.Content visible>Supprimez</Button.Content>
              <Button.Content hidden>
                <Icon name='trash' />
              </Button.Content>
            </Button>
          </Grid.Column>
        </Grid.Row>     
      </Grid>
     </Segment>
     
      <p>Commentaires</p>
    </Container>  

 );

 export default Profile;
