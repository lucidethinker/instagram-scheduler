import { useState } from 'react';
import AddAccount from './AddAccount';
import { testAccounts } from '../store/Data';
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
          {testAccounts.map((account, index) => (
            <li key={index} className="px-6 py-4 hover:bg-gray-50">
              <a href={account.imageUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <img className="w-8 h-8 rounded-full mr-3" src="https://picsum.photos/200" alt="User profile" />
                <div className="text-lg font-medium text-gray-800">{testAccounts}</div>
              </a>
            </li>
          ))}
        </ul>
        <AddAccount onAddAccount={addAccount} />
      </div>
    </div>
  );
}

export default HomePage;
