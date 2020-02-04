// --- action types
import {
  STOP_LOADING_COMMENTS,
} from '../actions';
// --- initial state
const initialState = {
  commentloading: true,
};
// --- Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case STOP_LOADING_COMMENTS:
      return {
        ...state,
        commentloading: false,
      };
    default: return state;
  }
};
// --- export
export default reducer;
