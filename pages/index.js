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
        <div className={styles.blurb}>
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
          <Link href="#ourStories">Case studies</Link>
          <Link href="#ourStories">View products</Link>
          <Link href="#ourStories">Our stories</Link>
          <Link href="#aboutUs">About us both</Link>
          <Link href="#contactUs">Let's work together</Link>
        </nav>
      </section>
      
      <section id="ourStories" className={styles.ourStories}>
        <h3 className={styles.listItem}>Our <br/>Stories</h3>
          {allPostsData.map(({ id, date, title, type, byline,image }) => (
            <div className={styles.listItem} key={id}>
              <div className={styles.content}>
              <Link href={`/posts/${id}`}>
                <a>
                  <p className={styles.byline}>
                  {byline}
                  </p>

              <div className={styles.lowerHalf}>
                <div>
              <p className={styles.title}>{title}</p>
              <p className={styles.storyMeta}>
              <Date dateString={date}/> <i>{type}</i>
              </p>
              </div>
              <div className={styles.arrow}>
              <svg width="119" height="25" viewBox="0 0 119 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M97.8911 0.538397L117.999 11.8962L98.1089 23.6314L98.0189 14.0848L1.01891 14.9999L0.981175 11.0001L97.9811 10.085L97.8911 0.538397Z" fill="var(--color-light)"/>
          </svg>
              </div>
              </div>
              </a>

              </Link> 
            </div>
            <img src={image}/>
            </div>
          ))}
      </section>
      <section id="aboutUs" className={styles.aboutUs}>
            <h2 className={styles.display}>Studio</h2>
            <p>Here goes a story-powered about us section for us and the studio. Here goes a story-powered about us section for us and the studio. Here goes a story-powered about us section for us and the studio. Here goes a story-powered about us section for us and the studio. Here goes a story-powered about us section for us and the studio. Here goes a story-powered about us section for us and the studio. </p>
            <div className={styles.imageGroup}>
              <img src="/images/photo-1625230650972-f4e0fb2a075a.webp" alt="image-1"/>
              <img src="/images/photo-1625297448527-6510d58bf530.webp" alt="image-2"/>
              <img src="/images/photo-1625378163049-d1ca880237c7.webp" alt="image-3"/>
            </div>

      </section>
      <section id="contactUs" className={styles.contactUs}>
        <div className={styles.yourStory}>
          <header>
            <h2>Tell us <br/>your story</h2>
            <svg width="119" height="25" viewBox="0 0 119 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M97.8911 0.538397L117.999 11.8962L98.1089 23.6314L98.0189 14.0848L1.01891 14.9999L0.981175 11.0001L97.9811 10.085L97.8911 0.538397Z" fill="black"/>
            </svg>
          </header>
          <main>
            <p>A story about business</p>
            <p>A tale about yourself</p>
            <p>A yarn about something fun</p>
          </main>

      </div>
      <Notepad/>
      <footer>
            <p>Storytale</p>
            <a href="javascript:location='mailto:\u0066\u0061\u0062\u006c\u0065\u0073\u0040\u0073\u0074\u006f\u0072\u0079\u0074\u0061\u006c\u0065\u002e\u0064\u0065\u0073\u0069\u0067\u006e';void 0">fables (at)</a>
            <p><Year/> Storytale Studio</p>
          </footer>
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
