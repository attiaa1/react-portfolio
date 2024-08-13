// src/components/Chunk.js
import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';

const Chunk = ({ direction, children, animate = true }) => {
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
            transition: { duration: 1.1, ease: 'easeInOut' }
        }
    };

    return (
        <motion.div
            initial="hidden"
            animate={animate ? "visible" : "hidden"}
            variants={variants}
            className={`chunk ${direction}`}
        >
            {children}
        </motion.div>
    );
};

export default Chunk;