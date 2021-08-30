
import { Component, React, useRef } from 'react'
import styles from './layout.module.css'
import { motion } from 'framer-motion'
import TextareaAutosize from 'react-autosize-textarea';
import { ParallaxImage } from './parralaxImage';

export default function Contact() {

  return (
    <>
      <form name="story" action="/success" method="POST" data-netlify="true" netlify-honeypot="bot-field">
      <input type="hidden" name="bot-field" />
      <p className={styles.reach}><span>You</span> reach<span>forward</span></p>
      <div className={styles.name}>
        <input type="text" name="name" id="yourname"  placeholder="Your Name" pattern="\S+.*"/>
        <input type="email" name="email" id="youremail" placeholder="Your Email" pattern="[^@\s]+@[^@\s]+" />
        </div>
        <ParallaxImage src="https://picsum.photos/600/400" alt="image-1" className={styles.imageOne} placeholder="blur" width="" height="" />
        <p className={styles.join}><span>to join</span>the storytellers</p>
        <ParallaxImage src="https://picsum.photos/500/600" alt="image-1" className={styles.imageTwo} placeholder="blur" width="" height="" />
        <TextareaAutosize placeholder="Your message" name="message" className={styles.message} rows={5} required/>
        <motion.button className={styles.cta} type="submit" 
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1 }}
        whileTap={{ scale: 0.9 }}>Your story begins here</motion.button>
    </form>
    </>
  )
}

