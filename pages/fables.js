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

		<p>Fables is a story creation and managment tool. Split into two seperate times for </p>
		
		<p>As cooperative storytellers, creating characters is our bread and butter. These characters aid heroes in thier journey's, become antagonists as rival powers or a a roadside stop over of delight. </p>
		<p>
		We believe in storytelling, not sure if you have caught on yet. We also want to empower people to tell their own stories and easily as possible. That's why we are making Fables, a story creation and management tool.</p>

		<p>We started Fables before Storytale was a thing and us working on it set the stage for the inception, so it's just as much a Storytale creation tool.</p> 

		<p>We are both game masters for tabletop role playing games and one of the things that derails improvisational storytelling is having to come up with a name for the the character you off handedly mentioned while painting the scene for your players. This is where we have started with Fables, character name generation.</p>

		<p>You can try it out right now, roll up your new character.</p>

		<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="eYmGdgN" data-preview="true" data-user="jtregenza" style={{height: '500px', boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid', margin: '1em 0', padding: '1em'}}>
 		 <span>See the Pen <a href="https://codepen.io/jtregenza/pen/eYmGdgN">NPC Generator Prototype</a> by Josh Tregenza (<a href="https://codepen.io/jtregenza">@jtregenza</a>) on <a href="https://codepen.io">CodePen</a>.</span></p>
		<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>


		<p>This is great for off the cuff naming that feel real to the world you are creating or even coming up with Random Names for placeholder names in designs (in the HAGL mockups, the names found were generator using Fables).</p>

		<p>This just the start of Fables, when we build things we want each step to be valuable and focus on creating meaningful stories. So what's on the Roadmap? We current have two areas of Fables, Telling the Story and Building the Story. Telling the Story helps with in the moment storytelling, when you are orating to others or in the zone and need to have quick influence to stay on a roll.</p> 

		<h3>Tell the Story</h3> 

		<p>Tell the story is all about the creation of on the fly characters and how they interact in real time. This allows people to run games and add to the story without needing to go back and forth through notes, post-its and dense lore bibles. </p>


		<h3> Build the world</h3>

		<p>Build the story is all about plotting out the state and future of your story. Adding wiki entries to your story and seeing the relationship between your characters.</p>

		<p>Keep Fables on hand by going to <a href="https://fables.storytale.design">fables.storytale.design</a></p>
		</main>
		
		</article>

	</Layout>
)
}
