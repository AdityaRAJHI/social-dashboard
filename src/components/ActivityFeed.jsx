import { ChatBubbleLeftIcon, HeartIcon, ShareIcon } from '@heroicons/react/24/outline';

const activities = [
  {
    id: 1,
    type: 'comment',
    person: { name: 'Eduardo Benz', href: '#', imageUrl: 'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80' },
    time: '6m ago',
    action: 'commented on your post',
    content: "Looking great! The new design really brings out the message.",
  },
  {
    id: 2,
    type: 'like',
    person: { name: 'Sarah Johnson', href: '#', imageUrl: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80' },
    time: '12m ago',
    action: 'liked your photo',
  },
  {
    id: 3,
    type: 'share',
    person: { name: 'Michael Foster', href: '#', imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80' },
    time: '23m ago',
    action: 'shared your post',
  },
];

const ActivityFeed = () => {
  const getIcon = (type) => {
    switch (type) {
      case 'comment':
        return <ChatBubbleLeftIcon className="h-5 w-5 text-gray-400" />;
      case 'like':
        return <HeartIcon className="h-5 w-5 text-red-400" />;
      case 'share':
        return <ShareIcon className="h-5 w-5 text-blue-400" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
      <div className="p-6">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white">Activity Feed</h2>
        <div className="flow-root mt-6">
          <ul className="-mb-8">
            {activities.map((activity, activityIdx) => (
              <li key={activity.id}>
                <div className="relative pb-8">
                  {activityIdx !== activities.length - 1 ? (
                    <span
                      className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200 dark:bg-gray-700"
                      aria-hidden="true"
                    />
                  ) : null}
                  <div className="relative flex items-start space-x-3">
                    <div className="relative">
                      <img
                        className="h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white dark:ring-gray-800"
                        src={activity.person.imageUrl}
                        alt=""
                      />
                      <span className="absolute -right-1 -top-1 h-5 w-5 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                        {getIcon(activity.type)}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div>
                        <div className="text-sm">
                          <a href={activity.person.href} className="font-medium text-gray-900 dark:text-white">
                            {activity.person.name}
                          </a>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">
                          {activity.action} • {activity.time}
                        </p>
                      </div>
                      {activity.content && (
                        <div className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                          <p>{activity.content}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;
