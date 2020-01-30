import axios from 'axios';

import {
  DO_EDIT_USERNAME,
  DO_EDIT_PASSWORD,
  DO_DELETE_USER,
} from '../actions';


const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case DO_EDIT_USERNAME: {
      const token = window.localStorage.getItem('token');
      // appel axios
      axios.patch('http://54.85.18.78/api/v1/secured/users/edit', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        username: (store.getState().form.username),
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          // console.error permet d'afficher une erreur dans la console
          console.error(error);
        })
        .finally();
      break;
    }
    case DO_EDIT_PASSWORD: {
      const token = window.localStorage.getItem('token');
      // appel axios
      axios.put('http://54.85.18.78/api/v1/secured/users/edit/password', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        password: (store.getState().form.password),
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
        // console.error permet d'afficher une erreur dans la console
          console.error(error);
        })
        .finally();
      break;
    }
    case DO_DELETE_USER: {
      const token = window.localStorage.getItem('token');
      // appel axios
      axios.delete('http://54.85.18.78/api/v1/secured/users/delete', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        password: (store.getState().form.password),
      })
        .then((response) => {
          console.log(response);
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
