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
        <div className={styles.widgets} >
            <div className={styles.widget_account}>
                <Link href='/account'><h2>Account</h2></Link>
            </div>
            <div className={styles.widget_account}>
                <Link href='/economics'><h2>Economics</h2></Link>
            </div>
            <div className={styles.widget_account}>
                <Link href='/nepali'><h2>Nepali</h2></Link>
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
            <h2>सामाजिक अध्ययन तथा जीवनोपयोगी शिक्षाको अर्थ</h2>
          </div>
          <div className={styles.chapter_context_button}>
            <Link href='social/chapter-1'><button className="bg-blue-400 text-white font-bold py-2 px-4 rounded">
              Notes
            </button></Link>
          </div>
        </div>
          <div className={styles.chapter_context}>
            <div className={styles.chapter_context_number}>
              <h1>#2</h1>
            </div>
            <div className={styles.chapter_context_name}>
              <h2>जीवनोपयोगी सिपका रूपमा डिजिटल सिपहरू तथा सामान्य अनुसन्धान सिपहरू</h2>
            </div>
            <div className={styles.chapter_context_button}>
              <Link href='social/chapter-2'><button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                Notes
              </button></Link>
            </div>
          </div>
          <div className={styles.chapter_context}>
            <div className={styles.chapter_context_number}>
              <h1>#3</h1>
            </div>
            <div className={styles.chapter_context_name}>
              <h2>जीवनोपयोगी सिप</h2>
            </div>
            <div className={styles.chapter_context_button}>
              <Link href='social/chapter-3'><button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                Notes
              </button></Link>
            </div>
          </div>
          <div className={styles.chapter_context}>
            <div className={styles.chapter_context_number}>
              <h1>#4</h1>
            </div>
            <div className={styles.chapter_context_name}>
              <h2>समाजको विकास र दर्शन</h2>
            </div>
            <div className={styles.chapter_context_button}>
              <Link href='social/chapter-4'><button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                Notes
              </button></Link>
            </div>
          </div>
          <div className={styles.chapter_context}>
            <div className={styles.chapter_context_number}>
              <h1>#5</h1>
            </div>
            <div className={styles.chapter_context_name}>
              <h2>भूगोल र सामाजिक जीवन</h2>
            </div>
            <div className={styles.chapter_context_button}>
              <Link href='social/chapter-5'><button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                Notes
              </button></Link>
            </div>
          </div>
          <div className={styles.chapter_context}>
            <div className={styles.chapter_context_number}>
              <h1>#6</h1>
            </div>
            <div className={styles.chapter_context_name}>
              <h2>नेपालको इतिहास</h2>
            </div>
            <div className={styles.chapter_context_button}>
              <Link href='social/chapter-6'><button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                Notes
              </button></Link>
            </div>
          </div>
          <div className={styles.chapter_context}>
            <div className={styles.chapter_context_number}>
              <h1>#7</h1>
            </div>
            <div className={styles.chapter_context_name}>
              <h2>सामजिक पहिचान र विविधता</h2>
            </div>
            <div className={styles.chapter_context_button}>
              <Link href='social/chapter-7'><button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                Notes
              </button></Link>
            </div>
          </div>
          <div className={styles.chapter_context}>
            <div className={styles.chapter_context_number}>
              <h1>#8</h1>
            </div>
            <div className={styles.chapter_context_name}>
              <h2>संविधान र नागरिक सचेतना</h2>
            </div>
            <div className={styles.chapter_context_button}>
              <Link href='social/chapter-8'><button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                Notes
              </button></Link>
            </div>
          </div>
          <div className={styles.chapter_context}>
            <div className={styles.chapter_context_number}>
              <h1>#9</h1>
            </div>
            <div className={styles.chapter_context_name}>
              <h2>सहरीकरण र बसाइ“सराइ</h2>
            </div>
            <div className={styles.chapter_context_button}>
              <Link href='social/chapter-9'><button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                Notes
              </button></Link>
            </div>
          </div>
          <div className={styles.chapter_context}>
            <div className={styles.chapter_context_number}>
              <h1>#10</h1>
            </div>
            <div className={styles.chapter_context_name}>
              <h2>अर्थतन्त्र र विकास</h2>
            </div>
            <div className={styles.chapter_context_button}>
              <Link href='social/chapter-10'><button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                Notes
              </button></Link>
            </div>
          </div>
          <div className={styles.chapter_context}>
            <div className={styles.chapter_context_number}>
              <h1>#11</h1>
            </div>
            <div className={styles.chapter_context_name}>
              <h2>शिक्षा र सामाजिक विकास</h2>
            </div>
            <div className={styles.chapter_context_button}>
              <Link href='social/chapter-11'><button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
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
