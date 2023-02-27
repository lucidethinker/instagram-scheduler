import {create} from 'zustand';

const useAccountsStore = create((set) => ({
  accounts: [],
  addAccount: (account) => set((state) => ({ accounts: [...state.accounts, account] })),
  removeAccount: (accountIndex) =>
    set((state) => ({
      accounts: state.accounts.filter((_, index) => index !== accountIndex),
    })),
}));
export default useAccountsStore;

// Path: src/store/store.jsx