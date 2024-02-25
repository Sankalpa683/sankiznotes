import { Main } from 'next/document'
import React from 'react'
import styles from './chapters.module.css';
import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import Nav from '../nav.js'
import Footer from '../footer.js'


const website = () => {
  return (
    <div>
      <Head><title>SankNote - Notes</title>
      </Head>

 <Nav/><br></br><br></br><br></br>    
        <div className={styles.widgets} >
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
                <Link href='/computer'><h2>Computer</h2></Link>
            </div>
            <div className={styles.widget_account}>
                <Link href='/english'><h2>English</h2></Link>
            </div>
        </div>
        
        {/* <div className={styles.chapters}>
          <div className={styles.chapters_heading}>
            <h1>Chapters</h1>
          </div>
          <div className={styles.chapter_context}>
            <div className={styles.chapter_context_number}>
              <h1>#1</h1>
            </div>
            <div className={styles.chapter_context_name}>
              <h2>Basics Concept Of Economics</h2>
            </div>
            <div className={styles.chapter_context_button}>
              <button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                Notes
              </button>
            </div>
          </div>
          <div className={styles.chapter_context}>
            <div className={styles.chapter_context_number}>
              <h1>#2</h1>
            </div>
            <div className={styles.chapter_context_name}>
              <h2>Microeconomics</h2>
            </div>
            <div className={styles.chapter_context_button}>
              <button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                Notes
              </button>
            </div>
          </div>
          <div className={styles.chapter_context}>
            <div className={styles.chapter_context_number}>
              <h1>#3</h1>
            </div>
            <div className={styles.chapter_context_name}>
              <h2>Macroeconomics</h2>
            </div>
            <div className={styles.chapter_context_button}>
              <button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                Notes
              </button>
            </div>
          </div>
          <div className={styles.chapter_context}>
            <div className={styles.chapter_context_number}>
              <h1>#4</h1>
            </div>
            <div className={styles.chapter_context_name}>
              <h2>Development Economics</h2>
            </div>
            <div className={styles.chapter_context_button}>
              <button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                Notes
              </button>
            </div>
          </div>
          <div className={styles.chapter_context}>
            <div className={styles.chapter_context_number}>
              <h1>#5</h1>
            </div>
            <div className={styles.chapter_context_name}>
              <h2>Nepalese Economy</h2>
            </div>
            <div className={styles.chapter_context_button}>
              <button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                Notes
              </button>
            </div>
          </div>
          <div className={styles.chapter_context}>
            <div className={styles.chapter_context_number}>
              <h1>#6</h1>
            </div>
            <div className={styles.chapter_context_name}>
              <h2>Quantitative Techniques for Technology</h2>
            </div>
            <div className={styles.chapter_context_button}>
              <button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                Notes
              </button>
            </div>
          </div>
        </div> */}
        <div className={styles.chapters}>
          <div>
            <h2>Part A: Basics Concept Of Economics</h2>
            <div className='flex flex-col flex-wrap'>
              <button>Basics Concept Of Economics & Allocation of Resources</button>
            </div>
          </div>
          <div>
            <h2>Part B: Microeconomics</h2>
            <div className='flex flex-col flex-wrap'>
              <button>Market and Revenue</button>
              <button>Cost Curves</button>
              <button>Theory of Prices and Output Determination</button>
              <button>Price Determination of Factor of Production</button>
            </div>
          </div>
          <div>
            <h2>Part C: Macroeconomics</h2>
            <div className='flex flex-col flex-wrap'>
              <button>Banking and Monetary Policy</button>
              <button>Government Finance</button>
              <button>International Trade</button>
            </div>
          </div>
          <div>
            <h2>Part D: Development Economics</h2>
            <div className='flex flex-col flex-wrap'>
              <button>Poverty, Inequality, Unemployment and Human Resource</button>
            </div>
          </div>
          <div>
            <h2>Part E: Nepalese Economics</h2>
            <div className='flex flex-col flex-wrap'>
              <button>Nepalese Foreign Trade and Foreign Employment</button>
              <button>Development Planning in Nepal</button>
              <button>Sustainable Development Goals and Nepal</button>
            </div>
          </div>
          <div>
            <h2>Part F: Quantitative Techniques in Economics</h2>
            <div className='flex flex-col flex-wrap'>
              <button>Introduction to Statistics</button>
              <button>Data Collection</button>
              <button>Measure of Dispersion</button>
              <button>Index Number</button>
            </div>
          </div>
        </div><hr></hr>
        
        <br></br><br></br><br></br>
        <Footer/>
    </div>
  )
}

export default website