import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const data = [
  { day: 'Mon', value: 65 },
  { day: 'Tue', value: 78 },
  { day: 'Wed', value: 85 },
  { day: 'Thu', value: 72 },
  { day: 'Fri', value: 89 },
  { day: 'Sat', value: 95 },
  { day: 'Sun', value: 82 },
];

const EngagementChart = () => {
  const maxValue = Math.max(...data.map(item => item.value));

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white">Weekly Engagement</h2>
        <div className="flex items-center space-x-2">
          <span className="px-3 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">
            +12.5%
          </span>
        </div>
      </div>
      
      <div className="relative h-64">
        <div className="absolute bottom-0 left-0 right-0 h-64">
          <div className="h-full flex items-end justify-between">
            {data.map((item, index) => (
              <div
                key={item.day}
                className="relative flex flex-col items-center w-full"
              >
                <motion.div
                  className="w-12 bg-indigo-500 rounded-t"
                  style={{
                    height: `${(item.value / maxValue) * 100}%`,
                  }}
                  initial={{ height: 0 }}
                  animate={{ height: `${(item.value / maxValue) * 100}%` }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="absolute bottom-full mb-2 text-sm text-gray-600 dark:text-gray-400">
                    {item.value}%
                  </div>
                </motion.div>
                <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {item.day}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-4">
        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
          <span>Previous Week: 76%</span>
          <span>Current Week: 82%</span>
        </div>
      </div>
    </div>
  );
};

export default EngagementChart;
