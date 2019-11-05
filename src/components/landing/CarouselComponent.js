/* eslint-disable */
import React, { Component } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Landing.css";
import Slider from 'react-slick';

class CarouselComponent extends Component {
  createStyles() {
    return {
      carousel: {
        margin: '0 auto 0px 0',
      },
      caption: {
        fontSize: '36px', 
        textAlign: 'center',
        border: '2px dashed #12413',
        verticalAlign: 'middle',
      }
    };
  }

  createSettings() {
    return {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidestoScroll: 2,
      autoplay: true,
      autoplaySpeed: 3000,
      centerMode: false,
      adaptiveHeight: true,
      arrows: false,
      responsive: [{
        settings: {
          mobileFirst: true,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          centerMode: false,
          variableWidth: true,
          focusOnSelect: true
        }
      }],
    };
  }

  renderCarousel(styles, settings) {
    var carousel = null;
    var images = [];

    for (const image of this.props.carousel) {
      images.push(
        <div key={image}>
          <img src={image} alt={image} />
        </div>
      );
    }

    carousel = (
      <div style={styles.carousel}>
        <Slider {...settings}>
          {images}
        </Slider>
      </div>
    );
    return carousel;
  }

  render() {
    const styles = this.createStyles();
    const settings = this.createSettings();
    const carousel = this.renderCarousel(styles, settings);

    return (
      <div>
        {carousel}
      </div>
    );
  }
}
  
export default CarouselComponent;