import Layout from "../components/layout";
import Link from "next/link";

export default function Ventures() {

return(
	<Layout>
		<ul>
			<li><Link href="./seasonal">Seasonal</Link></li>
			<li><Link href="./fables">Fables</Link></li>
			<li><Link href="./crumple">Crumple</Link></li>
		</ul>
	</Layout>
)
}
