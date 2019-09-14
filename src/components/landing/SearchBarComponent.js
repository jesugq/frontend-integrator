import React, { Component } from 'react';
import { Carousel, CarouselItem, CarouselIndicators, CarouselCaption, CarouselControl } from 'reactstrap';
import './SearchBarComponent.css'

class SearchBar extends Component {
    // State holds the values of the carousel items.
    constructor(props) {
        super(props);

        this.state = {
            items: [{"id": 0, "src":"Sample", "altText":"Sample", "caption":"Sample"}, {"id": 1, "src":"Sample", "altText":"Sample", "caption":"Sample"}],
            activeIndex: 0
        };
        
        this.previous  = this.previous.bind(this);
        this.next      = this.next.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited  = this.onExited.bind(this);
        this.goIndex   = this.goIndex.bind(this);
    }

    // Carousel Animation Handlers
    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.state.items.length-1 : this.state.activeIndex-1
        this.setState({activeIndex: nextIndex});
    }
    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === this.state.items.length-1 ? 0 : this.state.activeIndex+1
        this.setState({activeIndex: nextIndex});
    }
    goIndex(newIndex) {
        if (this.animating) return;
        this.setState({activeIndex: newIndex});
    }
    onExiting() {this.animating = true;}
    onExited()  {this.animating = false;}

    // Fetch the information required for display.
    componentDidMount() {
        let url = "http://localhost:3001/carousel";
        fetch(url)
            .then(response => response.json())
            .then(data => {
                let items = data.map((item) => {
                    return(item);
                });
                this.setState({items});
            });
    }

    // Creation of the slides.
    renderSlides() {
        const slides = this.state.items.map((item) => {
            return (
                <CarouselItem onExiting={this.onExiting} onExited={this.onExited} key={item.id}>
                    <img className="carouselImage" src={item.src} alt={item.altText} />
                    <CarouselCaption captionHeader={item.caption} />
                </CarouselItem>
            );
        });
        return slides;
    }

    // The Search Bar shows a background image and title supplied by the server.
    render() {
        const { activeIndex } = this.state;
        const slides = this.renderSlides();

        return (
            <div className="carouselBackground">
            <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous}>
                <CarouselIndicators items={this.state.items} activeIndex={activeIndex} onClickHandler={this.goIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Anterior" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Siguiente" onClickHandler={this.next} />
            </Carousel>
            </div>
        );
    }
}

export default SearchBar;