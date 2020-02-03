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
          window.localStorage.setItem('profileData', JSON.stringify(response.data));
          const profileData = JSON.parse(window.localStorage.getItem('profileData'));
          store.dispatch(receiveProfileData(profileData));
          alert('Votre pseudo a bien été modifié');
        })
        .catch((error) => {
          // console.error permet d'afficher une erreur dans la console
          console.error(error);
          alert('Une erreur s\'est produite, réesayez.');
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
          alert('Votre mot de passe a bien été modifié');
        })
        .catch((error) => {
        // console.error permet d'afficher une erreur dans la console
          console.error(error);
          alert('Une erreur s\'est produite, réesayez.');
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
          alert('Votre compte a été supprimé');
        })
        .catch((error) => {
        // console.error permet d'afficher une erreur dans la console
          console.error(error);
          alert('Une erreur s\'est produite, réesayez.');
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
