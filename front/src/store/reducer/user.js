// reducer pour gérer les données relatives à l'utilisateur

// --- action types
import {
  SUBMIT_USER,
  LOG_USER,
  LOGOUT_USER,
  RECEIVE_PROFILE_DATA,
  SUBMIT_DELETE_USER,
  USER_IS_CONNECT,
  DO_CLOSE_MODAL,
  DO_OPEN_MODAL,
} from '../actions';

// --- initial state
const initialState = {
  username: '',
  email: '',
  password: '',
  submited: false,
  logged: false,
  showModal: false,
  profile: {},
};


// --- Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SUBMIT_USER:
      return {
        ...state,
        submited: true,
      };
    case SUBMIT_DELETE_USER:
      return {
        ...state,
        logged: false,
      };
    case LOG_USER:
      return {
        ...state,
        logged: true,
      };
    case USER_IS_CONNECT:
      return {
        ...state,
        logged: true,
      };
    case LOGOUT_USER:
      window.localStorage.clear();
      return {
        ...state,
        logged: false,
        submited: false,
      };
    case RECEIVE_PROFILE_DATA:
      return {
        ...state,
        profile: action.profile,
      };
    case DO_CLOSE_MODAL:
      return {
        ...state,
        showModal: false,
      };
    case DO_OPEN_MODAL:
      return {
        ...state,
        showModal: true,
      };

    default: return state;
  }
};


// --- export
export default reducer;
