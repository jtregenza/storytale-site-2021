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
          visible: { 
            visibility: "visible",
             opacity: 1,
              y: 0, 
              transition: {
                delay: 0.5,
                staggerChildren: 0.08,
              } 
            },
          hidden: { visibility: "hidden", opacity: 0, y: 50 }
        }}
      >
        {children}
      </motion.div>
    );
  }