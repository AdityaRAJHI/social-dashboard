import { useState } from 'react';
import { UserIcon, BellIcon, KeyIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const Settings = () => {
  const [formData, setFormData] = useState({
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Product Designer at Company Inc.',
    notifications: {
      email: true,
      push: true,
      weekly: false,
      promotional: true
    },
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  });

  const [isLoading, setIsLoading] = useState(false);
  const [saveStatus, setSaveStatus] = useState({ show: false, success: false, message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNotificationChange = (e) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [name]: checked
      }
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          profileImage: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSaveStatus({ show: false, success: false, message: '' });

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Save to localStorage for persistence
      localStorage.setItem('userSettings', JSON.stringify(formData));
      
      setSaveStatus({
        show: true,
        success: true,
        message: 'Settings saved successfully!'
      });

      // Update header profile image and name
      const event = new CustomEvent('profileUpdate', { 
        detail: { 
          name: formData.fullName,
          image: formData.profileImage
        }
      });
      window.dispatchEvent(event);

    } catch (error) {
      setSaveStatus({
        show: true,
        success: false,
        message: 'Failed to save settings. Please try again.'
      });
    } finally {
      setIsLoading(false);
      // Hide status message after 3 seconds
      setTimeout(() => {
        setSaveStatus(prev => ({ ...prev, show: false }));
      }, 3000);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Profile Settings</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Update your profile information and manage your account settings.
          </p>
        </div>

        <div className="mt-5 md:mt-0 md:col-span-2">
          <form onSubmit={handleSubmit}>
            <div className="shadow rounded-md overflow-hidden">
              <div className="px-4 py-5 bg-white dark:bg-gray-800 space-y-6 sm:p-6">
                {/* Profile Image */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Profile Photo
                  </label>
                  <div className="mt-2 flex items-center space-x-5">
                    <img
                      src={formData.profileImage}
                      alt="Profile"
                      className="h-16 w-16 rounded-full object-cover"
                    />
                    <label className="cursor-pointer bg-white dark:bg-gray-700 py-2 px-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Change
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={handleImageChange}
                      />
                    </label>
                  </div>
                </div>

                {/* Basic Info */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Bio
                    </label>
                    <textarea
                      name="bio"
                      rows={3}
                      value={formData.bio}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white sm:text-sm"
                    />
                  </div>
                </div>

                {/* Notification Settings */}
                <div>
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                    Notification Preferences
                  </h4>
                  <div className="space-y-4">
                    {Object.entries(formData.notifications).map(([key, value]) => (
                      <div key={key} className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            type="checkbox"
                            name={key}
                            checked={value}
                            onChange={handleNotificationChange}
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label className="font-medium text-gray-700 dark:text-gray-300">
                            {key.charAt(0).toUpperCase() + key.slice(1)} Notifications
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-4 py-3 bg-gray-50 dark:bg-gray-700 text-right sm:px-6">
                {saveStatus.show && (
                  <div className={`inline-block mr-4 text-sm ${saveStatus.success ? 'text-green-600' : 'text-red-600'}`}>
                    {saveStatus.message}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${
                    isLoading
                      ? 'bg-indigo-400 cursor-not-allowed'
                      : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  }`}
                >
                  {isLoading ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;