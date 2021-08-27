import { useViewportScroll, useTransform, motion } from 'framer-motion'
import { useState, useRef, useLayoutEffect } from "react"
import styles from './layout.module.css'

export const ParallaxImage = ({ src, className, placeholder, alt, ...style }) => {
	const [elementTop, setElementTop] = useState(0);
	const ref = useRef(null);
	const { scrollY } = useViewportScroll();
  
	const y = useTransform(scrollY, [elementTop, elementTop - 200], [0, +25], {
	  clamp: false
	});
  
	useLayoutEffect(() => {
	  const element = ref.current;
	  setElementTop(element.offsetTop);
	}, [ref]);
  
	return (
	  <div ref={ref} className={className}>
		<motion.img className={styles.overlay}  src={src} style={{ ...style, y }}  placeholder={placeholder} alt={alt} />
	  </div>
	);
  };