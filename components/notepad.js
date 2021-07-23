
import { Component, React, useRef } from 'react'
import styles from './layout.module.css'
import { motion } from 'framer-motion'
import TextareaAutosize from 'react-autosize-textarea';

export default function Notepad() {




  return (
    <div className={styles.notepad}>
      <form name="story" action="/success" method="POST" data-netlify="true" netlify-honeypot="bot-field">
      <input type="hidden" name="bot-field" />
      <p>
        <label htmlFor="yourname">
          Hey, my Name is 
        </label>
        <input type="text" name="name" id="yourname" placeholder="Your Name" pattern="\S+.*"/>
        <label htmlFor="yourmessage">
          and this is my tale
        </label><br/>
        <TextareaAutosize placeholder="Start your story..." name="message" rows="3"/>
        {/* <textarea className='autoExpand' data-min-rows='3'  width="100%" name="message"  draggable="false" id="yourmessage" placeholder="Start your story..."></textarea> */}
      </p>
     
      <p>
        <label htmlFor="youremail">
          If you want to talk more about my tale here 
        </label>
        <input type="email" name="email" id="youremail" placeholder="Your Email" pattern="\S+.*"/>.
      </p>
      <p>
        <motion.button className={styles.cta} type="submit" 
        transition={{ duration: 0.8 }}
        whileHover={{ opacity: 0.8 }}
    whileTap={{ scale: 0.9 }}>Tell your tale...</motion.button>
      </p>
    </form>
    </div>
  )
}

