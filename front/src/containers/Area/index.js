import { connect } from 'react-redux';
import { getAreaBySlug } from 'src/utils/selectors';
import Area from 'src/components/Area';

import {
  changeInput,
  receiveAreaName,
  doFailPassword,
  updateGallery,
  stopLoadingAreaData,
} from 'src/store/actions';


const mapStateToProps = (state, ownProps) => {
  const area = getAreaBySlug(ownProps.match.params.slug, state.area.areas);
  stopLoadingAreaData();

  return ({
    areaData: area,
    areas: state.area.areas,
    arealoading: state.area.arealoading,
    picturedCommentsLoading: state.area.picturedCommentsLoading,
    areaDataLoading: state.area.areaDataLoading,
    highwayloading: state.map.highwayloading,
    found: area !== undefined,
    logged: state.user.logged,
    picturedComments: state.area.commentsWithImages,
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
  fetchGallery: (commentsWithImages) => {
    dispatch(updateGallery(commentsWithImages));
  },
});

const AreaContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Area);

export default AreaContainer;
