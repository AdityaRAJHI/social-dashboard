import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/solid';

const stats = [
  {
    name: 'Total Followers',
    stat: '71,897',
    previousStat: '70,946',
    change: '12%',
    changeType: 'increase',
  },
  {
    name: 'Engagement Rate',
    stat: '58.16%',
    previousStat: '56.14%',
    change: '2.02%',
    changeType: 'increase',
  },
  {
    name: 'Total Posts',
    stat: '24,875',
    previousStat: '24,571',
    change: '3%',
    changeType: 'decrease',
  },
  {
    name: 'Average Reach',
    stat: '45,649',
    previousStat: '44,998',
    change: '5%',
    changeType: 'increase',
  },
];

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.name}
          className="relative bg-white dark:bg-gray-800 pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
        >
          <dt>
            <div className="absolute bg-indigo-500 rounded-md p-3">
              <ArrowUpIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <p className="ml-16 text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
              {item.name}
            </p>
          </dt>
          <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
            <p className="text-2xl font-semibold text-gray-900 dark:text-white">
              {item.stat}
            </p>
            <p
              className={`
                ml-2 flex items-baseline text-sm font-semibold
                ${item.changeType === 'increase'
                  ? 'text-green-600'
                  : 'text-red-600'
                }
              `}
            >
              {item.changeType === 'increase' ? (
                <ArrowUpIcon className="self-center flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
              ) : (
                <ArrowDownIcon className="self-center flex-shrink-0 h-5 w-5 text-red-500" aria-hidden="true" />
              )}
              <span className="ml-1">{item.change}</span>
            </p>
            <div className="absolute bottom-0 inset-x-0 bg-gray-50 dark:bg-gray-900 px-4 py-4 sm:px-6">
              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
                  View details
                </a>
              </div>
            </div>
          </dd>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;
