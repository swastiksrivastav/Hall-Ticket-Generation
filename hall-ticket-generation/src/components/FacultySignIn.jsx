import React from 'react';
import { Link } from 'react-router-dom';
import './FacultySignIn.css';

const FacultySignIn = () => {
  return (
    <div className="faculty-signin">
      <h2>Faculty Sign In</h2>
      <div className="options">
        <Link to="/upload-marks" className="option">Upload Exam Marks</Link>
        <Link to="/upload-attendance" className="option">Upload Attendance</Link>
      </div>
    </div>
  );
};

export default FacultySignIn;
