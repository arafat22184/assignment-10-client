import { useContext } from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaHome,
  FaInfoCircle,
  FaLinkedinIn,
  FaTachometerAlt,
  FaTwitter,
  FaUsers,
} from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router";

const Footer = () => {
  const { theme } = useContext(AuthContext);

  const bgColor = theme === "light" ? "bg-gray-100" : "bg-gray-900";
  const textColor = theme === "light" ? "text-gray-800" : "text-gray-100";
  const borderColor = theme === "light" ? "border-gray-300" : "border-gray-700";
  const mutedText = theme === "light" ? "text-gray-600" : "text-gray-300";
  const hoverColor =
    theme === "light" ? "hover:text-black" : "hover:text-white";
  const copyright = theme === "light" ? "text-gray-500" : "text-gray-500";

  return (
    <footer
      className={`${bgColor} ${textColor} pt-10 pb-5 lg:px-12 px-4 border-t border-primary`}
    >
      <div
        className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-b ${borderColor} pb-10`}
      >
        {/* Logo and Description */}
        <div>
          {theme === "light" ? (
            <img
              src="https://i.ibb.co/TxkQgRpX/Hobby-Logo-Black.png"
              alt="HobbyHub Logo"
              className="w-10 lg:w-12 xl:w-20 mb-4"
            />
          ) : (
            <img
              src="https://i.ibb.co/DD0mYSJj/Hobby-Logo.png"
              alt="HobbyHub Logo"
              className="w-10 lg:w-12 xl:w-20 mb-4"
            />
          )}

          <p className={`text-sm leading-relaxed ${mutedText}`}>
            HobbyHub connects people through shared passions — from book clubs
            to biking crews. Start or join a group and build your community.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className={`space-y-2 text-sm ${mutedText}`}>
            <li>
              <Link to="/" className={`flex items-center gap-2 ${hoverColor}`}>
                <FaHome /> Home
              </Link>
            </li>
            <li>
              <Link
                to="/groups"
                className={`flex items-center gap-2 ${hoverColor}`}
              >
                <FaUsers /> All Groups
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className={`flex items-center gap-2 ${hoverColor}`}
              >
                <FaTachometerAlt /> Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/contactUs"
                className={`flex items-center gap-2 ${hoverColor}`}
              >
                <FaEnvelope /> Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`flex items-center gap-2 ${hoverColor}`}
              >
                <FaInfoCircle /> About
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className={`text-sm space-y-2 ${mutedText}`}>
            <li>Email: support@hobbyhub.com</li>
            <li>Phone: +880 1234-567890</li>
            <li>Location: Dhaka, Bangladesh</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className={`flex space-x-4 text-xl ${mutedText}`}>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={hoverColor}
            >
              <FaFacebookF size={25} />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={hoverColor}
            >
              <FaTwitter size={25} />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={hoverColor}
            >
              <FaLinkedinIn size={25} />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={hoverColor}
            >
              <FaGithub size={25} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className={`text-center text-sm mt-6 ${copyright}`}>
        &copy; {new Date().getFullYear()} HobbyHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
