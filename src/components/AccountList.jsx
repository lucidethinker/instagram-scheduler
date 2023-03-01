import React from "react";
import useAccountsStore from "../store/store";
import { Link } from "react-router-dom";
import "../styles/style.css";

const AccountList = () => {
  const accounts = useAccountsStore((state) => state.accounts);

  return (
    <div className="grid grid-cols-3 gap-5 h-screen p-9">
      {accounts.map((account) => (
        <div key={account.id} >
          <div className="bg-black p-5 rounded-lg">
          <div className="flex justify-between mb-2">
          <div className="flex items-center">
            <img
               className="w-10 h-10 rounded-full mr-2"
               src={account.profilePhoto} 
               alt={`${account.username} profile`}               
            />
              <h2 
              className="text-lg text-white font-medium">
                {account.username}</h2>
            </div>
            <div className="flex space-x-2">
              <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md">
                <Link to={`/ShedulePosts/${account.id}`}>Schedule Post</Link>
              </button>
            </div>
          </div>
        </div>
        </div>
      ))}
    </div>
  );
};

export default AccountList;



// Path: src/components/AccountList.jsx