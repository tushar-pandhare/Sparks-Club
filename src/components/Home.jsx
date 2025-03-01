import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Float, Stars } from "@react-three/drei";
import { motion } from "framer-motion";
import ClubLogo from "./ClubLogo";
import "./Home.css";
import GlowingOrb from "./GlowingOrb";

export default function Home() {
  return (
    <motion.div 
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* 3D Background */}
      <Canvas camera={{ position: [0, 0, 8] }}>
        <Stars radius={300} depth={60} count={2000} factor={7} fade />
        <Float speed={2} rotationIntensity={1} floatIntensity={3}>
          <GlowingOrb />
        </Float>
        <Environment preset="night" />
        <OrbitControls enableZoom={false} />
      </Canvas>

      {/* Hero Section with Animated Logo and Text */}
      <motion.div 
        className="home-content"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* Club Logo Moved to Top */}
        <motion.div 
          className="club-logo-container"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <ClubLogo />
        </motion.div>
      

        {/* Text Below the Logo */}
        <motion.h1 >Welcome to <span>Spark Club</span></motion.h1>
        <p>Where Innovation Meets Creativity!</p>
        <motion.button 
          className="join-btn"
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px #00ffcc" }}
          transition={{ duration: 0.3 }}
        >
          Join the Club
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
