import { useState } from 'react';
import { 
  ArrowUpIcon, 
  ArrowDownIcon,
  UserGroupIcon, 
  ChatBubbleLeftEllipsisIcon,
  HeartIcon,
  EyeIcon
} from '@heroicons/react/24/outline';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend
} from 'recharts';

const Dashboard = () => {
  // Sample data for charts
  const engagementData = [
    { name: 'Mon', Likes: 4000, Comments: 2400, Shares: 2400 },
    { name: 'Tue', Likes: 3000, Comments: 1398, Shares: 2210 },
    { name: 'Wed', Likes: 2000, Comments: 9800, Shares: 2290 },
    { name: 'Thu', Likes: 2780, Comments: 3908, Shares: 2000 },
    { name: 'Fri', Likes: 1890, Comments: 4800, Shares: 2181 },
    { name: 'Sat', Likes: 2390, Comments: 3800, Shares: 2500 },
    { name: 'Sun', Likes: 3490, Comments: 4300, Shares: 2100 },
  ];

  const reachData = [
    { name: 'Mon', Reach: 15000 },
    { name: 'Tue', Reach: 18000 },
    { name: 'Wed', Reach: 22000 },
    { name: 'Thu', Reach: 19000 },
    { name: 'Fri', Reach: 25000 },
    { name: 'Sat', Reach: 28000 },
    { name: 'Sun', Reach: 30000 },
  ];

  const stats = [
    {
      id: 1,
      name: 'Total Followers',
      value: '24,893',
      change: '+2.5%',
      changeType: 'increase',
      icon: UserGroupIcon,
    },
    {
      id: 2,
      name: 'Engagement Rate',
      value: '4.2%',
      change: '+0.3%',
      changeType: 'increase',
      icon: HeartIcon,
    },
    {
      id: 3,
      name: 'Total Comments',
      value: '1,432',
      change: '-0.8%',
      changeType: 'decrease',
      icon: ChatBubbleLeftEllipsisIcon,
    },
    {
      id: 4,
      name: 'Post Reach',
      value: '45.2K',
      change: '+4.1%',
      changeType: 'increase',
      icon: EyeIcon,
    },
  ];

  const recentActivity = [
    {
      id: 1,
      type: 'comment',
      user: 'Priya Sharma',
      action: 'commented on your post',
      time: '2 minutes ago',
      content: '"Great insights! Looking forward to more content."',
      userImage: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80',
    },
    {
      id: 2,
      type: 'like',
      user: 'Arjun Patel',
      action: 'liked your post',
      time: '5 minutes ago',
      content: '"10 Tips for Better Social Media Engagement"',
      userImage: 'https://images.unsplash.com/photo-1618568221633-0a45dd10ecf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80',
    },
    {
      id: 3,
      type: 'follow',
      user: 'Neha Gupta',
      action: 'started following you',
      time: '10 minutes ago',
      userImage: 'https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80',
    },
    {
      id: 4,
      type: 'share',
      user: 'Raj Malhotra',
      action: 'shared your post',
      time: '15 minutes ago',
      content: '"The Future of Social Media Marketing"',
      userImage: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80',
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="p-6 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-white">Total Followers</h3>
            <svg className="w-8 h-8 text-pink-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <p className="text-3xl font-bold text-white">48.6K</p>
          <p className="text-pink-200 mt-2">+2.6% from last month</p>
        </div>

        <div className="p-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-white">Engagement Rate</h3>
            <svg className="w-8 h-8 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <p className="text-3xl font-bold text-white">4.2%</p>
          <p className="text-blue-200 mt-2">+0.3% from last month</p>
        </div>

        <div className="p-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-white">Scheduled Posts</h3>
            <svg className="w-8 h-8 text-green-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="text-3xl font-bold text-white">24</p>
          <p className="text-green-200 mt-2">Next post in 2 hours</p>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Engagement Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Engagement Overview
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={engagementData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Likes" fill="#8884d8" />
                <Bar dataKey="Comments" fill="#82ca9d" />
                <Bar dataKey="Shares" fill="#ffc658" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Reach Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Weekly Reach
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={reachData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="Reach"
                  stroke="#8884d8"
                  fill="#8884d8"
                  fillOpacity={0.3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
        <div className="px-6 py-5 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            Recent Activity
          </h3>
        </div>
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
          {recentActivity.map((activity) => (
            <li key={activity.id} className="p-6">
              <div className="flex items-center space-x-4">
                <img
                  className="h-10 w-10 rounded-full"
                  src={activity.userImage}
                  alt={activity.user}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                    {activity.user}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {activity.action}
                    {activity.content && (
                      <span className="ml-1 font-medium">{activity.content}</span>
                    )}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">
                    {activity.time}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
