import React, { useState } from 'react';
import './UploadMarks.css';

const UploadMarks = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedFile) {
      alert(`File ${selectedFile.name} selected for upload.`);
      // Implement the file upload logic here (e.g., send to server)
    } else {
      alert('Please select a file to upload.');
    }
  };

  return (
    <div className="upload-marks">
      <h2>Upload Exam Marks</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {selectedFile && <p>Selected file: {selectedFile.name}</p>}
    </div>
  );
};

export default UploadMarks;
