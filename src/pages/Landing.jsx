import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-48 -left-24 w-96 h-96 bg-gradient-to-br from-pink-500 to-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-24 right-48 w-96 h-96 bg-gradient-to-br from-green-500 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                    <span className="block">Manage Your Social</span>
                    <span className="block text-yellow-300">Media Presence</span>
                  </h1>
                  <p className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Track, analyze, and optimize your social media performance with our comprehensive dashboard.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <button
                        onClick={() => navigate('/dashboard')}
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transform transition hover:scale-105"
                      >
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
          
          {/* Hero 3D Element */}
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full bg-opacity-50 bg-white backdrop-filter backdrop-blur-lg rounded-3xl m-4 p-8 flex items-center justify-center transform rotate-6 hover:rotate-0 transition-transform duration-500">
              <svg className="h-32 w-32 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Feature Section */}
        <div className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-yellow-300 font-semibold tracking-wide uppercase">Features</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold text-white sm:text-4xl">
                Everything you need to succeed
              </p>
            </div>

            <div className="mt-10">
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {/* Analytics Feature */}
                <div className="relative group">
                  <div className="relative h-64 rounded-2xl overflow-hidden bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-8 flex items-center justify-center transform transition-all duration-500 group-hover:scale-105">
                    <svg className="h-24 w-24 text-pink-400 transform transition-transform duration-500 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-white">Advanced Analytics</h3>
                  <p className="mt-2 text-base text-gray-100">
                    Get detailed insights into your social media performance with our advanced analytics tools.
                  </p>
                </div>

                {/* Scheduling Feature */}
                <div className="relative group">
                  <div className="relative h-64 rounded-2xl overflow-hidden bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-8 flex items-center justify-center transform transition-all duration-500 group-hover:scale-105">
                    <svg className="h-24 w-24 text-green-400 transform transition-transform duration-500 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-white">Smart Scheduling</h3>
                  <p className="mt-2 text-base text-gray-100">
                    Schedule your posts at the perfect time to maximize engagement and reach.
                  </p>
                </div>

                {/* Engagement Feature */}
                <div className="relative group">
                  <div className="relative h-64 rounded-2xl overflow-hidden bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-8 flex items-center justify-center transform transition-all duration-500 group-hover:scale-105">
                    <svg className="h-24 w-24 text-blue-400 transform transition-transform duration-500 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-white">Engagement Tracking</h3>
                  <p className="mt-2 text-base text-gray-100">
                    Monitor and improve your engagement rates with real-time tracking and insights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
