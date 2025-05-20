import CountUp from "react-countup";

const HobbyHubNumbers = () => {
  return (
    <section className="py-16  rounded-2xl px-4 md:px-8 lg:px-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          HobbyHub in Numbers
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          A quick look at the growth and activity of our hobby-loving community.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-5xl font-bold text-indigo-600 mb-4">
              <CountUp end={1200} duration={2.5} />+
            </h3>
            <p className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Members Joined
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Hundreds of users are joining every week to discover new hobbies.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-5xl font-bold text-emerald-500 mb-4">
              <CountUp end={350} duration={2.5} />+
            </h3>
            <p className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Groups Created
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              A variety of groups focused on art, fitness, books, and more.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-5xl font-bold text-pink-500 mb-4">
              <CountUp end={75} duration={2.5} />+
            </h3>
            <p className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Meetups Hosted
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Real-world and virtual events hosted every month by group members.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HobbyHubNumbers;
