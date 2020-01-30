// --- action types
import {
  CHANGE_INPUT_VALUE,
  LOG_USER,
  DO_SIGNUP,
  DO_LOGIN,
  DO_CONTACT,
  SUBMIT_USER,
  SUBMIT_CONTACT,
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

    default: return state;
  }
};


// --- export
export default reducer;
