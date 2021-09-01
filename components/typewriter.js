import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

export default function Typewriter({ children, className }) {
    const controls = useAnimation();
    const [ref, inView] = useInView();
  
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
  
	const sentence = {
		hidden: { opacity: 1},
		visible: {
			opacity: 1,
			transition: {
				delay: 0.5,
				staggerChildren: 0.08,
			},
		},
	}
	const letter = {
		hidden: { opacity: 0, y: 50},
		visible: { 
			opacity: 1,
			y: 0,
		}
	}


    return (
      <motion.span
        className={className}
        ref={ref}
		variants={sentence}
        initial="hidden"
		animate={controls}
      >
        {children.split("").map((char, index)  => {
			return (
				<motion.span key={char + "-" + index} variants={letter}>
{char}</motion.span>
			)
		})}
      </motion.span>
    );
  }