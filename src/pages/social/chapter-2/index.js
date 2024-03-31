import React from 'react'
import Nav from '../../../nav.js';
import Footer from '../../../footer.js'
import Head from 'next/head.js'
import styles from '../../chapters.module.css';

function helloworld() {
  return (
    <div>
        <Head>
            <title>Economics - Unit-2 Digital and General Research Skills as Useful Life Skills (जीवनपयोगी सिपको रुपमा डिजिटल तथा सामान्य अनुसन्धान) सिप Class 12 Social Studies and Life Skills Notes | MozeeeNotes</title>
        </Head>
        <Nav/>
        <br></br><br></br><br></br>
        <div class="container mx-auto px-5 py-5">
            <div className={styles.chapter_breadcrumbs}>
          <nav class="flex" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li class="inline-flex items-center">
                <a href="/" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                  {/* <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                  </svg> */}
                  Home
                </a>
              </li>
              <li>
                <div class="flex items-center">
                  <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                  </svg>
                  <a href="/economics" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Economics</a>
                </div>
              </li>
              <li aria-current="page">
                <div class="flex items-center">
                  <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                  </svg>
                  <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">जीवनपयोगी-सिपको-रुपमा-डिजिटल-तथा-सामान्य-अनुसन्धान</span>
                </div>
              </li>
            </ol>
          </nav>
        
            </div><br></br>
            <div className='heaading_text'>
                <h1 class={styles.heading}>Unit-2 Digital and General Research Skills as Useful Life Skills (जीवनपयोगी सिपको रुपमा डिजिटल तथा सामान्य अनुसन्धान) सिप Class 12 Social Studies and Life Skills Notes</h1>
            </div>
            <div className={styles.upload_time}>
            <iframe src="https://cdn.gurubaa.com/wp-content/uploads/2023/04/11095752/Unit-2-Digital-and-General-Research-Skills-as-Useful-Life-Skills-.pdf" width="100%" height="780" allow="autoplay"></iframe>
            </div>
        </div><br></br><br></br>
        <div>

        </div>
        <Footer/>
    </div>
  )
}

export default helloworld
