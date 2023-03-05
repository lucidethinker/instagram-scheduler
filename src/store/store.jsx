import userData from "./Data";
import { create } from "zustand";

const useAccountsStore = create((set) => ({
  currentUser: null,
 
  setCurrentUser: (userId) => set(() => ({ currentUser: userId })),
  getUserPosts: (state) => {
    if (!state.currentUser) {
      return [];
    }
    const user = userData.find((user) => user.id === state.currentUser);
    if (!user || !user.posts) {
      return [];
    }
    return user.posts;
  },
  getPendingPosts: (state) => {
    if (!state.currentUser) {
      return [];
    }
    const user = userData.find((user) => user.id === state.currentUser);
    if (!user || !user.posts) {
      return [];
    }
    return user.posts.filter(post => post.scheduledDate > new Date());
  },
  createPost: (caption, imageUrl, scheduledDate) => {
    const post = {
      id:
        userData.reduce(
          (maxId, user) => Math.max(maxId, user.posts.length),
          -1
        ) + 1,
      caption,
      imageUrl,
      scheduledDate,
    };
    set((state) => {
      const userIndex = userData.findIndex(
        (user) => user.id === state.currentUser
      );
      if (userIndex === -1 || !userData[userIndex].posts) {
        return;
      }
      userData[userIndex].posts.push(post);
    });
  },
  deletePost: (postId) => {
    set((state) => {
      const userIndex = userData.findIndex(
        (user) => user.id === state.currentUser
      );
      if (userIndex === -1 || !userData[userIndex].posts) {
        return;
      }
      userData[userIndex].posts = userData[userIndex].posts.filter((post) => post.id !== postId);
    });
  },
  accounts: userData.map((user) => ({
    id: user.id,
    username: user.username,
    profilePhoto:user.profilePhoto,
  })),
}));

export default useAccountsStore;
