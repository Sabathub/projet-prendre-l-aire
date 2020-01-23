import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react';

import './signup.scss';

const Signup = ({
  usernameValue, emailValue, passwordValue, passwordVerifyValue, changeInputValue, newUser,
}) => {
  const handleChange = (evt) => {
    const { value: fieldValue } = evt.target;
    const fieldName = evt.target.id;
    changeInputValue(fieldValue, fieldName);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    newUser();
  };

  return (
    <div id="container">
      <Form id="form" onSubmit={handleSubmit}>
        <h1>Formulaire d'inscription</h1>
        <Form.Field className="field">
          <label className="label">Saisissez un pseudonyme :</label>
          <input type="text" placeholder="Votre pseudonyme" id="username" value={usernameValue} onChange={handleChange} />
        </Form.Field>
        <Form.Field className="field">
          <label className="label">Saisissez une adresse e-mail valide :</label>
          <input type="email" placeholder="e-mail" id="email" value={emailValue} onChange={handleChange} />
        </Form.Field>
        <Form.Field className="field">
          <label className="label">Saisissez un mot de passe :</label>
          <input type="password" placeholder="password" id="password" value={passwordValue} onChange={handleChange} />
        </Form.Field>
        <Form.Field className="field">
          <label className="label">Confirmer le mot de passe :</label>
          <input type="password" placeholder="password" id="passwordVerify" value={passwordVerifyValue} onChange={handleChange} />
        </Form.Field>
        <Button type="submit" color="teal">Envoyer</Button>
      </Form>
    </div>
  );
};

Signup.propTypes = {
  usernameValue: PropTypes.string.isRequired,
  emailValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  passwordVerifyValue: PropTypes.string.isRequired,
  changeInputValue: PropTypes.func.isRequired,
  newUser: PropTypes.func.isRequired,
};

export default Signup;
