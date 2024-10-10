import React from 'react';
import Slider from 'react-slick';
import './Carousel.css'; 

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200, // Large screens
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992, // Medium screens (Tablets)
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Small screens (Phones)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576, // Extra small screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const shoeImages = [
    'https://m.media-amazon.com/images/I/61Uh7P5bIUL._AC_SY400_.jpg', 
    'https://m.media-amazon.com/images/I/71OIADWhvXL._AC_SY400_.jpg',
    'https://m.media-amazon.com/images/I/71cjvESgrtL._AC_SY400_.jpg',
    'https://m.media-amazon.com/images/I/617h5C0ZipL._AC_SY400_.jpg',
    'https://m.media-amazon.com/images/I/61GCg2ASm5S._AC_SY400_.jpg',
    'https://m.media-amazon.com/images/I/61o2TNIGNCL._AC_SY400_.jpg',
    'https://m.media-amazon.com/images/I/51WUV+GHGsL._AC_SY400_.jpg',
  ];

  return (
    <div className="carousel-container">
      <h2>More items to consider</h2>
      <Slider {...settings}>
        {shoeImages.map((image, index) => (
          <div key={index} className="carousel-item">
            <img src={image} alt={`Shoe ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Custom Arrow Components for Slider
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', backgroundColor: 'grey', borderRadius: '50%' }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', backgroundColor: 'grey', borderRadius: '50%' }}
      onClick={onClick}
    />
  );
};

export default Carousel;
