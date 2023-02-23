import React from 'react';
import  useAccountsStore  from '../store/store';


const AccountList = () => {
  const accounts = useAccountsStore((state) => state.accounts);
  const removeAccount = useAccountsStore((state) => state.removeAccount);

  return (
    <div>
      {accounts.map((account, index) => (
        <div key={account.id}>
          <span>{account.username}</span>
          <button onClick={() => removeAccount(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default AccountList;
