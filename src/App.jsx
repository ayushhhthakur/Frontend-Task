import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CourseListingPage from './pages/CourseListingPage';
import CourseDetailsPage from './pages/CourseDetailsPage';
import StudentDashboardPage from './pages/StudentDashboardPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<CourseListingPage />} />
          <Route path="/course/:id" element={<CourseDetailsPage />} />
          <Route path="/dashboard" element={<StudentDashboardPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
