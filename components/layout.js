import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import Link from 'next/link'
import { useRef, useState } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./useDimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import { useDarkMode } from './darkMode';
import Toggle from './Toggle';
import { Footer } from './footer';

const name = 'storytale'
export const siteTitle = 'Story-powered solutions for products, brands and businesses'

const sidebar = {
  open: (height = 1000) => ({
    height: '100vh',
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
     transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    height: 'unset',
    clipPath: "circle(0px at 300px 1px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

export default function Layout({ children, home }) {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  const themeMode = theme === 'dark' ? 'dark' : 'light';


  return (
    <div className={styles.container} theme={themeMode}>
      <Head>
        <link rel="icon" href="/images/storytale_logomark.svg" />
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
          content={`Change this`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
<>
      {!home && (
                <header className={styles.header}>
        <div className={styles.borderHeader}>
            <Link href="/">
              <a>
              Storytale Studio
              </a>
            </Link>
            <span className={styles.center}>
        
        </span>
        <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className={styles.headerNav}
    >      
    <MenuToggle toggle={() => toggleOpen()}>{isOpen ? "Close" : "Menu"}</MenuToggle>
      <motion.div className={styles.background} variants={sidebar}><Navigation />
      
      <Toggle theme={theme} toggleTheme={toggleTheme} />
      </motion.div>
      
      </motion.nav>
      </div>
      </header>
        )}
</>
      <main className={styles.content}>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <Footer/>
    </div>
    
  )
}
