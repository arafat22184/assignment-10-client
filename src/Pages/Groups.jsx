import Group from "../Components/Group";

// Dummy groups data – replace with dynamic data
const groups = [
  {
    id: 1,
    name: "Photography Lovers",
    description: "Share and discuss photography techniques.",
    members: 154,
  },
  {
    id: 2,
    name: "Guitar Jammers",
    description: "A group for people who love jamming on guitars.",
    members: 89,
  },
  {
    id: 3,
    name: "Tech Enthusiasts",
    description: "Discuss the latest in tech and gadgets.",
    members: 210,
  },
];

const Groups = () => {
  return (
    <div className="min-w-full bg-gray-900 px-4 py-12 text-white my-12 rounded-2xl">
      <h1 className="text-4xl font-bold text-center mb-10">
        Explore All Groups
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {groups.map((group) => (
          <Group key={group.id} group={group}></Group>
        ))}
      </div>
    </div>
  );
};

export default Groups;
