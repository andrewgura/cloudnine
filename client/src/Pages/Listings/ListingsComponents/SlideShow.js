import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
var Carousel = require('react-responsive-carousel').Carousel;

const SlideShow = (props) => {
  const images = JSON.parse(JSON.stringify(props.images))
    return (
      <Carousel showThumbs={false} infiniteLoop={true}>
          {images.splice(0,4).map(item => {
            return (
              <div>
                  <img src={item.url} />
              </div>
            )
          })}
      </Carousel>
    )
}

export default SlideShow;
