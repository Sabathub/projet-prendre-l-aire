import { connect } from 'react-redux';

import Profile from 'src/components/Profile';


// Grâce à connect, on a accès au state
// Ici, on gère les datas
const mapStateToProps = (state) => {
  return {
    username: state.user.username,
    avatar: state.user.avatar,
    name: state.user.name,
    email: state.user.email,
  };
};

// Ici, on gère les actions
const mapDispatchToProps = () => ({
});

// Avec connect, on relie le container au composant
const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);

export default ProfileContainer;