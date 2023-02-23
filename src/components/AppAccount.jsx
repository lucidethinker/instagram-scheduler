import { useState } from 'react';

function AddAccount({ addAccount }) {
  const [accountName, setAccountName] = useState('');

  // function to handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    addAccount(accountName);
    setAccountName('');
  }

  // render the form to add a new account
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={accountName}
        onChange={(event) => setAccountName(event.target.value)}
        placeholder="Enter account name"
      />
      <button type="submit">Add Account</button>
    </form>
  );
}

export default AddAccount;
