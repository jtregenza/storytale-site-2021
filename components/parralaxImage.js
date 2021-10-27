import { useViewportScroll, useTransform, motion } from 'framer-motion'
import { useState, useRef, useEffect } from "react"
import styles from './layout.module.css'
import Image from 'next/image'

export const ParallaxImage = ({ src, className, placeholder, alt, ...style }) => {
	const [elementTop, setElementTop] = useState(0);
	const ref = useRef(null);
	const { scrollY } = useViewportScroll();
  
	const y = useTransform(scrollY, [elementTop, elementTop - 500], [0, + 200], {
	  clamp: true
	});
  
	useEffect(() => {
	  const element = ref.current;
	  setElementTop(element.offsetTop);
	}, [ref]);
  
	return (
	  <div ref={ref} className={className} >
		  <motion.div className={styles.overlay}  style={{ ...style, y }}>
			  <Image loading="eager" src={src} placeholder='blur' alt={alt}  layout='fill'></Image>
		  </motion.div>
	  </div>
	);
  };
