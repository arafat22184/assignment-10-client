// src/components/HowItWorks.jsx
import CountUp from "react-countup";

const HobbyHubNumbers = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
          HobbyHub in Numbers
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-10 text-lg">
          A quick look at the growth and activity of our hobby-loving community.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <h3 className="text-5xl font-bold text-indigo-600 mb-2">
              <CountUp end={1200} duration={2.5} />+
            </h3>
            <p className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
              Members Joined
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Hundreds of users are joining every week to discover new hobbies.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-5xl font-bold text-emerald-500 mb-2">
              <CountUp end={350} duration={2.5} />+
            </h3>
            <p className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
              Groups Created
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              A variety of groups focused on art, fitness, books, and more.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-5xl font-bold text-pink-500 mb-2">
              <CountUp end={75} duration={2.5} />+
            </h3>
            <p className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
              Meetups Hosted
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Real-world and virtual events hosted every month by group members.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HobbyHubNumbers;
