import React from 'react'
import { func, string } from 'prop-types';
import styles from './layout.module.css'
import { motion } from 'framer-motion'


const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    <motion.button 
	whileHover={{ opacity: 0.8 }}
	className={styles.toggleButton} onClick={toggleTheme} >
		{theme} Mode
    </motion.button>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;