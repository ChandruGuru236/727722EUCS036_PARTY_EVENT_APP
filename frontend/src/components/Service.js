import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Topsection from '../Service components/topsection';
import Contentsection from '../Service components/contentsection';
import ServiceCardsSection from '../Service components/ServiceCardsSection';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const Service = () => {
  const navigate = useNavigate();

  const handlePayment = () => {
    navigate("/payment");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <div className="page-wrapper">
      <Navbar />
      <Topsection />
      <Contentsection />
      <ServiceCardsSection />
      <div
        className="pricing-cards"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: '20px 0',
        }}
      >
        <div
          className="pricing-card"
          style={{
            flex: '1',
            margin: '0 10px',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '10px',
            backgroundColor: '#fff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '400px',
            boxSizing: 'border-box',
          }}
        >
          <h3 className="card-title">Basic Package</h3>
          <p className="card-description">
            Includes venue decoration, basic catering, and entertainment.
          </p>
          <ul className="ulist" style={{ flex: '1' }}>
            <li>✅ Venue Setup</li>
            <li>✅ Basic decorations</li>
            <li>✅ Standard Catering</li>
            <li>✅ 2 Hours of Entertainment</li>
          </ul>
          <p className="card-price">$500</p>
          <button className="pay-btn" onClick={handlePayment}>
            Pay Now
          </button>
        </div>
        <div
          className="pricing-card"
          style={{
            flex: '1',
            margin: '0 10px',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '10px',
            backgroundColor: '#fff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '400px',
            boxSizing: 'border-box',
          }}
        >
          <h3 className="card-title">Standard Package</h3>
          <p className="card-description">
            Includes all features of the Basic Package plus additional
            decorations and a photo booth.
          </p>
          <ul className="ulist" style={{ flex: '1' }}>
            <li>✅ Venue Setup</li>
            <li>✅ Custom Decorations</li>
            <li>✅ Premium Catering</li>
            <li>✅ Photography</li>
          </ul>
          <p className="card-price">$800</p>
          <button className="pay-btn" onClick={handlePayment}>
            Pay Now
          </button>
        </div>
        <div
          className="pricing-card"
          style={{
            flex: '1',
            margin: '0 10px',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '10px',
            backgroundColor: '#fff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '400px',
            boxSizing: 'border-box',
          }}
        >
          <h3 className="card-title">Premium Package</h3>
          <p className="card-description">
            Includes all features of the Standard Package plus a themed
            entertainment show and gourmet catering.
          </p>
          <ul className="ulist" style={{ flex: '1' }}>
            <li>✅ Venue Setup</li>
            <li>✅ Themed Decorations</li>
            <li>✅ Gourmet Catering</li>
            <li>✅ Photography & Videography</li>
            <li>✅ Custom Party Favors</li>
          </ul>
          <p className="card-price" style={{ marginBottom: "20px" }}>
            $1200
          </p>
          <button className="pay-btn" onClick={handlePayment}>
            Pay Now
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Service;
