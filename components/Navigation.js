import * as React from "react";
import { motion } from "framer-motion";
import Link from 'next/link'
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = () => (
  <motion.ul variants={variants}>
          <MenuItem><Link href="/#ourStories">Case studies</Link></MenuItem>
          <MenuItem><Link href="/#ourStories">View products</Link></MenuItem>
          <MenuItem><Link href="/#ourStories">Our stories</Link></MenuItem>
          <MenuItem><Link href="/#aboutUs">About us both</Link></MenuItem>
          <MenuItem><Link href="/#contactUs">Let's work together</Link></MenuItem>
  </motion.ul>
);
