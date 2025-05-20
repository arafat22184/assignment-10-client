import React from "react";

const WhyJoin = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16  dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Why Join HobbyHub?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          HobbyHub connects you with passionate people who share your hobbies —
          from painting and gaming to hiking and photography.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
            <div className="text-3xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
              Meet Local Enthusiasts
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Join events and meet people near you who love the same things.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-2">
              Grow Your Skills
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Attend hands-on sessions, workshops, and challenges with your
              group.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
            <div className="text-3xl mb-4">💬</div>
            <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-2">
              Build Real Connections
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Find your tribe. Make friends who encourage, inspire, and grow
              with you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
