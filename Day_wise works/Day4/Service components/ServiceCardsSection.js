import React from 'react';
import './ServiceCardsSection.css';

const services = [
  { title: 'Party Planning', link: '/services/party-planning', imageUrl: 'https://images.squarespace-cdn.com/content/v1/60af17d8a6408b307f34cda7/1ea95b9b-5caa-4c6f-884a-58615d3b589f/party-5.jpg' },
  { title: 'Event Management', link: '/services/event-management', imageUrl: 'https://www.convergentnonprofit.com/wp-content/uploads/2019/08/Canva-Table-setting-for-an-event-party-or-wedding-reception-700x467.jpg' },
  { title: 'Decor and Design', link: '/services/decor-design', imageUrl: 'https://wowscapesdecor.events/wp-content/uploads/2021/11/madisson1.jpg' },
  { title: 'Entertainment', link: '/services/entertainment', imageUrl: 'https://www.8northumberland.co.uk/image/1363/750/audience-band-celebration-1190298.jpg' },
  { title: 'Venue Selection', link: '/services/venue-selection', imageUrl: 'https://s3-media0.fl.yelpcdn.com/bphoto/_lIOX0LzCCOWjLvOqngDmg/258s.jpg' },
  { title: 'Catering', link: '/services/catering', imageUrl: 'https://imagesawe.s3.amazonaws.com/styles/max980/s3/listing/2018/12/26/emirates_taste_catering_services.jpg?' },
];

const ServiceCardsSection = () => {
  return (
    <div className="service-cards-section">
      <h1>YOUR PERFECT EVENT STARTS HERE</h1>
      <div className="divider1"></div>
      <div className="service-cards-container">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
            style={{ backgroundImage: `url(${service.imageUrl})` }}
          >
            <h2>{service.title}</h2>
            <a href={service.link} className="learn-more-button">Learn More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCardsSection;
