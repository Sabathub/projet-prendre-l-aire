import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Segment } from 'semantic-ui-react';

import './contact.scss';


class Contact extends React.Component {
  componentWillUnmount() {
    const { clearForm } = this.props;
    clearForm();
  }

  render() {
    const {
      nameValue,
      emailValue,
      subjectValue,
      contentValue,
      changeInputValue,
      newContent,
      areaname,
    } = this.props;

    const handleChange = (evt) => {
      const { value: fieldValue } = evt.target;
      const fieldName = evt.target.id;
      changeInputValue(fieldValue, fieldName);
    };
    const handleSubmit = (evt) => {
      evt.preventDefault();
      newContent();
    };
    console.log(areaname);

    return (
      <div className="container">
        <Segment>
          <Form className="form" onSubmit={handleSubmit}>
            <Form.Field className="field">
              <label htmlFor="name">
              Saisissez votre nom :
                <Form.Input
                  type="text"
                  icon="user"
                  iconPosition="left"
                  placeholder="votre nom"
                  id="name"
                  name="name"
                  value={nameValue}
                  onChange={handleChange}
                />
              </label>
            </Form.Field>
            <Form.Field className="field">
              <label htmlFor="email">
              Saisissez votre adresse e-mail :
                <Form.Input
                  type="email"
                  icon="mail"
                  iconPosition="left"
                  placeholder="Votre email"
                  id="email"
                  name="email"
                  value={emailValue}
                  onChange={handleChange}
                />
              </label>
            </Form.Field>
            {areaname.length !== 0 && (
            <Form.Field className="field">
              <label className="label">
              Objet :
                <Form.Input
                  type="text"
                  icon="mail"
                  iconPosition="left"
                  placeholder="Quel est l'objet de votre message ?"
                  id="subject"
                  name="subject"
                  value={areaname}
                  onChange={handleChange}
                />
              </label>
            </Form.Field>
            )}
            {areaname.length === 0 && (
            <Form.Field className="field">
              <label className="label">
              Objet :
                <Form.Input
                  type="text"
                  icon="mail"
                  iconPosition="left"
                  placeholder="Quel est l'objet de votre message ?"
                  id="subject"
                  name="subject"
                  value={subjectValue}
                  onChange={handleChange}
                />
              </label>
            </Form.Field>
            )}
            <Form.Field className="field">
              <label className="label">
              Votre message :
                <Form.TextArea
                  type="text"
                  placeholder="..."
                  id="content"
                  name="content"
                  value={contentValue}
                  onChange={handleChange}
                />
              </label>
            </Form.Field>
            <Button type="submit" color="teal">Envoyer</Button>
          </Form>
        </Segment>
      </div>
    );
  }
}

Contact.propTypes = {
  nameValue: PropTypes.string.isRequired,
  emailValue: PropTypes.string.isRequired,
  subjectValue: PropTypes.string.isRequired,
  contentValue: PropTypes.string.isRequired,
  changeInputValue: PropTypes.func.isRequired,
  newContent: PropTypes.func.isRequired,
  areaname: PropTypes.string.isRequired,
  clearForm: PropTypes.func.isRequired,
};

export default Contact;
