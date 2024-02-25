import { Main } from 'next/document'
import React from 'react'
import styles from './chapters.module.css';
import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import Nav from '../nav.js';
import Footer from '../footer.js';

const website = () => {
  return (
    <div>
      <Head><title>SankNote - Notes</title>
      </Head>

<Nav/><br></br><br></br><br></br>  
{/* <div className={styles.myClass}>
          <div className='nav-logo'>
              <h1>Sank<span>Notes</span> </h1>
          </div>
          <div className={styles.navlinks}>
            <a href='/'>Home</a>
              <a href='/sank'>Notes</a>
              <a href='#subject'>Subject</a>
              <a href=''>Schedule</a>
              <a href=''>About</a>

          </div>
          <a className="bg-blue-400 text-white font-bold py-1 px-2 rounded" href=''>Get started</a>
        </div> */}
        <div className={styles.widgets} >
            <div className={styles.widget_account}>
                <Link href='/account'><h2>Account</h2></Link>
            </div>
            <div className={styles.widget_account}>
                <Link href='/economics'><h2>Economics</h2></Link>
            </div>
            <div className={styles.widget_account}>
                <Link href='/social'><h2>Social</h2></Link>
            </div>
            <div className={styles.widget_account}>
                <Link href='/computer'><h2>Computer</h2></Link>
            </div>
            <div className={styles.widget_account}>
                <Link href='/english'><h2>English</h2></Link>
            </div>
        </div>
        
        <div className={styles.header}>
          <div className={styles.header_image}>
            {/* <Image
              src="/logo.png"
              alt="Picture of the author"
              width={150}
              height={100}
            /> */}
          </div>
          <div className={styles.header_text}>
            <h1>Welcome to SankNotes</h1>
          </div>
          <div className={styles.paragraph}>
          <p><b>Sank Notes</b> by Sankalpa Dahal is an initative which provides <b>Notes, Notices, Syllabus, Question Answer and other Study Materials</b>, <br/>Resources for <b>Class 12 NEB Students</b>,etc.</p>
          </div>
          <div className={styles.header_button}>
          <button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
            Latest Materials
          </button>
          </div>
          <div className={styles.styleicon} class='scroll-icon'>
.
          </div>
        </div>
        
        <br></br><br></br><br></br>
        <Footer/>
    </div>
  )
}

export default website