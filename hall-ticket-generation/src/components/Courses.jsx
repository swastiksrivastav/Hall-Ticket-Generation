import React, { useState } from 'react';
import './Courses.css';

const branches = {
  "Computer Science": {
    "Semester 1": ["Course 1", "Course 2", "Course 3"],
    "Semester 2": ["Course 4", "Course 5", "Course 6"]
  },
  "Mechanical Engineering": {
    "Semester 1": ["Course 7", "Course 8", "Course 9"],
    "Semester 2": ["Course 10", "Course 11", "Course 12"]
  }
  // Add more branches and semesters as needed
};

const Courses = () => {
  const [selectedBranch, setSelectedBranch] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");

  const handleBranchChange = (event) => {
    setSelectedBranch(event.target.value);
    setSelectedSemester("");
  };

  const handleSemesterChange = (event) => {
    setSelectedSemester(event.target.value);
  };

  return (
    <div className="courses">
      <h2>Courses</h2>

      <div className="dropdown">
        <label htmlFor="branch">Select Branch:</label>
        <select id="branch" value={selectedBranch} onChange={handleBranchChange}>
          <option value="">--Select Branch--</option>
          {Object.keys(branches).map(branch => (
            <option key={branch} value={branch}>{branch}</option>
          ))}
        </select>
      </div>

      {selectedBranch && (
        <div className="dropdown">
          <label htmlFor="semester">Select Semester:</label>
          <select id="semester" value={selectedSemester} onChange={handleSemesterChange}>
            <option value="">--Select Semester--</option>
            {Object.keys(branches[selectedBranch]).map(semester => (
              <option key={semester} value={semester}>{semester}</option>
            ))}
          </select>
        </div>
      )}

      {selectedBranch && selectedSemester && (
        <div className="course-list">
          <h3>{selectedBranch} - {selectedSemester}</h3>
          <ul>
            {branches[selectedBranch][selectedSemester].map(course => (
              <li key={course}>{course}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Courses
