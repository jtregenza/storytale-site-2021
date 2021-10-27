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
import Collage1 from '../public/images/collage-1.png'
import Collage2 from '../public/images/collage-2.png'
import Collage3 from '../public/images/collage-3-two.png'


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
          <span>s</span>
          <span className={styles.hidden}>t</span>
          <span>o</span>
          <span className={styles.hidden}>r</span>
          <span>y</span>
          <span>t</span>
          <span className={styles.hidden}>a</span>
          <span>l</span>
          <span>e</span>
          </motion.h1>
          <Arc/>
        </div>
        <motion.h1 style={{ y: y2, x: 0}}className={styles.begins}>begins</motion.h1>
      </section>
      <section id="aboutUs" name="aboutUs" className={styles.aboutUs}>
            <h2 className={styles.display}><Typewriter>with two storytellers</Typewriter></h2>
            <div className={styles.imageGroup}>
            
              <ParallaxImage src={Collage1} alt="image-1" className={styles.secondaryImage} placeholder="blur" width="" height="" />

              <ParallaxImage src={Collage2} alt="image-2" className={styles.primaryImage}  placeholder="blur" width="" height="" />

              <ParallaxImage src={Collage3} alt="image-3" className={styles.tertiaryImage}  placeholder="blur" width="" height="" />
              <FadeInWhenVisible  className={styles.isaacWordMark}>
              <motion.h3 className={styles.full}>isaac</motion.h3>
              <svg viewBox="0 0 614 223" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#dark)">
              <path d="M-33 115.415C-33 115.415 20.6522 115.415 39.6369 115.415C58.6215 115.415 55.4749 40 86.6858 40C124.655 40 98.2416 151 139.513 151C180.784 151 198.117 58.3137 236.912 58.3137C275.707 58.3137 297.168 151 329.359 151C361.55 151 382.186 58.3137 423.457 58.3137C464.728 58.3137 467.204 113.76 487.014 113.76C506.824 113.76 533.237 113.76 558 113.76" stroke="var(--color-light)" strokeWidth="64" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
              <filter id="dark" x="-89" y="0" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="16"/>
              <feGaussianBlur stdDeviation="12"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="16"/>
              <feGaussianBlur stdDeviation="12"/>
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
              <feBlend mode="normal" in2="shape" result="effect2_innerShadow"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dx="-16"/>
              <feGaussianBlur stdDeviation="12"/>
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
              <feBlend mode="normal" in2="effect2_innerShadow" result="effect3_innerShadow"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dx="4"/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.929167 0 0 0 0 0.929167 0 0 0 0 0.929167 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="effect3_innerShadow" result="effect4_innerShadow"/>
              </filter>
              <filter id="light" x="-97.5" y="0.5"  filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="16"/>
              <feGaussianBlur stdDeviation="12"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="16"/>
              <feGaussianBlur stdDeviation="12"/>
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
              <feBlend mode="normal" in2="shape" result="effect2_innerShadow"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dx="-16"/>
              <feGaussianBlur stdDeviation="12"/>
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
              <feBlend mode="normal" in2="effect2_innerShadow" result="effect3_innerShadow"/>
              </filter>
              </defs>
              </svg>
              <motion.h3  className={styles.layered}>
                <span>i</span>
                <span className={styles.hidden}>s</span>
                <span>a</span>
                <span className={styles.hidden}>a</span>
                <span>c</span>
                </motion.h3>
                </FadeInWhenVisible>
            <FadeInWhenVisible className={styles.joshWordMark}>
              <motion.h3  className={styles.full}>josh</motion.h3>
              <svg viewBox="0 0 690 278" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#dark)">
              <path d="M56 133.231C68.987 133.231 102.045 133.231 130.38 133.231C165.799 133.231 181.737 206 212.729 206C243.721 206 265.858 81.7322 311.017 81.7322C357.095 81.7322 362.374 162.533 401.335 162.533C439.452 162.532 451.807 40.0003 498.737 40C545.743 39.9997 552.751 122.576 589.056 122.576C618.099 122.576 668.453 122.576 690 122.576" stroke="var(--color-light)" strokeWidth="64" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
              <filter id="dark" x="0" y="0"  filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="16"/>
              <feGaussianBlur stdDeviation="12"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="16"/>
              <feGaussianBlur stdDeviation="12"/>
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
              <feBlend mode="normal" in2="shape" result="effect2_innerShadow"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dx="-16"/>
              <feGaussianBlur stdDeviation="12"/>
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
              <feBlend mode="normal" in2="effect2_innerShadow" result="effect3_innerShadow"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dx="4"/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.929167 0 0 0 0 0.929167 0 0 0 0 0.929167 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="effect3_innerShadow" result="effect4_innerShadow"/>
              </filter>
              <filter id="light" x="0.5" y="0.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="16"/>
              <feGaussianBlur stdDeviation="12"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="16"/>
              <feGaussianBlur stdDeviation="12"/>
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
              <feBlend mode="normal" in2="shape" result="effect2_innerShadow"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dx="-16"/>
              <feGaussianBlur stdDeviation="12"/>
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
              <feBlend mode="normal" in2="effect2_innerShadow" result="effect3_innerShadow"/>
              </filter>
              </defs>
              </svg>
              <motion.h3  className={styles.layered}>
                <span>j</span>
                <span className={styles.hidden}>o</span>
                <span>s</span>
                <span className={styles.hidden}>h</span>
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
      
          {allPostsData.map(({ id, title, type, byline,image }) => (
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
      <FadeInWhenVisible><img width="300" height="700" src="https://picsum.photos/300/700"/></FadeInWhenVisible>
      <FadeInWhenVisible>
        <ul>
          <li><Link href="/seasonal">Seasonal</Link></li>
          <li><Link href="/fables">Fables</Link></li>
          {/* <li><Link href="/crumple">Crumple</Link></li> */}
        </ul>
        </FadeInWhenVisible>
        <FadeInWhenVisible><img width="300" height="700" src="https://picsum.photos/300/700"/></FadeInWhenVisible>
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
