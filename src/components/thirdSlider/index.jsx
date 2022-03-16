import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
// 1.
import Slider from "react-slick";

import "./imageSlider.css";

// 2.
const NextArrow = ({ onClick }) => {
  return (
    <div className='nextArrow' onClick={onClick}>
      <p>next</p>
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className='prevArrow' onClick={onClick}>
      <p>prev</p>
    </div>
  );
};

const ImageSlider = ({ images, slidesToShow = 5 }) => {
    // 3.
  const [imageIndex, setImageIndex] = useState(0);

    // 4.
  const settings = {
    centerMode: true,
    infinite: true,
    dots: false,
    speed: 300,
    slidesToShow: slidesToShow,
    centerPadding: "0",
    swipeToSlide: true,
    focusOnSelect: true,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1490,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

    // 5.
  const templateImages = images.map((image, idx) => {
    return (
      <div
        className={idx === imageIndex ? "activeSlide" : "slide-3d"}
        key={image.id}
      >
        <div className="slideWrapper">
          {image.code ? image.code : <div style={{backgroundImage: `url(${image.src})`}} className='slider-div-background' ></div>}
        </div>
      </div>
    );
  });

  return <Slider {...settings}>{templateImages}</Slider>;
};

export default ImageSlider;