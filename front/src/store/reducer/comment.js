// --- action types
import {
  UPDATE_GALLERY,
} from '../actions';
// --- initial state
const initialState = {
  commentsWithImages: [],
};
// --- Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_GALLERY:
      return {
        ...state,
        commentsWithImages: action.commentsWithImages,
      };
    default: return state;
  }
};
// --- export
export default reducer;
