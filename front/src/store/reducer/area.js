// reducer pour gérer les données relatives à la carte
// --- action types
import {
  RECEIVE_AREAS_DATA,
  STOP_LOADING,
  STOP_LOADING_AREA_DATA,
  UPDATE_GALLERY,
  STOP_LOADING_PICTURES,
} from '../actions';
// --- initial state
const initialState = {

  areas: [],
  commentsWithImages: [],
  picturedCommentsLoading: true,
  arealoading: true,
  areaDataLoading: true,
};
// --- Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case RECEIVE_AREAS_DATA:
      return {
        ...state,
        areas: action.areas,
      };
    case STOP_LOADING:
      return {
        ...state,
        arealoading: false,
      };
    case STOP_LOADING_AREA_DATA:
      return {
        ...state,
        areaDataLoading: false,
      };
    case STOP_LOADING_PICTURES:
      return {
        ...state,
        picturedCommentsLoading: false,
      };
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
