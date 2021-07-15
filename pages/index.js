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
          <div className={styles.heroImage}></div>
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
          {allPostsData.map(({ id, date, title, type, byline }) => (
            <div className={styles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>
                  <div>
                  {title}
                <small>
                {byline}
              </small>
              </div>
              <div>
              <Date dateString={date}/> {type}
              <div className={styles.arrow}></div>
              </div>
              </a>

              </Link>
              
              
              
            </div>
          ))}
      </section>
      <section className={styles.aboutUs}>
            <h2 className={styles.display}>Studio</h2>
            <p>Here goes a story-powered about us section for us and the studio. Here goes a story-powered about us section for us and the studio. Here goes a story-powered about us section for us and the studio. Here goes a story-powered about us section for us and the studio. Here goes a story-powered about us section for us and the studio. Here goes a story-powered about us section for us and the studio. </p>
            <div className={styles.imageGroup}>
              <img src="/images/photo-1625230650972-f4e0fb2a075a.webp" alt="image-1"/>
              <img src="/images/photo-1625297448527-6510d58bf530.webp" alt="image-2"/>
              <img src="/images/photo-1625378163049-d1ca880237c7.webp" alt="image-3"/>
            </div>

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
