import { Main } from 'next/document'
import React from 'react'
import styles from './chapters.module.css';
import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import Nav from '../nav.js'
import Footer from '../footer.js'
import { siteConfig } from '@/config/siteConfig';


const website = () => {
  return (
    <div>
      <Head><title>{siteConfig.productName} - Notes</title>
      </Head>

<Nav/><br></br><br></br><br></br>   
        <div className={styles.widgets}>
            <div className={styles.widget_account}>
                <Link href='/account'><h2>Account</h2></Link>
            </div>
            <div className={styles.widget_account}>
                <Link href='/nepali'><h2>Nepali</h2></Link>
            </div>
            <div className={styles.widget_account}>
                <Link href='/social'><h2>Social</h2></Link>
            </div>
            <div className={styles.widget_account}>
                <Link href='/economics'><h2>Economics</h2></Link>
            </div>
            <div className={styles.widget_account}>
                <Link href='/computer'><h2>Computer</h2></Link>
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
              <h2>Unit: Short Stories</h2>
            </div>
            <div className={styles.chapter_context_button}>
              <Link href=''><button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
              Summary
              </button></Link>
            </div>
          </div>
          <div className={styles.chapter_context}>
            <div className={styles.chapter_context_number}>
              <h1>#2</h1>
            </div>
            <div className={styles.chapter_context_name}>
              <h2>Unit: Poems</h2>
            </div>
            <div className={styles.chapter_context_button}>
              <Link href='/english/poems'><button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
              Summary
              </button></Link>
            </div>
          </div>
          <div className={styles.chapter_context}>
            <div className={styles.chapter_context_number}>
              <h1>#3</h1>
            </div>
            <div className={styles.chapter_context_name}>
              <h2>Unit: Essays</h2>
            </div>
            <div className={styles.chapter_context_button}>
              <Link href='/english/essays'><button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
              Summary
              </button></Link>
            </div>
          </div>
          <div className={styles.chapter_context}>
            <div className={styles.chapter_context_number}>
              <h1>#4</h1>
            </div>
            <div className={styles.chapter_context_name}>
              <h2>Unit: One-Act Plays</h2>
            </div>
            <div className={styles.chapter_context_button}>
              <Link href=''><button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                Summary
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