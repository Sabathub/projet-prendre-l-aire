import axios from 'axios';

import {
  DO_SIGNUP,
  logUser,
  submitUser,
  receiveProfileData,
} from 'src/store/actions';

const signupMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case DO_SIGNUP: {
      const user = {
        username: (store.getState().form.username),
        email: (store.getState().form.email),
        password: (store.getState().form.password),
      };
      // Ouvrir une connexion avec le serveur
      axios.post('http://54.85.18.78/api/v1/register', {
        user,
      })
      // succès
        .then((response1) => {
        // Dispatch d'une action pour changer le user
        // store.dispatch(changeUserName(response.data));
          console.log('Response', response1);
          store.dispatch(submitUser(response1.data.submited));
          axios.post('http://54.85.18.78/api/v1/login_check', {
            email: (store.getState().form.email),
            password: (store.getState().form.password),
          })
            .then((response2) => {
              console.log('Response', response2);
              store.dispatch(logUser(response2.logged));
              window.localStorage.setItem('token', response2.data.token);
              const { token } = response2.data;
              axios.defaults.headers.Authorization = `Bearer ${token}`;
              axios.get('http://54.85.18.78/api/v1/secured/users/profile')
                .then((response3) => {
                  console.log('Response', response3);
                  alert('Félicitations, votre inscription a été validée. Vous êtes maintenant connecté :)');
                  store.dispatch(receiveProfileData(response3.data));
                  window.localStorage.setItem('id', response2.data.id);
                  window.localStorage.setItem('username', response2.data.username);
                  window.localStorage.setItem('email', response2.data.email);
                  window.localStorage.setItem('comments', JSON.stringify(response2.data.comments));
                })
                .catch((error3) => {
                  console.log('Error', error3);
                  alert('Une erreur s\'est produite, réesayez.');
                });
            })
            .catch((error2) => {
              console.log('Error', error2);
              alert('Une erreur s\'est produite, réesayez.');
            });
        })
      // Erreur
        .catch((error1) => {
          console.log('Error', error1);
          alert('Une erreur s\'est produite, réesayez.');
        })
      // Dans tous les cas
        .finally();

      break;
    }

    default:
      next(action);
      break;
  }
};

export default signupMiddleware;
