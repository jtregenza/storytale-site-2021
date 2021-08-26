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
        transition={{ duration: 0.6}}
        variants={{
          visible: { visibility: "visible", scale: 1, y: 0, transition: {delayChildren: 0.5} },
          hidden: { visibility: "hidden", scale: 0, y: 100 }
        }}
      >
        {children}
      </motion.div>
    );
  }