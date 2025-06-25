import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { MdEmail, MdPhone, MdLocationOn, MdSend } from "react-icons/md";
import { toast } from "react-toastify";

const ContactUs = () => {
  const { theme } = useContext(AuthContext);

  const inputStyle = `w-full px-4 py-2 rounded-md border ${
    theme === "light"
      ? "bg-white border-gray-300 text-gray-900"
      : "bg-gray-700 border-gray-600 text-white"
  }`;

  const labelStyle = theme === "light" ? "text-gray-700" : "text-gray-300";
  const sectionBg = theme === "light" ? "bg-gray-50" : "bg-gray-900";
  const cardBg = theme === "light" ? "bg-white" : "bg-gray-800";
  const headingColor = theme === "light" ? "text-gray-900" : "text-white";
  const buttonBg = "bg-indigo-600 hover:bg-indigo-700 text-white";

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Sign out Successfully");
  };

  return (
    <section className={`${sectionBg} py-16 px-4 md:px-8 lg:px-16`}>
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-8 text-center  ${headingColor}`}
        >
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-4 lg:gap-12 items-start">
          {/* Contact Form */}
          <div className={`p-6 rounded-xl shadow-lg ${cardBg}`}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className={`block mb-1 font-medium ${labelStyle}`}>
                  Your Name
                </label>
                <input
                  type="text"
                  className={inputStyle}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label className={`block mb-1 font-medium ${labelStyle}`}>
                  Your Email
                </label>
                <input
                  type="email"
                  className={inputStyle}
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label className={`block mb-1 font-medium ${labelStyle}`}>
                  Subject
                </label>
                <input
                  type="text"
                  className={inputStyle}
                  placeholder="Inquiry subject"
                  required
                />
              </div>

              <div>
                <label className={`block mb-1 font-medium ${labelStyle}`}>
                  Message
                </label>
                <textarea
                  className={`${inputStyle} resize-none h-32`}
                  placeholder="Write your message..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className={`w-full py-2 mt-2 rounded-md font-semibold flex items-center justify-center gap-2 transition duration-300 ${buttonBg} cursor-pointer`}
              >
                <MdSend /> Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className={`p-6 rounded-xl shadow-lg ${cardBg}`}>
              <h3 className={`text-xl font-semibold mb-4 ${headingColor}`}>
                Get in Touch
              </h3>
              <p className={`${labelStyle} mb-2 flex items-center gap-2`}>
                <MdEmail className="text-xl" /> support@hobbyhub.com
              </p>
              <p className={`${labelStyle} mb-2 flex items-center gap-2`}>
                <MdPhone className="text-xl" /> +880 1234-567890
              </p>
              <p className={`${labelStyle} flex items-center gap-2`}>
                <MdLocationOn className="text-xl" /> Dhaka, Bangladesh
              </p>
            </div>

            {/* Google Map */}
            <div
              className={`rounded-xl shadow-lg overflow-hidden border ${
                theme === "light" ? "border-gray-300" : "border-gray-600"
              }`}
            >
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.859660693639!2d90.39150977505237!3d23.75088577869026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b852680e0147%3A0xc99bdf56383a15cb!2sDhaka!5e0!3m2!1sen!2sbd!4v1719408300043!5m2!1sen!2sbd"
                width="100%"
                height="320"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
