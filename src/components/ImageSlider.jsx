import React from 'react';
import './ImageSlider.css';

const ImageSlider = ({ images }) => {
  return (
    <div className="custom-slider-container">
      <div className="custom-slider">
        {images.map((image, index) => (
          <div key={index} className="custom-slide">
            {image}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
