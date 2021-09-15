import Layout from "../components/layout";
import utilStyles from '../styles/utils.module.css'
import styles from '../components/layout.module.css'
import FadeInWhenVisible from "../components/fadeInVisible";
import { motion } from "framer-motion";
import SeasonalArc from "../components/seasonalArc";

export default function Seasonal() {
	return(
		<Layout type="venture">
			<article className={styles.ventureContent}>
			<header>

			<FadeInWhenVisible className={styles.ventureWordMark}>
              <motion.h1 className={styles.full}>seasonal</motion.h1>
             <SeasonalArc/>
              <motion.h1  className={styles.layered}>
                <span>s</span>
                <span className={styles.hidden}>e</span>
                <span>a</span>
                <span>s</span>
                <span className={styles.hidden}>o</span>
				<span>n</span>
				<span className={styles.hidden}>a</span>
				<span>l</span>
                </motion.h1>
                </FadeInWhenVisible>
			<h2>Helping you eat sustainably</h2>
			</header>
			<aside></aside>
			<main>
			<p>Food ties us together, shows us who we are, where we come from and what may come, of us.</p> 
			<p>Food Matters.</p> 
			<p>What seasonal is trying to accomplish is to give people greater knowledge of the food that they consume.</p> 
			<p>The idea started like going into a supermarket, and seeing strawberries for $10 upon an outrageous cost, but we didn't know it would be so much. We didn't have the knowledge. We did know what the seasonality of the strawberries were.</p> 
			<p>Knowing when to buy the right food, so that what you get has the best chance to be it's freshest. If you do that, you're going to make better food choices. The aim is to make sure that what we are getting is going to be the freshest and best, so that the food that you then make with it is going to be the best it could be. Seasonal is an application that gives you that information that imparts that knowledge to you, and allows you to think differently about food. By going through the app, setting up notifications of when things are going to be in season. You'll be able to make more informed choices.</p>
				
			<p>Why stop there.</p> 
			<p>Why should you just know what produce is in season right now. Why not go down a more sustainable route? By understanding when seasonality is at its best. You can also start getting more knowledge about where to buy things, the right places to go. The places that mean that there is going to have a more positive environmental impact from your purchases. It's through changing buying habits that we are able to make such a large shift in how this world produces its food.</p> 
			<p>Why stop there.</p> 
			<p>Why not go from knowing when something is in season to going where to buy those in season produce to then going, "Well, how am I going to grow that produce myself?"</p> 
			<p>It's a tall order, yes, but what we're doing at Storytale is that we are putting the seeds in in place so that over time, and as we build out Seasonal we seek for it to grow and be able to claim those ambitious goals harvest after harvest.</p>



			</main>
			</article>
		</Layout>
	)
}

