import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react';

import './login.scss';

const Login = ({ emailValue, passwordValue, changeInputValue, doConnect }) => {
  const handleChange = (evt) => {
    const { value: fieldValue } = evt.target;
    const fieldName = evt.target.id;
    changeInputValue(fieldValue, fieldName);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    doConnect();
  };

  return (
    <div id="container">
      <Form id="form" onSubmit={handleSubmit}>
        <h1>Formulaire de connexion</h1>
        <Form.Field className="field">
          <label className="label">Adresse e-mail :</label>
          <input placeholder="mail" id="email" value={emailValue} onChange={handleChange} />
        </Form.Field>
        <Form.Field className="field">
          <label className="label">Mot de passe :</label>
          <input placeholder="password" id="password" value={passwordValue} onChange={handleChange} />
        </Form.Field>
        <Button type="submit" color="teal">Envoyer</Button>
      </Form>
    </div>

  );
};

Login.propTypes = {
  emailValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  changeInputValue: PropTypes.func.isRequired,
  doConnect: PropTypes.func.isRequired,
};

export default Login;
