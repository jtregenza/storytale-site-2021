import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import styles from '../components/layout.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Image from 'next/image'
import Date from '../components/date'
import Year from '../components/year'
import Notepad from '../components/notepad'
import StoryStarter from '../components/story-starter'
import { AnimatePresence, motion } from 'framer-motion'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <article className={styles.homeContent}>
      <section className={styles.intro}>
        <div className={styles.blurb}>
        <motion.h1
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, }}
        transition={{staggerChildren: 0.5,}}
        >Story-powered solutions for products, brands and businesses.</motion.h1>
        </div>
        <motion.div initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1, }}
  transition={{staggerChildren: 0.5, delay: 0.4}}

        className={styles.heroText}>
          <div>S</div>
          <div>T</div>
          <motion.div     

          drag
    
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}
          dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}

    className={styles.heroImage}></motion.div>
          <div>R</div>
          <div>Y</div>
          <div>T</div>
          <div>A</div>
          <div>L</div>
          <div>E</div>
        </motion.div>
        <nav className={styles.homeNav}>
          <Link href="#ourStories"><motion.a
          whileHover={{ scale: 1.1}}
          whileTap={{ scale: 0.95}}>Case studies</motion.a></Link>
          <Link href="#ourStories"><motion.a
          whileHover={{ scale: 1.1}}
          whileTap={{ scale: 0.95}}>View products</motion.a></Link>
          <Link href="#ourStories"><motion.a
          whileHover={{ scale: 1.1}}
          whileTap={{ scale: 0.95}}>Our stories</motion.a></Link>
          <Link href="#aboutUs"><motion.a
          whileHover={{ scale: 1.1}}
          whileTap={{ scale: 0.95}}>About us both</motion.a></Link>
          <Link href="#contactUs"><motion.a
          whileHover={{ scale: 1.1}}
          whileTap={{ scale: 0.95}}>Let's work together</motion.a></Link>
        </nav>
      </section>
      
      <section id="ourStories" className={styles.ourStories}>
        <h3 className={styles.listItem}>Our <br/>Stories</h3>
          {allPostsData.map(({ id, date, title, type, byline,image }) => (
            <motion.div initial={{scale:1}} exit={{scale:100}} className={styles.listItem} key={id}>
              <div className={styles.content}>
              <Link href={`/posts/${id}`}>
                <a>
                  <motion.p className={styles.byline}>
                  {byline}
                  </motion.p>

              <div className={styles.lowerHalf}>
                <div>
              <motion.p layoutId="title" className={styles.title}>{title}</motion.p>
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
            <div className={styles.storyImage}>
            <Image  
             src={image} width="" height="" placeholder="blur" layoutId="image" layout="responsive"/>
             </div>
            </motion.div>
            
          ))}
      </section>
      <section id="aboutUs" className={styles.aboutUs}>
            <h2 className={styles.display}>Studio</h2>
            <p>Here goes a story-powered about us section for us and the studio. Here goes a story-powered about us section for us and the studio. Here goes a story-powered about us section for us and the studio. Here goes a story-powered about us section for us and the studio. Here goes a story-powered about us section for us and the studio. Here goes a story-powered about us section for us and the studio. </p>
            <div className={styles.imageGroup}>
              <Image src="/images/photo-1625230650972-f4e0fb2a075a.webp" alt="image-1" placeholder="blur" width="" height="" />
              <Image src="/images/photo-1625297448527-6510d58bf530.webp" alt="image-2" placeholder="blur" width="" height="" />
              <Image src="/images/photo-1625378163049-d1ca880237c7.webp" alt="image-3" placeholder="blur" width="" height="" />
            </div>

      </section>
      <section id="contactUs" className={styles.contactUs}>
        <div className={styles.yourStory}>
          <header>
            <h2>Tell us <br/>your story</h2>
            <svg width="119" height="25" viewBox="0 0 119 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M97.8911 0.538397L117.999 11.8962L98.1089 23.6314L98.0189 14.0848L1.01891 14.9999L0.981175 11.0001L97.9811 10.085L97.8911 0.538397Z" fill="var(--color-dark)"/>
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
