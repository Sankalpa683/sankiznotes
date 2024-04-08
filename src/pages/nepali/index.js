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
              <h2>आमाको सपना</h2>
            </div>
            <div className={styles.chapter_context_button}>
              <Link href='https://nebplus2notes.com/class-12/nepali/aama-ko-sapana' rel="noopener noreferrer" target="_blank"><button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                Notes
              </button></Link>
            </div>
          </div>
          <div className={styles.chapter_context}>
            <div className={styles.chapter_context_number}>
              <h1>#2</h1>
            </div>
            <div className={styles.chapter_context_name}>
              <h2>विरहिणी दमयन्ती</h2>
            </div>
            <div className={styles.chapter_context_button}>
              <Link href='https://nebplus2notes.com/class-12/nepali/birhidi-damyenti' rel="noopener noreferrer" target="_blank"><button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                Notes
              </button></Link>
            </div>
          </div>
          <div className={styles.chapter_context}>
            <div className={styles.chapter_context_number}>
              <h1>#3</h1>
            </div>
            <div className={styles.chapter_context_name}>
              <h2>घनघस्याको उकालो काट्ता</h2>
            </div>
            <div className={styles.chapter_context_button}>
              <Link href='https://nebplus2notes.com/class-12/ghanghasyako-ukalo-kattha/' rel="noopener noreferrer" target="_blank"><button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                Notes
              </button></Link>
            </div>
          </div>
          <div className={styles.chapter_context}>
            <div className={styles.chapter_context_number}>
              <h1>#4</h1>
            </div>
            <div className={styles.chapter_context_name}>
              <h2>व्यावसायिक पत्र</h2>
            </div>
            <div className={styles.chapter_context_button}>
              <Link href='https://nebplus2notes.com/class-12/nepali/bebasahik-chithi'><button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                Notes
              </button></Link>
            </div>
          </div>
          <div className={styles.chapter_context}>
            <div className={styles.chapter_context_number}>
              <h1>#5</h1>
            </div>
            <div className={styles.chapter_context_name}>
              <h2>एक चिहान</h2>
            </div>
            <div className={styles.chapter_context_button}>
              <Link href='https://nebplus2notes.com/class-12/nepali/yek-chihan' rel="noopener noreferrer" target="_blank"><button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                Notes
              </button></Link>
            </div>
          </div>
          <div className={styles.chapter_context}>
            <div className={styles.chapter_context_number}>
              <h1>#6</h1>
            </div>
            <div className={styles.chapter_context_name}>
              <h2>स्टिफन विलियम हकिङ</h2>
            </div>
            <div className={styles.chapter_context_button}>
              <Link href='https://nebplus2notes.com/class-12/nepali/stephen-william-hawking' rel="noopener noreferrer" target="_blank"><button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                Notes
              </button></Link>
            </div>
          </div>
          <div className={styles.chapter_context}>
            <div className={styles.chapter_context_number}>
              <h1>#7</h1>
            </div>
            <div className={styles.chapter_context_name}>
              <h2>हामीलाई बोलाउँछन् हिमचुली</h2>
            </div>
            <div className={styles.chapter_context_button}>
              <Link href='https://nebplus2notes.com/class-12/nepali/hamilai-bolauxan-himchuli' rel="noopener noreferrer" target="_blank"><button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                Notes
              </button></Link>
            </div>
          </div>
          <div className={styles.chapter_context}>
            <div className={styles.chapter_context_number}>
              <h1>#8</h1>
            </div>
            <div className={styles.chapter_context_name}>
              <h2>मातृत्व</h2>
            </div>
            <div className={styles.chapter_context_button}>
              <Link href='https://nebplus2notes.com/class-12/nepali/matrito' rel="noopener noreferrer" target="_blank"><button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                Notes
              </button></Link>
            </div>
          </div>
          <div className={styles.chapter_context}>
            <div className={styles.chapter_context_number}>
              <h1>#9</h1>
            </div>
            <div className={styles.chapter_context_name}>
              <h2>गोर्खे</h2>
            </div>
            <div className={styles.chapter_context_button}>
              <Link href='https://nebplus2notes.com/class-12/nepali/gorkhe' rel="noopener noreferrer" target="_blank"><button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                Notes
              </button></Link>
            </div>
          </div>
          <div className={styles.chapter_context}>
            <div className={styles.chapter_context_number}>
              <h1>#10</h1>
            </div>
            <div className={styles.chapter_context_name}>
              <h2>नेपाली पहिचान</h2>
            </div>
            <div className={styles.chapter_context_button}>
              <Link href='https://nebplus2notes.com/class-12/nepali/nepali-pahichan' rel="noopener noreferrer" target="_blank"><button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                Notes
              </button></Link>
            </div>
          </div>
          <div className={styles.chapter_context}>
            <div className={styles.chapter_context_number}>
              <h1>#11</h1>
            </div>
            <div className={styles.chapter_context_name}>
              <h2>सहकारी</h2>
            </div>
            <div className={styles.chapter_context_button}>
              <Link href='https://nebplus2notes.com/class-12/nepali/sahakari' rel="noopener noreferrer" target="_blank"><button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                Notes
              </button></Link>
            </div>
          </div>
          <div className={styles.chapter_context}>
            <div className={styles.chapter_context_number}>
              <h1>#12</h1>
            </div>
            <div className={styles.chapter_context_name}>
              <h2>जीवन मार्ग</h2>
            </div>
            <div className={styles.chapter_context_button}>
              <Link href='nepali/chapter-12' rel="noopener noreferrer" target="_blank"><button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
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
