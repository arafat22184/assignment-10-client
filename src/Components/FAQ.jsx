import React, { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const FAQ = () => {
  const { theme } = use(AuthContext);

  const questions = [
    {
      question: "What is HobbyHub?",
      answer:
        "HobbyHub is a platform that connects people with shared interests to form or join hobby groups, attend events, and collaborate on creative activities.",
    },
    {
      question: "Is HobbyHub free to use?",
      answer:
        "Yes, HobbyHub is completely free for users. You can browse, join groups, and attend events without any charges.",
    },
    {
      question: "How do I join a group?",
      answer:
        "Simply head to the 'All Groups' page, browse the available options, and click 'Join'. You'll get updates and access to that group's activities.",
    },
    {
      question: "Can I create my own hobby group?",
      answer:
        "Absolutely! Just go to the 'Create Group' section and fill out the form with your group's details to get started.",
    },
    {
      question: "Is HobbyHub available on mobile?",
      answer:
        "While we currently offer a responsive web experience, a dedicated mobile app is in the works!",
    },
  ];

  return (
    <section
      className={`rounded-2xl mb-16 px-4 md:px-8 lg:px-16 transition-colors duration-300`}
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-6 text-center ${
            theme === "light" ? "text-gray-900" : "text-white"
          }`}
        >
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {questions.map((item, index) => (
            <details
              key={index}
              className={`group border rounded-xl p-4 transition duration-300 ${
                theme === "light"
                  ? "bg-white border-gray-200"
                  : "bg-gray-800 border-gray-700"
              }`}
            >
              <summary
                className={`flex justify-between items-center cursor-pointer text-lg font-medium ${
                  theme === "light" ? "text-gray-800" : "text-white"
                }`}
              >
                {item.question}
                <span className="ml-2 transition-transform duration-300 group-open:rotate-180">
                  ▼
                </span>
              </summary>
              <p
                className={`mt-2 ${
                  theme === "light" ? "text-gray-700" : "text-gray-300"
                }`}
              >
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
