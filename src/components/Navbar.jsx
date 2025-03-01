import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Home, LayoutDashboard, Users, Settings } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleDropdown = (menu) => setActiveDropdown(activeDropdown === menu ? null : menu);

  return (
    <div className="navbar-container">
      {/* Top Navbar */}
      <motion.nav 
        className="top-navbar"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.div 
          className="menu-icon" 
          onClick={toggleSidebar}
          whileTap={{ scale: 0.9 }}
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.div>
        <div className="top-nav-links">
          {['Home', 'Dashboards', 'Segments', 'Account', 'Settings'].map((link, index) => (
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
        initial={{ x: -250 }}
        animate={{ x: isSidebarOpen ? 0 : -250 }}
        transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
      >
        <div className="sidebar-links">
          {[
            { name: "Home", icon: <Home size={20} /> },
            { name: "Dashboards", icon: <LayoutDashboard size={20} />},
            { name: "Segments", icon: <Users size={20} /> },
            { name: "Settings", icon: <Settings size={20} /> }
          ].map((item, index) => (
            <div key={index}>
              <motion.div 
                onClick={() => toggleDropdown(item.name.toLowerCase())} 
                whileHover={{ scale: 1.05 }}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {item.icon} {item.name}
              </motion.div>
              {activeDropdown === item.name.toLowerCase() && item.subItems && (
                <motion.div 
                  className="dropdown" 
                  initial={{ opacity: 0, y: -10 }} 
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.subItems.map((subItem, subIndex) => (
                    <motion.a 
                      key={subIndex} 
                      href={`#${subItem.toLowerCase().replace(" ", "-")}`}
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: subIndex * 0.1 }}
                    >
                      {subItem}
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </motion.aside>
    </div>
  );
}
