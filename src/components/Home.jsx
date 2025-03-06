  import { useRef, useEffect, useState } from 'react';
  import { useSprings, animated } from '@react-spring/web';

  import React from "react";
  import { motion } from "framer-motion";

  const BlurText = ({
    text = '',
    delay = 200,
    className = '',
    animateBy = 'words', // 'words' or 'letters'
    direction = 'top', // 'top' or 'bottom'
    threshold = 0.1,
    rootMargin = '0px',
    animationFrom,
    animationTo,
    easing = 'easeOutCubic',
    onAnimationComplete,
  }) => {
    const elements = animateBy === 'words' ? text.split(' ') : text.split('');
    const [inView, setInView] = useState(false);
    const ref = useRef();
    const animatedCount = useRef(0);

    // Default animations based on direction
    const defaultFrom =
      direction === 'top'
        ? { filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,-50px,0)' }
        : { filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,50px,0)' };

    const defaultTo = [
      {
        filter: 'blur(5px)',
        opacity: 0.5,
        transform: direction === 'top' ? 'translate3d(0,5px,0)' : 'translate3d(0,-5px,0)',
      },
      { filter: 'blur(0px)', opacity: 1, transform: 'translate3d(0,0,0)' },
    ];

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(ref.current);
          }
        },
        { threshold, rootMargin }
      );

      observer.observe(ref.current);

      return () => observer.disconnect();
    }, [threshold, rootMargin]);

    const springs = useSprings(
      elements.length,
      elements.map((_, i) => ({
        from: animationFrom || defaultFrom,
        to: inView
          ? async (next) => {
            for (const step of (animationTo || defaultTo)) {
              await next(step);
            }
            animatedCount.current += 1;
            if (animatedCount.current === elements.length && onAnimationComplete) {
              onAnimationComplete();
            }
          }
          : animationFrom || defaultFrom,
        delay: i * delay,
        config: { easing },
      }))
    );

    return (
      <p ref={ref} className={`blur-text ${className} flex flex-wrap`}>
        {springs.map((props, index) => (
          <animated.span
            key={index}
            style={props}
            className="inline-block transition-transform will-change-[transform,filter,opacity]"
          >
            {elements[index] === ' ' ? '\u00A0' : elements[index]}
            {animateBy === 'words' && index < elements.length - 1 && '\u00A0'}
          </animated.span>
        ))}
      </p>
    );
  };

  const HomePage = () => {
    return (
      <div className="bg-[#4C5377] min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 w-full max-w-6xl">
          {/* Left Section */}
          <motion.div
            className="text-white w-full md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Heading with BlurText Animation */}
            <BlurText
              text="Welcome to Spark Club"
              delay={100}
              className="text-3xl text-white sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
              animateBy="words"
              direction="top"
            />

            {/* Description with Smooth Fade-In */}
            <motion.p
              className="text-lg mt-8 relative top-5 text-gray-200 leading-relaxed flex flex-wrap"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.02, // Fast but smooth effect
                    delayChildren: 1.2, // Ensures paragraph starts AFTER the heading finishes
                  },
                },
              }}
            >
              {"Where innovation meets passion! A dynamic hub for tech enthusiasts, creators, and problem solvers. Join us to spark your curiosity, build futuristic projects, and connect with a community that’s shaping tomorrow."
                .split("")
                .map((char, index) => (
                  <motion.span
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: -5, scale: 0.9 },
                      visible: { opacity: 1, y: 0, scale: 1 },
                    }}
                    transition={{
                      duration: 0.08,
                      ease: "easeOut",
                    }}
                  >
                    {char === " " ? "\u00A0" : char} {/* Preserve spaces */}
                  </motion.span>
                ))}
            </motion.p>

            {/* Interactive Button */}
            <motion.button
              className="relative top-15 sm:top-12 px-8 sm:px-10 h-12 sm:h-14 w-48 sm:w-60 py-3 sm:py-4 text-lg sm:text-xl font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(99, 102, 241, 0.6)" }}
              whileTap={{ scale: 0.95 }}
            >
              JOIN US
            </motion.button>
          </motion.div>

          {/* Right Section (Video) */}
          <div className="w-full md:w-1/2 flex justify-center">
            <video
              src="https://cse.club/videos/animation_hero.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-64 sm:w-72 relative top-10 md:w-96 lg:w-[500px] rounded-md"
            />
          </div>
        </div>
      </div>
    );
  };

  export default HomePage;
