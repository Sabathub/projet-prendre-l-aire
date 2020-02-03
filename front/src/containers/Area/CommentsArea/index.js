import { connect } from 'react-redux';

import CommentsArea from 'src/components/Area/CommentsArea';

import { changeInput, doComment, addImage, commentAreaId } from 'src/store/actions';


const mapStateToProps = (state) => ({
  contentValue: state.form.content,
});

const mapDispatchToProps = (dispatch) => ({
  changeInputValue: (value, name) => {
    dispatch(changeInput(value, name));
  },
  addArea: (areaId) => {
    dispatch(commentAreaId(areaId));
  },
  newContent: () => {
    dispatch(doComment());
  },
  doImage: (file) => {
    dispatch(addImage(file));
  },
});

const CommentsAreaContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommentsArea);

export default CommentsAreaContainer;
