import Layout from "../components/layout";
import styles from '../components/layout.module.css'


export default function Crumple() {

return(
	<Layout type="venture">
		<article className={styles.ventureContent}>
			<header>
				<h1>Crumple</h1>
				<h2>Meaningful stories, your way</h2>
			</header>
			<main className={styles.main}>
				<p></p>
			</main>
		</article>	
	</Layout>
)
}
