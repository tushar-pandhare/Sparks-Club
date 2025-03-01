import { motion } from "framer-motion";

export default function ClubLogo() {
  return (
    <motion.div 
      className="club-logo"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      
    </motion.div>
  );
}
