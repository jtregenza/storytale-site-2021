import { motion } from 'framer-motion'

const Arc = () => {

	return (
		<motion.svg 
		variants={{
			visible: { strokeDashoffset: 0 },
			start: { strokeDasharray: 8000, strokeDashoffset: 8000 }
		  }}
		initial="start"
		animate="visible"
		transition={{ duration: 6, delay: 0.8}}
		viewBox="0 0 1673 661" fill="none" xmlns="http://www.w3.org/2000/svg">
		<g filter="url(#filter0_diii)">
		<path d="M65 260.2C65 260.2 120.692 297.471 188.749 297.471C256.806 297.471 238.245 403.071 293.92 403.071C349.594 403.071 350.945 169.181 454.79 173.235C555.904 177.183 516.659 403.071 590.895 403.071C658.591 403.071 628.386 247.777 696.082 247.777C782.692 247.777 714.643 577 801.253 577C912.626 577 832.204 148.388 931.188 148.388C1005.44 148.388 993.057 403.071 1073.48 403.071C1160.11 403.071 1104.42 49 1203.41 49C1302.39 49 1259.08 378.224 1314.77 378.224C1347.97 378.224 1403.15 337.611 1463.27 313.224C1504.01 296.7 1587 303.682 1587 303.682" stroke="#000000" stroke-width="81" stroke-linecap="round" stroke-linejoin="round"/>
		</g>
		<defs>
		<filter id="filter0_diii" x="0" y="0" width="1673" height="661" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
		<feFlood flood-opacity="0" result="BackgroundImageFix"/>
		<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
		<feOffset dy="16"/>
		<feGaussianBlur stdDeviation="12"/>
		<feComposite in2="hardAlpha" operator="out"/>
		<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"/>
		<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
		<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
		<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
		<feOffset dy="16"/>
		<feGaussianBlur stdDeviation="12"/>
		<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
		<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
		<feBlend mode="normal" in2="shape" result="effect2_innerShadow"/>
		<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
		<feOffset dx="-16"/>
		<feGaussianBlur stdDeviation="12"/>
		<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
		<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
		<feBlend mode="normal" in2="effect2_innerShadow" result="effect3_innerShadow"/>
		<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
		<feOffset dx="4"/>
		<feGaussianBlur stdDeviation="2"/>
		<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
		<feColorMatrix type="matrix" values="0 0 0 0 0.929167 0 0 0 0 0.929167 0 0 0 0 0.929167 0 0 0 0.25 0"/>
		<feBlend mode="normal" in2="effect3_innerShadow" result="effect4_innerShadow"/>
		</filter>
		</defs>
		</motion.svg>
	)
}

export default Arc;