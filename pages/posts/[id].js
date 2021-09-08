import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import Image from 'next/image'
import styles from '../../components/layout.module.css'
import { useEffect, useState } from "react";
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
  AnimatePresence
} from "framer-motion";
import FadeInWhenVisible from '../../components/fadeInVisible'


export default function Post({ postData }) {
  const [isComplete, setIsComplete] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

  useEffect(() => yRange.onChange(v => setIsComplete(v >= 1)), [yRange]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5
      }
    }
  }

  return (
    <Layout type="case-study">
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className={utilStyles.articleContent} key={postData.key}>
        <header>
        <motion.h1 className={utilStyles.headingXl}>{postData.title}</motion.h1>
        <motion.h2 initial={false} className={utilStyles.headingXLSub}>
          {postData.byline}
        </motion.h2>

        </header>
        <Image className="img" layout="responsive" width="100" height="100%" src={postData.image}/>
        <motion.section 
        variants={container}
        initial="hidden"
        animate="show"
        className={styles.contentMain}
        >
        

        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </motion.section>
        <svg className={styles.progressIcon} viewBox="0 0 60 60">
        <motion.path
          fill="none"
          strokeWidth="5"
          stroke="var(--color-dark)"
          strokeDasharray="0 1"
          d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
          style={{
            pathLength,
            rotate: 90,
            translateX: 5,
            translateY: 5,
            scaleX: -1 // Reverse direction of line animation
          }}
        />
                <motion.path
          fill="none"
          strokeWidth="5"
          stroke="none"
          d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
          initial={false}
          strokeDasharray="0 100"
          animate={{ pathLength: isComplete ? 1 : 0 }}
        />
        </svg>
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
