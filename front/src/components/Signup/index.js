import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react';

import './signup.scss';

const Signup = ({ pseudoValue, emailValue, passwordValue, changeInputValue }) => {
  const handleChange = (evt) => {
    const { value: fieldValue } = evt.target;

    console.log('Je change la valeur du champ', fieldValue);

    changeInputValue(fieldValue);
  };

  return (
    <div id="container">
      <Form id="form">
        <h1>Formulaire d'inscription</h1>
        <Form.Field className="field">
          <label className="label">Saisissez un pseudonyme :</label>
          <input placeholder="pseudo" value={pseudoValue} onChange={handleChange} />
        </Form.Field>
        <Form.Field className="field">
          <label className="label">Saisissez une adresse e-mail valide :</label>
          <input placeholder="e-mail" value={emailValue} onChange={handleChange} />
        </Form.Field>
        <Form.Field className="field">
          <label className="label">Saisissez un mot de passe :</label>
          <input placeholder="password" value={passwordValue} onChange={handleChange} />
        </Form.Field>
        <Form.Field className="field">
          <label className="label">Confirmer le mot de passe :</label>
          <input placeholder="password" value={passwordValue} onChange={handleChange} />
        </Form.Field>
        <Button type="submit">Envoyer</Button>
      </Form>
    </div>
  );
};

Signup.propTypes = {
  pseudoValue: PropTypes.string.isRequired,
  emailValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  changeInputValue: PropTypes.func.isRequired,
};

export default Signup;
