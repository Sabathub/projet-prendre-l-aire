import { connect } from 'react-redux';
import { getAreaBySlug } from 'src/utils/selectors';
import Area from 'src/components/Area';

import { stockImageToState, changeInput, doComment, receiveAreaName, doFailPassword } from 'src/store/actions';


const mapStateToProps = (state, ownProps) => {
  const area = getAreaBySlug(ownProps.match.params.slug, state.area.areas);

  return ({
    areaData: area,
    arealoading: state.area.arealoading,
    highwayloading: state.map.highwayloading,
    found: area !== undefined,
    logged: state.user.logged,
  });
};

const mapDispatchToProps = (dispatch) => ({
  changeInputValue: (value, name) => {
    dispatch(changeInput(value, name));
  },
  getAreaName: (areaname) => {
    dispatch(receiveAreaName(areaname));
  },
  clearForm: () => {
    dispatch(doFailPassword());
  },
});

const AreaContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Area);

export default AreaContainer;
