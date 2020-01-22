// --- initial state
const initialState = {
  inputValue: '',
  pseudo: '',
  email: '',
  password: '',
  // la valeur du token après submit
  // tokenValue: '',
};

// --- action types
const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
// export const CONNECT_USER = 'CONNECT_USER';

// --- Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.value,
      };

    default: return state;
  }
};

// --- action creators
export const changeInput = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value,
});

/* export const connectUser = () => ({
  type: CONNECT_USER,
}); */

// --- export
export default reducer;
