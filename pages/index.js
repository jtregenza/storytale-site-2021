import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../components/layout.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Image from 'next/image'
import Date from '../components/date'
import Year from '../components/year'
import Contact from '../components/contact'
import Arc from '../components/arc'
import { useViewportScroll, useTransform, motion } from 'framer-motion'
import FadeInWhenVisible from '../components/fadeInVisible'
import { useInView } from 'react-intersection-observer';
import { ParallaxImage } from '../components/parralaxImage'

export default function Home({ allPostsData }) {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 200]);
  const y2 = useTransform(scrollY, [0, 300], [0, -200]);

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false
  });

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <article className={styles.homeContent}>
      <section className={styles.intro}>
        <motion.h1 style={{ y: y2, x: 0}} className={styles.your}>your</motion.h1>
        <div className={styles.wordMark}>
          <motion.h1 style={{ y: y2, x: 0}} className={styles.full}>storytale</motion.h1>
          <motion.h1 style={{ y: y2, x: 0}}  className={styles.layered}>
          <span className={styles.first}>s</span>
          <span className={styles.second}>t</span>
          <span className={styles.third}>o</span>
          <span className={styles.fourth}>r</span>
          <span className={styles.fifth}>y</span>
          <span className={styles.sixth}>t</span>
          <span className={styles.seventh}>a</span>
          <span className={styles.eighth}>l</span>
          <span className={styles.ninth}>e</span>
          </motion.h1>
          <Arc/>
        </div>
        <motion.h1 style={{ y: y2, x: 0}}className={styles.begins}>begins</motion.h1>
      </section>
      <section id="aboutUs" className={styles.aboutUs}>
        <FadeInWhenVisible className={styles.heading}>
            <h2 className={styles.display}>with two storytellers</h2>
          </FadeInWhenVisible>
            <div className={styles.imageGroup}>
            
              <ParallaxImage src="/images/photo-1625230650972-f4e0fb2a075a.webp" alt="image-1" className={styles.secondaryImage} placeholder="blur" width="" height="" />

              <ParallaxImage src="/images/photo-1625297448527-6510d58bf530.webp" alt="image-2" className={styles.primaryImage}  placeholder="blur" width="" height="" />

              <ParallaxImage src="/images/photo-1625378163049-d1ca880237c7.webp" alt="image-3" className={styles.tertiaryImage}  placeholder="blur" width="" height="" />
              <div className={styles.isaacWordMark}>
              <motion.h3 className={styles.full}>isaac</motion.h3>
              <svg viewBox="0 0 382 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 57.5649C12 57.5649 44.5 57.5649 56 57.5649C67.5 57.5649 65.5939 12 84.5 12C107.5 12 91.5 79.0649 116.5 79.0649C141.5 79.0649 152 23.0649 175.5 23.0649C199 23.0649 212 79.0649 231.5 79.0649C251 79.0649 263.5 23.0649 288.5 23.0649C313.5 23.0649 315 56.5649 327 56.5649C339 56.5649 355 56.5649 370 56.5649" style={{stroke: "var(--color-dark)"}} strokeWidth="24" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <motion.h3  className={styles.layered}>
                <span>i</span>
                <span className={styles.second}>s</span>
                <span>a</span>
                <span className={styles.forth}>a</span>
                <span>c</span>
                </motion.h3>
            </div>
            <div className={styles.joshWordMark}>
              <motion.h3  className={styles.full}>josh</motion.h3>
              <svg  viewBox="0 0 382 118" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 64.523C19.3333 64.523 38 64.523 54 64.523C74 64.523 83 105.5 100.5 105.5C118 105.5 130.5 35.523 156 35.523C182.019 35.523 185 81.0231 207 81.023C228.523 81.0228 235.5 12.0231 262 12.0229C288.542 12.0228 292.5 58.5229 313 58.5229C329.4 58.5229 357.833 58.5229 370 58.5229" style={{stroke: "var(--color-dark)"}} strokeWidth="24" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <motion.h3  className={styles.layered}>
                <span>j</span>
                <span className={styles.second}>o</span>
                <span>s</span>
                <span>h</span>
                </motion.h3>
            </div>
            </div>
            
      </section>
      <section className={styles.sagas}>
        <motion.h2>they speak of their <span className={styles.highlight}>sagas</span> in</motion.h2>
        <ul>
          <li>Brand Storytelling</li>
          <li>Mobile &nbsp; Web Apps</li>
          <li>Marketing Sites</li>
          <li>Team Building</li>
          <li>Design Consulting</li>
          <li>Korean BBQ</li>
        </ul>
      </section>
      <section className={styles.wheel}>
      <h2>you all travel with aid of the <span className={styles.highlight}>heroic wheel</span></h2>
      {/* <HeroicWheel/> */}
      </section>
      <section className={styles.campfire}>
        <h2>
          ...at night<br/>
          <span>the storytellers</span><br/>
          would tell you<br/>
          of what <span>came before,</span>
        </h2>
      </section>

      <section id="ourStories" className={styles.ourStories}>
        <h3 className={styles.listItem}></h3>
          {allPostsData.map(({ id, date, title, type, byline,image }) => (

            <FadeInWhenVisible className={styles.listItem} key={id}>
              <div className={styles.content}>
              <Link href={`/posts/${id}`}>
                <a>
                  <motion.p className={styles.byline}>
                  {byline}
                  </motion.p>

              <div className={styles.lowerHalf}>
                <div>
              <motion.p className={styles.title}>{title}</motion.p>
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
             src={image} width="" height="" placeholder="blur" layout="responsive"/>
             </div>
            </FadeInWhenVisible>
            
          ))}
      </section>

      <section className={styles.ventures}>
        <h2>what they <span className={styles.highlight}>venture</span> towards</h2>
      <img src="#"/>
        <ul>
          <li><Link href="/seasonal">Seasonal</Link></li>
          <li><Link href="/fables">Fables</Link></li>
          <li><Link href="/crumple">Crumple</Link></li>
        </ul>
        <img src="#"/>
      </section>
      <section className={styles.blog}>
        <h2>and idle <span className={styles.highlight}>chit chat</span> from afar</h2>
        {/* <Blog/> */}
      </section>
      <section className={styles.contact}>
      <Contact/>
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
