import React, { Component } from 'react';
import { Carousel } from 'reactstrap';

class SearchBar extends Component {
    // State holds the values of the carousel items.
    constructor(props) {
        super(props);

        this.state = {
            carousel: null,
            activeIndex: 0
        };
        
        this.previousSlide = this.previousSlide.bind(this);
        this.nextSlide     = this.nextSlide.bind(this);
        this.enteringSlide = this.enteringSlide.bind(this);
        this.enteredSlide  = this.enteredSlide.bind(this);
    }

    // Carousel Animation Handlers
    previousSlide() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0? items.length-1 : this.state.activeIndex
        this.setState({activeIndex: nextIndex});
    }
    nextSlide() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length-1 ? 0 : this.state.activeIndex
        this.setState({activeIndex: nextIndex});
    }
    enteringSlide() {this.animating = true;}
    enteredSlide()  {this.animating = false;}

    // Fetch the information required for display.
    componentDidMount() {
        let url = "http://localhost:3001/carousel";
        fetch(url)
            .then(response => response.json())
            .then(data => {
                let carousel = data.map((item) => {
                    return(item);
                });
                this.setState({carousel});
            });
    }

    // The Search Bar shows a background image and title supplied by the server.
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default SearchBar;