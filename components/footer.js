import styles from './layout.module.css'


export function Footer() {
	return (
		<footer>
			<section className={styles.logoArea}>
				<img src="/images/storytale_logomark.svg"/>
				<p>Storytale Studio</p>
			</section>
			<section>
				<ul>
					<li>About</li>
					<li>Case Studies</li>
					<li>Ventures</li>
					<li>Blog</li>
					<li>Contact</li>
				</ul>
				<ul>
					<li><img src="" alt="dribbble"/></li>
					<li><img src="" alt="twitter"/></li>
					<li><img src="" alt="github"/></li>
					<li><img src="" alt="instagram"/></li>
					<li><img src="" alt="linkedin"/></li>
				</ul>
			</section>
	 </footer>
	);
  };