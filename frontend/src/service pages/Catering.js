import React from 'react';
import './Catering.css'; // Ensure this file exists for styling

const Catering = () => {
  return (
    <div className='dpbody'>
      <header className="dpheader-section" style={{ backgroundImage: 'url(https://prestigiousvenues.com/wp-content/uploads/2023/03/Dining-CVK-Park-Bosphorus-Hotel-Prestigious-Venues.jpeg)' }}>
        <div className="dpheader-content">
          <h1>When and How To Start Planning Your Catering Event</h1>
          <div className="scroll-down">
            <span>▼</span>
          </div>
        </div>
      </header>
      <div className="party-decor-container">
        <main className="dpcontent-section">
          <h2>Introduction</h2>
          <p>
            Planning a catering event requires careful coordination and attention to detail to ensure a memorable dining experience for your guests. The timing and preparation of a catering event play a crucial role in creating a lasting impression. We'll guide you through the essential steps of when and how to start planning your catering event, ensuring a flawless execution.
          </p>

          <div className="dpsection">
            <h3>1. Plan Ahead</h3>
            <p>
              Starting your planning process early is key to a successful catering event. Aim to begin preparations at least six months in advance. This allows you to secure the best caterers, plan a menu that fits your theme, and coordinate all the necessary logistics.
            </p>
            <p>
              Define the goals of your catering event. Are you hosting a corporate lunch, a wedding reception, or a family gathering? Knowing the purpose will help you shape the menu, ambiance, and overall experience.
            </p>
            <div className="image-gallery">
              <img src="https://prestigiousvenues.com/wp-content/uploads/2017/04/Best-Event-Caterer-Mandarin-Oriental-Hyde-Park-Catering-Prestigious-Venues.jpg" alt="Event Venue 1" />
              <div className="image-row">
                <img src="https://prestigiousvenues.com/wp-content/uploads/2017/04/Food-By-Mandarin-Oriental-Hyde-Park-Catering-Prestigious-Venue.jpg" alt="Event Venue 2" />
                <img src="https://prestigiousvenues.com/wp-content/uploads/2017/04/Mandarin-Oriental-Hyde-Park-Catering-Prestigious-Venues.jpg" alt="Event Venue 3" />
              </div>
            </div>
          </div>

          <div className="dpsection">
            <h3>2. Understand Your Guests' Preferences</h3>
            <p>
              Knowing your guests' dietary preferences and restrictions is essential for planning a catering event. Conduct surveys or ask for dietary information during RSVPs to ensure you can accommodate everyone's needs.
            </p>
            <p>
              Design a menu that caters to a variety of tastes and dietary requirements. Consider offering vegetarian, vegan, gluten-free, and other special options to ensure all guests are satisfied.
            </p>
            <div className="image-gallery">
              <img src="https://prestigiousvenues.com/wp-content/uploads/2017/03/Corporate-Incentive-Venue-In-Shanghai-Mandarin-Oriental-Pudong-Prestigious-Venues.jpg" alt="Event Venue 4" />
              <div className="image-row">
                <img src="https://prestigiousvenues.com/wp-content/uploads/2019/02/Business-Meeting-Micemorocco-Prestigious-Star-Awards-Prestigious-Venues.jpg" alt="Event Venue 5" />
                <img src="https://prestigiousvenues.com/wp-content/uploads/2017/10/Afternoon-Tea-Experience-The-Hyde-Bar-The-Royal-Park-Hotel-Prestigious-Venues.jpg" alt="Event Venue 6" />
              </div>
              <div className="image-row">
                <img src="https://prestigiousvenues.com/wp-content/uploads/2017/10/Afternoon-Tea-The-Hyde-Bar-The-Royal-Park-Hotel-Prestigious-Venues.jpg" alt="Event Venue 7" />
                <img src="https://prestigiousvenues.com/wp-content/uploads/2017/10/Yellowfin-Tuna-Avocado-and-Wasabi-The-Hyde-Bar-The-Royal-Park-Hotel-Prestigious-Venues.jpg" alt="Event Venue 8" />
              </div>
            </div>
          </div>

          <div className="dpsection">
            <h3>3. Select the Perfect Venue</h3>
            <p>
              Choosing the right venue is crucial for the success of your catering event. Consider the size, facilities, and ambiance of the venue to ensure it aligns with the theme of your event and can comfortably accommodate your guests.
            </p>
            <p>
              Evaluate the logistics of the venue, such as kitchen facilities, accessibility, and available amenities. Ensure the venue can support the catering requirements and provide a seamless experience for your guests.
            </p>
            <div className="image-gallery">
              <img src="https://prestigiousvenues.com/wp-content/uploads/2017/03/Group-Private-Dining-Venue-Gran-Melia-Rome-Villa-Agrippina-Prestigious-Venues.jpg" alt="Event Venue 9" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Catering;
