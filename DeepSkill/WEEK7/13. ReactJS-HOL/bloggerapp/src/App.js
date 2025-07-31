// src/App.js

import React, { useState } from 'react';
import BookDetails from './Bookdetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';
import { books, blogs, courses } from './data';
import './App.css';

function App() {
  const [showBooks, setShowBooks] = useState(true);
  const [showBlogs, setShowBlogs] = useState(true);
  const [showCourses, setShowCourses] = useState(true);

  
  let coursesComponent;
  if (showCourses) {
    coursesComponent = <CourseDetails courses={courses} />;
  }
return (
    <div className="App">
      <header>
        <h1>Blogger App</h1>
        <div className="controls">
          
          <button onClick={() => setShowCourses(!showCourses)}>
            {showCourses ? 'Hide' : 'Show'} Courses
          </button>
          <button onClick={() => setShowBooks(!showBooks)}>
            {showBooks ? 'Hide' : 'Show'} Books
          </button>
          <button onClick={() => setShowBlogs(!showBlogs)}>
            {showBlogs ? 'Hide' : 'Show'} Blogs
          </button>
        </div>
      </header>  
      <main className="container">  
        <div className="column">{coursesComponent}</div>
        <div className="column">
          {showBooks && <BookDetails books={books} />}
        </div>
        <div className="column">
          {showBlogs ? <BlogDetails blogs={blogs} /> : <h2>Blogs are hidden.</h2>}
        </div>
      </main>
    </div>
  );
}

export default App;