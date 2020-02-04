// --- action types
import {
  CHANGE_INPUT_VALUE,
  LOG_USER,
  DO_SIGNUP,
  DO_FAIL_PASSWORD,
  DO_LOGIN,
  DO_CONTACT,
  DO_COMMENT,
  DO_EDIT_USERNAME,
  DO_EDIT_PASSWORD,
  DO_DELETE_USER,
  SUBMIT_USER,
  SUBMIT_CONTACT,
  SUBMIT_COMMENT,
  SUBMIT_EDIT_USERNAME,
  SUBMIT_EDIT_PASSWORD,
  ADD_IMAGE,
  ADD_RATE,
  COMMENT_AREA_ID,
  RECEIVE_AREA_NAME,
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
  commentContent: '',
  submitedUsername: false,
  submitedPassword: false,
  picture: null,
  areaId: '',
  areaname: '',
  rate: null,
};

// --- Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case ADD_IMAGE:
      return {
        ...state,
        picture: action.file,
      };
    case ADD_RATE:
      return {
        ...state,
        rate: action.rate,
      };
    case COMMENT_AREA_ID:
      return {
        ...state,
        areaId: action.areaId,
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
    case DO_FAIL_PASSWORD:
      return {
        ...state,
        username: '',
        email: '',
        password: '',
        passwordVerify: '',
        name: '',
        subject: '',
        content: '',
        commentContent: '',
        picture: null,
        areaId: '',
        areaname: '',
        rate: null,
      };
    case DO_LOGIN:
      return {
        ...state,
      };
    case DO_CONTACT:
      return {
        ...state,
      };
    case DO_COMMENT:
      return {
        ...state,
        areaId: action.areaId,
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
    case SUBMIT_COMMENT:
      return {
        ...state,
        commentContent: '',
        rate: null,
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
    case RECEIVE_AREA_NAME:
      return {
        ...state,
        areaname: action.areaname,
      };

    default: return state;
  }
};


// --- export
export default reducer;
