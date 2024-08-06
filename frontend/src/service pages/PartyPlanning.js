import React from 'react';
import './PartyPlanning.css'; // Ensure this file exists for styling

const PartyPlanning = () => {
  return (
    <div className='dpbody'>
      <header className="dpheader-section" style={{ backgroundImage: 'url(https://prestigiousvenues.com/wp-content/uploads/2019/03/Event-Production-For-Corporate-Event-Eclipse-AV-Prestigious-Venues.jpg)' }}>
        <div className="dpheader-content">
          <h1 className="custom-h1">Your Ultimate Party Planning Guide</h1>
          <div className="scroll-down">
            <span>▼</span>
          </div>
        </div>
      </header>
      <div className="party-decor-container">
        <main className="dpcontent-section">
          <h2 className="custom-h2">Introduction</h2>
          <p>
            Planning a party can be an exciting yet challenging task. With the right strategies and attention to detail, you can ensure a memorable event for your guests. This guide will walk you through the essential steps to plan your party, covering everything from timing to venue selection.
          </p>

          <div className="dpsection">
            <h3 className="custom-h3">1.Setting the Date</h3>
            <p>
              Selecting the perfect date and time for your party is crucial. Start planning well in advance, especially for larger events. This allows ample time to coordinate all details and create anticipation among your guests.
            </p>
            <p>
              Think about the type of event you want to host. Is it a casual get-together, a themed party, or a formal event? Defining the event type will help you plan other details accordingly.
            </p>
            <div className="image-gallery">
              <img src="https://prestigiousvenues.com/wp-content/uploads/2017/05/Beach-Venue-Nobu-Eden-Roc-Prestigious-Venues.jpg" />
              <div className="image-row">
                <img src="https://prestigiousvenues.com/wp-content/uploads/bb-plugin/cache/Outdoor-Party-Venue-Unico-20-87-Prestigious-Venues-panorama-51e9c54dee994487df4176d9d9475ebe-63318bbcd5c10.jpg" />
                <img src="https://prestigiousvenues.com/wp-content/uploads/bb-plugin/cache/Bay-Clubhouse-Balcony-Costa-Navarino-Prestigious-Venues-panorama-2a534b835e18e43d0cabfa192d3650ec-63318bbcd5c2f.jpg" alt="Party Venue 3" />
              </div>
            </div>
          </div>

          <div className="dpsection">
            <h3 className="custom-h3">2.Understanding Your Guests</h3>
            <p>
              Knowing your guests' preferences and expectations is key to planning a successful party. Conduct surveys or casual conversations to understand their likes and dislikes. This will help you design a party that resonates with them.
            </p>
            <p>
              Choose a theme and decor style that align with your guests' tastes. For example, a tech-savvy crowd might enjoy a modern, high-tech theme, while a more traditional audience may prefer classic and elegant decor.
            </p>
            <div className="image-gallery">
              <img src="https://prestigiousvenues.com/wp-content/uploads/2017/05/Restaurant-For-Events-Nobu-Nobu-Eden-Roc-Prestigious-Venues.jpg" />
              <div className="image-row">
                <img src="https://prestigiousvenues.com/wp-content/uploads/2017/05/Poolside-Venue-Space-Nobu-Eden-Roc-Prestigious-Venues.jpg" alt="Party Venue 5" />
                <img src="https://prestigiousvenues.com/wp-content/uploads/2017/05/Top-Wedding-Venues-In-Miami-Nobu-Eden-Roc-Prestigious-Venues.jpg" alt="Party Venue 6" />
              </div>
              <div className="image-row">
                <img src="https://prestigiousvenues.com/wp-content/uploads/2017/05/Luxury-Event-Destination-Nobu-Eden-Roc-Prestigious-Venues.jpg" alt="Party Venue 7" />
                <img src="https://prestigiousvenues.com/wp-content/uploads/2017/05/Luxury-Miami-Restaurant-Nobu-Eden-Roc-Prestigious-Venues.jpg" alt="Party Venue 8" />
              </div>
            </div>
          </div>

          <div className="dpsection">
            <h3 className="custom-h3">3.Choosing the Venue</h3>
            <p>
              The venue sets the tone for your party. Consider what you need from a venue: ample space, specific facilities, or a particular ambiance. Choose a location that fits your party's theme and makes a lasting impression on your guests.
            </p>
            <p>
              Think about the logistics such as accessibility, parking, and convenience for your guests. Ensure the venue has all the necessary amenities to support your party plans.
            </p>
            <div className="image-gallery">
              <img src="https://prestigiousvenues.com/wp-content/uploads/2017/05/Conference-Venue-In-Miami-Nobu-Eden-Roc-Prestigious-Venues.jpg" alt="Party Venue 9" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PartyPlanning;
