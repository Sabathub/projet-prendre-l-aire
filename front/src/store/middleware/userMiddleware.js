import axios from 'axios';

import {
  DO_EDIT_USERNAME,
  DO_EDIT_PASSWORD,
  DO_DELETE_USER,
  submitEditUsername,
  submitEditPassword,
  submitDeleteUser,
  receiveProfileData,
} from '../actions';


const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case DO_EDIT_USERNAME: {
      const edituser = {
        username: (store.getState().form.username),
      };
      // appel axios
      axios.patch('http://54.85.18.78/api/v1/secured/users/edit', {
        edituser,
      })
        .then((response) => {
          console.log(response);
          store.dispatch(submitEditUsername(response.data.submitedUsername));
          store.dispatch(receiveProfileData(response.data));
        })
        .catch((error) => {
          // console.error permet d'afficher une erreur dans la console
          console.error(error);
        })
        .finally();
      break;
    }
    case DO_EDIT_PASSWORD: {
      const editpassword = {
        password: (store.getState().form.password),
      };
      // appel axios
      axios.put('http://54.85.18.78/api/v1/secured/users/edit/password', {
        editpassword,
      })
        .then((response) => {
          console.log(response);
          store.dispatch(submitEditPassword(response.data.submitedPassword));
        })
        .catch((error) => {
        // console.error permet d'afficher une erreur dans la console
          console.error(error);
        })
        .finally();
      break;
    }
    case DO_DELETE_USER: {
      // appel axios
      axios.delete('http://54.85.18.78/api/v1/secured/users/delete')
        .then((response) => {
          console.log(response);
          store.dispatch(submitDeleteUser(response.data.logged));
        })
        .catch((error) => {
        // console.error permet d'afficher une erreur dans la console
          console.error(error);
        })
        .finally();
      break;
    }

    default:
      // je laisse passer les autres actions
      next(action);
  }
};

export default userMiddleware;
