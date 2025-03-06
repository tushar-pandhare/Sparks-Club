import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Member.css";

const Member = () => {
  const [members, setMembers] = useState(["Sagar", "Tushar", "Kishor"]);
  const [newMember, setNewMember] = useState("");

  const addMember = () => {
    if (newMember.trim() !== "") {
      setMembers([...members, newMember]);
      setNewMember("");
    }
  };

  return (
    <div className="member-container relative top-98">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        Members Page
      </motion.h1>
      
      <motion.div 
        className="member-list"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {members.map((member, index) => (
          <motion.div
            key={index}
            className="member-card"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {member}
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="member-input"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <input
          type="text"
          placeholder="Enter Member Name"
          value={newMember}
          onChange={(e) => setNewMember(e.target.value)}
        />
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={addMember}
        >
          Add Member
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Member;