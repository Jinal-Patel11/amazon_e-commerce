import React from 'react';
import './TodayDeal.css';

const deals = [
  {
    id: 1,
    image: 'https://m.media-amazon.com/images/G/31/IMG20/Home/2024/Ganeshchaturthi/GW/Topical_PCPO.jpg', // Replace with actual image path
    label: 'Ganesh Chaturthi store',
    link: '#'
  },
  {
    id: 2,
    image: 'https://m.media-amazon.com/images/G/31/IMG15/LA/Vach/HCTP/Topical_PCPO_REVISED.jpg', // Replace with actual image path
    label: 'Up to 75% off | Electronics',
    link: '#'
  },
  {
    id: 3,
    image: 'https://m.media-amazon.com/images/G/31/prime/Shopping/Topical_PCPO_ForYou.jpg', // Replace with actual image path
    label: 'Deals for you',
    link: '#'
  }
];

const TodayDeal = () => {
  
  return (
    <div className="deals-section">
      <h2>Today's Deals</h2>
      <p>Curated for you</p>
      <div className="deals-container">
        {deals.map((deal) => (
          <a key={deal.id} href={deal.link} className="deal-card">
            <img src={deal.image} alt={deal.label} />
            <p>{deal.label}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TodayDeal;
