import React, { useState } from 'react';
import useAccountsStore from '../store/store';
import '../styles/style.css';

const AddAccountForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const addAccount = useAccountsStore((state) => state.addAccount);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username.trim() && password.trim()) {
      addAccount({ id: Date.now(), username, password });
      setUsername('');
      setPassword('');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-6  shadow-md">
        <h1 className="text-2xl font-medium mb-4">Log In</h1>
        <div className="mb-4">
          <input
            className="w-full border  py-2 px-3 text-gray-700"
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Phone number, username, or email"
          />
        </div>
        <div className="mb-6">
          <input
            className="w-full border  py-2 px-3 text-gray-700"
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg w-full"
        >
          Log In
        </button>
        <div className="text-center mt-4">
          <a href="#" className="text-blue-500 hover:text-blue-800">
            Forgot password?
          </a>
        </div>
      </form>
    </div>
  );
};

export default AddAccountForm;

// Path: src/components/AddAccountForm.jsx