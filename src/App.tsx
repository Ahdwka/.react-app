import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { LectureDetails } from './components/LectureDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lecture/:id" element={<LectureDetails />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;