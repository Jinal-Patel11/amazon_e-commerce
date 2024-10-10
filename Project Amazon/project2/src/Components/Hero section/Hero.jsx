import React, { useEffect, useState } from 'react';
import './Hero.css';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    'https://images-eu.ssl-images-amazon.com/images/G/31/IMG24/Smart_Watches/MED_MAY/Tall_Hero_1500X600_BAU_NewLaunches._CB554931622_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200_V3._CB558389732_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2024/GW/August/Unrec/BAU/21Aug/1-1._CB565867124_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/img24/Sports/June/GW/U499/5298_Sports_-_Bau_under_499_hero_3000._CB554058565_.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="container-fluid p-0">
      <div className="hero-section">
        <div className="slider">
          <div className="slides w-100 img-fluid" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {slides.map((slide, index) => (
              <div key={index} className="slide" style={{ backgroundImage: `url(${slide})`, height: '600px' ,width:"100%"}}></div>
            ))}
          </div>
          <div className="prev" onClick={() => setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)}>
            &#10094;
          </div>
          <div className="next" onClick={() => setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1)}>
            &#10095;
          </div>
        </div>

        <div className="hero-msg text-center mt-2">
          <p style={{ fontSize: '10px' }}>
            You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery.{' '}
            <a href="##">Click here to go to amazon.in</a>
          </p>
        </div>
      </div>
    </div>
  );
}
