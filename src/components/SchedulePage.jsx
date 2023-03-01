import React, { useState } from 'react';
import { useNavigate , useParams } from 'react-router-dom';
import useAccountsStore from '../store/store';
import userData from '../store/Data';

const SchedulePage = () => {
  const { id } = useParams(); // get the user ID from the URL
  // const userData = useAccountsStore((state) => state.userData); // get the user data store
  const [post, setPost] = useState({ title: '', content: '', date: '' }); // manage the state of the post form
  const history = useNavigate (); // use history to redirect after the form is submitted
  const { scheduledPosts, addScheduledPost } = useAccountsStore((state) => ({ scheduledPosts: state.scheduledPosts, addScheduledPost: state.addScheduledPost }));

  // find the user in the data store
  const user = userData.find((user) => user.id === Number(id));

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    addScheduledPost(post, user.id);
   
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
            onChange={(e) => setPost({ ...post, title: e.target.value })}
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
                onChange={(e) => setPost({ ...post, content: e.target.value })}
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
                onChange={(e) => setPost({ ...post, date: e.target.value })}
              />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Schedule Post
            </button>
          </form>
        </div>
        );
      };
      
      export default SchedulePage;
