import { connect } from 'react-redux';

import Contact from 'src/components/Contact';

import { changeInput, doContact, doFailContact} from 'src/store/actions';


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
    dispatch(doFailContact());
  },
});

const ContactContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Contact);

export default ContactContainer;
