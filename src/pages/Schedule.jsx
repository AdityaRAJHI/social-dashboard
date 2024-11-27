import { useState } from 'react';
import { CalendarIcon, ClockIcon, PlusIcon } from '@heroicons/react/24/outline';

const initialSchedule = [
  {
    id: 1,
    title: 'Product Launch Post',
    platform: 'Instagram',
    date: '2023-08-15',
    time: '10:00 AM',
    status: 'scheduled',
    content: 'Exciting news! Our new product line launches today...',
  },
  {
    id: 2,
    title: 'Weekly Update',
    platform: 'Twitter',
    date: '2023-08-16',
    time: '2:30 PM',
    status: 'draft',
    content: 'Check out this week\'s highlights and updates...',
  },
  {
    id: 3,
    title: 'Customer Story',
    platform: 'Facebook',
    date: '2023-08-17',
    time: '11:00 AM',
    status: 'scheduled',
    content: 'Meet Sarah, who transformed her business using our platform...',
  },
];

const Schedule = () => {
  const [posts, setPosts] = useState(initialSchedule);
  const [showNewPostForm, setShowNewPostForm] = useState(false);
  const [newPost, setNewPost] = useState({
    title: '',
    platform: 'Instagram',
    date: '',
    time: '',
    content: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setPosts([
      ...posts,
      {
        id: posts.length + 1,
        ...newPost,
        status: 'scheduled',
      },
    ]);
    setShowNewPostForm(false);
    setNewPost({
      title: '',
      platform: 'Instagram',
      date: '',
      time: '',
      content: '',
    });
  };

  return (
    <div className="space-y-6">
      {/* Header with Add Post Button */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Content Schedule</h2>
        <button
          onClick={() => setShowNewPostForm(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          New Post
        </button>
      </div>

      {/* New Post Form */}
      {showNewPostForm && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Schedule New Post</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Title
                </label>
                <input
                  type="text"
                  required
                  value={newPost.title}
                  onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Platform
                </label>
                <select
                  value={newPost.platform}
                  onChange={(e) => setNewPost({ ...newPost, platform: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600"
                >
                  <option>Instagram</option>
                  <option>Twitter</option>
                  <option>Facebook</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Date
                  </label>
                  <input
                    type="date"
                    required
                    value={newPost.date}
                    onChange={(e) => setNewPost({ ...newPost, date: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Time
                  </label>
                  <input
                    type="time"
                    required
                    value={newPost.time}
                    onChange={(e) => setNewPost({ ...newPost, time: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Content
                </label>
                <textarea
                  required
                  value={newPost.content}
                  onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowNewPostForm(false)}
                  className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Schedule
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Scheduled Posts */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg divide-y divide-gray-200 dark:divide-gray-700">
        {posts.map((post) => (
          <div key={post.id} className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    post.status === 'scheduled' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {post.status}
                  </span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">{post.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{post.platform}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5" />
                  {post.date}
                </div>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <ClockIcon className="flex-shrink-0 mr-1.5 h-5 w-5" />
                  {post.time}
                </div>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-600 dark:text-gray-300">{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;