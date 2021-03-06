import { motion } from 'framer-motion'
import { useEffect } from 'react';
import { useDarkMode } from './darkMode';



const SeasonalArc = () => {
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
		viewBox="0 0 1254 302" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '133%'}}>
		<g><path d="M65 194.418h68.784c9.38 0 34.393 26.582 87.544 26.582 53.152 0 48.462-107.891 125.063-107.891S405.796 221 477.707 221s39.082-107.891 115.682-107.891c60.968 0 59.405 107.891 123.5 107.891 64.094 0 76.601-107.891 137.569-107.891 60.968 0 51.588 107.891 110.993 107.891 43.769 0 23.449-172 76.599-172 53.15 0 28.14 126.655 67.22 126.655 30.66 0 65.66 8.86 79.73 9.381" style={{stroke: 'var(--color-light)'}} stroke-width="64" stroke-linecap="round" stroke-linejoin="round"/></g><defs><filter id="dark" x=".5" y=".5"  filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="16"/><feGaussianBlur stdDeviation="12"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="16"/><feGaussianBlur stdDeviation="12"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/><feBlend in2="shape" result="effect2_innerShadow"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="-16"/><feGaussianBlur stdDeviation="12"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/><feBlend in2="effect2_innerShadow" result="effect3_innerShadow"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="4"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix values="0 0 0 0 0.929167 0 0 0 0 0.929167 0 0 0 0 0.929167 0 0 0 0.25 0"/><feBlend in2="effect3_innerShadow" result="effect4_innerShadow"/></filter>
		<filter id="light" x=".5" y=".5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="16"/><feGaussianBlur stdDeviation="12"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="16"/><feGaussianBlur stdDeviation="12"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/><feBlend in2="shape" result="effect2_innerShadow"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="-16"/><feGaussianBlur stdDeviation="12"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/><feBlend in2="effect2_innerShadow" result="effect3_innerShadow"/></filter></defs>
		</motion.svg>
	)
}

export default SeasonalArc;