import React from 'react';
import userData from '../store/Data';
import AccountList from './AccountList';
import '../styles/style.css'

const HomePage = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-5 h-screen p-9">
        {userData.map((user) => (
          <div key={user.id}>
            <div className="bg-black p-4 rounded-lg">
              <div className="flex justify-between mb-2">
                <div className="flex items-center">
                  <img className="w-10 h-10 rounded-full mr-2" src={user.profilePhoto} alt={`${user.username} profile`} />
                  <h2 className="text-lg text-white font-medium">{user.username}</h2>
                </div>
                <div className="flex space-x-2">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Follow</button>
                  <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md">
                    <a href={`/schedule/${user.id}`}>Schedule</a>
                  </button>
                </div>
              </div>
              <AccountList user={user} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
