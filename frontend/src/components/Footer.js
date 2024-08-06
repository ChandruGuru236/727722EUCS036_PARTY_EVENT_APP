import React, { useRef } from 'react';
import './Footer.css';
import emailjs from '@emailjs/browser';
import '@fortawesome/fontawesome-free/css/all.min.css';
import SocialLinks from './SocialLinks';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const userEmail = formData.get('to_email');
    const userName = userEmail.split('@')[0];

    emailjs
    .sendForm('service_mx5amqv', 'template_d2xkhvt', form.current, {
      publicKey: 'qXsdWOg3N_hHRRStV',
      user_name: userName,
    })
    .then(
      () => {
        toast.success('Newsletter subscribed successfully!', {
          className: 'toast-message',
        });
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
      
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h1 className="logo-text"><span>Party</span>Delight</h1>
          <p>
            PartyDelight is a leading event management company dedicated to crafting memorable experiences for every occasion. We handle everything from corporate gatherings to intimate weddings with professionalism and flair.
          </p>
        </div>

        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="http://localhost:3000/about">About Us</a></li>
            <li><a href="http://localhost:3000/services">Services</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="http://localhost:3000/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section subscribe">
          <h2>Subscribe to Our Newsletter</h2>
          <p>Stay updated with the latest events, offers, and promotions. Enter your email below to subscribe to our monthly newsletter.</p>
          <form ref={form} onSubmit={sendEmail}>
            <input type="email" name="to_email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        <div className="footer-section socials">
          <h2>Follow Us</h2>
          <div className="footer-space"></div>
          <div className='social-icons'>
            <SocialLinks />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} partydelight.com | Designed by PartyDelight</p>
      </div>
      <ToastContainer />
    </footer>
  );
}

export default Footer;
