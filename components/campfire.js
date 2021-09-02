import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import styles from './layout.module.css'

export default function Campfire({ children, className }) {
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


	const line1 = "...at night "
	const line2 = "the storytellers"
	const line3 = "would tell you"
	const line4a = "of what "
	const line4b = "came before,"


    return (
      <motion.h2
        className={className}
        ref={ref}
		variants={sentence}
        initial="hidden"
		animate={controls}
      >
        {line1.split("").map((char, index)  => {
			return (
				<motion.span key={char + "-" + index} variants={letter}>
					{char}
				</motion.span>
			)
		})}
		<br/>
		{line2.split("").map((char, index)  => {
			return (
				<motion.span className={styles.large} key={char + "-" + index} variants={letter}>
					{char}
				</motion.span>
			)
		})}
		<br/>
		{line3.split("").map((char, index)  => {
			return (
				<motion.span key={char + "-" + index} variants={letter}>
					{char}
				</motion.span>
			)
		})}
		<br/>
		{line4a.split("").map((char, index)  => {
			return (
				<motion.span key={char + "-" + index} variants={letter}>
					{char}
				</motion.span>
			)
		})}
		{line4b.split("").map((char, index)  => {
			return (
				<motion.span className={styles.large} key={char + "-" + index} variants={letter}>
					{char}
				</motion.span>
			)
		})}
      </motion.h2>
    );
  }


  <h2>
          ...at night<br/>
          <span>the storytellers</span><br/>
          would tell you<br/>
          of what <span>came before,</span>
        </h2>