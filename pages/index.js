import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { useState, React, useRef } from 'react'
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
import CaseStudies from '../components/caseStudies'
import HeroicWheel from '../components/heroicWheel'
import Typewriter from '../components/typewriter'
import Campfire from '../components/campfire'
import FontSwitch from '../components/fontSwitchFirst'


export default function Home({ allPostsData }) {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 200]);
  const y2 = useTransform(scrollY, [0, 300], [0, -200]);

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false
  });

  const [scrollProgress, setScrollProgress] = useState(0),
  onScroll = ({ target: { scrollTop, scrollHeight } }) =>
    setScrollProgress(scrollTop / scrollHeight)

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
      <section id="aboutUs" name="aboutUs" className={styles.aboutUs}>
            <h2 className={styles.display}><Typewriter>with two storytellers</Typewriter></h2>
            <div className={styles.imageGroup}>
            
              <ParallaxImage src="/images/photo-1625230650972-f4e0fb2a075a.webp" alt="image-1" className={styles.secondaryImage} placeholder="blur" width="" height="" />

              <ParallaxImage src="/images/photo-1625297448527-6510d58bf530.webp" alt="image-2" className={styles.primaryImage}  placeholder="blur" width="" height="" />

              <ParallaxImage src="/images/PXL_20201017_065731831.jpg" alt="image-3" className={styles.tertiaryImage}  placeholder="blur" width="" height="" />
              <FadeInWhenVisible  className={styles.isaacWordMark}>
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
                </FadeInWhenVisible>
            <FadeInWhenVisible className={styles.joshWordMark}>
              <motion.h3  className={styles.full}>josh</motion.h3>
              <svg  viewBox="0 0 382 118" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 64.523C19.3333 64.523 38 64.523 54 64.523C74 64.523 83 105.5 100.5 105.5C118 105.5 130.5 35.523 156 35.523C182.019 35.523 185 81.0231 207 81.023C228.523 81.0228 235.5 12.0231 262 12.0229C288.542 12.0228 292.5 58.5229 313 58.5229C329.4 58.5229 357.833 58.5229 370 58.5229" style={{stroke: "#D82E17"}} strokeWidth="24" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <motion.h3  className={styles.layered}>
                <span>j</span>
                <span className={styles.second}>o</span>
                <span>s</span>
                <span>h</span>
                </motion.h3>
                </FadeInWhenVisible>
            </div>
            
      </section>
      <section className={styles.sagas}>
        <motion.h2><Typewriter>they speak of their </Typewriter><span className={styles.highlight}>sagas</span></motion.h2>
       
        <ul>
          <li> <FadeInWhenVisible><FontSwitch>Storytelling</FontSwitch></FadeInWhenVisible></li>
          <li> <FadeInWhenVisible><FontSwitch>Mobile &#38; Web Apps</FontSwitch></FadeInWhenVisible></li>
          <li> <FadeInWhenVisible><FontSwitch>Marketing Sites</FontSwitch></FadeInWhenVisible></li>
          <li> <FadeInWhenVisible><FontSwitch>Team Building</FontSwitch></FadeInWhenVisible></li>
          <li> <FadeInWhenVisible><FontSwitch>Design Consulting</FontSwitch></FadeInWhenVisible></li>
          <li><FadeInWhenVisible><FontSwitch>Korean BBQ</FontSwitch></FadeInWhenVisible></li>
        </ul>
        
      </section>
      <section className={styles.wheel}>
      <h2><Typewriter>you all travel with aid of the </Typewriter><span className={styles.highlight}>heroic wheel</span></h2>
      <HeroicWheel/>
      </section>
      <section className={styles.campfire}>
        <Campfire/>
      </section>
   
      <section id="ourStories" name="ourStories" className={styles.ourStories}>
      
          {allPostsData.map(({ id, date, title, type, byline,image }) => (
              <FadeInWhenVisible key={id}>
              <Link href={`/posts/${id}`} className={styles.link}>
              <div className={styles.listItem} type={type}>
                <div className={styles.content}>
                    <motion.p className={styles.byline}>
                    {byline}
                    </motion.p>
                    <div className={styles.lowerHalf}>
                        <motion.p className={styles.title}>{title}</motion.p>
                        <p className={styles.storyMeta}>
                          <i>{type}</i>
                        </p>
                    </div>
                 
                </div>
                <div className={styles.storyImage}>
                  <Image  
                  src={image} placeholder="blur" blurDataURL="data:..." layout="fill"/>
                </div>
              </div>
             </Link>
             </FadeInWhenVisible>
          ))}
      </section>
      
        

      <section id="ventures" name="ventures" className={styles.ventures}>
        <h2><Typewriter>and where they </Typewriter><span className={styles.highlight}>venture</span></h2>
      <FadeInWhenVisible><img src="https://picsum.photos/300/700"/></FadeInWhenVisible>
      <FadeInWhenVisible>
        <ul>
          <li><Link href="/seasonal">Seasonal</Link></li>
          <li><Link href="/fables">Fables</Link></li>
          <li><Link href="/crumple">Crumple</Link></li>
        </ul>
        </FadeInWhenVisible>
        <FadeInWhenVisible><img src="https://picsum.photos/300/700"/></FadeInWhenVisible>
      </section>

      
      <section id="contactUs" name="contactUs" className={styles.contact}>
      <FadeInWhenVisible>
      <Contact/>
      </FadeInWhenVisible>
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
