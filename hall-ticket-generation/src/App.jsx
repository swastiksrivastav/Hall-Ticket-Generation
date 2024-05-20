import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Home from './components/Home';
import Courses from './components/Courses'; // Import the new Courses component
import './App.css';
import UploadMarks from './components/UploadMarks';
import UploadAttendance from './components/UploadAttendance';
import FacultySignIn from './components/FacultySignIn';

const App = () => {
  return (
    <Router>
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          
         
          <Route path="/courses" element={<Courses />} /> {/* Add the new route */}
          <Route path="/faculty-signin" element={<FacultySignIn />} /> {/* Add the new route */}
          <Route path="/upload-marks" element={<UploadMarks />} /> {/* Add the new route */}
          <Route path="/upload-attendance" element={<UploadAttendance />} /> {/* Add the new route */}
        </Routes>
      </main>
      
    </Router>
  );
};

export default App;
