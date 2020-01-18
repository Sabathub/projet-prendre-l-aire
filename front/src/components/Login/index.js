import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

import './login.scss';

const Login = () => (
  <div id="container">
    <Form id="form">
    <h1>Page de connexion</h1>
    <Form.Field className="field">
      <label className="label">Adresse e-mail :</label>
      <input placeholder='mail' />
    </Form.Field>
    <Form.Field className="field">
      <label className="label">Mot de passe :</label>
      <input placeholder='password' />
    </Form.Field>
    <Button type='submit'>Envoyer</Button>
  </Form>
  </div>
  
);

export default Login;