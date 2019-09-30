import React, { Component } from 'react';
import CarouselFeed from './CarouselFeedComponent';
import Qualities from './QualitiesComponent';
import SearchBar from './SearchBarComponent';

class Landing extends Component {
    // Calls upon the other eight components of the landing page.
    render (){
        return(
            <div>
                <CarouselFeed />
                <SearchBar />
                <Qualities />
            </div>
        );
    }
}

export default Landing;