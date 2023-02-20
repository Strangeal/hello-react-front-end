import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Message from './components/Message';

const App = () => (
  <div className="App">
    <h1>Welcome 👋 to Hello 🌍 World message API</h1>

    <Routes>
      <Route path="/" element={<Message />} />
      <Route path="/message" element={<Message />} />
    </Routes>
  </div>
);

export default App;
