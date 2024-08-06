import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import EventEnquiry from './EventEnquiry';
import './VenueDetail.css';

const venues = [
    {
      name: 'VICTORIA AND ALBERT MUSEUM, LONDON',
      images: [
        'https://prestigiousvenues.com/wp-content/uploads/2017/03/Venue-With-The-Wow-Factor-The-VA-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2017/03/Event-Stage-The-VA-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2017/03/Reception-Venue-The-VA-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2017/03/Dome-Dinner-Venue-The-VA-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2017/03/Drinks-Reception-Event-Venue-The-VA-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2017/03/Drinks-Reception-The-VA-Prestigious-Venues.jpg',


    ],
      overview: 'Victoria and Albert Museum is one of the world\'s greatest museums. This magnificent Victorian venue with remarkable rooms offers many possibilities for entertaining in a prestigious London location. There are a variety of options for entertaining, including evening receptions and gala dinners. Named after Queen Victoria and Prince Albert, the V&A Museum\'s collections span two thousand years of art in virtually every medium.',
      maxCapacity: 600,
      capacityDetails: {
        dinner: 400,
        reception: 600,
        theatre: 140,
      },
    },
    {
      name: 'SOMERSET HOUSE',
      images: [
        'https://prestigiousvenues.com/wp-content/uploads/2017/03/Exclusive-Birthday-Party-Venue-In-London-Cafe-De-Paris-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2017/03/Fashion-Show-Venue-In-London-Cafe-De-Paris-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2017/03/Hotel-Event-Space-Salon-Schonbrunn-Hotel-Bristol-Vienna-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2017/03/Roof-Terrace-Venue-Hotel-Bristol-Vienna-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2017/03/Ballroom-The-Westin-Sydney-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2017/03/Luxury-Event-Venue-In-Sydney-The-Westin-Sydney-Prestigious-Venues.jpg',
      ],
      overview: 'Somerset House is a historic building in London, known for its stunning architecture and central courtyard. It hosts a wide range of events, from corporate functions to cultural festivals. Modern amenities like Wi-Fi make it an ideal choice for any event. The venue blends classic elegance with contemporary features. It ensures a memorable experience for all guests.',
      maxCapacity: 500,
      capacityDetails: {
        dinner: 300,
        reception: 500,
        theatre: 200,
      },
    },
    {
      name: 'Cafe de Paris, London',
      images: [
        'https://prestigiousvenues.com/wp-content/uploads/2017/03/Reception-Venue-in-Central-London-Cafe-de-Paris-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2024/03/Studio-Frantzen-PDR-4-Reception-Harrods-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2024/04/Tiffany-Blue-Box-Cafe-Harrods-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2024/06/Wine-Room-at-Studio-Frantzen-Harrods-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2024/04/Dinning-Hall-Gala-Dinner-Harrods-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2024/03/Studio-Frantzen-Harrods-Prestigious-Venues.jpg',
      ],
      overview: 'Cafe de Paris is a charming venue in the heart of London, perfect for parties and celebrations. With its historic decor and modern amenities, it offers a unique atmosphere for any event. The venue is well-equipped to handle diverse functions. Guests will enjoy its rich ambiance and exceptional service. It promises a memorable event experience.',
      maxCapacity: 715,
      capacityDetails: {
        dinner: 270,
        reception: 715,
        theatre: 286,
      },
    },
    {
      name: 'Shangri-La Hotel, Sydney',
      images: [
        'https://prestigiousvenues.com/wp-content/uploads/2017/03/Private-Dining-Venue-Shangri-La-Sydney-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2021/03/5-Star-Yacht-Hotel-Sunborn-Gibraltar-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2021/03/Ballroom-Gala-Dinner-Sunborn-Gibraltar-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2021/03/Reception-Luxury-Venue-Sunborn-Gibraltar-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2021/03/Wedding-Reception-Sunborn-Gibraltar-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2021/03/Barbary-Sunborn-Gibraltar-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2021/03/Sapphire-Luxury-Venue-Sunborn-Gibraltar-Prestigious-Venues.jpg'
      ],
      overview: 'The Shangri-La Hotel in Sydney is a luxurious venue offering stunning views and first-class amenities. It is an ideal location for weddings and high-end events. The hotel provides exceptional service and facilities. Parking is available for the convenience of guests. Experience the ultimate in luxury and elegance.',
      maxCapacity: 450,
      capacityDetails: {
        dinner: 250,
        reception: 450,
        theatre: 350,
      },
    },
    {
      name: 'Cutty Sark, LONDON',
      images: [
        'https://prestigiousvenues.com/wp-content/uploads/2021/12/Theatre-Style-Events-Under-the-Hull-of-Cutty-Sark-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2021/12/Yacht-Venue-London-Cutty-Sark-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2021/12/Outdoor-Events-on-London-Boat-Cutty-Sark-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2021/12/Tween-Deck-Gala-Dinner-at-Cutty-Sark-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2021/12/Private-Dining-Room-London-Yacht-Cutty-Sark-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2021/12/Cutty-Sark-RMG-Venues-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2021/12/Boat-Hire-London-Cutty-Sark-Prestigious-Venues.jpg'
      ],
      overview: 'Cutty Sark is a unique venue in London, offering an extraordinary setting for exhibitions and events under its historic hull. Equipped with AV equipment, it is perfect for impactful presentations. The venue combines maritime heritage with modern facilities. Its distinctive location ensures a memorable event. Enjoy a seamless event experience at Cutty Sark.',
      maxCapacity: 400,
      capacityDetails: {
        dinner: 200,
        reception: 400,
        theatre: 300,
      },
    },
    {
      name: 'Turandot, Moscow',
      images: [
        'https://prestigiousvenues.com/wp-content/uploads/2017/03/Wedding-Venue-In-Moscow-Turandot-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2017/03/Fashion-Event-Venue-Turandot-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2017/03/Private-Celebrations-In-A-Palace-Turandot-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2017/03/Event-In-A-Palace-Turandot-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2017/03/Luxury-Dinner-Venue-in-Moscow-Turandot-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2017/03/Unique-Venue-In-Russia-Turandot-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2017/03/Luxurious-Venue-In-Moscow-Turandot-Prestigious-Venues.jpg'
      ],
      overview: 'Turandot in Moscow is an opulent venue known for its luxurious decor and exceptional catering services. It is a prime choice for weddings and grand celebrations. The venue offers a majestic setting for any event. Guests will be impressed by its grandeur and sophistication. Experience unparalleled luxury at Turandot.',
      maxCapacity: 500,
      capacityDetails: {
        dinner: 300,
        reception: 500,
        theatre: 200,
      },
    },
    {
      name: 'The Langham, London',
      images: [
        'https://prestigiousvenues.com/wp-content/uploads/2022/08/HI-SO-SO-Sotogrande-Resort-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2022/08/SO-Sotogrande-Arrival-SO-Sotogrande-Resort-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2022/08/SO-POOL-SO-Sotogrande-Resort-Prestigious-Venues-1.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2022/08/STG-Mixobar-SO-Sotogrande-Resort-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2022/08/MIXO-Indoor-SO-Sotogrande-Resort-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2024/01/Monumental-Staircase-W-Verbier-Prestigious-Venues-1.jpg'
      ],
      overview: 'The Langham in London is a luxurious venue offering modern amenities and elegant settings for corporate events and weddings. With facilities like Wi-Fi and AV equipment, it caters to all event needs. The venue combines classic charm with contemporary features. Enjoy exceptional service and ambiance. Make your event truly special at The Langham.',
      maxCapacity: 375,
      capacityDetails: {
        dinner: 200,
        reception: 375,
        theatre: 300,
      },
    },
    {
      name: 'The Grand Hotel, Brighton',
      images: [
        'https://prestigiousvenues.com/wp-content/uploads/2024/01/Meeting-Venue-W-Verbier-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2024/01/Sunbeds-Le-Spa-W-Verbier-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2024/01/Reception-Venue-W-Verbier-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2021/12/Gala-Dinner-Ballroom-Lujo-Hotel-Bodrum-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2021/12/Hospitality-at-Pablo-Esco-Bar-Lujo-Hotel-Bodrum-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2021/12/Events-at-Pablo-Esco-Bar-Lujo-Hotel-Bodrum-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2018/08/Waterfront-Suite-Forte-Village-Resort-Prestigious-Venues.jpg'
      ],
      overview: 'The Grand Hotel in Brighton is a historic and charming venue perfect for parties and corporate events. It offers catering and parking facilities to ensure a seamless event experience. The venue combines timeless elegance with modern amenities. Guests will enjoy its sophisticated ambiance. Host your next event at The Grand Hotel for an unforgettable experience.',
      maxCapacity: 600,
      capacityDetails: {
        dinner: 350,
        reception: 600,
        theatre: 450,
      },
    },
    {
      name: 'The Dorchester, London',
      images: [
        'https://prestigiousvenues.com/wp-content/uploads/2018/10/Luxury-Hotel-Lobby-Hotel-Barriere-Le-Majestic-Cannes-Prestigious-Venues-1.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2018/11/Outdoor-Cocktail-Venue-Hotel-Barriere-Le-Majestic-Cannes-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2018/11/Luxury-Event-Space-Hotel-Barriere-Le-Majestic-Cannes-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2018/11/Luxury-Bar-Hotel-Barriere-Le-Majestic-Cannes-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2018/11/Poolside-Venue-Hotel-Barriere-Le-Majestic-Cannes-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2018/11/Outdoor-Deck-Event-Space-Hotel-Barriere-Le-Majestic-Cannes-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2018/10/Screening-Venue-Hotel-Barriere-Le-Majestic-Cannes-Prestigious-Venues.jpg'
      ],
      overview: 'The Dorchester in London is an opulent and luxurious venue renowned for hosting award ceremonies and weddings. With amenities like Wi-Fi and catering, it provides a perfect setting for any prestigious event. The venue exudes elegance and sophistication. Guests will appreciate its top-notch service. Make your event unforgettable at The Dorchester.',
      maxCapacity: 1000,
      capacityDetails: {
        dinner: 500,
        reception: 1000,
        theatre: 800,
      },
    },
    {
      name: 'Natural History Museum, London',
      images: [
        'https://prestigiousvenues.com/wp-content/uploads/2021/04/Banqueting-Venue-Natural-History-Museum-London-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2020/11/Natural-History-Museum-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2021/04/Large-Event-Venue-Natural-History-Museum-London-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2021/04/Wedding-Reception-Venue-Natural-History-Museum-London-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2021/04/Venue-With-The-Wow-Factor-Natural-History-Museum-London-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2021/04/Museum-Venue-London-Natural-History-Museum-London-Prestigious-Venues.jpg'
      ],
      overview: 'The Natural History Museum in London is a historic and unique venue ideal for exhibitions and corporate events. It is equipped with AV equipment and Wi-Fi to support all technical requirements. The venue offers a stunning backdrop for any event. Guests will be captivated by its grandeur. Host your next event at this iconic location.',
      maxCapacity: 1200,
      capacityDetails: {
        dinner: 600,
        reception: 1200,
        theatre: 800,
      },
    },
    {
      name: 'The Ritz, Paris',
      images: [
        'https://prestigiousvenues.com/wp-content/uploads/2017/03/Large-Central-London-Event-Space-One-Whitehall-Place-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2017/03/Wedding-Reception-Venue-One-Whitehall-Place-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2017/03/Grand-Event-Venue-Staircase-One-Whitehall-Place-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2017/03/The-Whitehall-Suite-Conference-Set-Up-One-Whitehall-Place-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2017/03/Banquet-Dinner-Venue-One-Whitehall-Place-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2017/03/Best-Bar-By-River-Thames-One-Whitehall-Place-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2017/03/Reception-Venue-One-Whitehall-Place-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2017/03/Gala-Dinner-Event-One-Whitehall-Place-Prestigious-Venues.jpg'
      ],
      overview: 'The Ritz in Paris is a luxurious and opulent venue, perfect for weddings and corporate events. It offers top-notch catering and parking facilities to ensure a memorable event. The venue combines classic elegance with modern luxury. Guests will appreciate its exceptional service. Experience the grandeur of The Ritz for your next event.',
      maxCapacity: 500,
      capacityDetails: {
        dinner: 300,
        reception: 500,
        theatre: 400,
      },
    },
    {
      name: 'Blenheim Palace, Oxfordshire',
      images: [
        'https://prestigiousvenues.com/wp-content/uploads/2018/02/East-Courtyard-Clock-Tower-Blenheim-Palace-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2018/03/Wedding-Venue-Setup-Blenheim-Palace-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2018/02/Long-Library-Gala-Dinner-Venue-Blenheim-Palace-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2018/02/Christmas-Party-Venue-Blenheim-Palace-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2018/02/Historic-Venue-in-the-UK-Blenheim-Palace-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2018/02/Wedding-Venue-Blenheim-Palace-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2018/02/Italian-Garden-Blenheim-Palace-Prestigious-Venues.jpg'
      ],
      overview: 'Blenheim Palace in Oxfordshire is a historic and atmospheric venue, ideal for award ceremonies and weddings. Equipped with AV equipment and Wi-Fi, it caters to modern event needs. The venue offers a majestic setting for any event. Guests will be impressed by its grandeur. Host your next event at this iconic location.',
      maxCapacity: 2000,
      capacityDetails: {
        dinner: 800,
        reception: 2000,
        theatre: 1500,
      },
    },
    {
      name: 'Grand Central Hotel, Glasgow',
      images: [
        'https://prestigiousvenues.com/wp-content/uploads/2017/03/Gala-Dinner-Venue-20-Cavendish-Square-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2017/03/Event-Venue-With-Historic-Features-20-Cavendish-Square-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2017/03/Business-Meeting-Venue-In-Central-London-20-Cavendish-Square-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2017/03/London-Fashion-Venue-20-Cavendish-Square-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2017/03/Product-Launch-Venue-20-Cavendish-Square-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2017/03/Venue-For-Weddings-In-Mayfair-20-Cavendish-Square-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2017/03/Board-Meeting-Location-Mayfair-20-Cavendish-Square-Prestigious-Venues.jpg'
      ],
      overview: 'Grand Central Hotel in Glasgow is a charming and historic venue, perfect for corporate events and parties. It offers Wi-Fi and parking facilities to ensure convenience for all guests. The venue combines historic charm with modern amenities. Guests will appreciate its sophisticated ambiance. Host your next event at Grand Central Hotel for a memorable experience.',
      maxCapacity: 600,
      capacityDetails: {
        dinner: 300,
        reception: 600,
        theatre: 450,
      },
    },
    {
      name: 'Villa d\'Este, Lake Como',
      images: [
        'https://prestigiousvenues.com/wp-content/uploads/2021/12/Paradise-Venue-Lujo-Hotel-Bodrum-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2021/12/Best-Beach-Venue-Lujo-Hotel-Bodrum-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2021/12/Best-terrace-for-evening-events-Lujo-Hotel-Bodrum-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2021/12/Events-at-beach-bar-Lujo-Hotel-Bodrum-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2021/12/Infinity-Pool-Lujo-Hotel-Bodrum-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2021/12/Mediterranean-Beach-Venue-Lujo-Hotel-Bodrum-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2021/12/Top-beach-event-destination-Lujo-Hotel-Bodrum-Prestigious-Venues.jpg'
      ],
      overview: 'Villa d\'Este in Lake Como is an opulent and luxurious venue, ideal for weddings and corporate events. It offers catering and parking facilities to provide a seamless event experience. The venue combines historic elegance with modern luxury. Guests will enjoy its stunning ambiance. Experience unparalleled luxury at Villa d\'Este.',
      maxCapacity: 400,
      capacityDetails: {
        dinner: 200,
        reception: 400,
        theatre: 300,
      },
    },
    {
      name: 'Royal Albert Hall, London',
      images: [
        'https://prestigiousvenues.com/wp-content/uploads/2017/03/Stylish-Moroccan-Venue-Royal-Mansour-Marrakech-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2017/03/Wedding-In-Morocco-Royal-Mansour-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2017/03/Engagement-Party-Venue-Royal-Mansour-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2017/03/Moroccan-Venue-Royal-Mansour-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2017/03/Christmas-Decorations-in-Marrakech-Royal-Mansour-Marrakesh-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2017/04/Moroccan-Venue-For-Events-Royal-Mansour-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2017/03/Luxurious-Venue-For-Private-Dining-Royal-Mansour-Prestigious-Venues.jpg'
      ],
      overview: 'Royal Albert Hall in London is a historic and unique venue, perfect for award ceremonies and corporate events. It is equipped with AV equipment and Wi-Fi to support all event requirements. The venue offers a breathtaking setting for any event. Guests will be captivated by its iconic architecture. Host your next event at this legendary location.',
      maxCapacity: 5272,
      capacityDetails: {
        dinner: 850,
        reception: 2000,
        theatre: 5272,
      },
    },
    {
      name: 'Burj Al Arab, Dubai',
      images: [
        'https://prestigiousvenues.com/wp-content/uploads/2017/03/Large-Conference-Venue-Burj-Al-Arab-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2017/03/Luxury-Private-Dining-Venue-Burj-Al-Arab-Dubai-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2017/03/Suha-Room-Burj-Al-Arab-Dubai-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2017/03/Club-Suite-Burj-Al-Arab-Dubai-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2017/03/Al-Mahara-Burj-Al-Arab-Dubai-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2017/03/Dubai-Wedding-Venue-Burj-Al-Arab-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2017/03/Top-Venues-In-Dubai-Burj-Al-Arab-Dubai-Prestigious-Venues.jpg'
      ],
      overview: 'Burj Al Arab in Dubai is a luxurious venue ideal for weddings and corporate events. It offers exceptional catering and parking facilities to ensure a prestigious event experience. The venue exudes elegance and sophistication. Guests will appreciate its world-class service. Experience the ultimate in luxury at Burj Al Arab.',
      maxCapacity: 1500,
      capacityDetails: {
        dinner: 900,
        reception: 1500,
        theatre: 1200,
      },
    },
    {
      name: 'Montreux Palace, Switzerland',
      images: [
        'https://prestigiousvenues.com/wp-content/uploads/2020/04/Outdoor-Reception-Venue-Palazzo-Versace-Dubai-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2018/07/Mosaico-Lobby-Lounge-Palazzo-Versace-Dubai-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2018/05/Gala-Dinner-Venue-Palazzo-Versace-Dubai-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2018/05/Summer-Party-Space-Palazzo-Versace-Dubai-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2018/05/Banqueting-Event-Space-Palazzo-Versace-Dubai-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2018/05/Private-Dining-Setup-Palazzo-Versace-Dubai-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2018/05/Corporate-Event-Venue-Palazzo-Versace-Dubai-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2018/05/Networking-Event-Space-Palazzo-Versace-Dubai-Prestigious-Venues.jpg'
      ],
      overview: 'Montreux Palace in Switzerland is a luxurious and charming venue, perfect for corporate events and parties. It offers Wi-Fi and catering facilities to ensure a seamless event experience. The venue combines historic charm with modern luxury. Guests will enjoy its sophisticated ambiance. Host your next event at Montreux Palace for an unforgettable experience.',
      maxCapacity: 600,
      capacityDetails: {
        dinner: 300,
        reception: 600,
        theatre: 500,
      },
    },
    {
      name: 'The Palace of Versailles, France',
      images: [
        'https://prestigiousvenues.com/wp-content/uploads/2017/03/Kings-Drawing-Room-Kensington-Palace-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2017/03/Historic-London-Venue-Kensington-Palace-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2017/03/Venue-For-Birthdays-Private-Dinner-In-A-Palace-Kensington-Palace-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2017/03/Private-Dinner-In-A-Palace-Kensington-Palace-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2017/03/Wedding-In-A-Palace-Kensington-Palace-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2017/03/Elegant-Birthday-Party-Venue-Kensington-Palace-Prestigious-Venues.jpg',
        'https://prestigiousvenues.com/wp-content/uploads/2017/03/Dining-In-The-Kings-Drawing-Room-Kensington-Palace-Prestigious-Venues.jpg'
      ],
      overview: 'The Palace of Versailles in France is a historic and opulent venue, ideal for award ceremonies and weddings. Equipped with AV equipment and parking, it caters to all event needs. The venue offers a majestic setting for any event. Guests will be impressed by its grandeur. Host your next event at this iconic location.',
      maxCapacity: 2000,
      capacityDetails: {
        dinner: 800,
        reception: 2000,
        theatre: 1500,
      },
    },
];


const VenueDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { name } = useParams();
  const venue = venues.find((v) => v.name === name);

  if (!venue) {
    return <div>Venue not found</div>;
  }

  return (
    <div className="venue-detail-page">
      <div className="venue-detail-content">
        <h1 className="venue-header">{venue.name}</h1>
        <div className="venue-image-container">
          <Carousel>
            {venue.images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`${venue.name} ${index + 1}`} className="venue-image" />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="venue-detail-body">
          <div className="left-column">
            <div className="venue-info">
              <h2 className="section-title">Overview</h2>
              <p>{venue.overview}</p>
            </div>
            <div className="capacity-info">
              <h2 className="section-title2">Capacity</h2>
              <div className="capacity-details">
                <div className="capacity-item">
                  <p className="capacity-number">{venue.maxCapacity}</p>
                  <p className="capacity-label">Max Capacity</p>
                </div>
                <div className="capacity-item">
                  <p className="capacity-number">{venue.capacityDetails.dinner}</p>
                  <p className="capacity-label">Dinner</p>
                </div>
                <div className="capacity-item">
                  <p className="capacity-number">{venue.capacityDetails.reception}</p>
                  <p className="capacity-label">Reception</p>
                </div>
                <div className="capacity-item">
                  <p className="capacity-number">{venue.capacityDetails.theatre}</p>
                  <p className="capacity-label">Theatre</p>
                </div>
              </div>
            </div>
          </div>
          <div className="right-column">
            <EventEnquiry venueName={venue.name} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenueDetail;
