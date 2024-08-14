import React, { useState } from 'react';
import './Themechat.css';
import axios from 'axios';
import { marked } from 'marked';

function Themechat({ setShowChat }) {
  const [conversation, setConversation] = useState([
    { role: 'model', text: 'Hi👋\nI am Steph, a virtual assistant. How may I help you today?' },
  ]);
  const [question, setQuestion] = useState('');
  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  async function generateAnswer(e) {
    e.preventDefault();
    if (question.trim() === '') return;

    setGeneratingAnswer(true);

    const prompt = `${question}
      
Please provide a concise answer specifically related to party event themes. If the input is a greeting such as "hi" or "hello," respond with a formal message like "How can I assist you today?"

When crafting your response, consider the following themes and include specific elements:

1. **Alice in Wonderland:**
   - **Key Elements:** Whimsical characters (e.g., Mad Hatter, Cheshire Cat), enchanted forests, playing cards, tea party settings.
   - **Atmosphere:** Fantastical, surreal, colorful.

2. **Arabian/Egyptian:**
   - **Key Elements:** Rich colors, ornate decorations, lanterns, carpets, hieroglyphics, pyramids, genie lamps.
   - **Atmosphere:** Exotic, mysterious, opulent.

3. **Beach/Nautical:**
   - **Key Elements:** Seashells, starfish, sand, surfboards, beach umbrellas, anchors, ship wheels.
   - **Atmosphere:** Relaxed, coastal, breezy.

4. **Casino Night:**
   - **Key Elements:** Poker tables, roulette wheels, playing cards, dice, slot machines, glamorous decor.
   - **Atmosphere:** Luxurious, exciting, high-stakes.

5. **Elegant:**
   - **Key Elements:** Crystal chandeliers, fine china, silk tablecloths, elegant centerpieces, classical music.
   - **Atmosphere:** Sophisticated, stylish, luxurious.

6. **Fiesta:**
   - **Key Elements:** Bright colors, piñatas, sombreros, maracas, Mexican cuisine, Latin music.
   - **Atmosphere:** Vibrant, lively, festive.

7. **Halloween:**
   - **Key Elements:** Pumpkins, ghosts, skeletons, spider webs, haunted houses, eerie lighting.
   - **Atmosphere:** Spooky, eerie, mysterious.

8. **Christmas:**
   - **Key Elements:** Christmas trees, lights, ornaments, stockings, wreaths, holiday music.
   - **Atmosphere:** Festive, cheerful, warm.

9. **Hollywood:**
   - **Key Elements:** Red carpets, spotlights, movie reels, Hollywood stars, director's chairs.
   - **Atmosphere:** Glamorous, star-studded, celebratory.

10. **International:**
    - **Key Elements:** Flags, traditional costumes, world maps, cultural music, international cuisine.
    - **Atmosphere:** Diverse, global, inclusive.

11. **Racing:**
    - **Key Elements:** Checkered flags, race cars, helmets, racing tracks, trophies.
    - **Atmosphere:** High-energy, dynamic, competitive.

12. **Space:**
    - **Key Elements:** Rockets, planets, stars, astronauts, space suits, futuristic technology.
    - **Atmosphere:** Futuristic, otherworldly, cosmic.

Ensure your answer aligns with one of these themes and is relevant to party event planning.

### Explanation:
- **Clear Instructions:** The purpose of the prompt and the expected response format are clearly specified.
- **Detailed Descriptions:** Each theme includes specific key elements and atmosphere descriptions to guide the AI in generating accurate responses.
- **Formal Greeting Handling:** Detailed instructions on handling greetings to ensure formal responses.
- **Structured Format:** Consistently formatted for clarity and easy AI interpretation, with emphasis on key elements and atmosphere for each theme.
- **Enhanced Clarity:** Improved visual clarity and separation of themes using bold text and bullet points.
- **Specific Guidance:** Added "Key Elements" and "Atmosphere" sections for each theme to provide more precise guidance.

    `;
    const newConversation = [
      ...conversation,
      { role: 'user', text: question },
    ];
    setConversation(newConversation);
    setQuestion('');

    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.REACT_APP_API_GENERATIVE_LANGUAGE_CLIENT}`,
        method: 'post',
        data: {
          contents: newConversation.map((entry) => ({
            role: entry.role,
            parts: [{ text: entry.text }],
          })).concat({
            role: 'user',
            parts: [{ text: prompt }],
          }),
        },
      });

      const candidates = response.data.candidates;
      let answer = 'Please ask themes related queries☺️!';

      if (candidates && candidates.length > 0 && candidates[0].content && candidates[0].content.parts) {
        answer = candidates[0].content.parts[0].text;
      }

      setConversation([
        ...newConversation,
        { role: 'model', text: answer },
      ]);
    } catch (error) {
      console.log(error);
      setConversation([
        ...newConversation,
        { role: 'model', text: 'An error occurred. Please try again later.' },
      ]);
    }

    setGeneratingAnswer(false);
  }

  return (
    <div className="chatbody">
      <div className="chat-container">
        <div className="chat-header">
          <h2 className="chat-title">Themebot</h2>
          <button className="close-button" onClick={() => setShowChat(false)}>&times;</button>
        </div>
        <div className="chat-box">
          {conversation.map((entry, index) => (
            <div key={index} className={`chat-message ${entry.role}`}>
              <div className="avatar">
                <img
                  src={entry.role === 'user' ? 'https://i.pinimg.com/236x/c9/9a/5e/c99a5e7846dd69c9de812983942e346f.jpg' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWuERSeyAm3iwqXfmHpEI7P9W2oeEqICzyMA&s'}
                  alt={entry.role}
                />
              </div>
              <div className="message" dangerouslySetInnerHTML={{ __html: marked(entry.text) }}></div>
            </div>
          ))}
        </div>
        <form onSubmit={generateAnswer} className="chat-form">
          <textarea
            required
            className="chat-input"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Type here..."
          ></textarea>
          <button
            type="submit"
            className={`chat-button ${generatingAnswer ? 'disabled' : ''}`}
            disabled={generatingAnswer}
          >
            ➤
          </button>
        </form>
      </div>
    </div>
  );
}

export default Themechat;
