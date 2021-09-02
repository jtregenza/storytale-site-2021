import { useEffect, useState } from "react";
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
  AnimatePresence
} from "framer-motion";
import styles from './layout.module.css'
import FadeInWhenVisible from "./fadeInVisible";

export default function HeroicWheel()  {
	
	const firstComponent = () => {
		return (
			<div>
				First Component
			</div>
		)
	}
		const secondComponent = () => {
			return (
				<div>
					Second Component
				</div>
			)
		}
		const thirdComponent = () => {
			return (
				<div>
					Third Component
				</div>
			)
		}
		const finalComponent = () => {
			return (
				<div>
					Final Component
				</div>
			)
		}

	const [steps, setSteps] = useState([
		{ 
			key: 1,
			label: 'You',
			byline: 'We need to know more about you',
			nodePostion: '0deg',
			isDone: false,
		},
		{ 
			key: 2,
			label: 'Need',
			byline: 'We need to know more about you',
			nodePostion: '45deg',
			isDone: false,
		},
		{ 
			key: 3,
			label: 'Go',
			byline: 'We need to know more about you',
			nodePostion: '90deg',
			isDone: false,
		},
		{ 
			key: 4, 
			label: 'Search', 
			byline: 'We need to know more about you',
			nodePostion: '135deg',
			isDone: false, 
		},
		{ 
			key: 5, 
			label: 'Find', 
			byline: 'We need to know more about you',
			nodePostion: '180deg',
			isDone: false, 
		},
		{ 
			key: 6, 
			label: 'Take', 
			byline: 'We need to know more about you',
			nodePostion: '225deg',
			isDone: false, 
		},
		{ 
			key: 7, 
			label: 'Return', 
			byline: 'We need to know more about you',
			nodePostion: '270deg',
			isDone: false, 
		},
		{ 
			key: 8, 
			label: 'Change', 
			byline: 'We need to know more about you',
			nodePostion: '315deg',
			isDone: false, 
		},
	  ]);	


	  const [activeStep, setActiveStep] = useState(steps[0]);
 
	  const handleNext = () => {
		if (steps[steps.length - 1].key === activeStep.key) {
			setActiveStep(steps[0])
		  return;
		}
	   
		const index = steps.findIndex(x => x.key === activeStep.key);
		setSteps(prevStep => prevStep.map(x => {
		  if (x.key === activeStep.key) x.isDone = true;
		  return x;
		}))
		setActiveStep(steps[index + 1]);
	  }
	   
	  const handleBack = () => {
		const index = steps.findIndex(x => x.key === activeStep.key);
		if (index === 0) return;
	   
		setSteps(prevStep => prevStep.map(x => {
		  if (x.key === activeStep.key) x.isDone = false;
		  return x;
		}))
		setActiveStep(steps[index - 1]);
	  }


	return (
		<div className={styles.Wheel}>
			<FadeInWhenVisible className={styles.wheelBackground}>
			<svg viewBox="0 0 694 694" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M15.2776 340.46C6.87723 340.294 0.16695 333.345 0.700371 324.96C5.81189 244.611 38.7349 168.353 94.0708 109.438C152.886 46.8184 232.838 8.24273 318.456 1.17597C404.074 -5.89078 489.27 19.0539 557.556 71.1825C621.803 120.228 666.783 190.055 685 268.48C686.901 276.664 681.42 284.619 673.161 286.16V286.16C664.901 287.7 656.994 282.242 655.058 274.066C638.246 203.046 597.352 139.841 539.093 95.3672C476.795 47.8094 399.07 25.052 320.959 31.4991C242.848 37.9462 169.906 73.1394 116.249 130.268C66.0703 183.692 36.0929 252.747 31.1526 325.562C30.5839 333.945 23.6779 340.626 15.2776 340.46V340.46Z" style={{fill: "var(--color-dark)"}}/>
				<path d="M678.204 327.336C686.591 326.839 693.829 333.237 693.959 341.637C695.23 423.718 667.343 503.788 614.985 567.439C559.398 635.014 480.334 679.095 393.627 690.853C306.92 702.611 218.972 681.177 147.397 630.845C79.9792 583.435 31.776 513.684 11.1425 434.229C9.03061 426.097 14.3033 418.002 22.5202 416.249V416.249C30.7371 414.495 38.7834 419.747 40.9295 427.87C59.9387 499.823 103.758 562.961 164.899 605.956C230.198 651.875 310.435 671.429 389.539 660.703C468.643 649.976 540.774 609.76 591.487 548.11C638.97 490.384 664.393 417.858 663.554 343.441C663.459 335.039 669.817 327.834 678.204 327.336V327.336Z" style={{fill: "var(--color-dark)"}}/>
				<path d="M455.66 403.201C467.285 403.201 475.634 396.843 480.861 389.589C485.702 382.87 488.632 374.507 490.65 366.651C494.401 352.048 496.35 333.347 498.153 316.041L498.155 316.029C498.3 314.632 498.445 313.243 498.589 311.867C500.632 292.431 502.677 275.106 506.452 262.669C508.339 256.452 510.223 253.019 511.581 251.402C511.708 251.252 511.818 251.131 511.91 251.036C512.048 251.142 512.256 251.321 512.53 251.614C513.863 253.04 515.758 256.079 517.699 261.653C521.596 272.838 523.878 288.709 525.721 306.5C526.198 311.105 526.648 315.88 527.099 320.674L527.099 320.677C528.292 333.337 529.497 346.134 531.253 356.305C532.457 363.276 534.173 370.737 537.114 376.825C539.782 382.35 546.458 392.515 559.653 392.515C566.364 392.515 572.859 390.545 578.215 388.468C583.765 386.316 589.567 383.448 595.143 380.563C597.734 379.222 600.302 377.867 602.861 376.517C611.853 371.773 620.728 367.09 630.056 363.315C635.569 361.083 645.991 359.981 657.11 359.843C662.258 359.78 666.928 359.922 670.314 360.081C671.999 360.16 673.349 360.243 674.259 360.304C674.714 360.335 675.057 360.36 675.277 360.377L675.38 360.385L675.512 360.395L675.55 360.398L675.554 360.398L675.556 360.399L675.559 360.399C684.922 361.18 693.151 354.25 693.939 344.917C694.728 335.58 687.774 327.374 678.407 326.588L678.239 326.574L678.097 326.563L677.868 326.545C677.555 326.521 677.113 326.489 676.556 326.451C675.441 326.376 673.859 326.28 671.917 326.189C668.047 326.007 662.678 325.842 656.689 325.916C645.534 326.054 629.293 327.003 617.248 331.878C606.149 336.37 595.25 342.128 586.094 346.966L586.089 346.969C583.757 348.201 581.539 349.373 579.459 350.449C574.156 353.193 569.771 355.321 566.069 356.77C565.657 355.083 565.229 353.025 564.801 350.55C563.281 341.747 562.273 331.039 561.138 318.985L561.138 318.981C560.658 313.886 560.156 308.55 559.583 303.015C557.759 285.409 555.209 265.884 549.857 250.523C544.954 236.448 534.369 217 511.657 217C500.373 217 491.582 222.36 485.486 229.614C479.846 236.324 476.314 244.787 473.868 252.845C468.978 268.96 466.691 289.702 464.733 308.333C464.619 309.423 464.505 310.507 464.392 311.583L464.392 311.585C462.474 329.904 460.769 346.179 457.672 358.236C456.58 362.486 455.487 365.471 454.536 367.47C453.702 366.332 452.625 364.571 451.342 361.867C447.309 353.369 444.101 341.396 440.494 327.283C440.308 326.553 440.12 325.816 439.93 325.073L439.93 325.072C436.714 312.462 433.072 298.18 428.118 286.978C423.516 276.574 413.833 259.743 394.335 259.743C381.468 259.743 372.602 267.227 367.303 275.498C362.372 283.196 359.537 292.85 357.653 302.152C354.108 319.658 352.818 342.187 351.604 363.378L351.602 363.42C351.516 364.919 351.431 366.411 351.345 367.894C349.988 391.343 348.528 412.754 344.787 428.269C343.078 435.353 341.197 439.816 339.564 442.336C338.878 440.705 338.096 438.355 337.337 435.086C334.657 423.547 333.695 407.51 332.666 389.289L332.607 388.248C331.652 371.336 330.587 352.452 327.171 337.747C325.437 330.279 322.731 322.124 317.876 315.513C312.518 308.218 304.174 302.485 293.008 302.485C277.16 302.485 267.744 312.443 262.689 321.924C258.319 330.121 255.867 340.281 254.032 347.884L253.795 348.866C251.684 357.593 250.146 363.5 248.127 367.467C247.791 366.775 247.408 365.91 246.985 364.835C244.503 358.527 242.765 350.238 240.575 339.792L240.572 339.779L240.567 339.754C240.175 337.881 239.767 335.94 239.339 333.928C236.781 321.919 233.416 307.304 227.057 295.519C220.293 282.982 208.656 271.181 189.68 270.441C170.772 269.705 157.565 280.299 148.925 292.103C140.589 303.491 134.896 318.015 130.496 330.564C128.873 335.193 127.44 339.494 126.107 343.492C123.492 351.34 121.264 358.024 118.752 363.745C118.542 364.224 118.338 364.675 118.141 365.1C117.325 363.313 116.388 361.032 115.143 358.002L114.772 357.098C112.536 351.658 109.115 343.407 103.23 336.726C96.5243 329.111 86.9905 323.857 74.3567 323.857C62.6763 323.857 51.6396 320.63 43.2265 317.143C39.0858 315.427 32.3981 313.586 30.1543 312.342C29.0368 311.722 28.2019 311.223 27.6853 310.906C27.4273 310.748 27.2499 310.635 27.1575 310.576L27.0904 310.532C19.2858 305.36 8.74794 307.451 3.52707 315.218C-1.7052 323.002 0.384123 333.54 8.1937 338.755L8.39098 338.885C8.4807 338.944 8.59424 339.018 8.73104 339.105C9.00455 339.281 9.37146 339.513 9.82713 339.792C10.7378 340.352 15.3626 341.238 16.9536 342.121C20.1269 343.881 24.6283 346.181 30.1547 348.472C41.0757 352.999 56.7058 357.787 74.3567 357.787C76.3886 357.787 76.8541 358.209 77.6473 359.109C79.2624 360.943 80.8403 364.046 83.2706 369.959C83.4816 370.473 83.7057 371.026 83.9433 371.614C85.8832 376.409 88.7284 383.443 92.8009 389.067C98.2123 396.541 106.882 403.201 119.683 403.201C129.397 403.201 136.32 397.902 140.553 393.057C144.654 388.363 147.644 382.574 149.939 377.347C153.088 370.175 156.153 360.995 159.066 352.272C160.283 348.627 161.474 345.062 162.632 341.757C166.972 329.378 171.316 319.082 176.426 312.101C181.232 305.535 184.881 304.21 188.351 304.345C191.164 304.455 193.755 305.433 197.076 311.589C200.802 318.496 203.379 328.485 206.04 340.974C206.39 342.622 206.746 344.333 207.11 346.088C209.232 356.303 211.66 367.99 215.294 377.225C219.364 387.565 228.331 403.201 247.675 403.201C263.523 403.201 272.939 393.243 277.994 383.762C282.364 375.565 284.816 365.405 286.651 357.802L286.888 356.82C288.854 348.694 290.323 343.013 292.145 339.066C292.737 340.625 293.379 342.699 294.007 345.399C296.687 356.938 297.648 372.975 298.678 391.196L298.737 392.237C299.691 409.149 300.757 428.033 304.172 442.739C305.907 450.207 308.612 458.361 313.467 464.972C318.825 472.268 327.17 478 338.335 478C350.888 478 360.281 471.55 366.471 463.184C372.192 455.453 375.6 445.676 377.886 436.199C382.478 417.152 384.02 392.482 385.33 369.848C385.397 368.687 385.464 367.53 385.53 366.378C386.813 344.124 387.978 323.894 391.022 308.866C392.207 303.014 393.508 298.901 394.719 296.184C395.354 297.267 396.109 298.722 396.969 300.665C400.745 309.202 403.766 321.024 407.334 334.986L407.506 335.66C410.898 348.929 414.856 364.338 420.57 376.377C425.846 387.493 436.211 403.201 455.66 403.201Z" style={{fill: "var(--color-dark)"}}/>
				</svg>
				<div className={styles.nodeParent} style={{
					transform: 'rotateZ(' + activeStep.nodePostion + 
				')'
				}}>
				<div className={styles.wheelNode} ></div>
</div>
				

</FadeInWhenVisible>
<FadeInWhenVisible className={styles.steps}>
				<h3>{activeStep.byline}</h3>
				<div>
				<h2>{activeStep.label}</h2>
				<h4>Step {activeStep.key}</h4>

				<div className={styles.stepGroup}>
				<input type="button" value="Back" onClick={handleBack} disabled={steps[0].key === activeStep.key} />
          <input type="button" value={steps[steps.length - 1].key !== activeStep.key ? 'Next' : 'Restart'} onClick={handleNext} />
				</div>
				</div>
				</FadeInWhenVisible>
		</div>
	)
  }     

