import React, { Component } from 'react';
import CarouselFeed from './CarouselFeedComponent';
import Qualities from './QualitiesComponent';
import SearchBar from './SearchBarComponent';

class Landing extends Component {
    /* Calls upon the other eight components of the landing page.
        1. Navigation Bar Component
        3. CarouselFeed Component
        2. Search Bar Component
        3. Qualities Component
        4. Locations Component
        5. Subjects Component
        6. Register Component
        7. About Us Component
        8. Copyright Component
    These names are merely suggestions, feel free to follow your own
     naming conventions. */
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