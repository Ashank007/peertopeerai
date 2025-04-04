import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import './StudyGroupFinder.css';

const dummyGroups = [
  {
    id: 1,
    name: 'Data Structures Study Group',
    description: 'Join us to master linked lists, trees, and graphs!',
  },
  {
    id: 2,
    name: 'Operating Systems Enthusiasts',
    description: 'Dive deep into OS concepts like memory, processes, and threads.',
  },
  {
    id: 3,
    name: 'AI & Machine Learning Club',
    description: 'Work on real projects and read research papers together.',
  },
];

export default function StudyGroupFinder() {
  const [search, setSearch] = useState('');
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    setGroups(dummyGroups);
  }, []);

  const filteredGroups = groups.filter((group) =>
    group.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="finder-container">
      <h1 className="title">Find a Study Group</h1>
      <input
        type="text"
        placeholder="Search for a course or topic..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      <div className="group-list">
        {filteredGroups.map((group) => (
          <motion.div
            key={group.id}
            className="group-card"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h2>{group.name}</h2>
            <p>{group.description}</p>
            <button className="join-button">Join Group</button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
