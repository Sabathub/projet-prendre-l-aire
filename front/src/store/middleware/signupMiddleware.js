import axios from 'axios';

import {
  DO_SIGNUP,
  logUser,
  submitUser,
  receiveProfileData,
  doFailPassword,
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
                  window.localStorage.setItem('profileData', JSON.stringify(response3.data));
                  const profileData = JSON.parse(window.localStorage.getItem('profileData'));
                  store.dispatch(receiveProfileData(profileData));
                })
                .catch((error3) => {
                  console.log('Error', error3);
                });
            })
            .catch((error2) => {
              console.log('Error', error2);
              if (error2.response.status === 401) {
                alert("L'email et/ou le mot de passe que vous avez saisi(s) est/sont incorrect(s) !");
                store.dispatch(doFailPassword());
              }
              else {
                alert('Une erreur indépendante de notre volonté s\'est produite, veuillez réesayez plus tard.');
                store.dispatch(doFailPassword());
              }
            });
        })
      // Erreur
        .catch((error1) => {
          console.log('Error1', error1);
          if (error1.response.status === 500) {
            alert('Le pseudo et/ou l\'email que vous avez saisi(s) est/sont déjà associé(s) à un compte existant !');
            store.dispatch(doFailPassword());
          }
          else {
            alert('Une erreur indépendante de notre volonté s\'est produite, veuillez réesayez plus tard.');
            store.dispatch(doFailPassword());
          }
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
