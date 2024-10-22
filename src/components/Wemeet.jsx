import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './WemeetPage.css';
import indianFlag from '../assets/indian_flag.png';

const WemeetPage = () => {
  const [interests, setInterests] = useState('');
  const [interestList, setInterestList] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleInputChange = (e) => {
    setInterests(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && interests.trim()) {
      e.preventDefault();
      setInterestList([...interestList, interests.trim()]);
      setInterests(''); 
    }
  };

  const removeInterest = (indexToRemove) => {
    setInterestList(interestList.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className={`wemeet-container ${darkMode ? 'dark-mode' : ''}`}>
      <header>
        <div className="header-content">
          <h1>.. WeMeet ..</h1>
          <span className="online-count">14,000+ online now</span>
          <button onClick={toggleDarkMode} className="mode-toggle">
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </header>
      
      <main>
        <div className='Talk-strangers'>
        <h2 >Talk to strangers!</h2>
        </div>
        
        <div className="info-box">
          <p>You don't need an app to use Wemeet on your phone or tablet! The web site works great on mobile.</p>
          
          <img src={indianFlag} style={{ width: '150px', height: 'auto' }} alt="Indian Flag" />
          <p>
            Wemeet (wee·meet) is a great way to meet new friends. When you use Wemeet, we pick someone
            else at random and let you talk one-on-one. To help you stay safe, chats are anonymous unless you
            tell someone who you are (not suggested!), and you can stop a chat at any time. Predators have
            been known to use Wemeet, so please be careful.
          </p>
          
          <p>
            If you prefer, you can add your interests, and Wemeet will look for someone who's into some of the
            same things as you instead of someone completely random.
          </p>
          
          <small>By using Wemeet, you accept the terms at the bottom. You must be 18+ or 13+ with parental permission.</small>
          
          <div className="warning-box">
            <p>Video is monitored. Keep it clean ⚠️ *</p>
            <p>18+: [ Adult ] [ Unmoderated Section ]</p>
          </div>
        </div>
        
        <div className="chat-options">
          <h2>What do you wanna talk about?</h2>
          <input 
            type="text" 
            className="interests-input"
            placeholder="Add your interests (optional)"
            value={interests}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <div className="interests-tags">
            {interestList.map((interest, index) => (
              <span 
                key={index} 
                className="interest-tag" 
                onClick={() => removeInterest(index)}
              >
                {interest} &times;
              </span>
            ))}
          </div>
          <div className="start-chatting">
            <h2>Start chatting:</h2>
            <div className="buttons">
              <button className="text-btn">Text</button>
              <button className="video-btn">Video</button>
            </div>
            <label className="checkbox-option">
              <input type="checkbox" /> Add my Facebook likes as topics
            </label>
            <button className="college-btn"><Link to="/chat" className="college-btn">Anonymous Texting</Link></button>
            <button className="college-btn">Anonymous Video call</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WemeetPage;
