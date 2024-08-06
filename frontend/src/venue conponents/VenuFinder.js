import React, { useState , useEffect} from 'react';
import './VenuFinder.css';
import VenueFinderTop from './VenueFinderTop';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
const venues = [
    // Your list of venues here...
    {
      name: 'VICTORIA AND ALBERT MUSEUM, LONDON',
      image: 'https://live.staticflickr.com/7142/6436342649_b31512dbde.jpg',
      types: ['Atmospheric'],
      events: ['Award Ceremonies'],
      amenities: ['AV Equipment'],
    },
    {
      name: 'SOMERSET HOUSE',
      image: 'https://www.uniquevenuesoflondon.co.uk/sites/default/files/styles/space/public/image/_DSC7549_0.jpg?itok=MDjZGwAs',
      types: ['Historic'],
      events: ['Corporate'],
      amenities: ['Wi-Fi'],
    },
    {
      name: 'Cafe de Paris, London',
      image: 'https://prestigiousvenues.com/wp-content/uploads/2017/03/Reception-Venue-in-Central-London-Cafe-de-Paris-Prestigious-Venues.jpg',
      types: ['Charming'],
      events: ['Parties'],
      amenities: ['Catering'],
    },
    {
      name: 'Shangri-La Hotel, Sydney',
      image: 'https://prestigiousvenues.com/wp-content/uploads/2017/03/Private-Dining-Venue-Shangri-La-Sydney-Prestigious-Venues.jpg',
      types: ['Luxurious'],
      events: ['Weddings'],
      amenities: ['Parking'],
    },
    {
      name: 'Cutty Sark, LONDON',
      image: 'https://prestigiousvenues.com/wp-content/uploads/2021/12/Theatre-Style-Events-Under-the-Hull-of-Cutty-Sark-Prestigious-Venues.jpg',
      types: ['Unique'],
      events: ['Exhibitions'],
      amenities: ['AV Equipment'],
    },
    {
      name: 'Turandot, Moscow',
      image: 'https://prestigiousvenues.com/wp-content/uploads/2017/03/Wedding-Venue-In-Moscow-Turandot-Prestigious-Venues.jpg',
      types: ['Opulent'],
      events: ['Weddings'],
      amenities: ['Catering'],
    },
    {
      name: 'The Langham, London',
      image: 'https://assets.venuecrew.com/wp-content/uploads/2023/03/14012735/JulieetMIchael-595.jpg',
      types: ['Luxurious'],
      events: ['Corporate', 'Weddings'],
      amenities: ['Wi-Fi', 'AV Equipment'],
    },
    {
      name: 'The Grand Hotel, Brighton',
      image: 'https://images2.bovpg.net/r/media/1/1/6/8/3/168356.jpg',
      types: ['Historic', 'Charming'],
      events: ['Parties', 'Corporate'],
      amenities: ['Catering', 'Parking'],
    },
    {
      name: 'The Dorchester, London',
      image: 'https://rubinaakhan.com/wp-content/uploads/2022/12/dorchester-rooftop.jpeg?w=1024',
      types: ['Opulent', 'Luxurious'],
      events: ['Award Ceremonies', 'Weddings'],
      amenities: ['Wi-Fi', 'Catering'],
    },
    {
      name: 'Natural History Museum, London',
      image: 'https://i.pinimg.com/736x/22/bf/67/22bf6731d44d8735e3f21cc87348a210.jpg',
      types: ['Historic', 'Unique'],
      events: ['Exhibitions', 'Corporate'],
      amenities: ['AV Equipment', 'Wi-Fi'],
    },
    {
      name: 'The Ritz, Paris',
      image: 'https://static01.nyt.com/images/2016/06/05/travel/05PARIS-RITZ-slide-PB53/05PARIS-RITZ-slide-PB53-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
      types: ['Luxurious', 'Opulent'],
      events: ['Weddings', 'Corporate'],
      amenities: ['Catering', 'Parking'],
    },
    {
      name: 'Blenheim Palace, Oxfordshire',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1S8Jkk-jh6VgR4UG5R6Y2XbSMewNvXD10zQ&ss',
      types: ['Historic', 'Atmospheric'],
      events: ['Award Ceremonies', 'Weddings'],
      amenities: ['AV Equipment', 'Wi-Fi'],
    },
    {
      name: 'Grand Central Hotel, Glasgow',
      image: 'https://exyvvjngjh3.exactdn.com/wp-content/uploads/2021/03/11_1142_05_N1118_medium.jpg?strip=all&lossy=1&ssl=1',
      types: ['Charming', 'Historic'],
      events: ['Corporate', 'Parties'],
      amenities: ['Wi-Fi', 'Parking'],
    },
    {
      name: 'Villa d\'Este, Lake Como',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/54/e0/47/villa-d-este-at-night.jpg?w=700&h=-1&s=1',
      types: ['Opulent', 'Luxurious'],
      events: ['Weddings', 'Corporate'],
      amenities: ['Catering', 'Parking'],
    },
    {
      name: 'Royal Albert Hall, London',
      image: 'https://assets2.cbsnewsstatic.com/hub/i/r/2021/07/10/6b87a47a-c1ae-4736-a839-53e601d3c467/thumbnail/640x360/f94fd312e2192946ea3b29f756fbfc20/royal-albert-hall-interior-1920.jpg?v=5501038cbc281520ff9fdc308faab7dc',
      types: ['Historic', 'Unique'],
      events: ['Award Ceremonies', 'Corporate'],
      amenities: ['AV Equipment', 'Wi-Fi'],
    },
    {
      name: 'Burj Al Arab, Dubai',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Burj_Al_Arab_and_Jumeirah_Beach_%289601659067%29.jpg/1200px-Burj_Al_Arab_and_Jumeirah_Beach_%289601659067%29.jpg',
      events: ['Weddings', 'Corporate'],
      amenities: ['Catering', 'Parking'],
    },
  
    
    {
      name: 'Montreux Palace, Switzerland',
      image: 'https://assets3.thrillist.com/v1/image/3091444/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70',
      types: ['Luxurious', 'Charming'],
      events: ['Corporate', 'Parties'],
      amenities: ['Wi-Fi', 'Catering'],
    },
    {
      name: 'The Palace of Versailles, France',
      image: 'https://cdn.britannica.com/78/130078-050-584895B8/Gardens-Andre-Le-Notre-Palace-of-Versailles.jpg',
      types: ['Historic', 'Opulent'],
      events: ['Award Ceremonies', 'Weddings'],
      amenities: ['AV Equipment', 'Parking'],
    },
  ];
  
 
  const VenuFinder = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [selectedEvents, setSelectedEvents] = useState([]);
    const [selectedAmenities, setSelectedAmenities] = useState([]);
  
    const handleTypeChange = (event) => {
      const value = event.target.name;
      setSelectedTypes(
        selectedTypes.includes(value)
          ? selectedTypes.filter((type) => type !== value)
          : [...selectedTypes, value]
      );
    };
    useEffect(() => {
      window.scrollTo(0, 0);
  }, []);
    const handleEventChange = (event) => {
      const value = event.target.name;
      setSelectedEvents(
        selectedEvents.includes(value)
          ? selectedEvents.filter((event) => event !== value)
          : [...selectedEvents, value]
      );
    };
  
    const handleAmenityChange = (event) => {
      const value = event.target.name;
      setSelectedAmenities(
        selectedAmenities.includes(value)
          ? selectedAmenities.filter((amenity) => amenity !== value)
          : [...selectedAmenities, value]
      );
    };
  
    const filteredVenues = venues.filter((venue) => {
      const matchesSearch = venue.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType = selectedTypes.length === 0 || selectedTypes.some((type) => venue.types && venue.types.includes(type));
      const matchesEvent = selectedEvents.length === 0 || selectedEvents.some((event) => venue.events && venue.events.includes(event));
      const matchesAmenity = selectedAmenities.length === 0 || selectedAmenities.some((amenity) => venue.amenities && venue.amenities.includes(amenity));
  
      return matchesSearch && matchesType && matchesEvent && matchesAmenity;
    });
  
    return (
      <div>
        <Navbar />
        <VenueFinderTop />
        <div className="vfpage-container">
          <div className="vfsidebar">
            <div className="vfsearch-box">
              <input
                type="text"
                className="vfsearch-input"
                placeholder="Search by Venue..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="vffilter-section">
              <h4 className="vffilter-title">VENUE TYPES</h4>
              <ul className="vffilter-list">
                <li className="vffilter-item">
                  <input type="checkbox" id="atmospheric" name="Atmospheric" onChange={handleTypeChange} />
                  <label htmlFor="atmospheric">Atmospheric</label>
                </li>
                <li className="vffilter-item">
                  <input type="checkbox" id="historic" name="Historic" onChange={handleTypeChange} />
                  <label htmlFor="historic">Historic</label>
                </li>
                <li className="vffilter-item">
                  <input type="checkbox" id="charming" name="Charming" onChange={handleTypeChange} />
                  <label htmlFor="charming">Charming</label>
                </li>
                <li className="vffilter-item">
                  <input type="checkbox" id="luxurious" name="Luxurious" onChange={handleTypeChange} />
                  <label htmlFor="luxurious">Luxurious</label>
                </li>
                <li className="vffilter-item">
                  <input type="checkbox" id="unique" name="Unique" onChange={handleTypeChange} />
                  <label htmlFor="unique">Unique</label>
                </li>
                <li className="vffilter-item">
                  <input type="checkbox" id="opulent" name="Opulent" onChange={handleTypeChange} />
                  <label htmlFor="opulent">Opulent</label>
                </li>
              </ul>
            </div>
            <div className="vffilter-section">
              <h4 className="vffilter-title">EVENT TYPES</h4>
              <ul className="vffilter-list">
                <li className="vffilter-item">
                  <input type="checkbox" id="award-ceremonies" name="Award Ceremonies" onChange={handleEventChange} />
                  <label htmlFor="award-ceremonies">Award Ceremonies</label>
                </li>
                <li className="vffilter-item">
                  <input type="checkbox" id="corporate" name="Corporate" onChange={handleEventChange} />
                  <label htmlFor="corporate">Corporate</label>
                </li>
                <li className="vffilter-item">
                  <input type="checkbox" id="parties" name="Parties" onChange={handleEventChange} />
                  <label htmlFor="parties">Parties</label>
                </li>
                <li className="vffilter-item">
                  <input type="checkbox" id="weddings" name="Weddings" onChange={handleEventChange} />
                  <label htmlFor="weddings">Weddings</label>
                </li>
                <li className="vffilter-item">
                  <input type="checkbox" id="exhibitions" name="Exhibitions" onChange={handleEventChange} />
                  <label htmlFor="exhibitions">Exhibitions</label>
                </li>
              </ul>
            </div>
            <div className="vffilter-section">
              <h4 className="vffilter-title">AMENITIES</h4>
              <ul className="vffilter-list">
                <li className="vffilter-item">
                  <input type="checkbox" id="av-equipment" name="AV Equipment" onChange={handleAmenityChange} />
                  <label htmlFor="av-equipment">AV Equipment</label>
                </li>
                <li className="vffilter-item">
                  <input type="checkbox" id="wi-fi" name="Wi-Fi" onChange={handleAmenityChange} />
                  <label htmlFor="wi-fi">Wi-Fi</label>
                </li>
                <li className="vffilter-item">
                  <input type="checkbox" id="catering" name="Catering" onChange={handleAmenityChange} />
                  <label htmlFor="catering">Catering</label>
                </li>
                <li className="vffilter-item">
                  <input type="checkbox" id="parking" name="Parking" onChange={handleAmenityChange} />
                  <label htmlFor="parking">Parking</label>
                </li>
              </ul>
            </div>
          </div>
          <div className="vfvenues-container">
            <h1 className="vftitle">OUR COLLECTION OF ICONIC VENUES</h1>
            <div className="vfvenues-grid">
              {filteredVenues.map((venue, index) => (
                <div className="vfvenue-card" key={index}>
                  <Link to={`/venues/${venue.name}`}>
                    <img
                      className="vfvenue-image"
                      src={venue.image}
                      alt={venue.name}
                    />
                    <div className="vfvenue-name">{venue.name}</div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  };
  
  export default VenuFinder;