import React from 'react';
import useAccountsStore from '../store/store';
import { Link } from 'react-router-dom';
import '../styles/style.css';

const AccountList = () => {
  const accounts = useAccountsStore((state) => state.accounts);
  const removeAccount = useAccountsStore((state) => state.removeAccount);

  return (
    <div className="space-y-4">
      {accounts.map((account) => (
        <div key={account.id} className="border border-gray-300 p-4">
          <div className="flex items-center">
            <img src="https://via.placeholder.com/50" alt="Profile" className="h-10 w-10 rounded-full mr-4" />
            <div className="flex-grow">
              <h2 className="font-medium text-lg">{account.username}</h2>
              <span className="text-gray-500">@{account.username}</span>
            </div>
            <div className="space-x-4">
              <button className="bg-blue-500 text-white py-2 px-4 rounded-full">Follow</button>
              <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-full">
                <Link to={`/schedule/${account.id}`}>Schedule Post</Link>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccountList;
