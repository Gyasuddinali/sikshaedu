import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Courses from './Courses';
import Colleges from './Colleges';
import Exams from './Exams';
import Reviews from './Reviews';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/colleges" element={<Colleges />} />
      <Route path="/exams" element={<Exams />} />
      <Route path="/reviews" element={<Reviews />} />
    </Routes>
  </Router>
);

export default AppRoutes;
