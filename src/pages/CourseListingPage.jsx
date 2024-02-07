// CourseListingPage.js

import React, { useState, useEffect } from 'react';
import CourseList from '../components/CourseList';
import { fetchCourses } from '../services/api';
import '../App.css';

const CourseListingPage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCourses();
      setCourses(data);
    };
    fetchData();
  }, []);

  return (
    <div className="course-listing-page">
      <h1>Course Listing</h1>
      <CourseList courses={courses} />
    </div>
  );
};

export default CourseListingPage;
