import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  HomeIcon, 
  ChartBarIcon, 
  UsersIcon, 
  CalendarIcon, 
  CogIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Dashboard', icon: HomeIcon, href: '/dashboard' },
  { name: 'Analytics', icon: ChartBarIcon, href: '/analytics' },
  { name: 'Audience', icon: UsersIcon, href: '/audience' },
  { name: 'Schedule', icon: CalendarIcon, href: '/schedule' },
  { name: 'Settings', icon: CogIcon, href: '/settings' },
];

const Sidebar = ({ isOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigation = (href) => {
    navigate(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        type="button"
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span className="sr-only">Open sidebar</span>
        {isMobileMenuOpen ? (
          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
        ) : (
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        )}
      </button>

      {/* Mobile menu overlay */}
      <div
        className={`
          fixed inset-0 z-40 bg-gray-600 bg-opacity-75 transition-opacity md:hidden
          ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`
          fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-gray-900 transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          ${isOpen ? 'md:translate-x-0' : 'md:-translate-x-full'}
        `}
      >
        <div className="flex flex-col h-full">
          <div className="flex-1 flex flex-col pt-20 pb-4 overflow-y-auto">
            <nav className="mt-5 flex-1 px-2 space-y-1">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.href)}
                    className={`
                      w-full group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors
                      ${isActive
                        ? 'bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                      }
                    `}
                  >
                    <item.icon
                      className={`
                        mr-3 flex-shrink-0 h-6 w-6
                        ${isActive
                          ? 'text-indigo-600 dark:text-indigo-300'
                          : 'text-gray-400 dark:text-gray-500 group-hover:text-gray-500 dark:group-hover:text-gray-300'
                        }
                      `}
                      aria-hidden="true"
                    />
                    {item.name}
                  </button>
                );
              })}
            </nav>
          </div>
          {/* User info at bottom */}
          <div className="flex-shrink-0 flex border-t border-gray-200 dark:border-gray-700 p-4">
            <div className="flex items-center">
              <div>
                <img
                  className="inline-block h-9 w-9 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-200">John Doe</p>
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400">View profile</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
