import axios from 'axios';

import { DO_SIGNUP, submitUser } from 'src/store/actions';

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
        .then((response) => {
        // Dispatch d'une action pour changer le user
        // store.dispatch(changeUserName(response.data));
          console.log('Response', response);
          store.dispatch(submitUser(response.data));
          alert('Félicitations, votre inscription a été validée. Vous pouvez à présent vous connecter :)');
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

export default signupMiddleware;
