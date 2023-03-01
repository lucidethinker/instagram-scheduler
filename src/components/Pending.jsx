import React from 'react';
import useAccountsStore from '../store/store';

const PendingPostsPage = () => {
  const pendingPosts = useAccountsStore((state) => state.getPendingPosts());

  return (
    <div className="p-10">
      <h1 className="text-2xl font-medium mb-5">Pending Posts</h1>
      <div className="grid grid-cols-3 gap-4">
        {pendingPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md p-5">
            <img
              className="w-full h-48 object-cover rounded-lg mb-3"
              src={post.imageUrl}
              alt={post.caption}
            />
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-medium">{post.caption}</h2>
              <p className="text-gray-500">{post.scheduledDate.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PendingPostsPage;
