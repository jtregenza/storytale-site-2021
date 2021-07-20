
import { Component, React, useRef } from 'react'
import styles from './layout.module.css'
import { motion } from 'framer-motion'

export default function Notepad() {
  return (
    <div className={styles.notepad}>
      <form name="story" action="/success" method="POST" data-netlify="true" netlify-honeypot="bot-field">
      <input type="hidden" name="bot-field" />
      <p>
        <label htmlFor="yourmessage">
          Start your story:
        </label> <br />
        <textarea name="message" id="yourmessage" placeholder="Start your story..."></textarea>
      </p>
      <p>
        <label htmlFor="yourname">
          Your Name:
        </label> <br />
        <input type="text" name="name" id="yourname" placeholder="name"/>
      </p>
      <p>
        <label htmlFor="youremail">
          Your Email:
        </label> <br />
        <input type="email" name="email" id="youremail" placeholder="email"/>
      </p>
      <p>
        <motion.button className={styles.cta} type="submit" 
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}>Tell your tale...</motion.button>
      </p>
    </form>
    </div>
  )
}