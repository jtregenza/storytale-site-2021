import '../styles/global.css'
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion"

export default function App({ Component, pageProps, router }) {



  return (
    <AnimatePresence exitBeforeEnter>
       <motion.div key={router.route} >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  )
}
