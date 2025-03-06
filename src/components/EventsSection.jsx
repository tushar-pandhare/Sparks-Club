import React from "react";
import { motion } from "framer-motion";

const events = [
  {
    title: "Confs Day",
    date: "02 March 2019",
    location: "Higher National School of Computer Science - Algiers",
    description:
      "CSE Confs Day is a day of themed conferences where people from the business world, as well as professionals from the Tech' industries, come share with students their experiences and knowledge around a theme predefined.",
    stats: [
      { label: "Conferences", value: 1 },
      { label: "Panels", value: 2 },
      { label: "Participants", value: 50 },
    ],
    image: "logo.png",
  },
  {
    title: "Startup Competition",
    date: "28 June 2018",
    location: "International Center of Conferences - Algiers",
    description:
      "Startup Competition is a competition that gathered 12 startups on June 28th, 2018 as part of the Smart City Global Summit.",
    stats: [
      { label: "Contests", value: 50 },
      { label: "Participating startups", value: 12 },
      { label: "Edition", value: 1 },
    ],
    image: "logo.png",
  },
  {
    title: "HackIT",
    date: "15 July 2022",
    location: "Tech Innovation Hub - Bangalore",
    description:
      "HackIT is an annual hackathon where developers, designers, and tech enthusiasts collaborate to build innovative solutions within 24 hours. The event fosters creativity and problem-solving among participants from diverse technical backgrounds.",
    stats: [
      { label: "Teams", value: 50 },
      { label: "Projects", value: 120 },
      { label: "Participants", value: 300 },
    ],
    image: "/src/assets/Events/p2.jpg",
  },
];

const EventsSection = () => {
  return (
    <section className="bg-[#383d59] text-white py-16 px-6">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Events.</h2>
      </motion.div>

      <div className="flex flex-col gap-20">
        {events.map((event, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""} justify-center gap-10`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Calendar with Image */}
            <motion.div
              className="relative w-[340px] h-[340px] flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="https://cse.club/img/Calendar_image.png"
                alt="Calendar"
                className="w-full h-full object-contain"
              />
              <motion.div
                className="absolute top-[20%] left-1/2 transform -translate-x-1/2 w-[75%]"
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="rounded-lg shadow-lg object-cover w-full h-auto max-h-[200px]"
                />
              </motion.div>
            </motion.div>

            {/* Event Details */}
            <motion.div
              className="max-w-lg text-center md:text-left"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
              <p className="text-gray-400">📅 <span className="font-semibold">{event.date}</span></p>
              <p className="text-gray-400">📍 <span className="font-semibold">{event.location}</span></p>
              <p className="text-gray-300 mt-4">{event.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EventsSection;