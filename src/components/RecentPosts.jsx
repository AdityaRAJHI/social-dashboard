import { EllipsisHorizontalIcon, HeartIcon, ChatBubbleLeftIcon, ShareIcon } from '@heroicons/react/24/outline';

const posts = [
  {
    id: 1,
    author: {
      name: 'Sarah Johnson',
      imageUrl: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
    imageUrl: 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    content: 'Just launched our new product! Check it out and let me know what you think. #newlaunch #excited',
    likes: 242,
    comments: 89,
    shares: 35,
    time: '2 hours ago',
  },
  {
    id: 2,
    author: {
      name: 'Michael Foster',
      imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
    imageUrl: 'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
    content: 'Amazing team meeting today! The future is looking bright. 🌟 #teamwork #success',
    likes: 156,
    comments: 45,
    shares: 12,
    time: '4 hours ago',
  },
];

const RecentPosts = () => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
      <div className="p-6">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-6">Recent Posts</h2>
        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post.id} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-0 last:pb-0">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={post.author.imageUrl}
                    alt=""
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {post.author.name}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {post.time}
                    </p>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-500">
                  <EllipsisHorizontalIcon className="h-5 w-5" />
                </button>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {post.content}
              </p>
              
              {post.imageUrl && (
                <div className="mb-4">
                  <img
                    src={post.imageUrl}
                    alt=""
                    className="rounded-lg w-full object-cover h-64"
                  />
                </div>
              )}
              
              <div className="flex items-center justify-between text-gray-500 dark:text-gray-400">
                <button className="flex items-center space-x-2 hover:text-red-500">
                  <HeartIcon className="h-5 w-5" />
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center space-x-2 hover:text-blue-500">
                  <ChatBubbleLeftIcon className="h-5 w-5" />
                  <span>{post.comments}</span>
                </button>
                <button className="flex items-center space-x-2 hover:text-green-500">
                  <ShareIcon className="h-5 w-5" />
                  <span>{post.shares}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentPosts;
