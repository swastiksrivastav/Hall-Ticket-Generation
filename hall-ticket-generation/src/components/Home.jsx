import React from 'react'
import { Link } from 'react-router-dom';
import "./Home.css"
import "./Courses.jsx"
import "./FacultySignIn.jsx"

function Home() {
  return (
    <div className="home">
        <div className="home-header">
           <h2>Welcome to Hall Ticket Generator</h2>
           <div className="home-content">
            <div className="box-container">
               <Link to="/courses" className="box">Courses</Link> {/* Use Link for internal navigation */}
               <Link to="/faculty-signin" className="box">Faculty Sign in</Link>
               <Link to="" className="box">HOD sign in</Link>
               <Link to="" className="box">COE office</Link>
            </div>
           </div>
        </div>
      
    </div>
  )
}

export default Home
