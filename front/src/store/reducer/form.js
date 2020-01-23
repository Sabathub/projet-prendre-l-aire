// --- action types
import {
  CHANGE_INPUT_VALUE,
  DO_CONNECT,
} from '../actions';

// --- initial state
const initialState = {
  username: '',
  email: '',
  password: '',
  passwordVerify: '',
};

// --- Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case DO_CONNECT:
      return {
        ...state,
      };

    default: return state;
  }
};


// --- export
export default reducer;
