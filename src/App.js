import React, { useState } from 'react';
import HomePage from './components/HomePage';
import AddAccount from './components/AppAccount';
import SchedulePosts from './components/SchedulePosts';
import'./styles/style.css'
function App() {
  const [selectedAccount, setSelectedAccount] = useState(null);

  // render selected account's schedule posts component
  const renderSelectedAccount = () => {
    if (selectedAccount === null) {
      return null;
    }
    return <SchedulePosts accountName={selectedAccount} />;
  }

  // render the app
  return (
    <div>
      <HomePage onSelectAccount={setSelectedAccount} />
      <AddAccount onAddAccount={() => setSelectedAccount(null)} />
      {renderSelectedAccount()}
    </div>
  );
}

export default App;
