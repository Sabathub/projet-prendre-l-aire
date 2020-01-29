import { connect } from 'react-redux';

import Contact from 'src/components/Contact';

import { changeInput, doContact } from 'src/store/actions';


const mapStateToProps = (state) => ({
  nameValue: state.form.name,
  emailValue: state.form.email,
  subjectValue: state.form.subject,
  contentValue: state.form.content,
});

const mapDispatchToProps = (dispatch) => ({
  changeInputValue: (value, name) => {
    dispatch(changeInput(value, name));
  },
  newContent: () => {
    dispatch(doContact());
  },
});

const ContactContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Contact);

export default ContactContainer;
