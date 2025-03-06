  import React from "react";
  import { motion } from "framer-motion";
  import { Calendar, MapPin, Clock, Users } from "lucide-react";
  import "./EventPage.css"

  const EventsPage = () => {
    const events = [
      {
        title: "Tech Innovation Summit",
        date: "15 OCT",
        time: "10:00 AM",
        location: "Convention Center",
        category: "Conference",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
        attendees: 250,
      },
      {
        title: "Startup Pitch Night",
        date: "22 OCT",
        time: "6:30 PM",
        location: "Downtown Hub",
        category: "Networking",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
        attendees: 120,
      },
      {
        title: "AI Workshop Series",
        date: "29 OCT",
        time: "2:00 PM",
        location: "Tech Campus Lab",
        category: "Workshop",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
        attendees: 50,
      },
      {
        title: "Developer Hackathon",
        date: "5 NOV",
        time: "9:00 AM",
        location: "Virtual Event",
        category: "Competition",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        attendees: 300,
      },
      {
        title: "UX Design Masterclass",
        date: "12 NOV",
        time: "11:00 AM",
        location: "Creative Studio",
        category: "Training",
        image: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931",
        attendees: 80,
      },
      {
        title: "Blockchain Forum",
        date: "19 NOV",
        time: "3:00 PM",
        location: "Finance Tower",
        category: "Seminar",
        image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d",
        attendees: 150,
      },
    ];

    return (
      <div className="min-h-screen bg-[#4C5377] py-20 px-6 relative top-50">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <motion.h1
              className="text-4xl relative left-50 md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Upcoming Events
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 relative left-100 top- max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Join our  community gatherings, workshops, and innovation challenges
            </motion.p>
          </motion.div>

          {/* Events Grid */}
          <div className="grid relative left-50 top-20  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="relative group bg-[#3A4060] rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4 bg-[#2A2F4A] px-4 py-2 rounded-full text-sm text-purple-400 font-medium">
                    {event.date}
                  </div>
                </div>

                {/* Event Content */}
                <div className="p-6">
                  <div className="mb-4 flex items-center relative left-33 gap-2">
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-blue-600  text-sm font-medium">
                      {event.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">
                    {event.title}
                  </h3>

                  {/* Event Details */}
                  <div className="space-y-3 text-center text-gray-300">
                    <div className="flex items-center gap-3">
                      <MapPin className="text-purple-400" size={20} />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="text-blue-400" size={20} />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="text-green-400" size={20} />
                      <span>{event.attendees} attendees</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  className="w-full mt-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-medium relative overflow-hidden group transition-all duration-300"
>
  <span className="relative z-10 block transition-transform duration-300 group-hover:-translate-x-2">
    Register Now
  </span>
  <div className="absolute inset-0 bg-white/10 w-[40%] rounded-full -right-[20%] skew-x-12 transition-all duration-500 group-hover:w-[60%] group-hover:right-[110%]" />
</motion.button>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500 rounded-2xl transition-all pointer-events-none" />
              </motion.div>
            ))}
          </div>

          {/* Floating Elements Animation */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-xl"
                style={{
                  width: Math.random() * 100 + 50,
                  height: Math.random() * 100 + 50,
                  left: Math.random() * 100 + "%",
                  top: Math.random() * 100 + "%",
                }}
                animate={{
                  y: [0, -40, 0],
                  x: [0, Math.random() * 40 - 20, 0],
                  rotate: [0, 180],
                }}
                transition={{
                  duration: Math.random() * 5 + 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default EventsPage;