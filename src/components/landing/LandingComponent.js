// Common imports.
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Project imports.
// import { mockLanding, fetchLanding } from '../../services/LandingService';
import { fetchLanding } from '../../store/actions/landingAction';
import CarouselComponent from './CarouselComponent';
import QualitiesComponent from './QualitiesComponent';
import ShowcaseComponent from './ShowcaseComponent';

/**
 * Landing is the component responsible for nesting each individual part
 * of the landing page, and passing the contents of the backend server to them.
 */
class LandingComponent extends Component {

  // The backend is immediately fetched upon loading this component.
  componentDidMount() {
    this.props.fetchLanding();
  }

  /**
   * Render of the Landing Component. It calls the subcomponents that comprise
   * the Landing, such as the Carousel or the Qualities. For simplicity sake,
   * the components only receive the data they require, while Landing gets
   * all of the data for itself.
   */
  render() {
    return (
      <div>
        <CarouselComponent
          carousel={this.props.landing.data.Carrousel} />
        <QualitiesComponent
          sections={this.props.landing.data.Sections} />
        <ShowcaseComponent
          topics={this.props.landing.data.ShowcasedTopicsIDs} />
      </div>
    );
  }
}

/**
 * Mapping the state of the Redux store to the Props of Landing Component.
 * @param {state} state 
 */
const mapStateToProps = (state) => {
  return {
    ...state,
  };
}

/**
 * Mapping the dispatch function to a local function in Landing Component.
 * @param {dispatch} dispatch 
 */
const mapDispatchToProps = (dispatch) => {
  return {
    fetchLanding: () => dispatch(fetchLanding()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingComponent);