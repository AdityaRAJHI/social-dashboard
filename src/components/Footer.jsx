import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(() => {
    const savedSettings = localStorage.getItem('userSettings');
    if (savedSettings) {
      const parsed = JSON.parse(savedSettings);
      return {
        name: parsed.fullName || 'John Doe',
        email: parsed.email || 'john.doe@example.com',
        profileImage: parsed.profileImage || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        bio: parsed.bio || 'No bio available'
      };
    }
    return {
      name: 'John Doe',
      email: 'john.doe@example.com',
      profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      bio: 'No bio available'
    };
  });

  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    const handleProfileUpdate = () => {
      const savedSettings = localStorage.getItem('userSettings');
      if (savedSettings) {
        const parsed = JSON.parse(savedSettings);
        setUserData({
          name: parsed.fullName || 'John Doe',
          email: parsed.email || 'john.doe@example.com',
          profileImage: parsed.profileImage || userData.profileImage,
          bio: parsed.bio || 'No bio available'
        });
      }
    };

    window.addEventListener('profileUpdate', handleProfileUpdate);
    window.addEventListener('storage', handleProfileUpdate);

    return () => {
      window.removeEventListener('profileUpdate', handleProfileUpdate);
      window.removeEventListener('storage', handleProfileUpdate);
    };
  }, []);

  const handleViewProfile = () => {
    navigate('/settings');
  };

  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="relative" onMouseEnter={() => setShowProfile(true)} onMouseLeave={() => setShowProfile(false)}>
              <button 
                className="flex items-center space-x-2 group"
                onClick={handleViewProfile}
              >
                <img
                  src={userData.profileImage}
                  alt={userData.name}
                  className="h-8 w-8 rounded-full object-cover border-2 border-gray-200 dark:border-gray-700"
                />
                <div className="flex flex-col items-start">
                  <span className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                    {userData.name}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    View profile
                  </span>
                </div>
              </button>

              {/* Profile Preview Popup */}
              {showProfile && (
                <div className="absolute bottom-full left-0 mb-2 w-72 bg-white dark:bg-gray-800 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 p-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={userData.profileImage}
                      alt={userData.name}
                      className="h-16 w-16 rounded-full object-cover border-2 border-gray-200 dark:border-gray-700"
                    />
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white">{userData.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{userData.email}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">{userData.bio}</p>
                  <button
                    onClick={handleViewProfile}
                    className="mt-4 w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Edit Profile
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              © 2024 Social Dashboard. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;