import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 pt-10 pb-5 px-4 md:px-12">
      <div className="max-w-11/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
        {/* Logo and Description */}
        <div>
          <img
            src="https://i.ibb.co.com/YTLkKY8d/Chat-GPT-Image-May-20-2025-01-59-22-AM.png"
            alt="HobbyHub Logo"
            className="w-32 mb-4"
          />
          <p className="text-sm text-gray-300 leading-relaxed">
            HobbyHub connects people through shared passions — from book clubs
            to biking crews. Start or join a group and build your community.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/groups" className="hover:text-white">
                All Groups
              </a>
            </li>
            <li>
              <a href="/createGroup" className="hover:text-white">
                Create Group
              </a>
            </li>
            <li>
              <a href="/myGroups" className="hover:text-white">
                My Groups
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>Email: support@hobbyhub.com</li>
            <li>Phone: +880 1234-567890</li>
            <li>Location: Dhaka, Bangladesh</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
          <div className="flex space-x-4 text-xl text-gray-300">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="hover:text-white"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              className="hover:text-white"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className="hover:text-white"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              className="hover:text-white"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-500 mt-6">
        &copy; {new Date().getFullYear()} HobbyHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
