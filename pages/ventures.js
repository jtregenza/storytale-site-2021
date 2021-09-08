import Layout from "../components/layout";
import Link from "next/link";
import Typewriter from "../components/typewriter";
import styles from '../components/layout.module.css'

export default function Ventures() {

return(
	<Layout>
      <section className={styles.ventures}>
        {/* <h2><Typewriter>and where they </Typewriter><span className={styles.highlight}>venture</span></h2> */}
      <img src="https://picsum.photos/300/700"/>
        <ul>
          <li><Link href="/seasonal">Seasonal</Link></li>
          <li><Link href="/fables">Fables</Link></li>
          {/* <li><Link href="/crumple">Crumple</Link></li> */}
        </ul>
        <img src="https://picsum.photos/300/700"/>
      </section>
	</Layout>
)
}
