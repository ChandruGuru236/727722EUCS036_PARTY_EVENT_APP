import React, { useState , useEffect } from 'react';
import Footer from './Footer';
import './Theme.css';
import Navbar from './Navbar';

const themes = [
  {
    name: "Alice-Wonderland",
    title: "Alice in Wonderland Party Theme",
    description: `Transform your venue into the quirky quarters of the Mad Hatter from the Alice in Wonderland theme party and host an eccentric party modeled after the teatime soiree from Lewis Carroll’s classic childhood tale. Guests could opt to come in costume and will be in awe as they enter the event through the rabbit hole and once inside are greeted by a colorful site of off-beat décor with oversize tea cups, colorful mushrooms, a Grand Top Hat and characters that bring your space to life along with dramatic accents and vivid LED lighting! Add to this scrumptious funky foods, and fun libations along with just the right touch of entertainment and music and one enchanted evening is about to begin. Use our party designers and décor elements to have an event to remember!`,
    images: [
      "https://themers.com/wp-content/uploads/2019/01/Alice-in-Wonderland-10-1-400x516.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Alice-in-Wonderland-2-400x516.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Alice-in-Wonderland-9-400x516.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Alice-in-Wonderland-4.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Alice-in-Wonderland-7-400x516.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Alice-in-Wonderland-6.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Alice-in-Wonderland-1.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Alice-in-Wonderland-11.jpg",
    ],
  },
  {
    name: "Arabian-Egyptian",
    title: "Arabian-Egyptian Party Theme",
    description: `Arabian Nights-We can decorate your chosen venue, whether it is your home, office or special venue we can turn it into the perfect Arabian Nights party or Bollywood party using the highest quality Moroccan décor and drapings. Our unique authentic Moroccan style will let you and your guest really believe they are in a luxury Bedouin tent. We like to get the details and customize the Arabian style décor to your vision from pyramids to Anubis and more!`,
    images: [
      "https://themers.com/wp-content/uploads/2019/01/Arabian-and-Egyptian-Theme-7.jpg",
      "https://themers.com/wp-content/uploads/2019/01/arabian-005-400x516.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Arabian-and-Egyptian-Theme-8-1-400x516.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Arabian-and-Egyptian-Theme-7-400x516.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Arabian-and-Egyptian-Theme-5-1-400x516.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Arabian-and-Egyptian-Theme-2-1-400x516.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Arabian-and-Egyptian-Theme-4-1-400x516.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Arabian-and-Egyptian-Theme-1-1-400x516.jpg",
    ],
  },
  {
    name: "Beach-Nautical",
    title: "Beach/Nautical Party Theme",
    description: `NAUTICAL– Enter through an over-sized life ring to find a 3-dimensional backdrop of a cruise ship, over-sized anchors, buoys, life rings hanging through-out the venue and nothing is better then a fun photo booth opportunity for your guest of a cruise ship adventure. Your tables are adorned with nautical blue and gold with small lanterns and buffets with lobster nets, traps and colorful fish. Your guests will just be wondering if we are there yet?
    BEACH—As guests arrive they enter on a dock into the venue. Once inside they will be awe struck by the over-sized, 12ft. Lifeguard stands, surfboards, beach blankets, umbrellas hanging down through-out and backdrop of the crashing sea shore and sandy beach. You can almost hear the waves over the island drums!`,
    images: [
      "https://themers.com/wp-content/uploads/2019/01/Tropical-Party-Theme2-400x516.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Tropical-Theme-7-400x516.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Tropical-Theme-8.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Tropical-Party-Theme5-400x516.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Tropical-Theme-6-400x516.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Tropical-Party-Theme-400x516.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Tropical-Theme-4-400x516.jpg",
      "https://themers.com/wp-content/uploads/2019/01/16681601_1031945853605321_6139666384502237183_n-400x516.jpg",
    ],
  },
  {
    name: "Casino-Night",
    title: "Casino Night Party Theme",
    description: `A terrific time for all, whether it is corporate or social is the Casino Night Party! Themers can book your Casino Night Party with gaming tables, gaming pieces and dealers for a fun and exciting night! What could be more fun than being the “big spender”? Learning to play Craps, Roulette or even Poker! You can plan on 3/4 of your guests playing, but at a Casino Night Party, nearly all guests will play at one point in the night – it is just that exciting! You can add slot machines to your evening for the guests that like to try their luck on the sly! Blackjack is one of the more popular games and is fast moving. Our dealers are there to teach and play at any pace, so no matter what your guest’s level of expertise, they will feel welcome and have a roaring good time at a Casino Night Party! Now that the Holiday season is officially setting in, weekends are booking up, so please contact Themers, soon to get your special event booked! Don’t forget to add the decor, such as over sized dice, red carpet runners, showgirls, 5ft. tall stacks of poker chips! Or, maybe a theme for the Casino Night Party: Western, Las Vegas, Tropical, Holiday, Monte Carlo and more!`,
    images: [
      "https://themers.com/wp-content/uploads/2019/01/Casino-Theme-1.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Casino-Theme-2.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Casino-Theme-4.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Casino-Theme-9-400x516.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Casino-Theme-3.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Casino-Theme-5-400x516.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Casino-Theme-6-400x516.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Casino-Theme-7-400x516.jpg",
    ],
  },
  {
    name: "Circus",
    title: "Circus Party Theme Rentals",
    description: `Lions, Tigers, and Bears, OH MY! Guests will be reeling from the excitement at this amazing circus theme party rentals. After walking through the red and white tent entrance, guests will marvel at the faux animals inside the large circus cages. The area will be decked out in red, white, blue, and yellow; creating an amazing circus event. Circus ticket booth buffets, firing cannons and a circus ring around the perimeter of the room will complete the circus atmosphere. So grab your popcorn and off we go to the circus.`,
    images: [
      "https://themers.com/wp-content/uploads/2019/10/1.png",
      "https://themers.com/wp-content/uploads/2019/10/2.png",
      "https://themers.com/wp-content/uploads/2019/10/3.png",
      "https://themers.com/wp-content/uploads/2019/10/4.png",
      "https://themers.com/wp-content/uploads/2019/10/5.png",
      "https://themers.com/wp-content/uploads/2019/10/6.png",
      "https://themers.com/wp-content/uploads/2019/10/7.png",
      "https://themers.com/wp-content/uploads/2019/10/8.png",
    ],
  },
  {
    name: "Elegant",
    title: "Elegant Party Theme",
    description: `Elegance, opulence and sophistication. From subtle lighting, ceiling drapings, wall accents, centerpieces to chiavari chairs and custom table designs, we will transform your ballroom, backyard or venue into a night to remember.`,
    images: [
      "https://themers.com/wp-content/uploads/2019/01/Elegant-Theme-3-e1547787320872-400x516.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Elegant-Theme-2.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Elegant-Theme-1.png",
      "https://themers.com/wp-content/uploads/2019/01/Elegant-Theme-1.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Elegant-Theme-4-e1547787404178-400x516.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Elegant-Theme-6-400x516.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Elegant-Theme-7-400x516.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Elegant-Theme-9.jpg",
    ],
  },{
    name:"Fiesta",
    title:"Fiesta Party Theme",
    description:"Grab your hat for a fun evening south of the border. Guests will enter thru adobe bell towers and once inside will be forever transported by the colorful paper flowers, fiesta bistro lighting overhead, accented adobe walls and bright colored linens. Add mariachis and maybe a margarita and you will have an evening of dancing and partying your guests will not forget!",
    images:[
      "https://themers.com/wp-content/uploads/2019/01/Fiesta-3-400x516.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Fiesta-4-400x516.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Fiesta-9.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Fiesta-10.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Fiesta-1-400x516.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Fiesta-6-400x516.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Fiesta-2-400x516.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Fiesta-7.jpg",

    ],
  }
  ,{
    name:"Fifties",
    title:"Fifties Party Theme",
    description:"Fifties is always a good time with Themers Diner, Route 66, Soda Fountain, Elvis, Oversized Records and fabulous entertainers. Oh what an era! Themers has an array of décor for your event!",
    images:[
      "https://themers.com/wp-content/uploads/2019/01/Fifties-Theme-4-400x516.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Fifties-Theme-2-400x516.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Fifties-Theme-5-400x516.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Fifties-Theme-3-400x516.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Fifties-Party-Theme10-768x576.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Fifties-Theme-1-400x516.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Fifties-Theme-6-400x516.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Fifties-Theme-7.jpg",
    ],
  }
  ,{
    name:"Halloween",
    title:"Halloween Party Theme",
    description:"Prepare to scare and amuse your guests with oversized ghouls, zombies, masks, mazes and more! Your nightmare is our dream come true when it comes to Halloween event décor! With huge 3-dimensional gobblins, creatures and LED lighting to bring your event to life. Whether it is adults only – children or all all ages. Your guests truly won’t believe their eyes!",
    images:[
      "https://themers.com/wp-content/uploads/2019/01/Halloween-Party-Theme5-510x382.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Halloween-Theme-1-400x516.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Halloween-Theme-2.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Halloween-Theme-3-400x516.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Halloween-Theme-10-400x516.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Halloween-Theme-5.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Halloween-Theme-4-e1547787673990-400x516.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Halloween-Theme-11-400x516.jpg",
    ],
  }
  ,{
    name:"Christmas",
    title:"Christmas Party Theme",
    description:"Transform your holiday into a festive celebration and dazzle your guests with amazing décor at your event! Whether you choose a winter wonderland, a traditional holiday with our fabulous decorated trees or a fun themed event with entertainment or a holiday western casino casino, employee star studded award or another fun theme, let us transform your event and amaze your guests so they will be talking about this for the entire year!",
    images:[
      "https://themers.com/wp-content/uploads/2019/01/holiday4.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Holiday-Theme-1-400x516.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Holiday-Theme-5-400x516.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Holiday-Theme-9.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Holiday-Theme-7-400x516.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Holiday-Theme-6.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Holiday-Theme-4.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Holiday-Theme-3.jpg",
    ],
  }
  ,{
    name:"Hollywood",
    title:"Hollywood Party Theme",
    description:"Roll out the red carpet at your very own Hollywood theme party! You’re the star tonight. Guests will be dazzled by a night of fame, fortune, and Hollywood. As guests take a walk down the red carpet, they will pass by the Hollywood style marquee with bright lights welcoming them to the big event with their name in lights. Around the entrance of the main event are oversized Hollywood clappers and film reels with pictures of the stars from the past in lights. Once inside, guests will be amazed by the life-like Hollywood Hills sign stretching across an entire wall of the room and Hollywood backdrop spanning the other side of the room. So, smile for the camera and take your chance on the red carpet…where a night of elegance and infamy will rouse your inner star! You will not even know it is all props and décor that bring your imagination to life!",
    images:[
      "https://themers.com/wp-content/uploads/2019/01/Hollywood-Theme-11.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Hollywood-Theme-2.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Hollywood-Theme-1.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Hollywood-Party-Theme8.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Hollywood-Theme-10.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Hollywood-Theme-8-400x516.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Hollywood-Theme-5-400x516.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Hollywood-Theme-3.jpg",
    ],
  }
  ,{
    name:"International",
    title:"International Party Theme",
    description:"Whether you are planning a beautiful theme of Paris, Italian, Asian, Greek, and more exotic lands, Themers can bring it to life with Pagodas, Castles, Knights in Armor, Gondolas, Eiffel Tower, Carts of Cheeses, Buildings of villages and more.",
    images:[
      "https://themers.com/wp-content/uploads/2019/01/International-Theme-6.jpg",
      "https://themers.com/wp-content/uploads/2019/01/International-Theme-14-400x516.jpg",
      "https://themers.com/wp-content/uploads/2019/01/International-Theme-8.jpg",
      "https://themers.com/wp-content/uploads/2019/01/International-Theme-10.jpg",
      "https://themers.com/wp-content/uploads/2019/01/International-Theme-9-400x516.jpg",
      "https://themers.com/wp-content/uploads/2019/01/International-Theme-18-e1547788362878-400x516.jpg",
      "https://themers.com/wp-content/uploads/2019/01/International-Party-Theme-510x382.jpg",
      "https://themers.com/wp-content/uploads/2019/01/International-Theme-3-400x516.jpg",
    ],
  }
  ,{
    name:"Racing",
    title:"Racing  Party Theme",
    description:"It is Race Day! The engines are revved and the smell of rubber is in the air. Your guests are the winners of this amazing event and will be rewarded with a “Winner’s Circle” party! A “Welcome to the Winner’s Circle!” sign is attached to a 10 foot by 10 foot gleaming aluminum truss that is covered with race flags; accented with 55-gallon barrels, oilcans, orange cones, pennant flags and race paraphernalia. A red carpet welcomes your guests through the truss into the room. Welcome to the track! Road carpet will run into your event with a white dotted line down the center just in case guests want to race their way to the dance floor! Lighting gobos, racing props and checkered flutter flags lead to a 3-dimensional racecar on display…this race event –",
     images:[
      "https://themers.com/wp-content/uploads/2019/01/Racing-Theme-1.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Racing-Theme-2-400x516.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Racing-Party-Theme.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Racing-Theme-4-e1547789956465-400x516.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Racing-Theme-6.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Racing-Theme-5.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Racing-Theme-7.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Racing-Theme-8-400x516.jpg",
    ],
  }
  ,{
    name:"Space",
    title:"Space Party Theme",
    description:"Futuristic definitely has the wow factor with the lighting elements, glow furniture and the metal trussing transforming the room and taking your guests to another dimension! With planets, aliens, astronauts, spaceships and more, this theme is absolutely a guest pleaser!",
     images:[
     "https://themers.com/wp-content/uploads/2019/01/Space-Theme-1-400x516.jpg",
     "https://themers.com/wp-content/uploads/2019/01/Space-Theme-12-e1547790489403-400x516.jpg",
     "https://themers.com/wp-content/uploads/2019/01/Space-Theme-11-400x516.jpg",
     "https://themers.com/wp-content/uploads/2019/01/Space-Party-Theme7-510x382.jpg",
     "https://themers.com/wp-content/uploads/2019/01/Space-Theme-6-400x516.jpg",
     "https://themers.com/wp-content/uploads/2019/01/Space-Theme-9-400x516.jpg",
     "https://themers.com/wp-content/uploads/2019/01/Space-Party-Theme7-510x382.jpg",
     "https://themers.com/wp-content/uploads/2019/01/Space-Theme-5-400x516.jpg",
    ],
  }
];

const Theme = () => {
  const [selectedTheme, setSelectedTheme] = useState(themes[0]);
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <div>
      <Navbar />
      <header className="header">
        <p>Check out Different Themes We Offer!</p>
        <h2>Our clients demand perfection and we deliver just that. At PartyDelight, we are experienced, professional and precise. We listen to your goals and construct a plan starting with the end in mind and following your vision to help you bring your dream of the perfect event to life.</h2>
      </header>
      <section>
        <div className="theme-list">
          <h1>THEMES ↡</h1>
          <ul>
            {themes.map((theme, index) => (
              <li key={index} onClick={() => setSelectedTheme(theme)}>{theme.name}</li>
            ))}
          </ul>
        </div>
        <div className="theme-detail">
          <div className="theme-description">
            <h2>{selectedTheme.title}</h2>
            <p>{selectedTheme.description}</p>
          </div>
          <div className="additional-images">
            {selectedTheme.images.map((src, index) => (
              <img key={index} src={src} alt={`Additional image ${index + 1}`} />
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Theme;
