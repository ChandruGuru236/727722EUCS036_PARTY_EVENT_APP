import React from 'react';
import './Entertainment.css'; // Ensure this file exists for styling

const Entertainment = () => {
  return (
    <div className='dpbody'>
      <header className="dpheader-section" style={{ backgroundImage: 'url(https://prestigiousvenues.com/wp-content/uploads/2017/05/Venue-For-Events-Vila-Monte-Prestigious-Venues.jpg)' }}>
        <div className="dpheader-content">
          <h1>When and How To Start Planning Your Entertainment Event</h1>
          <div className="scroll-down">
            <span>▼</span>
          </div>
        </div>
      </header>
      <div className="party-decor-container">
        <main className="dpcontent-section">
          <h2>Overview</h2>
          <p>
            Planning an entertainment event can be an exhilarating journey, but it requires meticulous planning and execution to ensure a successful show. The timing and preparation of an entertainment event play a crucial role in creating a lasting impression on your audience. We'll guide you through the essential steps of when and how to start planning your entertainment event - setting the stage for a remarkable performance.
          </p>

          <div className="dpsection">
            <h3>1. Set the Stage Early</h3>
            <p>
              Getting an early start is crucial when planning your entertainment event. Aim to begin your preparations around nine months in advance. This timeline allows for booking the best talent, securing the ideal venue, and coordinating all the necessary details.
            </p>
            <p>
              Clearly outline the objectives of your entertainment event. Are you aiming to promote a new talent, host a community event, or simply entertain? Defining your goals will help shape every aspect of your planning process.
            </p>
            <div className="image-gallery">
              <img src="https://prestigiousvenues.com/wp-content/uploads/2017/03/Special-Christmas-Venue-Tower-Bridge-Prestigious-Venues.jpg" alt="Event Venue 1" />
              <div className="image-row">
                <img src="https://prestigiousvenues.com/wp-content/uploads/2024/04/Urban-Soul-Orchestra-at-Londons-Grand-Ball-Entertainment-Prestigious-Star-Awards-1030155.jpg" alt="Event Venue 2" />
                <img src="https://prestigiousvenues.com/wp-content/uploads/2017/04/Entertainment-For-Product-Launches-Urban-Soul-Orchestra-Prestigious-Venues.jpg" alt="Event Venue 3" />
              </div>
            </div>
          </div>

          <div className="dpsection">
            <h3>2. Tailor the Experience</h3>
            <p>
              Understanding your audience is key to creating an unforgettable entertainment event. Conduct surveys or focus groups to gather insights into their preferences. Use this data to curate a lineup and theme that will resonate with your audience.
            </p>
            <p>
              Consider the type of entertainment that will best suit your audience. For example, a younger crowd might enjoy a high-energy concert or DJ, while an older audience may prefer a more relaxed, intimate performance.
            </p>
            <div className="image-gallery">
              <img src="https://prestigiousvenues.com/wp-content/uploads/2017/04/Urban-Soul-Orchestra-Playing-In-Marrakech-Prestigious-Venues-Photo.jpg" alt="Event Venue 4" />
              <div className="image-row">
                <img src="https://prestigiousvenues.com/wp-content/uploads/2017/04/Background-Music-For-Events-Urban-Soul-Orchestra-Prestigious-Venues.jpg" alt="Event Venue 5" />
                <img src="https://prestigiousvenues.com/wp-content/uploads/2017/04/Classical-Quartet-Music-Urban-Soul-Orchestra-Prestigious-Venues.jpg" alt="Event Venue 6" />
              </div>
              <div className="image-row">
                <img src="https://prestigiousvenues.com/wp-content/uploads/2017/03/Networking-Venue-Tower-Of-London-Prestigious-Venues.jpg" alt="Event Venue 7" />
                <img src="https://prestigiousvenues.com/wp-content/uploads/2017/03/Reception-Venue-By-The-Thames-Tower-Of-London-Prestigious-Venues.jpg" alt="Event Venue 8" />
              </div>
            </div>
          </div>

          <div className="dpsection">
            <h3>3. Find the Perfect Venue</h3>
            <p>
              The venue you choose sets the tone for the entire event. Start by outlining your specific needs: space, facilities, and ambiance. Look for a venue that aligns with the theme of your event and can accommodate all the technical requirements.
            </p>
            <p>
              Consider the logistics of the venue, such as location, accessibility, and available amenities. Ensure that the venue can provide the necessary support for sound, lighting, and other technical aspects of your event.
            </p>
            <div className="image-gallery">
              <img src="https://prestigiousvenues.com/wp-content/uploads/bb-plugin/cache/The-destination-event-venue-of-choice-in-Mexicos-Riviera-Maya-panorama-269b9c0301389821fc2d3b9ffbef33ee-5b98e4ac69e5f.jpg" alt="Event Venue 9" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Entertainment;
