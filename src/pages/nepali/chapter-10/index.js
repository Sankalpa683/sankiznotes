import React from 'react'
import Nav from '../../nav.js'
import Footer from '../../footer.js'
import Head from 'next/head.js'
import styles from '../chapters.module.css';

function helloworld() {
  return (
    <div>
        <Head>
            <title>Unit-10 नेपाली पहिचान	  | MozeeeNotes</title>
        </Head>
        <Nav/>
        <br></br><br></br><br></br>
        <div class="container mx-auto px-5 py-5">
            <div className={styles.chapter_breadcrumbs}>
          <nav class="flex" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li class="inline-flex items-center">
                <a href="/" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <div class="flex items-center">
                  <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                  </svg>
                  <a href="/nepali" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Nepali</a>
                </div>
              </li>
              <li aria-current="page">
                <div class="flex items-center">
                  <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                  </svg>
                  <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">नेपाली-पहिचान</span>
                </div>
              </li>
            </ol>
          </nav>
        
            </div><br></br>
            <div className='heaading_text'>
                <h1 class={styles.heading}>Chapter-10 नेपाली पहिचान	- Nepali </h1>
            </div>
            <div className={styles.upload_time}>
            <iframe src="https://drive.google.com/file/d/1VprAzo0sFlGC7_dsh6eG5wz_qAKuCNXP/preview" width="100%" height="780" allow="autoplay"></iframe>
            </div>
        </div><br></br><br></br>
        <div>

        </div>
        <Footer/>
    </div>
  )
}

export default helloworld
