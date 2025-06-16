// src/components/Carousel.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MyCarousel = () => {
  const images = [
    {
      src: "https://image.jimcdn.com/app/cms/image/transf/dimension=513x10000:format=jpg/path/s277021aa972bd28e/image/ib7bc59b5dcef3e49/version/1694328633/photo-paysage.jpg",
      alt: "Hong Kong",
      legend: "Hong Kong"
    },
    {
      src: "https://www.photographiesdelannee.com/wp-content/uploads/2021/06/photographie-we-june.jpg",
      alt: "Macao",
      legend: "Macao"
    },
    {
      src: "https://www.pix-star.com/blog/wp-content/uploads/2021/05/digital-photo-frames.jpg",
      alt: "Japon",
      legend: "Japon"
    },
    {
      src: "https://insidetaiwan.net/wp-content/uploads/2024/05/photo-of-palm-tree-with-string-light-near-ocean-at-night-wallpaper-preview.jpg",
      alt: "Las Vegas",
      legend: "Las Vegas"
    }
  ];

  return (
    <div className="carousel-wrapper" style={{ maxWidth: "800px", margin: "0 auto" }}>
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        showStatus={false}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img 
              src={image.src} 
              alt={image.alt} 
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
            <p className="legend" style={{ backgroundColor: "rgba(0,0,0,0.6)", fontSize: "1.2rem" }}>
              {image.legend}
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MyCarousel;