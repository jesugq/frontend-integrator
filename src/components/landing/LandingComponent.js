// Common imports.
import React, { Component } from 'react';

// Project imports.
import { mockLanding, fetchLanding } from '../../services/LandingService';
import CarouselComponent from './CarouselComponent';
import QualitiesComponent from './QualitiesComponent';
import ShowcaseComponent from './ShowcaseComponent';

/**
 * Landing is the component responsible for nesting each individual part
 * of the landing page, and passing the contents of the backend server to them.
 */
class LandingComponent extends Component {

  // Abort Controller denies the fetch call if the component is unloaded.
  abortController = new AbortController();

  // Constructor calls Landing to be the mock version while the real one loads.
  constructor(props) {
    super(props);
    this.state = {
      landing: mockLanding(),
    };
    this.setStateLanding = this.setStateLanding.bind(this);
  }

  // This is the dispatch function sent to the service.
  setStateLanding(landing, fetched){
    this.setState({landing, fetched});
  }

  // Upon loading, the component calls for a fetch.
  componentDidMount() {
    fetchLanding(this.setStateLanding, this.abortController.signal);
  }

  // Unpon unloading, the fetch call is cancelled.
  componentWillUnmount() {
    this.abortController.abort('Unmounted LandingComponent');
  }

  render (){
    return(
      <div>
        <CarouselComponent carousel={this.state.landing.Carrousel} />
        <QualitiesComponent sections={this.state.landing.Sections} />
        <ShowcaseComponent topics={this.state.landing.ShowcasedTopicsIDs} />
      </div>
    );
  }
}
  
export default LandingComponent;