import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import styles from '../components/layout.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Year from '../components/year'
import Notepad from '../components/notepad'
import StoryStarter from '../components/story-starter'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <article className={styles.homeContent}>
      <section className={styles.intro}>
        <div>
        <h1>Story-powered solutions for products, brands and businesses.</h1>
        </div>
        <div className={styles.heroText}>
          <div>S</div>
          <div>T</div>
          <div>O</div>
          <div>R</div>
          <div>Y</div>
          <div>T</div>
          <div>A</div>
          <div>L</div>
          <div>E</div>
        </div>
        <nav className={styles.homeNav}>
          <Link href="#">Case studies</Link>
          <Link href="#">View products</Link>
          <Link href="#">Our stories</Link>
          <Link href="#">About us both</Link>
          <Link href="#">Let's work together</Link>
        </nav>
      </section>
      
      <section className={styles.ourStories}>
        <h3>Our Stories</h3>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, type, byline }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <Date dateString={date}/> {type}
              <small className={utilStyles.lightText}>
                {byline}
              </small>
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.aboutUs}>
            <h2 className={styles.display}>Studio</h2>
            <p>Here goes a story-powered about us section for us and the studio. Here goes a story-powered about us section for us and the studio. Here goes a story-powered about us section for us and the studio. Here goes a story-powered about us section for us and the studio. Here goes a story-powered about us section for us and the studio. Here goes a story-powered about us section for us and the studio. </p>
            <img src="#" alt="image-1"/>
            <img src="#" alt="image-2"/>
            <img src="#" alt="image-3"/>
      </section>
      <section className={styles.contactUs}>
        <h2>Tell us your story</h2>
        <p>A story about business</p>
        <p>A tale about yourself</p>
        <p>A yarn about something fun</p>
      <p>Storytale</p>
<a href="javascript:location='mailto:\u0066\u0061\u0062\u006c\u0065\u0073\u0040\u0073\u0074\u006f\u0072\u0079\u0074\u0061\u006c\u0065\u002e\u0064\u0065\u0073\u0069\u0067\u006e';void 0">fables (at)</a>
  <div className={styles.sharkieBois}>
  {/* <a href="http://ijoek.com/">Isaac</a>
  <a href="https://joshtregenza.com">Josh</a>  */}
  {/* <a href="#leo">Leo</a> */}
  </div>
  <p><Year/> Storytale Studio</p>

  <Notepad/>
      </section>

      </article>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
