// src/components/WhyJoin.jsx
const WhyJoin = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 ">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
          Why Join HobbyHub?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
          HobbyHub helps you connect with like-minded individuals who share your
          interests and passion. Whether you're an artist, gamer, reader, or
          hiker – there's a place for you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white dark:bg-gray-800 shadow rounded-xl">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Meet Local Enthusiasts
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Join events and meet people from your area who share the same
              hobbies.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 shadow rounded-xl">
            <h3 className="text-xl font-semibold text-green-600 mb-2">
              Grow Your Skills
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Participate in group activities and workshops to improve your
              talents.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 shadow rounded-xl">
            <h3 className="text-xl font-semibold text-purple-600 mb-2">
              Build Meaningful Connections
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              HobbyHub isn’t just about hobbies—it's about building community
              and friendships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
