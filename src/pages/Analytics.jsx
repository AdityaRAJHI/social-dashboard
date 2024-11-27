import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const analyticsData = [
  { date: '2023-01', followers: 4000, engagement: 2400, reach: 2400 },
  { date: '2023-02', followers: 4500, engagement: 2800, reach: 2900 },
  { date: '2023-03', followers: 5000, engagement: 3200, reach: 3400 },
  { date: '2023-04', followers: 5500, engagement: 3800, reach: 3800 },
  { date: '2023-05', followers: 6200, engagement: 4200, reach: 4300 },
  { date: '2023-06', followers: 7000, engagement: 4800, reach: 4800 },
];

const metrics = [
  { name: 'Post Performance', value: '89%', description: 'Average engagement rate' },
  { name: 'Audience Growth', value: '+12.3%', description: 'Month over month' },
  { name: 'Content Reach', value: '45.8K', description: 'Average per post' },
  { name: 'Conversion Rate', value: '2.4%', description: 'From social traffic' },
];

const Analytics = () => {
  return (
    <div className="space-y-6">
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.name} className="bg-white dark:bg-gray-800 overflow-hidden rounded-lg shadow">
            <div className="p-5">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                {metric.name}
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-white">
                {metric.value}
              </dd>
              <dd className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {metric.description}
              </dd>
            </div>
          </div>
        ))}
      </div>

      {/* Analytics Chart */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
          Performance Trends
        </h3>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={analyticsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="followers" stroke="#8884d8" />
              <Line type="monotone" dataKey="engagement" stroke="#82ca9d" />
              <Line type="monotone" dataKey="reach" stroke="#ffc658" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Performance Breakdown */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
          Performance Breakdown
        </h3>
        <div className="space-y-4">
          {[
            { label: 'Instagram', value: 45, color: 'bg-pink-500' },
            { label: 'Twitter', value: 32, color: 'bg-blue-500' },
            { label: 'Facebook', value: 23, color: 'bg-indigo-500' },
          ].map((platform) => (
            <div key={platform.label}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {platform.label}
                </span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {platform.value}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className={`${platform.color} h-2 rounded-full`}
                  style={{ width: `${platform.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analytics;