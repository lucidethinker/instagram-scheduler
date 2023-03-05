import React, { useState } from 'react';
import { useNavigate , useParams,Link } from 'react-router-dom';

import useAccountsStore from "../store/store";

function SchedulePage() {
  const { createPost } = useAccountsStore();
  const { id } = useParams(); // get the user ID from the URL
  const [post, setPost] = useState({ caption: '', imageUrl: '', scheduledDate: '' }); // manage the state of the post form
  const history = useNavigate(); // use history to redirect after the form is submitted
  
  // find the user in the data store
  const user = useAccountsStore(state => state.accounts.find(user => user.id === Number(id)));

  // handle form submission
  const handleSubmit = e => {
    e.preventDefault();
    createPost(post.caption, post.imageUrl, post.scheduledDate);
    history.push('/');
  };
  return (
    <div className="p-10">
      <div className="flex items-center mb-5">
        <img className="w-16 h-16 rounded-full mr-3" src={user.profilePhoto} alt={`${user.username} profile`} />
        <h1 className="text-2xl font-medium">{user.username}</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
            Post Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Enter a title for your post"
            value={post.title}
            onChange={e => setPost({ ...post, title: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="content">
            Post Content
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="content"
            placeholder="Enter your post content"
            value={post.content}
            onChange={e => setPost({ ...post, content: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="date">
            Post Date and Time
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="date"
            type="datetime-local"
            value={post.date}
            onChange={e => setPost({ ...post, date: e.target.value })}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Schedule Post
        </button>
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
             
              >
            <Link to={`/Pending/${user.id}`}>
            Pending Posts
            </Link>
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
              >
             <Link to={`/PostList/${user.id}`}>
             All Posts
             </Link>
            </button>
          </form>
        </div>
        );
      };
      
      export default SchedulePage;

