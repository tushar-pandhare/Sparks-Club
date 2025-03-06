import { useState } from "react";
import { delay, motion } from "framer-motion";
import { Menu, X, Home, LayoutDashboard, Users, Settings } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleDropdown = (menu) => setActiveDropdown(activeDropdown === menu ? null : menu);

  // Sidebar animation
  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: -250 },
  };

  // Sidebar items stagger effect (only when sidebar opens)
  const sidebarItemVariants = {
    hidden: { x: -30, opacity: 0  },
    visible: (index) => ({
      x: 0,
      opacity: 1,
      transition: { duration: 0.3,stegger:true, delay: index * 0.1 },
    }),
  };

  return (
    <div className="navbar-container">
      {/* Top Navbar */}
      <motion.nav 
        className="top-navbar"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Menu Icon */}
        <motion.div 
          className="menu-icon" 
          onClick={toggleSidebar}
          whileTap={{ scale: 0.9 }}
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.div>

        {/* Navbar Links */}
        <div className="top-nav-links">
          {["Home", "Dashboards", "Segments", "Account", "Settings"].map((link, index) => (
            <motion.a 
              key={index} 
              href={`#${link.toLowerCase()}`}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {link}
            </motion.a>
          ))}
        </div>
      </motion.nav>

      {/* Sidebar */}
      <motion.aside
        className={`sidebar ${isSidebarOpen ? "open" : ""}`}
        initial="closed"
        animate={isSidebarOpen ? "open" : "closed"}
        variants={sidebarVariants}
        transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
      >
        <div className="sidebar-links">
          {[
            { name: "Home", icon: <Home size={20} /> },
            { name: "Dashboards", icon: <LayoutDashboard size={20} /> },
            { name: "Segments", icon: <Users size={20} /> },
            { name: "Settings", icon: <Settings size={20} /> }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="sidebar-item"
              onClick={() => toggleDropdown(item.name.toLowerCase())}
              variants={sidebarItemVariants}
              initial="hidden"
              animate={isSidebarOpen ? "visible" : "hidden"} // Animates only when the sidebar opens
              custom={index}
            >
              {item.icon} {item.name}
            </motion.div>
          ))}
        </div>
      </motion.aside>
    </div>
  );
}
