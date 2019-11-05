import React, { Component } from 'react';

import { mockLanding, fetchLanding } from '../../services/LandingService';
import CarouselComponent from './CarouselComponent';
import QualitiesComponent from './QualitiesComponent';
import ShowcaseComponent from './ShowcaseComponent';

class LandingComponent extends Component {
  timer = null;

  constructor(props) {
    super(props);
    this.state = {
      landing: mockLanding(),
      fetched: false,
    };

    this.setStateLanding = this.setStateLanding.bind(this);
  }

  mountTimer() {
    this.timer = setInterval(() => fetchLanding(this.setStateLanding), 2000);
  }

  unmountTimer() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  setStateLanding(landing, fetched){
    this.setState({landing, fetched});
    if (!this.state.fetched) { this.mountTimer(); }
    else { this.unmountTimer(); }
  }
  
  componentDidMount() {
    fetchLanding(this.setStateLanding);
  }

  componentWillUnmount() {
    this.unmountTimer();
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