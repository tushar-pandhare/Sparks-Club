import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Rocket, BrainCircuit, HandHeart } from "lucide-react";
import "./AboutPage.css";

const AboutPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Rocket size={40} className="text-purple-400" />,
      title: "Innovation Driven",
      description:
        "Pushing boundaries with cutting-edge technology and creative problem-solving approaches",
    },
    {
      icon: <BrainCircuit size={40} className="text-blue-400" />,
      title: "Expert Mentorship",
      description: "Learn from industry professionals and academic leaders",
    },
    {
      icon: <HandHeart size={40} className="text-pink-400" />,
      title: "Community First",
      description: "Collaborative environment fostering growth and teamwork",
    },
    {
      icon: <Users size={40} className="text-green-400" />,
      title: "Diverse Community",
      description: "2000+ members from various disciplines and backgrounds",
    },
  ];

  return (
    <div className="bg-[#4C5377] min-h-screen w-full flex items-center justify-center py-20 px-6 ">
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center justify-center text-center">
        {/* Header Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Igniting Potential, Building Futures
          </motion.h2>

          <motion.p
            className="text-xl text-gray-200 max-w-2xl relative top-5 mx-auto leading-relaxed py-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            At <span className="text-purple-400 font-semibold">Spark Club</span>, we’re more than just a tech community - 
            we’re a catalyst for transformation in the digital landscape.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 relative top-8 gap-10 mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-[#3A4060] p-10 lg:p-12 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 border border-transparent hover:border-purple-500 relative overflow-hidden group md:min-w-[260px] min-h-[280px] md:min-h-[250px]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 + 0.5, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.07 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
              <motion.div
                className="mb-8 relative top-4 flex items-center justify-center"
                whileHover={{ rotate: 15, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="p-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full">
                  {feature.icon}
                </div>
              </motion.div>
              <motion.h3
                className="text-2xl relative top-7 font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {feature.title}
              </motion.h3>
              <motion.p
                className="text-lg relative top-8 text-gray-300 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* Story Section */}
        <motion.div
          className="flex flex-col md:flex-row gap-16 relative top-20 items-center mb-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            className="md:w-1/2 w-full relative"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px] group">
              <AnimatePresence mode='wait'>
                <motion.img
                  key={activeIndex}
                  src={images[activeIndex]}
                  alt="Our Team"
                  className="absolute w-full h-full object-cover"
                  initial={{ opacity: 0, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, filter: 'blur(10px)' }}
                  transition={{ duration: 1.5 }}
                />
              </AnimatePresence>

              {/* Navigation Dots */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                {images.map((_, index) => (
                  <motion.div
                    key={index}
                    className={`w-3 h-3 rounded-full cursor-pointer ${
                      activeIndex === index ? 'bg-purple-400' : 'bg-white/30'
                    }`}
                    onClick={() => setActiveIndex(index)}
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  />
                ))}
              </div>

              {/* Progress Bar */}
              <motion.div
                className="absolute top-4 left-4 right-4 h-1 bg-white/20 rounded-full overflow-hidden"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 5, ease: "linear" }}
                key={activeIndex}
              >
                <motion.div
                  className="h-full bg-purple-400 origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 5, ease: "linear" }}
                />
              </motion.div>

              {/* Navigation Arrows */}
              <div className="absolute inset-0 flex justify-between items-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <motion.div
                  className="p-3 rounded-full bg-black/30 backdrop-blur-sm cursor-pointer"
                  onClick={() => setActiveIndex((prev) => (prev - 1 + images.length) % images.length)}
                  whileHover={{ scale: 1.1 }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </motion.div>
                
                <motion.div
                  className="p-3 rounded-full bg-black/30 backdrop-blur-sm cursor-pointer"
                  onClick={() => setActiveIndex((prev) => (prev + 1) % images.length)}
                  whileHover={{ scale: 1.1 }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2 w-full flex flex-col"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6">
              Our Journey
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Founded in 2018, Spark Club began as a small group of tech enthusiasts in a university dorm. Today, we've
              grown into a vibrant community of 2000+ members, having launched 150+ projects and partnered with leading
              tech companies worldwide.
            </p>

            {/* Stats Section */}
            <motion.div
              className="bg-[#3A4060] rounded-2xl p-8 text-center relative right-12 top-10 shadow-2xl self-end w-[90%] md:w-[75%] relative overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, type: "spring", stiffness: 100 }}
            >
              <motion.div
                className="absolute bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 hover:opacity-20 transition-opacity duration-500"
                whileHover={{ opacity: 0.3 }}
              />

              <div className="grid md:grid-cols-3 gap-6 relative z-10">
                {["200+", "150+", "50+"].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="p-6 bg-[#2A2F4A] rounded-xl backdrop-blur-sm bg-opacity-50 hover:bg-opacity-70 transition-all duration-300"
                    whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)" }}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.2 + 1.2, type: "spring" }}
                  >
                    <motion.div
                      className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {stat}
                    </motion.div>
                    <p className="text-gray-300 text-lg font-medium">
                      {["Members", "Projects", "Workshops"][index]}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="absolute inset-0"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;