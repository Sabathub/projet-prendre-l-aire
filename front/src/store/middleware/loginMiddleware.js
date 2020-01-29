import axios from 'axios';

import { DO_LOGIN, logUser } from 'src/store/actions';


const loginMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case DO_LOGIN: {
      // Ouvrir une connexion avec le serveur
      axios.post('http://54.85.18.78/api/v1/login_check', {
        email: (store.getState().form.email),
        password: (store.getState().form.password),
      })
      // succès
        .then((response) => {
        // Dispatch d'une action pour changer le user
        // store.dispatch(changeUserName(response.data));
          console.log('Response', response);
          store.dispatch(logUser(response.data.logged, response.data.token));
        })
      // Erreur
        .catch((error) => {
          console.log('Error', error);
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
