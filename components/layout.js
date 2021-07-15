import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'storytale'
export const siteTitle = 'Story-powered solutions for products, brands and businesses'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
            rel="stylesheet"
            href="/fonts/Silka/Silka-Roman-Webfont/stylesheet.css"
            crossOrigin=""
          />
          <link
            rel="stylesheet"
            href="/fonts/Silka/Silka-Italic-Webfont/stylesheet.css"
            crossOrigin=""
          />
        <meta
          name="description"
          content="Story-powered solutions for products, brands and businesses"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            Storytale Studio
          </>
        ) : (
          <>
            <Link href="/">
              <a>
              Storytale Studio
              </a>
            </Link>
          </>
        )}
        <span className={styles.center}>
        Brisbane, Australia
        </span>
        <button>
          {/* Make this into a dropdown menu or something */}
        Menu
        </button>
      </header>
      <main className={styles.content}>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
