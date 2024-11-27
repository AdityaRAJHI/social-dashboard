import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { UsersIcon, GlobeAltIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const demographicData = [
  { name: '18-24', value: 30 },
  { name: '25-34', value: 40 },
  { name: '35-44', value: 20 },
  { name: '45+', value: 10 },
];

const locationData = [
  { name: 'United States', value: 45 },
  { name: 'United Kingdom', value: 25 },
  { name: 'Canada', value: 15 },
  { name: 'Australia', value: 15 },
];

const COLORS = ['#6366F1', '#8B5CF6', '#EC4899', '#F43F5E'];

const metrics = [
  {
    name: 'Total Audience',
    value: '84.3K',
    change: '+12.5%',
    icon: UsersIcon,
  },
  {
    name: 'Active Users',
    value: '45.2K',
    change: '+8.2%',
    icon: ChartBarIcon,
  },
  {
    name: 'Global Reach',
    value: '25+',
    change: 'Countries',
    icon: GlobeAltIcon,
  },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 p-2 shadow rounded">
        <p className="text-sm">{`${payload[0].name}: ${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};

const Audience = () => {
  return (
    <div className="space-y-6">
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {metrics.map((metric) => (
          <div
            key={metric.name}
            className="bg-white dark:bg-gray-800 overflow-hidden rounded-lg shadow"
          >
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <metric.icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                      {metric.name}
                    </dt>
                    <dd>
                      <div className="text-lg font-medium text-gray-900 dark:text-white">
                        {metric.value}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {metric.change}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {/* Demographics Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Age Demographics
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={demographicData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name} (${value}%)`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {demographicData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Location Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Geographic Distribution
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={locationData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name} (${value}%)`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {locationData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Audience Insights */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
          Audience Insights
        </h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { label: 'Gender Distribution', male: 55, female: 45 },
            { label: 'Device Usage', mobile: 70, desktop: 30 },
            { label: 'Engagement Time', morning: 40, afternoon: 35, evening: 25 },
          ].map((insight) => (
            <div key={insight.label} className="space-y-2">
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {insight.label}
              </h4>
              <div className="space-y-1">
                {Object.entries(insight).map(([key, value]) => {
                  if (key === 'label') return null;
                  return (
                    <div key={key} className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-300 capitalize">
                        {key}
                      </span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {value}%
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Audience;