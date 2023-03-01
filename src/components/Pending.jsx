import React from 'react';
import { useParams } from 'react-router-dom';
import useAccountsStore from '../store/store';

const PendingPostsPage = () => {
  const { id } = useParams(); // get the user ID from the URL
  const pendingPosts = useAccountsStore((state) => state.getPendingPosts(state)); // get the pending posts for the user

  // filter the pending posts by user ID
  const filteredPendingPosts = pendingPosts.filter(post => post.userId === Number(id));

  return (
    <div className=" h-screen p-10">
      <h1 className="text-2xl font-medium mb-5">Pending Posts</h1>
      {filteredPendingPosts.length > 0 ? (
        <ul className="list-disc pl-5">
          {filteredPendingPosts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      ) : (
        <p>No pending posts found for this user.</p>
      )}
    </div>
  
  );
};

export default PendingPostsPage;
