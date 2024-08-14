import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WemeetPage from './components/Wemeet.jsx';
import ChatPage from './components/ChatPage.jsx';

function App() {
  return (
    <Router>
      <br/>
      <Routes>
        <Route path="/" element={<WemeetPage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
      <br/>
    </Router>
  );
}

export default App;