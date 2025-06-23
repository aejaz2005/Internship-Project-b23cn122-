import React from 'react';
import { Link, Outlet } from "react-router-dom";
import './HomeHead.css';

function AfterLogin() {
  return (
  
    <div className="afterlogin-container" style={{ backgroundImage: 'url(./afterlogin.jpg)' }}>
      <h1 className="afterlogin-title" style={{color:'black'}}>
        WELCOME TO INDIAN FRONTLINE ASSISTANCE
      </h1>

      <ul className="afterlogin-list">
        <li><Link to="Medicalhelp" className="afterlogin-link">Medical Help</Link></li>

      
        <li><Link to="JobSearch" className="afterlogin-link">Jobs for Veterans</Link></li>
        <li><Link to="Leave" className="afterlogin-link">Leave Application</Link></li>
        <li><Link to="Retirement" className="afterlogin-link">Retirement Application</Link></li>
      </ul>

      <div className="afterlogin-outlet">
        <Outlet />
      </div>
    </div>
   
  );
}

export default AfterLogin;

