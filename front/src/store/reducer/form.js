// --- action types
import {
  CHANGE_INPUT_VALUE,
  LOG_USER,
  DO_SIGNUP,
  DO_LOGIN,
  DO_CONTACT,
  DO_EDIT_USERNAME,
  DO_EDIT_PASSWORD,
  DO_DELETE_USER,
  SUBMIT_USER,
  SUBMIT_CONTACT,
  SUBMIT_EDIT_USERNAME,
  SUBMIT_EDIT_PASSWORD,
} from '../actions';

// --- initial state
const initialState = {
  username: '',
  email: '',
  password: '',
  passwordVerify: '',
  name: '',
  subject: '',
  content: '',
  submitedUsername: false,
  submitedPassword: false,
};

// --- Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case LOG_USER:
      return {
        ...state,
        email: '',
        password: '',
      };
    case DO_SIGNUP:
      return {
        ...state,
      };
    case DO_LOGIN:
      return {
        ...state,
      };
    case DO_CONTACT:
      return {
        ...state,
      };
    case DO_EDIT_USERNAME:
      return {
        ...state,
      };
    case DO_EDIT_PASSWORD:
      return {
        ...state,
      };
    case DO_DELETE_USER:
      return {
        ...state,
      };
    case SUBMIT_USER:
      return {
        ...state,
        username: '',
        passwordVerify: '',
      };
    case SUBMIT_CONTACT:
      return {
        ...state,
        name: '',
        email: '',
        subject: '',
        content: '',
      };
    case SUBMIT_EDIT_USERNAME:
      return {
        ...state,
        submitedUsername: true,
        username: '',
      };
    case SUBMIT_EDIT_PASSWORD:
      return {
        ...state,
        submitedPassword: true,
        password: '',
      };

    default: return state;
  }
};


// --- export
export default reducer;
