import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EventEnquiry.css';

const themePricing = {
  'Alice-Wonderland': 50,
  'Arabian-Egyptian': 70,
  'Beach-Nautical': 60,
  'Casino-Night': 80,
  'Elegant': 90,
  'Fiesta': 55,
  'Fifties': 45,
  'Halloween': 65,
  'Christmas': 100,
  'Hollywood': 120,
  'International': 75,
  'Racing': 85,
  'Space': 95,
};

const EventEnquiry = ({ venueName }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    eventType: '',
    eventDate: '',
    eventTime: '',
    numGuests: '',
    maxBudget: '',
    additionalInfo: '',
    theme: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.eventType) newErrors.eventType = 'Event type is required';
    if (!form.eventDate) newErrors.eventDate = 'Event date is required';
    if (!form.numGuests) newErrors.numGuests = 'Number of guests is required';
    if (!form.theme) newErrors.theme = 'Event theme is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const pricePerGuest = themePricing[form.theme] || 0;
      const totalPrice = pricePerGuest * parseInt(form.numGuests, 10);
      navigate('/payment', {
        state: { venueName, totalPrice },
      });
    }
  };

  return (
    <div className="event-enquiry">
      <h2 className="section-title">Event Booking for {venueName}</h2>
      {Object.keys(errors).length > 0 && (
        <div className="error">
          <p>There was a problem with your submission. Errors are marked below.</p>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <label>
          Event Type *
          <select name="eventType" value={form.eventType} onChange={handleChange}>
            <option value="">Please select...</option>
            <option value="corporate">Corporate</option>
            <option value="private">Private</option>
          </select>
          {errors.eventType && <div className="error">{errors.eventType}</div>}
        </label>

        <label>
          Event Date *
          <input type="date" name="eventDate" value={form.eventDate} onChange={handleChange} />
          {errors.eventDate && <div className="error">{errors.eventDate}</div>}
        </label>

        <label>
          Event Time
          <input type="time" name="eventTime" value={form.eventTime} onChange={handleChange} />
        </label>

        <label>
          Number of Guests *
          <input type="number" name="numGuests" value={form.numGuests} onChange={handleChange} />
          {errors.numGuests && <div className="error">{errors.numGuests}</div>}
        </label>


        <label>
          Choose Theme *
          <select name="theme" value={form.theme} onChange={handleChange}>
            <option value="">Please select...</option>
            <option value="Alice-Wonderland">Alice-Wonderland</option>
            <option value="Arabian-Egyptian">Arabian-Egyptian</option>
            <option value="Beach-Nautical">Beach-Nautical</option>
            <option value="Casino-Night">Casino-Night</option>
            <option value="Elegant">Elegant</option>
            <option value="Fiesta">Fiesta</option>
            <option value="Fifties">Fifties</option>
            <option value="Halloween">Halloween</option>
            <option value="Christmas">Christmas</option>
            <option value="Hollywood">Hollywood</option>
            <option value="International">International</option>
            <option value="Racing">Racing</option>
            <option value="Space">Space</option>
          </select>
          {errors.theme && <div className="error">{errors.theme}</div>}
        </label>

        <button className='bookbutton' type="submit">BOOK NOW</button>
      </form>
    </div>
  );
};

export default EventEnquiry;
