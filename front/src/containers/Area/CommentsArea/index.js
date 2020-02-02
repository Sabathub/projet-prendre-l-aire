import { connect } from 'react-redux';

import CommentsArea from 'src/components/Area/CommentsArea';

import { changeInput, doComment } from 'src/store/actions';


const mapStateToProps = (state) => ({
  contentValue: state.form.content,
});

const mapDispatchToProps = (dispatch) => ({
  changeInputValue: (value, name) => {
    dispatch(changeInput(value, name));
  },
  newContent: () => {
    dispatch(doComment());
  },
});

const CommentsAreaContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommentsArea);

export default CommentsAreaContainer;
