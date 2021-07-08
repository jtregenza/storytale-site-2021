import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import styles from '../components/layout.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Year from '../components/year'
import Notepad from '../components/notepad'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <article className={styles.homeContent}>
      <section className={styles.headingBlurb}>
        <h1>Story-powered solutions for products, brands and businesses</h1>
      </section>
      
      <section className={styles.Posts}>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.generator}>
        {/* Generator for story starters */}
      </section>
      <section className={styles.notepad}>
        {/* Notepad */}
        <Notepad/>
      </section>
      <section className={styles.contactUs}>
      <p>Brisbane, Australia</p>
<a href="javascript:location='mailto:\u0066\u0061\u0062\u006c\u0065\u0073\u0040\u0073\u0074\u006f\u0072\u0079\u0074\u0061\u006c\u0065\u002e\u0064\u0065\u0073\u0069\u0067\u006e';void 0">fables (at) storytale.design</a>
  <div className={styles.sharkieBois}>
  <a href="http://ijoek.com/">Isaac</a>
  <a href="https://joshtregenza.com">Josh</a> 
  {/* <a href="#leo">Leo</a> */}
  </div>
  <p><Year/> Storytale Studio</p>
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
