import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import './ChatPage.css';

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [socket, setSocket] = useState(null);
  const [chatPartner, setChatPartner] = useState(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const newSocket = io('http://localhost:3001');
    setSocket(newSocket);

    newSocket.on('chat message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, { text: msg, fromSelf: false }]);
    });

    newSocket.on('chat partner', (partner) => {
      setChatPartner(partner);
    });

    return () => newSocket.close();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (inputMessage && socket) {
      socket.emit('chat message', inputMessage);
      setMessages((prevMessages) => [...prevMessages, { text: inputMessage, fromSelf: true }]);
      setInputMessage('');
    }
  };

  return (
    <div className="chat-page">
      <div className="chat-header">
        <h2>Anonymous Chat</h2>
        {chatPartner ? (
          <p>Chatting with: Anonymous {chatPartner}</p>
        ) : (
          <p>Waiting for a chat partner...</p>
        )}
      </div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.fromSelf ? 'self' : 'other'}`}>
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={sendMessage} className="chat-input">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatPage;