import React from 'react'
import Nav from '../../nav.js'
import Footer from '../../footer.js'
import Styles from './chapter.module.css'

function company_formation() {
  return (
    <div class='container mx-auto px-5 py-5'>
        <Nav/>
        <br></br><br></br><br></br>
        <div class='p-3'>
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
                  <a href="/account" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Account</a>
                </div>
              </li>
              <li aria-current="page">
                <div class="flex items-center">
                  <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                  </svg>
                  <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">company-formation</span>
                </div>
              </li>
            </ol>
          </nav>
        </div><br></br>
        <div className='heaading_text'>
                <h1>Company Formation - Class 12 Account</h1>
            </div>
            <br></br>
        <div class='pl-3 container mx-auto px-5' id='embeds'>
          <embed src="/Class-12-Updated.pdf" type='application/pdf' width='100%' height='800px'/>
          {/* <iframe src='/Class-12-Updated.pdf' style={{width : '100%', height : '100%'}} /> */}
        </div>
        <br></br><br></br><br></br>
        <Footer/>
    </div>
  )
}

export default company_formation