import React from "react";
import './Header.css';
import{ Link } from 'react-router-dom';
const Header = () =>{
  return(
    <>
    <nav className="navbar bg-info fixed-top">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">DocApp</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end"  id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">DocApp</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Choose Specialist and Doctors</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/AppoinmentReminder/:userid">Appointment Reminder</Link>
          </li>
         
          <li className="nav-item">
            <Link className="nav-link active" to="/Chat">Chat</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>

</nav>

     
      
    </>

  )

}
export default Header

