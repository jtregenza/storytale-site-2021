import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

export default function FadeInWhenVisible({ children, className }) {
    const controls = useAnimation();
    const [ref, inView] = useInView();
  
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
  
    return (
      <motion.div
        className={className}
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{ duration: 0.8}}
        variants={{
          visible: { opacity: 1, scale: 1, y: 0, transition: {delayChildren: 0.5} },
          hidden: { opacity: 0, scale: 0, y: 200 }
        }}
      >
        {children}
      </motion.div>
    );
  }