export default function Year() {
	const d = new Date();
	const year = d.getFullYear();
	return <time dateTime={year}>{year}</time>
}