// src/components/Chunk.js
import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';

const Chunk = ({ direction, children }) => {
    const variants = {
        hidden: {
            x: direction === 'east' ? '100vw' : direction === 'west' ? '-100vw' : 0,
            y: direction === 'north' ? '-100vh' : direction === 'south' ? '100vh' : 0,
            opacity: 0,
        },
        visible: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: { duration: 3, ease: 'easeInOut' }
        }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            className={`chunk ${direction}`}
        >
            {children}
        </motion.div>
    );
};

export default Chunk;
