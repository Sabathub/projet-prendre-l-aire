// reducer pour gérer les données relatives à l'utilisateur

// --- action types
import {
  LOG_USER,
  LOGOUT_USER,
} from '../actions';

// --- initial state
const initialState = {
  token: '',
  username: '',
  email: '',
  password: '',
  logged: false,
};


// --- Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOG_USER:
      return {
        ...state,
        logged: true,
        token: action.token,
      };
    case LOGOUT_USER:
      return {
        ...state,
        logged: false,
        token: '',
      };

    default: return state;
  }
};


// --- export
export default reducer;
