import { motion } from 'framer-motion'
import { useEffect } from 'react';
import { useDarkMode } from './darkMode';



const Arc = () => {
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
		viewBox="0 0 1673 661" fill="none" xmlns="http://www.w3.org/2000/svg">
		<g>
		<path xmlns="http://www.w3.org/2000/svg" d="M65 260.2s55.692 37.271 123.749 37.271c68.057 0 49.496 105.6 105.171 105.6 55.674 0 57.025-233.89 160.87-229.836 101.114 3.948 61.869 229.836 136.105 229.836 67.696 0 37.491-155.294 105.187-155.294 86.61 0 18.561 329.223 105.171 329.223 111.373 0 30.951-428.612 129.935-428.612 74.252 0 61.869 254.683 142.292 254.683 86.63 0 30.94-354.071 129.93-354.071 98.98 0 55.67 329.224 111.36 329.224 33.2 0 88.38-40.613 148.5-65 40.74-16.524 123.73-9.542 123.73-9.542" stroke={'var(--color-light)'} strokeWidth="81" strokeLinecap="round" strokeLinejoin="round"/>
		</g>
		<defs>
		<filter xmlns="http://www.w3.org/2000/svg" id="filter0_diii" x=".495605" y=".5" width="1651.01" height="657" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="16"/><feGaussianBlur stdDeviation="12"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="16"/><feGaussianBlur stdDeviation="12"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/><feBlend in2="shape" result="effect2_innerShadow"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="-16"/><feGaussianBlur stdDeviation="12"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/><feBlend in2="effect2_innerShadow" result="effect3_innerShadow"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="4"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix values="0 0 0 0 0.929167 0 0 0 0 0.929167 0 0 0 0 0.929167 0 0 0 0.25 0"/><feBlend in2="effect3_innerShadow" result="effect4_innerShadow"/></filter>
		<filter id="filter0_dii" x="0.495605" y="0.5" width="1651.01" height="657" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
		<feFlood floodOpacity="0" result="BackgroundImageFix"/>
		<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
		<feOffset dy="16"/>
		<feGaussianBlur stdDeviation="12"/>
		<feComposite in2="hardAlpha" operator="out"/>
		<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
		<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
		<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
		<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
		<feOffset dy="16"/>
		<feGaussianBlur stdDeviation="12"/>
		<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
		<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
		<feBlend mode="normal" in2="shape" result="effect2_innerShadow"/>
		<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
		<feOffset dx="-16"/>
		<feGaussianBlur stdDeviation="12"/>
		<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
		<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
		<feBlend mode="normal" in2="effect2_innerShadow" result="effect3_innerShadow"/>
		</filter>
		</defs>
		</motion.svg>
	)
}

export default Arc;