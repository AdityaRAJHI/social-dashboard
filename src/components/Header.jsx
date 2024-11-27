import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BellIcon, 
  MoonIcon, 
  SunIcon, 
  UserIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';

const Header = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });
  
  // Get initial user data from localStorage
  const [userData, setUserData] = useState(() => {
    const savedSettings = localStorage.getItem('userSettings');
    if (savedSettings) {
      const parsed = JSON.parse(savedSettings);
      return {
        name: parsed.fullName || 'John Doe',
        email: parsed.email || 'john.doe@example.com',
        profileImage: parsed.profileImage || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      };
    }
    return {
      name: 'John Doe',
      email: 'john.doe@example.com',
      profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    };
  });

  const [notifications, setNotifications] = useState([
    { id: 1, text: 'New follower: John Doe', time: '2m ago', read: false },
    { id: 2, text: 'Your post reached 1,000 views', time: '5m ago', read: false },
    { id: 3, text: 'New comment on your post', time: '10m ago', read: false },
  ]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  
  const userMenuRef = useRef(null);
  const notificationsRef = useRef(null);

  // Listen for profile updates
  useEffect(() => {
    const handleProfileUpdate = () => {
      const savedSettings = localStorage.getItem('userSettings');
      if (savedSettings) {
        const parsed = JSON.parse(savedSettings);
        setUserData({
          name: parsed.fullName,
          email: parsed.email,
          profileImage: parsed.profileImage
        });
      }
    };

    // Listen for storage changes
    window.addEventListener('storage', handleProfileUpdate);
    // Listen for custom event
    window.addEventListener('profileUpdate', handleProfileUpdate);

    return () => {
      window.removeEventListener('storage', handleProfileUpdate);
      window.removeEventListener('profileUpdate', handleProfileUpdate);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
      if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNotificationClick = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const handleLogout = () => {
    // Add logout logic here
    console.log('Logging out...');
    navigate('/');
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  const userMenuItems = [
    { label: 'Profile', action: () => navigate('/settings') },
    { label: 'Account Settings', action: () => navigate('/settings') },
    { label: 'Billing', action: () => navigate('/settings') },
    { label: 'Team Members', action: () => navigate('/settings') },
    { label: 'Help Center', action: () => window.open('https://help.example.com', '_blank') },
    { label: 'Sign out', action: handleLogout, className: 'text-red-600 hover:text-red-700' },
  ];

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle sidebar"
            >
              <Bars3Icon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
            </button>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Social Dashboard</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <SunIcon className="h-6 w-6 text-yellow-400" />
              ) : (
                <MoonIcon className="h-6 w-6 text-gray-500" />
              )}
            </button>
            
            <div className="relative" ref={notificationsRef}>
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors relative"
                aria-label="Show notifications"
              >
                <BellIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                {unreadCount > 0 && (
                  <span className="absolute top-0 right-0 block h-4 w-4 rounded-full bg-red-400 text-xs text-white flex items-center justify-center">
                    {unreadCount}
                  </span>
                )}
              </button>

              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-1 ring-1 ring-black ring-opacity-5">
                  <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Notifications</h3>
                  </div>
                  {notifications.map((notification) => (
                    <button
                      key={notification.id}
                      onClick={() => handleNotificationClick(notification.id)}
                      className={`w-full text-left px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 border-b border-gray-200 dark:border-gray-700 ${
                        notification.read ? 'opacity-50' : ''
                      }`}
                    >
                      <p className="text-sm text-gray-900 dark:text-white">{notification.text}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{notification.time}</p>
                    </button>
                  ))}
                  <div className="px-4 py-2 text-center">
                    <button className="text-sm text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
                      View all notifications
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <img
                  className="h-8 w-8 rounded-full object-cover border-2 border-gray-200 dark:border-gray-700"
                  src={userData.profileImage}
                  alt="User profile"
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200 hidden sm:block">{userData.name}</span>
              </button>

              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-1 ring-1 ring-black ring-opacity-5">
                  <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{userData.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{userData.email}</p>
                  </div>
                  {userMenuItems.map((item, index) => (
                    <button
                      key={index}
                      onClick={item.action}
                      className={`w-full text-left block px-4 py-2 text-sm ${
                        item.className || 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
