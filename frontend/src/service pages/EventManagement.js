import React from 'react';
import './EventManagement.css'; // Ensure this file exists for styling

const EventManagement = () => {
  return (
    <div className='dpbody'>
      <header className="dpheader-section" style={{ backgroundImage: 'url(https://prestigiousvenues.com/wp-content/uploads/2017/03/Unique-London-Venue-Wellington-Arch-Prestigious-Venues.jpg)' }}>
        <div className="dpheader-content">
          <h1>Comprehensive Guide to Event Management</h1>
          <div className="scroll-down">
            <span>▼</span>
          </div>
        </div>
      </header>
      <div className="party-decor-container">
        <main className="dpcontent-section">
          <h2>Overview</h2>
          <p>
            Effective event management requires meticulous planning and execution to ensure a successful event. This guide will walk you through the essential steps of event management, covering everything from setting objectives to selecting the perfect venue.
          </p>

          <div className="dpsection">
            <h3>1.Define Your Objectives</h3>
            <p>
              The first step in event management is to define your objectives. What do you want to achieve with your event? Whether it's promoting a product, building brand awareness, or simply celebrating a milestone, having clear objectives will guide all subsequent planning decisions.
            </p>
            <p>
              Outline the key goals and desired outcomes for your event. This will help you stay focused and ensure that every aspect of the event aligns with your overall vision.
            </p>
            <div className="image-gallery">
              <img src="https://prestigiousvenues.com/wp-content/uploads/bb-plugin/cache/Wedding-Venue-Near-Big-Ben-One-Great-George-Street-Prestigious-Venues-panorama-562d8ec36987e58941a9fc75dd8e15ad-5ac367df7bde0.jpg" alt="Event Venue 1" />
              <div className="image-row">
                <img src="https://prestigiousvenues.com/wp-content/uploads/bb-plugin/cache/Private-Dining-In-London-One-Great-George-Street-Prestigious-Venues-panorama-21db1878cb4c6c9ef52e9a03d2253cf6-5ac367df7bf40.jpg" alt="Event Venue 2" />
                <img src="https://prestigiousvenues.com/wp-content/uploads/bb-plugin/cache/Council-Room-One-Great-George-Street-Prestigious-Venues-panorama-c7bff65f42d19db4f323b5b7bbc1dbfb-5ac367df7c0e6.jpg" alt="Event Venue 3" />
              </div>
            </div>
          </div>

          <div className="dpsection">
            <h3>2.Understand Your Audience</h3>
            <p>
              Knowing your audience is crucial for the success of your event. Conduct research to gain insights into their preferences, expectations, and needs. This information will help you tailor the event experience to ensure maximum engagement and satisfaction.
            </p>
            <p>
              Choose a theme and decor style that resonate with your audience. For example, a corporate event might require a professional and sophisticated setup, while a community festival might benefit from a more casual and vibrant atmosphere.
            </p>
            <div className="image-gallery">
              <img src="https://prestigiousvenues.com/wp-content/uploads/2022/08/The-Streets-Venue-Space-National-Maritime-Museum-Prestigious-Venues.jpg" alt="Event Venue 4" />
              <div className="image-row">
                <img src="https://prestigiousvenues.com/wp-content/uploads/2022/08/Riverside-Venue-For-Events-National-Maritime-Museum-Prestigious-Venues.jpg" alt="Event Venue 5" />
                <img src="https://prestigiousvenues.com/wp-content/uploads/2022/02/The-Great-Hall-Queens-House-Prestigious-Venues-450x225.jpg" alt="Event Venue 6" />
              </div>
              <div className="image-row">
                <img src="https://prestigiousvenues.com/wp-content/uploads/2017/03/Night-Harbour-View-Sydney-Opera-House-Sydney-Prestigious-Venues.jpg" alt="Event Venue 7" />
                <img src="https://prestigiousvenues.com/wp-content/uploads/2017/03/Luxury-Pool-Villa-Aphrodite-Hills-Resort-Cyprus-Prestigious-Venues.jpg" alt="Event Venue 8" />
              </div>
            </div>
          </div>

          <div className="dpsection">
            <h3>3.Choose the Perfect Venue</h3>
            <p>
              The venue plays a pivotal role in the overall success of your event. Consider the type of event, the number of guests, and the amenities you require. Ensure the venue aligns with your event's theme and objectives.
            </p>
            <p>
              Logistics such as accessibility, parking, and convenience for your guests are also crucial factors. Make sure the venue has all necessary facilities to accommodate your event seamlessly.
            </p>
            <div className="image-gallery">
              <img src="https://prestigiousvenues.com/wp-content/uploads/2022/08/The-Great-Map-day-time-National-Maritime-Museum-Prestigious-Venues-1.jpg" alt="Event Venue 9" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EventManagement;
