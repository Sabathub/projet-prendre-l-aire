// reducer pour gérer les données relatives à l'utilisateur

// --- action types
import {
  SUBMIT_USER,
  LOG_USER,
  LOGOUT_USER,
  RECEIVE_PROFILE_DATA,
} from '../actions';

// --- initial state
const initialState = {
  username: '',
  email: '',
  password: '',
  submited: false,
  logged: false,
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
    case LOG_USER:
      return {
        ...state,
        logged: true,
      };
    case LOGOUT_USER:
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

    default: return state;
  }
};


// --- export
export default reducer;
