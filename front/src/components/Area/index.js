import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route } from 'react-router-dom';
import {
  Grid,
  Image,
  Header,
  Segment,
  Rating,
  Button,
} from 'semantic-ui-react';
import {
  FaShoppingCart,
  FaWifi,
  FaUtensils,
  FaBaby,
  FaShower,
  FaRestroom,
  FaFutbol,
  FaEuroSign,
  FaTruck,
  FaHotel,
  FaPlug,
  FaSmoking,
} from 'react-icons/fa';
import {
  GiFlatTire,
  GiShop,
  GiElectric,
  GiCaravan,
  GiBookshelf,
} from 'react-icons/gi';

// import Carousel component
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import CommentsArea from 'src/containers/Area/CommentsArea';
// import Zoomarea component
import Zoomarea from './Zoomarea';


import './area.scss';

class Area extends React.Component {
  componentDidUpdate(prevProps) {
    const {
      areas,
      arealoading,
      areaDataLoading,
      areaData,
      fetchGallery,
    } = this.props;

    const Refresh = ({ path = '/' }) => (
      <Route
        path={path}
        component={({ history, location, match }) => {
          history.replace({
            ...location,
            pathname: location.pathname.substring(match.path.length),
          });
          return null;
        }}
      />
    );

    if ((areas !== prevProps) && !arealoading && !areaDataLoading) {
      const areaDatas = areaData;
      const commentsWithImages = areaDatas.filter(() => areaData.comments.picture !== null);
      fetchGallery(commentsWithImages);
      return <Refresh path="/areas/:slug" />;
    }
  }

  componentWillUnmount() {
    const { clearForm } = this.props;
    clearForm();
  }


  render() {
    const {
      areaData,
      areaDataLoading,
      arealoading,
      highwayloading,
      // doImage,
      logged,
      // found,
      getAreaName,
      picturedComments,
      picturedCommentsLoading,
      fetchGallery,
    } = this.props;

    /* const handleFile = (evt) => {
    evt.preventDefault();
    const file = evt.target.files[0];
    console.log(file);
    doImage(file);
  }; */

    /* const handleUpload = (evt) => {
    evt.preventDefault();
    console.log('upload');
  } */

    if (!areaDataLoading && !arealoading && !highwayloading) {
      const areaDatas = areaData;
      const commentsWithImages = areaDatas.filter(() => areaData.comments.picture.length !== 0);
      fetchGallery(commentsWithImages);
    }
    const handleClick = () => {
      const areaname = areaData.name;
      getAreaName(areaname);
    };

    if (!areaDataLoading && !arealoading === false) {
      console.log('picturedComments', picturedComments);
    }

    return (

      <>
        {arealoading && highwayloading && <div>Veuillez patienter</div>}
        {/* {!loading && found && ( */}
        {!arealoading && !highwayloading && (
          <>
            <Segment id="areaname" compact>
              <Header as="h2">{areaData.name}</Header>
            </Segment>

            <Grid centered stackable>
              <Grid.Row>
                <Grid.Column width={5}>
                  <Zoomarea latitude={areaData.latitude} longitude={areaData.longitude} />
                </Grid.Column>
                <Grid.Column width={5} textAlign="center" verticalAlign="middle">
                  {!arealoading && !highwayloading && areaData.averageRate != null && (
                  <Segment basic>
                    <Rating icon="star" defaultRating={Math.round(areaData.averageRate)} maxRating={5} disabled />
                    <p id="rating">Note moyenne des avis</p>
                  </Segment>
                  )}
                  {!arealoading && !highwayloading && areaData.averageRate == null && (
                  <Segment basic>
                    <Rating icon="star" defaultRating={0} maxRating={5} disabled />
                    <p id="rating">Soyez le premier à noter cette aire<br />dans l'espace commentaire</p>
                  </Segment>
                  )}
                  <Segment id="area-infos">
                    <p id="highway">Autoroute {areaData.destinations[0].highways.name}</p>
                    <p id="direction">Direction : {areaData.destinations[0].name}</p>
                    <p id="km">{Math.round(areaData.kilometers)} km</p>
                  </Segment>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                {areaData.gasStation != null && (
                <Grid.Column width={5}>
                  <Segment className="services" textAlign="center">
                    <Header as="h3">Station service</Header>
                  </Segment>
                  <Segment.Group>
                    <Segment>
                      <Image centered src={areaData.gasStation.brandPicture} alt={areaData.gasStation.name} size="small" />
                    </Segment>
                    {areaData.gasPrices.map((gasPrice) => (
                      <Segment.Group horizontal key={gasPrice.id}>
                        <Segment textAlign="center" className="gasname">{gasPrice.gasType.name}</Segment>
                        <Segment textAlign="center" className="gasprice">{gasPrice.price} €</Segment>
                      </Segment.Group>
                    ))}
                  </Segment.Group>
                </Grid.Column>
                )}
                {areaData.services.length !== 0 && (
                <Grid.Column width={6}>
                  <Segment className="services" textAlign="center">
                    <Header as="h3">Services proposés</Header>
                  </Segment>
                  <Segment textAlign="center" className="flex">
                    {areaData.services.map((service) => {
                      const ServiceIcon = service.icon;
                      if (service.icon === 'FaRestroom') {
                        return (
                          <div className="iconlabelled">
                            <FaRestroom className="servicesIcon" /><p>{service.name}</p>
                          </div>
                        );
                      }
                      if (service.icon === 'FaBaby') {
                        return (
                          <div className="iconlabelled">
                            <FaBaby className="servicesIcon" /><p>{service.name}</p>
                          </div>
                        );
                      }
                      if (service.icon === 'FaShower') {
                        return (
                          <div className="iconlabelled">
                            <FaShower className="servicesIcon" /><p>{service.name}</p>
                          </div>
                        );
                      }
                      if (service.icon === 'FaEuroSign') {
                        return (
                          <div className="iconlabelled">
                            <FaEuroSign className="servicesIcon" /><p>{service.name}</p>
                          </div>
                        );
                      }
                      if (service.icon === 'FaUtensils') {
                        return (
                          <div className="iconlabelled">
                            <FaUtensils className="servicesIcon" /><p>{service.name}</p>
                          </div>
                        );
                      }
                      if (service.icon === 'FaFutbol') {
                        return (
                          <div className="iconlabelled">
                            <FaFutbol className="servicesIcon" /><p>{service.name}</p>
                          </div>
                        );
                      }
                      if (service.icon === 'FaWifi') {
                        return (
                          <div className="iconlabelled">
                            <FaWifi className="servicesIcon" /><p>{service.name}</p>
                          </div>
                        );
                      }
                      if (service.icon === 'GiFlatTire') {
                        return (
                          <div className="iconlabelled">
                            <GiFlatTire className="servicesIcon" /><p>{service.name}</p>
                          </div>
                        );
                      }
                      if (service.icon === 'GiShop') {
                        return (
                          <div className="iconlabelled">
                            <GiShop className="servicesIcon" /><p>{service.name}</p>
                          </div>
                        );
                      }
                      if (service.icon === 'GiElectric') {
                        return (
                          <div className="iconlabelled">
                            <GiElectric className="servicesIcon" /><p>{service.name}</p>
                          </div>
                        );
                      }
                      if (service.icon === 'GiCaravan') {
                        return (
                          <div className="iconlabelled">
                            <GiCaravan className="servicesIcon" /><p>{service.name}</p>
                          </div>
                        );
                      }
                      if (service.icon === 'GiBookshelf') {
                        return (
                          <div className="iconlabelled">
                            <GiBookshelf className="servicesIcon" /><p>{service.name}</p>
                          </div>
                        );
                      }
                      if (service.icon === 'FaTruck') {
                        return (
                          <div className="iconlabelled">
                            <FaTruck className="servicesIcon" /><p>{service.name}</p>
                          </div>
                        );
                      }
                      if (service.icon === 'FaPlug') {
                        return (
                          <div className="iconlabelled">
                            <FaPlug className="servicesIcon" /><p>{service.name}</p>
                          </div>
                        );
                      }
                      if (service.icon === 'FaSmoking') {
                        return (
                          <div className="iconlabelled">
                            <FaSmoking className="servicesIcon" /><p>{service.name}</p>
                          </div>
                        );
                      }
                      if (service.icon === 'FaHotel') {
                        return (
                          <div className="iconlabelled">
                            <FaHotel className="servicesIcon" /><p>{service.name}</p>
                          </div>
                        );
                      }
                      if (service.icon === 'FaShoppingCart') {
                        return (
                          <div className="iconlabelled">
                            <FaShoppingCart className="servicesIcon" /><p>{service.name}</p>
                          </div>
                        );
                      }
                      if (service.icon === 'Picnic') {
                        return (
                          <div className="iconlabelled">
                            <img className="servicesIcon" src="https://image.flaticon.com/icons/svg/1964/1964967.svg" alt="" width="31px" display="inline" /><p>{service.name}</p>
                          </div>
                        );
                      }

                      return (
                        <div className="iconlabelled">
                          {ServiceIcon}
                        </div>
                      );
                    })}
                  </Segment>
                </Grid.Column>
                )}
                {areaData.restaurants.length !== 0 && (
                <Grid.Column width={5}>
                  <Segment className="services" textAlign="center">
                    <Header as="h3">Restaurants</Header>
                  </Segment>
                  <Segment className="flex">
                    {areaData.restaurants.map((restaurant) => (
                      <Image className="restaurant-brand" centered alt={restaurant.name} src={restaurant.brandPicture} key={restaurant.id} />
                    ))}
                  </Segment>
                </Grid.Column>
                )}
              </Grid.Row>

              <Grid.Row>
                <Grid.Column width={8} textAlign="center">
                  <Segment className="services">
                    <Header as="h3">Galerie d'images</Header>
                  </Segment>
                  <Carousel infiniteLoop useKeyboardArrows dynamicHeight>
                    {/*{!picturedCommentsLoading && !arealoading && !highwayloading && picturedComments.map((comment) => {
                      const url = `http://54.85.18.78${comment.picture}`;
                      console.log(url);
                      return (
                        <div>
                          <img src={url} alt="" />
                        </div>
                      );
                    })}*/}
                  </Carousel>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Button id="suggest" as={Link} to="/contact" size="mini" color="orange" onClick={handleClick}>Suggérer une modification/Signaler une erreur</Button>
            <CommentsArea comments={areaData.comments} logged={logged} areaId={areaData.id} />
          </>
        )}
        {/* {!found && <Redirect to="/not-found" />} */}
      </>
    );
  }
}

Area.propTypes = {
  areaData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    zipCode: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    kilometers: PropTypes.string.isRequired,
    latitude: PropTypes.string.isRequired,
    longitude: PropTypes.string.isRequired,
    averageRate: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      rate: PropTypes.number.isRequired,
      user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        email: PropTypes.string.isRequired,
      }).isRequired,
    })).isRequired,
    gasStation: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      brandPicture: PropTypes.string.isRequired,
    }).isRequired,
    gasPrices: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      price: PropTypes.string.isRequired,
      gasType: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired,
    })).isRequired,
    restaurants: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })).isRequired,
    services: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })).isRequired,
    destinations: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      highways: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired,
    })).isRequired,
  }),
  arealoading: PropTypes.bool.isRequired,
  areaDataLoading: PropTypes.bool.isRequired,
  picturedCommentsLoading: PropTypes.bool.isRequired,
  highwayloading: PropTypes.bool.isRequired,
  // found: PropTypes.bool.isRequired,
  doImage: PropTypes.func.isRequired,
  logged: PropTypes.bool.isRequired,
  getAreaName: PropTypes.func.isRequired,
  clearForm: PropTypes.func.isRequired,
  fetchGallery: PropTypes.func.isRequired,
};

Area.defaultProps = {
  // si on met "{}" (objet vide) on ne passe pas la validation, car chaque élement est obligatoire
  // "null" => on ne fournit pas d'objet
  // React commence par utiliser les defaultProps AVANT de valider les props
  areaData: null,
};

export default Area;
