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
          <MenuItem><Link href="/#aboutUs">About</Link></MenuItem>
          <MenuItem><Link href="/#ourStories">Case Studies</Link></MenuItem>
          <MenuItem><Link href="/ventures">Ventures</Link></MenuItem>
          <MenuItem><Link href="/#contactUs">Contact</Link></MenuItem>
  </motion.ul>
);
