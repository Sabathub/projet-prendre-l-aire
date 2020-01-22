// reducer pour gérer les données relatives à l'utilisateur

// --- initial state
const initialState = {
  username: '',
  avatar: '',
  name: '',
  // firstName: '',
  // lastName: '',
  email: '',
  logged: false,
};

// --- action types
export const LOG_USER = 'LOG_USER';

// --- Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOG_USER:
      return {
        ...state,
        username: action.username,
        avatar: action.avatar,
        name: action.name,
        email: action.email,
        logged: true,
      };

    default: return state;
  }
};

// --- action creators
export const logUser = (username, avatar, name, email) => ({
  type: LOG_USER,
  username,
  avatar,
  name,
  email,
});

// --- export
export default reducer;
