
import { Component, React, useRef } from 'react'
import styles from './layout.module.css'
import { motion } from 'framer-motion'
import TextareaAutosize from 'react-autosize-textarea';

export default function Notepad() {

  return (
    <div className={styles.notepad}>
      <form name="story" action="/success" method="POST" data-netlify="true" netlify-honeypot="bot-field">
      <input type="hidden" name="bot-field" />
      <p>You reach forward</p>
        <input type="text" name="name" id="yourname" placeholder="Your Name" pattern="\S+.*"/>
        <input type="email" name="email" id="youremail" placeholder="Your Email" pattern="[^@\s]+@[^@\s]+" />
        <img src="#"/>
        <p>to join the storytellers</p>
        <img src="#"/>
        <TextareaAutosize placeholder="Start your story..." name="message" rows="3" required/>
        <motion.button className={styles.cta} type="submit" 
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        >
          Your story begins here
          </motion.button>
    </form>
    </div>
  )
}

