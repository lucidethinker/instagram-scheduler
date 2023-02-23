import React, { useState } from 'react';

function SchedulePosts({ accountName }) {
  const [newPost, setNewPost] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can add the code to handle the form submission and schedule the post
    console.log('Post scheduled for:', accountName);
    console.log('Post content:', newPost);
    setNewPost('');
  };

  return (
    <div className="bg-gray-100 flex-grow p-8">
      <h1 className="text-2xl font-bold mb-4">{accountName}</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full border border-gray-400 rounded-md p-4 mb-4"
          placeholder="Enter your post content here..."
          value={newPost}
          onChange={(event) => setNewPost(event.target.value)}
        ></textarea>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 px-4"
          type="submit"
        >
          Schedule post
        </button>
      </form>
    </div>
  );
}

export default SchedulePosts;
