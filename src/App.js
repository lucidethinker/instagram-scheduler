import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './components/HomePage.jsx';
import SchedulePage from './components/SchedulePage.jsx';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AddAccountForm from './components/AddAccount.jsx';
import './styles/style.css'


const App = () => {
  return (
    <Router>
    <div>
      <Header />
      <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/add-account" element={<AddAccountForm />}/>
          <Route path="/ShedulePosts/:id" element={<SchedulePage />}/>
          </Routes>
      <Footer />
    </div>
    </Router>
  );
};

export default App;
