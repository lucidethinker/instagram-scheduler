import { useState } from 'react';
import '../styles/style.css'

function HomePage() {
  const [accounts, setAccounts] = useState([]);

  // function to add new account
  const addAccount = (newAccount) => {
    setAccounts([...accounts, newAccount]);
  }

  // render the list of accounts
  return (
    <div className="bg-white flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-xs">
        <div className="flex flex-col items-center justify-center mb-4">
          <h1 className="text-2xl font-bold text-gray-800">Instagram Post Scheduler</h1>
        </div>
        <ul className="bg-white rounded-md border border-gray-200 divide-y divide-gray-200">
          {accounts.map((account, index) => (
            <li key={index} className="px-6 py-4 hover:bg-gray-50">
              <div className="flex items-center">
                <img className="w-8 h-8 rounded-full mr-3" src="https://source.unsplash.com/random/32x32?face" alt="User profile" />
                <div className="text-sm font-medium text-gray-800">{account}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
