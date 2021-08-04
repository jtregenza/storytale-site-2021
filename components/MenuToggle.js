import * as React from "react";
import { motion } from "framer-motion";



export const MenuToggle = ({ toggle, children }) => (
  <motion.button onClick={toggle} variants={{
	closed: { color: "var(--color-dark)" },
	open: { color: "var(--color-light)",  }
  }}>
	  {children}
  </motion.button>
);