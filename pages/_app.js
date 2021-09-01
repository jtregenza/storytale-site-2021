import '../styles/global.css'
import { AnimatePresence, motion } from "framer-motion"

export default function App({ Component, pageProps, router }) {



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
