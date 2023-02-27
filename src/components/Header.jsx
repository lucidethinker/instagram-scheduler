import React from 'react';
import '../styles/style.css'
import {Link } from 'react-router-dom';
const Header = () => {
  return (
    
    <header className="bg-white border-b border-gray-300 py-4">
       
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="https://www.instagram.com/static/images/ico/favicon-192.png/68d99ba29cc8.png" alt="Instagram logo" className="h-8 w-8 mr-2" />
            <h1 className="text-2xl font-bold">Post Scheduler</h1>
          </div>
          <ul className="flex items-center">
          <li className="mr-4">
              <Link to="/add-account" className="text-gray-700 hover:text-gray-900 font-medium">
                Login
              </Link>
              </li>
            <li className="mr-4">
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
                Schedule
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>
   
    </header>
  );
};
export default  Header ;

// Path: src/components/Footer.jsx