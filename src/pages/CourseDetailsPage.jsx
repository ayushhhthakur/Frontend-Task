// CourseDetailsPage.js

import React from 'react';
import { useParams } from 'react-router-dom';
import courseModel from '../data/courseModel';
import '../App.css';

const CourseDetailsPage = () => {
  const { id } = useParams();
  const course = courseModel.find(course => course.id === parseInt(id));

  if (!course) {
    return <div>Course not found.</div>;
  }

  return (
    <div className="course-details-page">
      <h1>Course Details</h1>
      <h2>{course.name}</h2>
      <p>Instructor: {course.instructor}</p>
      {/* Display other course details */}
    </div>
  );
};

export default CourseDetailsPage;
