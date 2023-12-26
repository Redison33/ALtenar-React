import React from 'react';
import Posts from './pages/Posts/Posts';
import CreatePost from './pages/CreationPost/CreationPost';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Posts />} />
      <Route path="/creation" element={<CreatePost />} />
    </Routes>
  );
}

export default App;
