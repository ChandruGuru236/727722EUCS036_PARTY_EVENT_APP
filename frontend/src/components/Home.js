import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Testimonials from './Testimonials';

const projects = [
  {
    title: 'Futuristic themed party - Bar Mitzvah',
    description: 'Hosted at One Marylebone in London.',
    videoId: 'JAvEQlSW6SQ'
  },
  {
    title: 'Somerset House Summer Corporate Party',
    description: 'Held in the stunning Somerset House.',
    videoId: 'JaBRFbh-8QA'
  },
  {
    title: 'Kensington Palace Pavilion - 70s Disco',
    description: 'A 70s themed disco at Kensington Palace.',
    videoId: 'lSwJFnQvXpk'
  },
  {
    title: 'The Langham London Bar Mitzvah',
    description: 'A lavish Bar Mitzvah at The Langham, London.',
    videoId: 'mQnJ1quDhKM'
  },
];

const Home = () => {
  const navigate = useNavigate();

  const handleSearchVenuesClick = () => {
    console.log('Button clicked');
    navigate('/venues');
  };
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <div>
      <Navbar />
      <section className="hero-section">
        <video className="video-background" autoPlay loop muted>
          <source src="https://cdn.prod.website-files.com/62cd958febba1e6065cac089/661ee434816973cb46370c24_longer_-_ebk_-_website_header_2024%20(720p)-transcode.mp4" type="video/mp4" />
        </video>
        <div className="hero-content">
          <h1 className="heading">Event design, planning and entertainment company</h1>
          <p>Expert Party Planning & Execution for Corporate Events and Special Occasions</p>
        </div>
      </section>
      
      <section className="recent-projects-section">
        <h2>Recent Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <iframe
                width="100%"
                height="300"
                src={`https://www.youtube.com/embed/${project.videoId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </section>

      <div className="venue-finder-section">
        
          <div className="venue-finder-button" >
            <button  onClick={handleSearchVenuesClick} style={{
                backgroundColor: '#ffffffd6',
                color: '#000',
                marginTop:"-8px",
                height:"20px"
                
              }}>Search Venues</button>
          </div>
      </div>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
