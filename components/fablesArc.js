import { motion } from 'framer-motion'
import { useEffect } from 'react';
import { useDarkMode } from './darkMode';



const FablesArc = () => {
	const [theme, toggleTheme, componentMounted] = useDarkMode();
	const themeMode = theme === 'dark' ? 'dark' : 'light';

	return (
		<motion.svg 
		variants={{
			visible: { strokeDashoffset: 0 },
			start: { strokeDasharray: 6000, strokeDashoffset: 6000 }
		  }}
		initial="start"
		animate="visible"
		transition={{ duration: 5, delay: 1.4, ease: 'easeInOut'}}
		viewBox="0 0 927 293" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
		<g><path d="M65 151.019C82.3663 151.019 121.533 151.019 139.268 151.019C161.438 151.019 174.74 58.9987 216.862 60.1074C258.985 61.216 264.527 206.453 309.975 206.453C355.423 206.453 378.701 50.1291 428.583 49.0204C468.488 48.1334 456.404 76.5036 478.465 75.6287C499.014 74.8137 499.526 49.0206 523.912 49.0204C548.299 49.0201 589.091 212.883 614.808 211.996C646.954 210.888 696.836 96.6938 725.656 97.8025C754.477 98.9111 760.019 149.91 783.298 148.802C801.92 147.915 843.525 148.432 862 148.802" style={{stroke: 'var(--color-light)'}} strokeWidth="64" strokeLinecap="round" strokeLinejoin="round"/></g><defs><filter id="dark" x=".5" y=".5"  filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="16"/><feGaussianBlur stdDeviation="12"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="16"/><feGaussianBlur stdDeviation="12"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/><feBlend in2="shape" result="effect2_innerShadow"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="-16"/><feGaussianBlur stdDeviation="12"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/><feBlend in2="effect2_innerShadow" result="effect3_innerShadow"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="4"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix values="0 0 0 0 0.929167 0 0 0 0 0.929167 0 0 0 0 0.929167 0 0 0 0.25 0"/><feBlend in2="effect3_innerShadow" result="effect4_innerShadow"/></filter>
		<filter id="light" x=".5" y=".5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="16"/><feGaussianBlur stdDeviation="12"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="16"/><feGaussianBlur stdDeviation="12"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/><feBlend in2="shape" result="effect2_innerShadow"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="-16"/><feGaussianBlur stdDeviation="12"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/><feBlend in2="effect2_innerShadow" result="effect3_innerShadow"/></filter></defs>
		</motion.svg>
	)
}

export default FablesArc;