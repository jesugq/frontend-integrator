import React, { Component } from 'react';

import { mockLanding, fetchLanding } from '../../services/LandingService';
import CarouselComponent from './CarouselComponent';
import QualitiesComponent from './QualitiesComponent';
import ShowcaseComponent from './ShowcaseComponent';

class LandingComponent extends Component {

  abortController = new AbortController();

  constructor(props) {
    super(props);
    this.state = {
      landing: mockLanding(),
    };

    this.setStateLanding = this.setStateLanding.bind(this);
  }

  setStateLanding(landing, fetched){
    this.setState({landing, fetched});
  }
  
  componentDidMount() {
    fetchLanding(this.setStateLanding, this.abortController.signal);
  }

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