import { Main } from 'next/document'
import React from 'react'
import styles from './chapters.module.css';
import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import Nav from '../nav.js';
import Footer from '../footer.js';
import { siteConfig } from '@/config/siteConfig';

const website = () => {
  return (
    <div>
      <Head><title>{siteConfig.productName} - Notes</title>
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
        
        <div className={styles.chapters}>
          <div className={styles.chapters_heading}>
            <h1>Chapters</h1>
          </div>
          <div className={styles.chapter_context}>
            <div className={styles.chapter_context_number}>
              <h1>#1</h1>
            </div>
            <div className={styles.chapter_context_name}>
              <h2>Database Management System</h2>
            </div>
            <div className={styles.chapter_context_button}>
              <Link href='computer/chapters/database-management-system'><button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                Notes
              </button></Link>
            </div>
          </div>
          <div className={styles.chapter_context}>
            <div className={styles.chapter_context_number}>
              <h1>#2</h1>
            </div>
            <div className={styles.chapter_context_name}>
              <h2>Data Communications & Networking</h2>
            </div>
            <div className={styles.chapter_context_button}>
              <Link href='computer/chapters/data-communications-networking'><button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                Notes
              </button></Link>
            </div>
          </div>
          <div className={styles.chapter_context}>
            <div className={styles.chapter_context_number}>
              <h1>#3</h1>
            </div>
            <div className={styles.chapter_context_name}>
              <h2>Web Technology</h2>
            </div>
            <div className={styles.chapter_context_button}>
              <Link href='computer/chapters/web-technology'><button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                Notes
              </button></Link>
            </div>
          </div>
          <div className={styles.chapter_context}>
            <div className={styles.chapter_context_number}>
              <h1>#4</h1>
            </div>
            <div className={styles.chapter_context_name}>
              <h2>Programming in C</h2>
            </div>
            <div className={styles.chapter_context_button}>
              <Link href='computer/chapters/programming-in-c'><button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                Notes
              </button></Link>
            </div>
          </div>
          <div className={styles.chapter_context}>
            <div className={styles.chapter_context_number}>
              <h1>#5</h1>
            </div>
            <div className={styles.chapter_context_name}>
              <h2>Object Oriented Programming</h2>
            </div>
            <div className={styles.chapter_context_button}>
              <Link href='computer/chapters/oop'><button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                Notes
              </button></Link>
            </div>
          </div>
          <div className={styles.chapter_context}>
            <div className={styles.chapter_context_number}>
              <h1>#6</h1>
            </div>
            <div className={styles.chapter_context_name}>
              <h2>Software Access Model</h2>
            </div>
            <div className={styles.chapter_context_button}>
              <Link href='computer/chapters/software-access-model'><button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                Notes
              </button></Link>
            </div>
          </div>
          <div className={styles.chapter_context}>
            <div className={styles.chapter_context_number}>
              <h1>#7</h1>
            </div>
            <div className={styles.chapter_context_name}>
              <h2>Recent Trends in Technology</h2>
            </div>
            <div className={styles.chapter_context_button}>
              <Link href='computer/chapters/recent-trends-in-technology'><button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                Notes
              </button></Link>
            </div>
          </div>
          </div>
        <br></br><br></br><br></br>
        <Footer/>
    </div>
  )
}

export default website
