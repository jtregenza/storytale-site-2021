import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import styles from '../../components/layout.module.css'
import { motion, AnimatePresence } from 'framer-motion'


export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className={utilStyles.articleContent} key={postData.key}>
        <motion.img layoutId="image" initial={false} src={postData.image}/>
        <section className={styles.contentMain}>
        <motion.h1 initial={false} className={utilStyles.headingXl}>{postData.title}</motion.h1>
        <motion.h2 initial={false} layoutId="byline" initial="pageInitial" >
          {postData.byline}
        </motion.h2>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </section>
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
