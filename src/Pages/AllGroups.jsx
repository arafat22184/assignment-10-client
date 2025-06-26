import { useLoaderData } from "react-router";
import Group from "../Components/Group";
import { BiSearchAlt } from "react-icons/bi";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import LoadingSpinner from "../Components/LoadingSpinner";

const AllGroups = () => {
  const { theme } = useContext(AuthContext);
  const allGroups = useLoaderData();
  const [filteredGroups, setFilteredGroups] = useState(allGroups);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");

  const ref = useRef();

  // Get unique categories
  useEffect(() => {
    const unique = [...new Set(filteredGroups.map((g) => g.hobbyCategory))];
    setCategories(unique);
  }, [filteredGroups]);

  // Handle category filter independently
  useEffect(() => {
    const filtered =
      selectedCategory === "All"
        ? allGroups
        : allGroups.filter((g) => g.hobbyCategory === selectedCategory);
    setFilteredGroups(filtered);
  }, [selectedCategory, allGroups]);

  // Debounced search
  useEffect(() => {
    const timeout = setTimeout(() => {
      handleSearch(searchText);
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchText]);

  // Search handler
  const handleSearch = useCallback(
    async (search) => {
      if (!search) {
        const filtered =
          selectedCategory === "All"
            ? allGroups
            : allGroups.filter((g) => g.hobbyCategory === selectedCategory);
        setFilteredGroups(filtered);
        return;
      }

      setLoading(true);
      try {
        const res = await fetch(
          `http://localhost:3000/allGroups?search=${search}`
        );
        const data = await res.json();
        const filtered =
          selectedCategory === "All"
            ? data
            : data.filter((g) => g.hobbyCategory === selectedCategory);
        setFilteredGroups(filtered);
      } catch (error) {
        if (error) {
          setFilteredGroups(allGroups);
        }
      } finally {
        setLoading(false);
      }
    },
    [allGroups, selectedCategory]
  );

  if (loading) return <LoadingSpinner />;

  return (
    <section
      className={`px-4 py-16 transition-colors duration-300 ${
        theme === "light"
          ? "text-gray-900 bg-gray-50"
          : "text-white bg-gray-900"
      }`}
    >
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">
          Explore All Groups
        </h1>

        {/* Filters */}
        <div
          ref={ref}
          className={`sticky top-[66px] lg:top-[74px] z-20 backdrop-blur-lg rounded-xl shadow-lg px-6 py-5 mb-10 border ${
            theme === "light"
              ? "bg-white/80 border-gray-200"
              : "bg-gray-800/70 border-gray-700"
          }`}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Category Dropdown */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className={`w-full md:w-60 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${
                theme === "light"
                  ? "bg-gray-100 text-gray-900 border border-gray-300 focus:ring-blue-500"
                  : "bg-gray-700 text-white border border-gray-600 focus:ring-blue-400"
              }`}
            >
              <option value="All">All Categories</option>
              {categories.map((cat, i) => (
                <option key={i} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            {/* Search Bar */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className={`w-full md:max-w-md flex items-center rounded-full overflow-hidden transition border shadow ${
                theme === "light"
                  ? "bg-white border-gray-300"
                  : "bg-gray-700 border-gray-600"
              }`}
            >
              <input
                type="text"
                name="search"
                defaultValue={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search by group name..."
                className={`flex-1 px-4 py-2 focus:outline-none ${
                  theme === "light"
                    ? "bg-white text-gray-800 placeholder-gray-400"
                    : "bg-gray-700 text-white placeholder-gray-400"
                }`}
              />
              <button
                type="button"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-r-full"
              >
                <BiSearchAlt className="text-xl" />
              </button>
            </form>
          </div>
        </div>

        {/* Group Cards */}
        {filteredGroups.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredGroups.map((group) => (
              <Group key={group._id} group={group} />
            ))}
          </div>
        ) : (
          <p className="text-center mt-12 text-lg opacity-70">
            No groups found for this filter.
          </p>
        )}
      </div>
    </section>
  );
};

export default AllGroups;
