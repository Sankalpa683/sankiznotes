import React from 'react'
import styles from './schedule.module.css'
import Head from 'next/head'
import Nav from './nav.js'
import Footer from './footer.js'

function schedule() {
  return (
    <div className={styles.body}>
      <Head>
        <title>SankNotes - Schedule</title>
      </Head>
      <Nav/>
      <br></br><br></br><br></br>
      <div className={styles.schedule}>
        Class 12 Exam Calander
        <div className={styles.calander}>
          
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default schedule