
import { Component, React, useRef } from 'react'
import styles from './layout.module.css'

export default function Notepad() {
  return (
    <div className={styles.notepad}>
      <form name="story" action="" method="POST" data-netlify="true" netlify-honeypot="bot-field">
      <input type="hidden" name="bot-field" />
      <p>
<input type="text" name="firstname" id="firstname" />
        <label htmlFor="yourname">
          Your Name:
        </label> <br />
        <input type="text" name="name" id="yourname" />
      </p>
      <p>
        <label htmlFor="youremail">
          Your Email:
        </label> <br />
        <input type="email" name="email" id="youremail" />
      </p>
      <p>
        <label htmlFor="yourmessage">
          Message:
        </label> <br />
        <textarea name="message" id="yourmessage"></textarea>
      </p>
      <p>
        <button className={styles.cta} type="submit">Tell your tale...</button>
      </p>
    </form>
    </div>
  )
}