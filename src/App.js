import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import AccountList from './components/AccountList.jsx';
import AddAccountForm from './components/AddAccount.jsx';
import './styles/style.css'

const App = () => {
  return (
    <div>
      <Header />
      <AccountList />
      <AddAccountForm />
      <Footer />
    </div>
  );
};

export default App;
