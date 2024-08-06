import React, { useEffect } from 'react';
import './About.css';
import Footer from './Footer';
import Navbar from './Navbar';
import Testimonials from './Testimonials'
const AboutHeader = () => (
  
  <section className="about-header">
    <div className='overlay'>

    <div className="header-content">
      <h1>About Us</h1>
      <div className="header-description">
        <h2>
          Our innovation and creativity incorporate up and coming ideas and current trends which will add a unique flair in creating your one-of-a-kind event! Call Themers for a complimentary consultation today!
        </h2>
      </div>
    </div>
    </div>
  </section>
);

const AboutStory = () => (
  <section className="about-story">
    <span className="story-image">
      <img 
        fetchpriority="high" 
        decoding="async" 
        width="424" 
        height="424" 
        src="./partydelight.jpg" 
        alt="err" 
        className="wp-image-78" 
      />
    </span>
    <div className="story-content">
      <p>Our Story</p>
      <h1>Where It All Began</h1>
      <p>
        Partydelight is an innovative, award-winning special event production, entertainment, and event rental company. Our services range from business to personal, large to small, intimate to over-the-top! With our proven track record of success and many years of experience, you can count on our team to customize and design your event specific to your individual dreams and desires resulting in an experience of a lifetime!
      </p>
      <p><em><strong><span className="story-highlight">The founders started Partydelight in 1994</span></strong></em></p>
      <p><span className="testimonial"><em>“Real professionals! A+”<br /></em><span className="testimonial-author"></span></span></p>
    </div>
  </section>
);

const AboutSpotlight = () => (
  <section className="about-spotlight">
    <div className="spotlight-header">
      <div className='hello'>
      <h4 >In the Spotlight</h4>
      </div>
      <h1>Awards &amp; Recognition</h1>
      <p>Customer service is our top priority. Our goal is to make your event, large or small, THE event everyone is talking about.</p>
    </div>
    <div className="spotlight-features">
      {[
        { image: './time.png', title: 'Always on Time' },
        { image: './years.png', title: '20 + Years of Experience' },
        { image: './star.png', title: '5 Star Reviews' },
        { image: './award.png', title: 'Award Winning' },
        { image: './one.png', title: 'One-of-a Kind Event' },
        { image: './props.png', title: 'Props on Site' }
      ].map((feature, index) => (
        <div key={index} className="feature">
          <img src={feature.image} alt={feature.title} className="feature-image" />
          <h4>{feature.title}</h4>
        </div>
      ))}
    </div>
  </section>
);

// const AboutTestimonials = () => (
//   <section className="about-testimonials">
//     <div className="testimonials-header">
//       <p>Testimonials</p>
//       <h1>What People are Saying</h1>
//     </div>
//     <div className="testimonials-content">
//       {[
//         { title: "“Extremely Accommodating”", content: "“I look forward to a long working relationship with Themers.”", author: "Ashley H." },
//         { title: "“Team was very professional.”", content: "“The props and decorations looked great and the team was very professional. Thanks!”", author: "Garrett A." },
//         { title: "“Love this event company!”", content: "“They have EVERYTHING you could possibly need for an event and are so helpful!! Will definitely be using them again in the future!!”", author: "Jennifer G." },
//         { title: "“Awesome”", content: "“Have used them for 4 events we have done!”", author: "Jineane F." }
//       ].map((testimonial, index) => (
//         <div key={index} className="testimonial">
//           <div className="testimonial-rating">
//             <img src="http://www.pandademo.site/wp-content/uploads/2018/11/stars.png" alt="Stars" />
//           </div>
//           <div className="testimonial-content">
//             <h2>{testimonial.title}</h2>
//             <p>{testimonial.content}</p>
//             <p><span className="testimonial-author">{testimonial.author}</span></p>
//           </div>
//         </div>
//       ))}
//     </div>
//   </section>
// );

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
return(
  <div>
    <Navbar/>
    <AboutHeader/>
    <AboutStory/>
    <AboutSpotlight />
    <Testimonials/>
    <Footer/>
  </div>
);
};

export default AboutUs;
