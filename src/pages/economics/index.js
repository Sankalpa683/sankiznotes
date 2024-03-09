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
              <Link href='economics/unit/basic-concept-of-economics-and-allocation-of-resources'>
                <button>Basics Concept Of Economics & Allocation of Resources</button>
              </Link>
            </div>
          </div>
          <div>
            <h2>Part B: Microeconomics</h2>
            <div className='flex flex-col flex-wrap'>
              <Link href='economics/unit/chapter-2/market-and-revenue'>
                <button>Market and Revenue</button>
              </Link >
              <Link href='economics/unit/chapter-2/cost-curves'>
                <button>Cost Curves</button>
              </Link >
              <Link href='economics/unit/chapter-2/theory-of-prices-and-output-determination'>
                <button>Theory of Prices and Output Determination</button>
              </Link>
              <Link href='economics/unit/chapter-2/pricing-of-factor-of-production'>
                <button>Price Determination of Factor of Production</button>
              </Link>
            </div>
          </div>
          <div>
            <h2>Part C: Macroeconomics</h2>
            <div className='flex flex-col flex-wrap'>
              <Link href='economics/unit/chapter-3/banking-and-monetory-policy'>
              <button>Banking and Monetary Policy</button>
              </Link>
              <Link href='economics/unit/chapter-3/government-finance'>
              <button>Government Finance</button>
              </Link>
              <Link href='economics/unit/chapter-3/international-trade'>
              <button>International Trade</button>
              </Link>
            </div>
          </div>
          <div>
            <h2>Part D: Development Economics</h2>
            <div className='flex flex-col flex-wrap'>
              <Link href='economics/unit/chapter-4/human-resources'>
              <button>Poverty, Inequality, Unemployment and Human Resource</button>
              </Link>
            </div>
          </div>
          <div>
            <h2>Part E: Nepalese Economics</h2>
            <div className='flex flex-col flex-wrap'>
              <Link href='economics/unit/chapter-5/foreign-employment'>
              <button>Nepalese Foreign Trade and Foreign Employment</button>
              </Link>
              <Link href='economics/unit/chapter-5/development-planning-in-nepal'>
              <button>Development Planning in Nepal</button>
              </Link>
              <Link href='economics/unit/chapter-5/sustainable-development-goals-and-nepal'>
              <button>Sustainable Development Goals and Nepal</button>
              </Link>
            </div>
          </div>
          <div>
            <h2>Part F: Quantitative Techniques in Economics</h2>
            <div className='flex flex-col flex-wrap'>
              <Link href='economics/unit/chapter-6/statistics'>
              <button>Introduction to Statistics</button>
              </Link>
              <Link href='economics/unit/chapter-6/data-collection'>
              <button>Data Collection</button>
              </Link>
              <Link href='economics/unit/chapter-6/measure-of-dispersion'>
              <button>Measure of Dispersion</button>
              </Link>
              <Link href='economics/unit/chapter-6/index-number'>
              <button>Index Number</button>
              </Link>
            </div>
          </div>
        </div><hr></hr>
        
        <br></br><br></br><br></br>
        <Footer/>
    </div>
  )
}

export default website
