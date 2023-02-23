import create from 'zustand';

const useStore = create((set) => ({
  accounts: [],
  selectedAccount: null,
  scheduledPosts: {},
  addAccount: (newAccount) => {
    set((state) => ({
      accounts: [...state.accounts, newAccount],
    }));
  },
  selectAccount: (accountName) => {
    set({ selectedAccount: accountName });
  },
  schedulePost: (post) => {
    set((state) => ({
      scheduledPosts: {
        ...state.scheduledPosts,
        [state.selectedAccount]: [
          ...(state.scheduledPosts[state.selectedAccount] || []),
          post,
        ],
      },
    }));
  },
}));

export default useStore;
