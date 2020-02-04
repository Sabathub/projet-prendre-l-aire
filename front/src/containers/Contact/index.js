import { connect } from 'react-redux';

import Contact from 'src/components/Contact';

import { changeInput, doContact, doFailPassword } from 'src/store/actions';


const mapStateToProps = (state) => ({
  nameValue: state.form.name,
  emailValue: state.form.email,
  subjectValue: state.form.subject,
  contentValue: state.form.content,
  areaname: state.form.areaname,
});

const mapDispatchToProps = (dispatch) => ({
  changeInputValue: (value, name) => {
    dispatch(changeInput(value, name));
  },
  newContent: () => {
    dispatch(doContact());
  },
  clearForm: () => {
    dispatch(doFailPassword());
  },
});

const ContactContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Contact);

export default ContactContainer;
