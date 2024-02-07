// CourseCard.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <h3>{course.name}</h3>
      <p>Instructor: {course.instructor}</p>
      <Link to={`/course/${course.id}`}>View Details</Link>
    </div>
  );
};

export default CourseCard;
