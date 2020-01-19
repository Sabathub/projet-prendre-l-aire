import React from 'react'
import { Button, Form } from 'semantic-ui-react'

 import './signup.scss';

 const Signup = () => (
  <div id="container">
    <Form id="form">
    <h1>Formulaire d'inscription</h1>
    <Form.Field className="field">
      <label className="label">Saisissez un pseudonyme :</label>
      <input placeholder='pseudo' />
    </Form.Field>
    <Form.Field className="field">
      <label className="label">Saisissez une adresse e-mail valide :</label>
      <input placeholder='e-mail' />
    </Form.Field>
    <Form.Field className="field">
      <label className="label">Saisissez un mot de passe :</label>
      <input placeholder='password' />
    </Form.Field>
    <Form.Field className="field">
      <label className="label">Confirmer le mot de passe :</label>
      <input placeholder='password' />
    </Form.Field>
    <Button type='submit'>Envoyer</Button>
  </Form>
  </div>

 );

 export default Signup;