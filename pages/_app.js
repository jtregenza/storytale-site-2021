import '../styles/global.css'
import { AnimatePresence, motion } from "framer-motion"
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import * as ga from '../lib/ga'


export default function App({ Component, pageProps, router }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])


  return (
    <AnimatePresence>
       <motion.div key={router.route} 
       initial="pageInitial" 
       animate="pageAnimate" 
       exit="pageExit" variants={{
        pageInitial: {
          opacity: 0
        },
        pageAnimate: {
          opacity: 1,
          scale: 1
        },
        pageExit: {
          opacity: 0,
          y: "-100vh",
          transition: {
            ease: "easeInOut"
          }
        }
      }}>
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  )
}
