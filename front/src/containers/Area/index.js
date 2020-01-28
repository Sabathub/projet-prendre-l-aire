import { connect } from 'react-redux';
import { getAreaBySlug } from 'src/utils/selectors';
import Area from 'src/components/Area';


const mapStateToProps = (state, ownProps) => {
  const area = getAreaBySlug(ownProps.match.params.slug, state.area.areas);

  return ({
    areaData: area,
    loading: state.area.loading,
    found: area !== undefined,

  });
};

const mapDispatchToProps = () => ({
});

const AreaContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Area);

export default AreaContainer;
