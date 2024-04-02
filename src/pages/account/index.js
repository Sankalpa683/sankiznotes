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
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/>
      </Head>

<Nav/><br></br><br></br><br></br>    
        <div className={styles.widgets} >
            <div className={styles.widget_account}>
                <Link href='/computer'><h2>Computer</h2></Link>
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
              <h2>Company Formation</h2>
            </div>
            <div className={styles.chapter_context_button}>
              <Link href='/account/chapters/company-formation'>
              <div class="flex flex-wrap mx-4">
                <button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                  Notes
                </button>
                <button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                  <i className="fas fa-video"></i>
                </button>
              </div>
              
              </Link>
            </div>
          </div>
          <div className={styles.chapter_context}>
            <div className={styles.chapter_context_number}>
              <h1>#2</h1>
            </div>
            <div className={styles.chapter_context_name}>
              <h2>Issue of Cash for Share</h2>
            </div>
            <div className={styles.chapter_context_button}>
              <Link href='/account/chapters/issue-of-share-for-cash'>
              <div class="flex flex-wrap mx-4">
                <button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                  Notes
                </button>
                <button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                  <i className="fas fa-video"></i>
                </button>
              </div>
            </Link>
              
            </div>
          </div>
          <div className={styles.chapter_context}>
            <div className={styles.chapter_context_number}>
              <h1>#3</h1>
            </div>
            <div className={styles.chapter_context_name}>
              <h2>Forfeiture and Re-Issue of Shares</h2>
            </div>
            <div className={styles.chapter_context_button}>
              <Link href='/account/chapters/forfeiture-and-re-issue-of-shares'>
              <div class="flex flex-wrap mx-4">
                <button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                  Notes
                </button>
                <button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                  <i className="fas fa-video"></i>
                </button>
              </div>
              </Link>
              
            </div>
          </div>
          <div className={styles.chapter_context}>
            <div className={styles.chapter_context_number}>
              <h1>#4</h1>
            </div>
            <div className={styles.chapter_context_name}>
            
              <h2>Issue of Shares for Other Than Cash</h2>
            </div>
            <div className={styles.chapter_context_button}>
              <Link href='/account/chapters/issue-of-share-for-other-than-cash'>
              <div class="flex flex-wrap mx-4">
                <button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                  Notes
                </button>
                <button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                  <i className="fas fa-video"></i>
                </button>
              </div>
  
              </Link>
            </div>
          </div>
          <div className={styles.chapter_context}>
            <div className={styles.chapter_context_number}>
              <h1>#5</h1>
            </div>
            <div className={styles.chapter_context_name}>
              <h2>Accounting for Debentures</h2>
            </div>
            <div className={styles.chapter_context_button}>
              <button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                <i className="fas fa-video"></i>
              </button>
            </div>
          </div>
          <div className={styles.chapter_context}>
            <div className={styles.chapter_context_number}>
              <h1>#6</h1>
            </div>
            <div className={styles.chapter_context_name}>
              <h2>Final Account of Company</h2>
            </div>
            <div className={styles.chapter_context_button}>
              <button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                <i className="fas fa-video"></i>
              </button>
            </div>
          </div>
          <div className={styles.chapter_context}>
            <div className={styles.chapter_context_number}>
              <h1>#7</h1>
            </div>
            <div className={styles.chapter_context_name}>
              <h2>Financial Statement</h2>
            </div>
            <div className={styles.chapter_context_button}>
              <button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                <i className="fas fa-video"></i>
              </button>
            </div>
          </div>
          <div className={styles.chapter_context}>
            <div className={styles.chapter_context_number}>
              <h1>#8</h1>
            </div>
            <div className={styles.chapter_context_name}>
              <h2>The Worksheet</h2>
            </div>
            <div className={styles.chapter_context_button}>
              <button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                <i className="fas fa-video"></i>
              </button>
            </div>
          </div>
          <div className={styles.chapter_context}>
            <div className={styles.chapter_context_number}>
              <h1>#9</h1>
            </div>
            <div className={styles.chapter_context_name}>
              <h2>Cashflow Statement</h2>
            </div>
            <div className={styles.chapter_context_button}>
              <button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                <i className="fas fa-video"></i>
              </button>
            </div>
          </div>
          <div className={styles.chapter_context}>
            <div className={styles.chapter_context_number}>
              <h1>#10</h1>
            </div>
            <div className={styles.chapter_context_name}>
              <h2>Cost Accounting</h2>
            </div>
            <div className={styles.chapter_context_button}>
              <button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                <i className="fas fa-video"></i>
              </button>
            </div>
          </div>
          <div className={styles.chapter_context}>
            <div className={styles.chapter_context_number}>
              <h1>#11</h1>
            </div>
            <div className={styles.chapter_context_name}>
              <h2>Accounting for Materials & Control</h2>
            </div>
            <div className={styles.chapter_context_button}>
              <button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                <i className="fas fa-video"></i>
              </button>
            </div>
          </div>
          <div className={styles.chapter_context}>
            <div className={styles.chapter_context_number}>
              <h1>#12</h1>
            </div>
            <div className={styles.chapter_context_name}>
              <h2>Inventory Management</h2>
            </div>
            <div className={styles.chapter_context_button}>
              <button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                <i className="fas fa-video"></i>
              </button>
            </div>
          </div>
          <div className={styles.chapter_context}>
            <div className={styles.chapter_context_number}>
              <h1>#13</h1>
            </div>
            <div className={styles.chapter_context_name}>
              <h2>Accounting for Labour</h2>
            </div>
            <div className={styles.chapter_context_button}>
              <button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                <i className="fas fa-video"></i>
              </button>
            </div>
          </div>
          <div className={styles.chapter_context}>
            <div className={styles.chapter_context_number}>
              <h1>#14</h1>
            </div>
            <div className={styles.chapter_context_name}>
              <h2>Accounting for Overheads</h2>
            </div>
            <div className={styles.chapter_context_button}>
              <button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                <i className="fas fa-video"></i>
              </button>
            </div>
          </div>
          <div className={styles.chapter_context}>
            <div className={styles.chapter_context_number}>
              <h1>#15</h1>
            </div>
            <div className={styles.chapter_context_name}>
              <h2>Unit or Output Costing</h2>
            </div>
            <div className={styles.chapter_context_button}>
              <button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                <i className="fas fa-video"></i>
              </button>
            </div>
          </div>
          <div className={styles.chapter_context}>
            <div className={styles.chapter_context_number}>
              <h1>#16</h1>
            </div>
            <div className={styles.chapter_context_name}>
              <h2>Cost Reconciliation Statement</h2>
            </div>
            <div className={styles.chapter_context_button}>
              <button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                <i className="fas fa-video"></i>
              </button>
            </div>
          </div>
          <div className={styles.chapter_context}>
            <div className={styles.chapter_context_number}>
              <h1>#17</h1>
            </div>
            <div className={styles.chapter_context_name}>
              <h2>Computer System in Accounting</h2>
            </div>
            <div className={styles.chapter_context_button}>
              <button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                <i className="fas fa-video"></i>
              </button>
            </div>
          </div>
          <div className={styles.chapter_context}>
            <div className={styles.chapter_context_number}>
              <h1>#18</h1>
            </div>
            <div className={styles.chapter_context_name}>
              <h2>Accounting Record in Excel</h2>
            </div>
            <div className={styles.chapter_context_button}>
              <button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                <i className="fas fa-video"></i>
              </button>
            </div>
          </div>
          <div className={styles.chapter_context}>
            <div className={styles.chapter_context_number}>
              <h1>#19</h1>
            </div>
            <div className={styles.chapter_context_name}>
              <h2>Uses of Software in Account</h2>
            </div>
            <div className={styles.chapter_context_button}>
              <button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                <i className="fas fa-video"></i>
              </button>
            </div>
          </div>
        </div>
        
        <br></br><br></br><br></br>
        <Footer/>
    </div>
  )
}

export default website
