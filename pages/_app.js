import '../styles/global.css'

import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion"

export default function App({ Component, pageProps, router }) {

  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
}



  return (
    <AnimatePresence exitBeforeEnter>
       <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" exit="pageExit" variants={{
        pageInitial: {
          opacity: 0,
          x: -200,
          y: 0
        },
        pageAnimate: {
          opacity: 1,
          x: 0,
          y: 0
        },
        pageExit: {
          backgroundColor: 'var(--color-light)',
          opacity: 0,
          x: 0, 
          y: -100
        }
      }}>
      <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  )
}
