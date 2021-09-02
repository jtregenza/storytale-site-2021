import Link from "next/link";
import React from "react";
import styles from './layout.module.css'
import { motion } from "framer-motion";


export default function ButtonMailto({mailto, label }) {
    return (
        <motion.a
		className={styles.cta}
		transition={{ duration: 0.8 }}
        initial={{ background: 'var(--color-dark)',
        color: 'var(--color-light)' }}
        whileHover={{ background: 'var(--color-light)',
         color: 'var(--color-dark)' }}
        whileTap={{ scale: 0.9 }}
            href='#'
            onClick={(e) => {
                window.location = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </motion.a>
    );
};
