import axios from 'axios';

import { DO_LOGIN, logUser, receiveProfileData } from 'src/store/actions';


const loginMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case DO_LOGIN: {
      // Ouvrir une connexion avec le serveur
      axios.post('http://54.85.18.78/api/v1/login_check', {
        email: (store.getState().form.email),
        password: (store.getState().form.password),
      })
      // succès
        .then((response1) => {
        // Dispatch d'une action pour changer le user
        // store.dispatch(changeUserName(response.data));
          console.log('Response', response1);
          store.dispatch(logUser(response1.data.logged));
          window.localStorage.setItem('token', response1.data.token);
          const { token } = response1.data;
          axios.defaults.headers.Authorization = `Bearer ${token}`;
          axios.get('http://54.85.18.78/api/v1/secured/users/profile')
            .then((response2) => {
              console.log('Response', response2);
              window.localStorage.setItem('profileData', JSON.stringify(response2.data));
              const profileData = JSON.parse(window.localStorage.getItem('profileData'));
              store.dispatch(receiveProfileData(profileData));
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

export default loginMiddleware;
