import { connect } from 'react-redux';
import { getAreaBySlug } from 'src/utils/selectors';
import Area from 'src/components/Area';

import { stockImageToState, changeInput, doComment } from 'src/store/actions';


const mapStateToProps = (state, ownProps) => {
  const area = getAreaBySlug(ownProps.match.params.slug, state.area.areas);

  return ({
    areaData: area,
    arealoading: state.area.arealoading,
    highwayloading: state.map.highwayloading,
    found: area !== undefined,
    file: state.comment.file,
    logged: state.user.logged,
    commentValue: state.form.commentContent,
  });
};

const mapDispatchToProps = (dispatch) => ({
  doImage: (file) => {
    dispatch(stockImageToState(file));
  },
  changeInputValue: (value, name) => {
    dispatch(changeInput(value, name));
  },
  newContent: () => {
    dispatch(doComment());
  },
});

const AreaContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Area);

export default AreaContainer;
