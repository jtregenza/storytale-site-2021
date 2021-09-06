
import { Component, React, useRef } from 'react'
import styles from './layout.module.css'
import { motion } from 'framer-motion'
import TextareaAutosize from 'react-autosize-textarea';
import { ParallaxImage } from './parralaxImage';
import ButtonMailto from './ButtonMailto';

export default function Contact() {

  return (
    <>
      <form name="story" action="/success" method="POST" data-netlify="true" netlify-honeypot="bot-field">
      <input type="hidden" name="bot-field" />
      <p className={styles.reach}><span>You</span> reach<span>forward</span></p>
      <div className={styles.name}>
        {/* <input type="text" name="name" id="yourname"  placeholder="Your Name" pattern="\S+.*"/>
        <input type="email" name="email" id="youremail" placeholder="Your Email" pattern="[^@\s]+@[^@\s]+" /> */}
        </div>
        <ParallaxImage src="/images/PXL_20210226_225250473.jpg" alt="image-1" className={styles.imageOne} placeholder="blur" width="600" height="400" />
        <p className={styles.join}><span>to join</span>the storytellers</p>
        <ParallaxImage src="https://picsum.photos/500/600" alt="image-1" className={styles.imageTwo} placeholder="blur" width="" height="" />
        {/* <TextareaAutosize placeholder="Your message" name="message" className={styles.message} rows={7} required/> */}
        <ButtonMailto label="Your story begins here" mailto="mailto:josh@storytale.design"/>
        {/* <motion.button className={styles.cta} type="submit" 
        transition={{ duration: 0.8 }}
        initial={{ background: 'var(--color-dark)',
        color: 'var(--color-light)' }}
        whileHover={{ background: 'var(--color-light)',
         color: 'var(--color-dark)' }}
        whileTap={{ scale: 0.9 }}>Your story begins here</motion.button> */}
    </form>
    </>
  )
}

