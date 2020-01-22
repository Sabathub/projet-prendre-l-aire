import { connect } from 'react-redux';

import Profile from 'src/components/Profile';


const mapStateToProps = (state) => {
  return {
    username: state.user.username,
    avatar: state.user.avatar,
    name: state.user.name,
    email: state.user.email,
  };
};

const mapDispatchToProps = () => ({
});

const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);

export default ProfileContainer;
