import Layout from "../components/layout";
import utilStyles from '../styles/utils.module.css'
import styles from '../components/layout.module.css'

export default function Fables() {

return(
	<Layout type="venture">
		<article className={styles.ventureContent}>
			<header>
			<h1>Fables</h1>
			<h2>Meaningful stories, your way</h2>
			<iframe id="Fables NPC Generator"
			title="Fables NPC Generator"
			width="400"
			height="800"
			src="https://fables.storytale.design/"
			style={{margin: '0 auto', display: 'block'}}>
		</iframe>
			</header>
			<main className={styles.main}>

			<p>Tell the story, build the world.</p>

			<p>When we tell a story we need to keep it's rhythm and flow. We need a toolkit that assists that.</p>

			<p>When we build a world, we want the world's elements to weave together a rich tapestry and strengthen it. We need a way to keep track of such a world.</p>

			<p>This is what we are making Fables for.</p>

			<p>This storytale creation and managment tool will have you focus on telling the story and building the world. </p>

			<p>Fables is for anyone who wants to tell stories, be it a story for a novel or for a tabletop rpg.</p>

			<p>The first step to Fables is in creating random character names. You can be as random or specify race (as in fantasy race), culture and gender (masculine, feminine or genderless/non-binary).</p>

			<p><a href="https://fables.storytale.design" alt="Fables App">Our first version of Fables can be found here.</a></p>

			<p>The current version of Fables is great for use at the table for dnd, for novels or for random names to use in design mockups (We've used it in our <a href="https://storytale.design/posts/cash-converters">HAGL designs</a>)</p>

			<p>We are continuously working on building out Fables two pillars to give you to the tools to tell the story and build the world so you continue create meaningful stories.</p>
		</main>
		
		</article>

	</Layout>
)
}
