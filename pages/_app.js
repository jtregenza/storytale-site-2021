import '../styles/global.css'

import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion"

export default function App({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter>
       <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" exit="pageExit" variants={{
        pageInitial: {
          opacity: 0
        },
        pageAnimate: {
          opacity: 1
        },
        pageExit: {
          backgroundColor: 'var(--color-light)',
          opacity: 0
        }
      }}>
      <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  )
}
