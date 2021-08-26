import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../components/layout.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Image from 'next/image'
import Date from '../components/date'
import Year from '../components/year'
import Notepad from '../components/notepad'
import Arc from '../components/arc'
import { useViewportScroll, useTransform, motion } from 'framer-motion'
import FadeInWhenVisible from '../components/fadeInVisible'
import { useInView } from 'react-intersection-observer';

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
            
              <Image src="/images/photo-1625230650972-f4e0fb2a075a.webp" alt="image-1" placeholder="blur" width="" height="" />

              <Image src="/images/photo-1625297448527-6510d58bf530.webp" alt="image-2" placeholder="blur" width="" height="" />

              <Image src="/images/photo-1625378163049-d1ca880237c7.webp" alt="image-3" placeholder="blur" width="" height="" />

            </div>
            <div className={styles.wordMarkIsaac}>
              <motion.h3 style={{ y: y1, x: 0}} className={styles.full}>isaac</motion.h3>
              {/* <ArcIsaac/> */}
              <motion.h3 style={{ y: y1, x: 0}} className={styles.layered}>
                <span>i</span>
                <span>s</span>
                <span>a</span>
                <span>a</span>
                <span>c</span>
                </motion.h3>
            </div>
            <div className={styles.wordMarkJosh}>
              <motion.h3 style={{ y: y1, x: 0}} className={styles.full}>josh</motion.h3>
              {/* <ArcJosh/> */}
              <motion.h3 style={{ y: y1, x: 0}} className={styles.layered}>
                <span>j</span>
                <span>o</span>
                <span>s</span>
                <span>h</span>
                </motion.h3>
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
          of what <span>came before</span>
        </h2>
      </section>

      <section id="ourStories" className={styles.ourStories}>
        <h3 className={styles.listItem}>Our <br/>Stories</h3>
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
      <img src="#"/>
        <ul>
          <li>Seasonal</li>
          <li>Fables</li>
          <li>Crumple</li>
        </ul>
        <img src="#"/>
      </section>
      <section>
        <h2>on the road they speak of <span className={styles.highlight}>news</span> from afar</h2>
        {/* <Blog/> */}
      </section>
      <section className={styles.contact}>
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
